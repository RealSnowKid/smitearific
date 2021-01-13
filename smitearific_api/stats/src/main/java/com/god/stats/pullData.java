package com.god.stats;

import java.io.IOException;
import java.io.InputStream;
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.util.Locale;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONTokener;

@SpringBootApplication
public class pullData {

        private static String prToken = "t2e9vCkzHZMB";
        private static String apiKey = "twpVh9bP7HA0";

        private static void insertGods(JSONArray ja) {
                RestTemplate restTemplate = new RestTemplate();

                String str = restTemplate.getForObject("http://localhost:8080/gods", String.class);
                JSONObject jObject = new JSONObject(str);
                JSONArray jArray = jObject.getJSONObject("_embedded").getJSONArray("gods");

                if (jArray.length() >= 111) {
                        System.out.println("Gods Already Exist");
                        deleteGods();
                        postGods(ja);
                } else {
                        System.out.println("God are being posted");
                        postGods(ja);
                }

        }

        private static void postGods(JSONArray ja) {
                System.out.println(ja.get(3).toString());
                Locale currentLocale = Locale.getDefault();
                DecimalFormatSymbols otherSymbols = new DecimalFormatSymbols(currentLocale);
                otherSymbols.setDecimalSeparator('.');
                otherSymbols.setGroupingSeparator(',');
                DecimalFormat df = new DecimalFormat("0.00", otherSymbols);
                for (int i = 0; i < ja.length(); i++) {
                        JSONObject jo = ja.getJSONObject(i);
                        JSONObject jobj = new JSONObject();
                        jobj.put("god", jo.getString("name").replaceAll("\\s", ""));
                        jobj.put("winRate", jo.getString("winRate").replace("%", ""));
                        double prevWinRate = Double.parseDouble(jo.getString("winRate").replace("%", "")) - Double
                                        .parseDouble(jo.getString("prevWinRate").replace("%", "").replace("+-", ""));
                        jobj.put("prevWinRate", df.format(prevWinRate));
                        jobj.put("banRate", jo.getString("banRate").replace("%", ""));
                        double prevBanRate = Double.parseDouble(jo.getString("banRate").replace("%", "")) - Double
                                        .parseDouble(jo.getString("prevBanRate").replace("%", "").replace("+-", ""));
                        jobj.put("prevBanRate", df.format(prevBanRate));
                        jobj.put("pickRate", jo.getString("pickRate").replace("%", ""));
                        double prevPickRate = Double.parseDouble(jo.getString("pickRate").replace("%", "")) - Double
                                        .parseDouble(jo.getString("prevPickRate").replace("%", "").replace("+-", ""));
                        jobj.put("prevPickRate", df.format(prevPickRate));
                        jobj.put("pandBRate", jo.getString("pNBRate").replace("%", ""));
                        double prevPnBRate = Double.parseDouble(jo.getString("pNBRate").replace("%", "")) - Double
                                        .parseDouble(jo.getString("prevPnBRate").replace("%", "").replace("+-", ""));
                        jobj.put("prevPAndBRate", df.format(prevPnBRate));

                        RestTemplate restTemplate = new RestTemplate();
                        HttpHeaders headers = new HttpHeaders();
                        headers.setContentType(MediaType.APPLICATION_JSON);

                        org.springframework.http.HttpEntity<String> request = new org.springframework.http.HttpEntity(
                                        jobj.toString(), headers);

                        God god = restTemplate.postForObject("http://localhost:8080/gods", request, God.class);

                        System.out.println(god.getGod());
                }

                PatchRoles();
        }

        private static void PatchRoles() {
                RestTemplate restTemplate = new RestTemplate();
                HttpComponentsClientHttpRequestFactory requestFactory = new HttpComponentsClientHttpRequestFactory();

                String string = restTemplate.getForObject("http://localhost:8080/gods/", String.class);
                JSONArray jArray = new JSONObject(string).getJSONObject("_embedded").getJSONArray("gods");

                String lanes = "/roles.json";
                InputStream iStream = pullData.class.getResourceAsStream(lanes);
                if (iStream == null) {
                        throw new NullPointerException("Cannot find resource file " + lanes);
                }

                JSONTokener tokener = new JSONTokener(iStream);
                JSONArray ja = new JSONArray(tokener);

                HttpHeaders headers = new HttpHeaders();
                headers.setContentType(MediaType.APPLICATION_JSON);
                restTemplate.setRequestFactory(requestFactory);

                for (int i = 1; i <= jArray.length(); i++) {
                        String name = jArray.getJSONObject(i - 1).getString("god");
                        String url = "http://localhost:8080/gods/" + i;

                        for (int j = 0; j < ja.length(); j++) {
                                String jaName = ja.getJSONObject(j).getString("name");
                                if (name.equals(jaName)) {
                                        JSONObject jObject = new JSONObject();
                                        jObject.put("role", ja.getJSONObject(j).getString("role"));
                                        jObject.put("secondaryRole", ja.getJSONObject(j).getString("secondary"));

                                        org.springframework.http.HttpEntity<String> request = new org.springframework.http.HttpEntity<String>(
                                                        jObject.toString(), headers);

                                        God god = restTemplate.patchForObject(url, request, God.class);

                                        System.out.println(god.getRole() + " " + god.getSecondaryRole());

                                }
                        }

                }

        }

        private static void deleteGods() {
                RestTemplate restTemplate = new RestTemplate();

                String string = restTemplate.getForObject("http://localhost:8080/gods/", String.class);
                JSONArray jArray = new JSONObject(string).getJSONObject("_embedded").getJSONArray("gods");
                System.out.println(jArray.length());

                for (int i = 1; i <= jArray.length(); i++) {
                        restTemplate.delete("http://localhost:8080/gods/" + i);

                        System.out.println("Deleted @ http://localhost:8080/gods/" + i);

                }

                String str;
                try {
                        str = restTemplate.getForObject("http://localhost:8080/gods/search/resetAutoIncrement",
                                        String.class);
                } catch (HttpClientErrorException ex) {
                        if (ex.getStatusCode() != HttpStatus.NOT_FOUND) {
                                throw ex;
                        }
                }

        }

        private static void getGodStats() throws IOException {
                String url = "https://www.parsehub.com/api/v2/projects/" + prToken + "/last_ready_run/data?api_key="
                                + apiKey + "&format=json";
                HttpGet req = new HttpGet(url);
                try (CloseableHttpClient httpClient = HttpClients.createDefault();
                                CloseableHttpResponse response = httpClient.execute(req)) {
                        HttpEntity entity = response.getEntity();
                        if (entity != null) {
                                // return it as a String
                                String result = EntityUtils.toString(entity);
                                JSONObject jo = new JSONObject(result);
                                JSONArray ja = new JSONArray(jo.getJSONArray("god").toString());
                                insertGods(ja);
                        }
                }

        }

        public static void PullData() throws IOException {
                getGodStats();
        }
}
