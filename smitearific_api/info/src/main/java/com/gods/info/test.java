package com.gods.info;

import java.io.FileNotFoundException;
import java.io.FileReader;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.util.StringUtils;

import net.minidev.json.JSONObject;
import net.minidev.json.parser.JSONParser;
import net.minidev.json.parser.ParseException;

@SpringBootApplication
public class test {

    public static void main(String[] args) {
        JSONParser jpar = new JSONParser(JSONParser.MODE_PERMISSIVE);
        try {
            JSONObject jo = (JSONObject) jpar.parse(new FileReader(
                    "E:/Repositories/smitearific/smitearific_api/info/src/main/java/com/gods/info/test.json"));
            String str = jo.toString();
            StringUtils.replace(str, "\\", " ");
            System.out.println(str);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            throw new IllegalArgumentException(e);
        }
    }
}
