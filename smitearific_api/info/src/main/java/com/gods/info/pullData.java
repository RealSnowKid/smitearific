package com.gods.info;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONTokener;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.util.StringUtils;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class pullData {

        // @Autowired
        // MyProperties myProps;

        private static String devId = "3464";
        private static String authKey = "041BACEB6C5A49689802269818DF2816";
        private static String session;

        private static void InsertGods(InputStream is) {
                RestTemplate restTemplate = new RestTemplate();

                String str = restTemplate.getForObject("http://localhost:8081/godinfoes", String.class);
                JSONObject jObject = new JSONObject(str);
                JSONArray jArray = jObject.getJSONObject("_embedded").getJSONArray("godinfoes");

                if (jArray.length() >= 111) {
                        System.out.println("Gods Already Exist");
                        DeleteGods();
                        PostGods(is);
                } else {
                        System.out.println("God are being posted");
                        PostGods(is);
                }

        }

        private static void PostGods(InputStream is) {
                JSONTokener tokener = new JSONTokener(is);
                JSONArray ja = new JSONArray(tokener);
                System.out.println(ja.length());
                for (int i = 0; i < ja.length(); i++) {
                        JSONObject jo = ja.getJSONObject(i);
                        JSONObject jobj = new JSONObject();
                        jobj.put("name", jo.getString("Name").replaceAll("\\s", ""));
                        jobj.put("title", jo.getString("Title"));
                        jobj.put("pantheon", jo.getString("Pantheon"));
                        jobj.put("type", jo.getString("Type"));
                        jobj.put("role", jo.getString("Roles"));
                        jobj.put("icon", jo.getString("godIcon_URL"));
                        jobj.put("card", jo.getString("godCard_URL"));
                        jobj.put("ability1Name", jo.getJSONObject("Ability_1").getString("Summary"));
                        jobj.put("ability1URL", jo.getJSONObject("Ability_1").getString("URL"));
                        jobj.put("ability1Description", jo.getJSONObject("Ability_1").getJSONObject("Description")
                                        .getJSONObject("itemDescription").getString("description"));
                        jobj.put("ability1Cooldown",
                                        StringUtils.replace(jo.getJSONObject("Ability_1").getJSONObject("Description")
                                                        .getJSONObject("itemDescription").getString("cooldown"), "s",
                                                        " seconds"));
                        jobj.put("ability1Cost", jo.getJSONObject("Ability_1").getJSONObject("Description")
                                        .getJSONObject("itemDescription").getString("cost") + " mana");
                        jobj.put("ability1Menuitems", jo.getJSONObject("Ability_1").getJSONObject("Description")
                                        .getJSONObject("itemDescription").getJSONArray("menuitems").toString());
                        jobj.put("ability1Rankitems", jo.getJSONObject("Ability_1").getJSONObject("Description")
                                        .getJSONObject("itemDescription").getJSONArray("rankitems").toString());
                        jobj.put("ability2Name", jo.getJSONObject("Ability_2").getString("Summary"));
                        jobj.put("ability2URL", jo.getJSONObject("Ability_2").getString("URL"));
                        jobj.put("ability2Description", jo.getJSONObject("Ability_2").getJSONObject("Description")
                                        .getJSONObject("itemDescription").getString("description"));
                        jobj.put("ability2Cooldown",
                                        StringUtils.replace(jo.getJSONObject("Ability_2").getJSONObject("Description")
                                                        .getJSONObject("itemDescription").getString("cooldown"), "s",
                                                        " seconds"));
                        jobj.put("ability2Cost", jo.getJSONObject("Ability_2").getJSONObject("Description")
                                        .getJSONObject("itemDescription").getString("cost") + " mana");
                        jobj.put("ability2Menuitems", jo.getJSONObject("Ability_2").getJSONObject("Description")
                                        .getJSONObject("itemDescription").getJSONArray("menuitems").toString());
                        jobj.put("ability2Rankitems", jo.getJSONObject("Ability_2").getJSONObject("Description")
                                        .getJSONObject("itemDescription").getJSONArray("rankitems").toString());
                        jobj.put("ability3Name", jo.getJSONObject("Ability_3").getString("Summary"));
                        jobj.put("ability3URL", jo.getJSONObject("Ability_3").getString("URL"));
                        jobj.put("ability3Description", jo.getJSONObject("Ability_3").getJSONObject("Description")
                                        .getJSONObject("itemDescription").getString("description"));
                        jobj.put("ability3Cooldown",
                                        StringUtils.replace(jo.getJSONObject("Ability_3").getJSONObject("Description")
                                                        .getJSONObject("itemDescription").getString("cooldown"), "s",
                                                        " seconds"));
                        jobj.put("ability3Cost", jo.getJSONObject("Ability_3").getJSONObject("Description")
                                        .getJSONObject("itemDescription").getString("cost") + " mana");
                        jobj.put("ability3Menuitems", jo.getJSONObject("Ability_3").getJSONObject("Description")
                                        .getJSONObject("itemDescription").getJSONArray("menuitems").toString());
                        jobj.put("ability3Rankitems", jo.getJSONObject("Ability_3").getJSONObject("Description")
                                        .getJSONObject("itemDescription").getJSONArray("rankitems").toString());
                        jobj.put("ability4Name", jo.getJSONObject("Ability_4").getString("Summary"));
                        jobj.put("ability4URL", jo.getJSONObject("Ability_4").getString("URL"));
                        jobj.put("ability4Description", jo.getJSONObject("Ability_4").getJSONObject("Description")
                                        .getJSONObject("itemDescription").getString("description"));
                        jobj.put("ability4Cooldown",
                                        StringUtils.replace(jo.getJSONObject("Ability_4").getJSONObject("Description")
                                                        .getJSONObject("itemDescription").getString("cooldown"), "s",
                                                        " seconds"));
                        jobj.put("ability4Cost", jo.getJSONObject("Ability_4").getJSONObject("Description")
                                        .getJSONObject("itemDescription").getString("cost") + " mana");
                        jobj.put("ability4Menuitems", jo.getJSONObject("Ability_4").getJSONObject("Description")
                                        .getJSONObject("itemDescription").getJSONArray("menuitems").toString());
                        jobj.put("ability4Rankitems", jo.getJSONObject("Ability_4").getJSONObject("Description")
                                        .getJSONObject("itemDescription").getJSONArray("rankitems").toString());
                        jobj.put("ability5Name", jo.getJSONObject("Ability_5").getString("Summary"));
                        jobj.put("ability5URL", jo.getJSONObject("Ability_5").getString("URL"));
                        jobj.put("ability5Description", jo.getJSONObject("Ability_5").getJSONObject("Description")
                                        .getJSONObject("itemDescription").getString("description"));
                        jobj.put("ability5Menuitems", jo.getJSONObject("Ability_5").getJSONObject("Description")
                                        .getJSONObject("itemDescription").getJSONArray("menuitems").toString());
                        jobj.put("ability5Rankitems", jo.getJSONObject("Ability_5").getJSONObject("Description")
                                        .getJSONObject("itemDescription").getJSONArray("rankitems").toString());
                        RestTemplate restTemplate = new RestTemplate();
                        HttpHeaders headers = new HttpHeaders();
                        headers.setContentType(MediaType.APPLICATION_JSON);

                        HttpEntity<String> request = new HttpEntity<String>(jobj.toString(), headers);

                        godinfo godinfo = restTemplate.postForObject("http://localhost:8081/godinfoes", request,
                                        godinfo.class);

                        System.out.println(godinfo.getName());
                }

                PatchLanes();
        }

        private static void PatchLanes() {
                RestTemplate restTemplate = new RestTemplate();
                HttpComponentsClientHttpRequestFactory requestFactory = new HttpComponentsClientHttpRequestFactory();

                String string = restTemplate.getForObject("http://localhost:8081/godinfoes/", String.class);
                JSONArray jArray = new JSONObject(string).getJSONObject("_embedded").getJSONArray("godinfoes");

                String lanes = "/lanes.json";
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
                        String name = jArray.getJSONObject(i - 1).getString("name");
                        String url = "http://localhost:8081/godinfoes/" + i;

                        for (int j = 0; j < ja.length(); j++) {
                                String jaName = ja.getJSONObject(j).getString("name");
                                if (name.equals(jaName)) {
                                        JSONObject jObject = new JSONObject();
                                        jObject.put("lane", ja.getJSONObject(j).getString("lane"));

                                        HttpEntity<String> request = new HttpEntity<String>(jObject.toString(),
                                                        headers);

                                        godinfo godinfo = restTemplate.patchForObject(url, request, godinfo.class);

                                        System.out.println(godinfo.getLane());

                                }
                        }

                }

        }

        private static void DeleteGods() {
                RestTemplate restTemplate = new RestTemplate();

                String string = restTemplate.getForObject("http://localhost:8081/godinfoes/", String.class);
                JSONArray jArray = new JSONObject(string).getJSONObject("_embedded").getJSONArray("godinfoes");
                System.out.println(jArray.length());

                for (int i = 1; i <= jArray.length(); i++) {
                        restTemplate.delete("http://localhost:8081/godinfoes/" + i);

                        System.out.println("Deleted @ http://localhost:8081/godinfoes/" + i);

                }

                String str;
                try {
                        str = restTemplate.getForObject("http://localhost:8081/godinfoes/search/resetAutoIncrement",
                                        String.class);
                } catch (HttpClientErrorException ex) {
                        if (ex.getStatusCode() != HttpStatus.NOT_FOUND) {
                                throw ex;
                        }
                }

        }

        private static void hiRezAPICall() throws NoSuchAlgorithmException, UnsupportedEncodingException {
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("uuuuMMddHHmmss");
                String timestamp = ZonedDateTime.now(ZoneId.of("UTC")).format(formatter);

                String inputString = devId + "createsession" + authKey + timestamp;
                System.out.println(inputString);
                byte[] bytesOfMessage = inputString.getBytes("UTF-8");
                MessageDigest md = MessageDigest.getInstance("MD5");
                byte[] thedigest = md.digest(bytesOfMessage);
                BigInteger bigInt = new BigInteger(1, thedigest);
                String signature = bigInt.toString(16);
                System.out.println(signature);

                String timestamp2 = ZonedDateTime.now(ZoneId.of("UTC")).format(formatter);
                String hiRezApString = "http://api.smitegame.com/smiteapi.svc/createsessionjson/" + devId + "/"
                                + signature + "/" + timestamp2;
                System.out.println(hiRezApString);

                RestTemplate restTemplate = new RestTemplate();
                String response = restTemplate.getForObject(hiRezApString, String.class);
                JSONObject jo = new JSONObject(response);
                System.out.println("Return message: " + jo.getString("ret_msg") + " SessionID: "
                                + jo.getString("session_id") + " Timestamp: " + jo.getString("timestamp"));
                session = jo.getString("session_id");
                System.out.println(session);
        }

        private static void getGodsCall() throws NoSuchAlgorithmException, UnsupportedEncodingException {
                hiRezAPICall();

                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("uuuuMMddHHmmss");
                String timestamp = ZonedDateTime.now(ZoneId.of("UTC")).format(formatter);

                String inputString = devId + "getgods" + authKey + timestamp;
                System.out.println(inputString);
                byte[] bytesOfMessage = inputString.getBytes("UTF-8");
                MessageDigest md = MessageDigest.getInstance("MD5");
                byte[] thedigest = md.digest(bytesOfMessage);
                BigInteger bigInt = new BigInteger(1, thedigest);
                String signature = bigInt.toString(16);
                System.out.println(signature);

                String hiRezApString = "http://api.smitegame.com/smiteapi.svc/getgodsjson/" + devId + "/" + signature
                                + "/" + session + "/" + timestamp + "/1";
                System.out.println(hiRezApString);

                RestTemplate restTemplate = new RestTemplate();
                String response = restTemplate.getForObject(hiRezApString, String.class);
                JSONArray ja = new JSONArray(response);

                try {
                        File file = new File(
                                        "E:/Repositories/smitearific/smitearific_api/info/src/main/resources/data.json");
                        if (file.createNewFile()) {
                                System.out.println("File created: " + file.getName());
                                FileWriter myWriter = new FileWriter(
                                                "E:/Repositories/smitearific/smitearific_api/info/src/main/resources/data.json");
                                myWriter.write(ja.toString());
                                myWriter.close();
                                System.out.println("Successfully wrote to the file.");
                        } else if (file.delete()) {
                                System.out.println("Deleted the file: " + file.getName());
                                if (file.createNewFile()) {
                                        System.out.println("File created: " + file.getName());
                                        FileWriter myWriter = new FileWriter(
                                                        "E:/Repositories/smitearific/smitearific_api/info/src/main/resources/data.json");
                                        myWriter.write(ja.toString());
                                        myWriter.close();
                                        System.out.println("Successfully wrote to the file.");
                                } else {
                                        System.out.println("Failed to create and recreate the file.");
                                }
                        } else {
                                System.out.println("Failed to create or delete the file.");
                        }
                } catch (IOException e) {
                        System.out.println("An error occurred.");
                        e.printStackTrace();
                }

        }

        public static void DoThing() throws NoSuchAlgorithmException, UnsupportedEncodingException {
                getGodsCall();

                String resourceName = "/data.json";
                InputStream inputStream = pullData.class.getResourceAsStream(resourceName);
                if (inputStream == null) {
                        throw new NullPointerException("Cannot find resource file " + resourceName);
                }

                InsertGods(inputStream);

        }
}
