package com.gods.info;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;

import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONTokener;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.util.StringUtils;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class test {

    static void InsertGods(InputStream is) {
        RestTemplate restTemplate = new RestTemplate();

        String str = restTemplate.getForObject("http://localhost:8081/godinfoes", String.class);
        JSONObject jObject = new JSONObject(str);
        JSONArray jArray = jObject.getJSONObject("_embedded").getJSONArray("godinfoes");

        if (jArray.length() >= 111) {
            System.out.println("Gods Already Exist");
            DeleteGods(is);
            PostGods(is);
        } else {
            System.out.println("God are being posted");
            PostGods(is);
        }

    }

    static void PostGods(InputStream is) {
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
            jobj.put("ability1Cooldown", StringUtils.replace(jo.getJSONObject("Ability_1").getJSONObject("Description")
                    .getJSONObject("itemDescription").getString("cooldown"), "s", " seconds"));
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
            jobj.put("ability2Cooldown", StringUtils.replace(jo.getJSONObject("Ability_2").getJSONObject("Description")
                    .getJSONObject("itemDescription").getString("cooldown"), "s", " seconds"));
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
            jobj.put("ability3Cooldown", StringUtils.replace(jo.getJSONObject("Ability_3").getJSONObject("Description")
                    .getJSONObject("itemDescription").getString("cooldown"), "s", " seconds"));
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
            jobj.put("ability4Cooldown", StringUtils.replace(jo.getJSONObject("Ability_4").getJSONObject("Description")
                    .getJSONObject("itemDescription").getString("cooldown"), "s", " seconds"));
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

            godinfo godinfo = restTemplate.postForObject("http://localhost:8081/godinfoes", request, godinfo.class);

            System.out.println(godinfo.getName());
        }
    }

    static void DeleteGods(InputStream is) {
        JSONTokener tokener = new JSONTokener(is);
        JSONArray ja = new JSONArray(tokener);
        RestTemplate restTemplate = new RestTemplate();
        for (int i = 0; i < ja.length(); i++) {

            int p = i + 1;

            restTemplate.delete("http://localhost:8081/godinfoes/" + p);

            System.out.println("Deleted @ http://localhost:8081/godinfoes/" + p);

        }

        String str = null;
        try {
            str = restTemplate.getForObject("http://localhost:8081/godinfoes/search/resetAutoIncrement", String.class);
        } catch (HttpClientErrorException ex) {
            if (ex.getStatusCode() != HttpStatus.NOT_FOUND) {
                throw ex;
            }
        }

    }

    public static void main(String[] args) {
        String resourceName = "/data.json";
        InputStream inputStream = test.class.getResourceAsStream(resourceName);
        if (inputStream == null) {
            throw new NullPointerException("Cannot find resource file " + resourceName);
        }

        InsertGods(inputStream);

        // try {
        // File myObj = new File(
        // "E:/Repositories/smitearific/smitearific_api/info/src/main/resources/properData2.json");
        // if (myObj.createNewFile()) {
        // System.out.println("File created: " + myObj.getName());
        // FileWriter myWriter = new FileWriter(
        // "E:/Repositories/smitearific/smitearific_api/info/src/main/resources/properData2.json");
        // myWriter.write(jo.toString());
        // myWriter.close();
        // System.out.println("Successfully wrote to the file.");
        // } else if (myObj.delete()) {
        // System.out.println("Deleted the file: " + myObj.getName());
        // if (myObj.createNewFile()) {
        // System.out.println("File created: " + myObj.getName());
        // FileWriter myWriter = new FileWriter(
        // "E:/Repositories/smitearific/smitearific_api/info/src/main/resources/properData2.json");
        // myWriter.write(jo.toString());
        // myWriter.close();
        // System.out.println("Successfully wrote to the file.");
        // } else {
        // System.out.println("Failed to create or delete the file.");
        // }
        // } else {
        // System.out.println("Failed to create or delete the file.");
        // }
        // } catch (IOException e) {
        // System.out.println("An error occurred.");
        // e.printStackTrace();
        // }
    }
}
