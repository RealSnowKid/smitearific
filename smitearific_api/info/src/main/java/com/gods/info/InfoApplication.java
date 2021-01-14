package com.gods.info;

import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// mvn spring-boot:run -D spring-boot.run.profiles=dev
@SpringBootApplication
public class InfoApplication {
	public static void main(String[] args) throws NoSuchAlgorithmException, UnsupportedEncodingException {
		SpringApplication.run(InfoApplication.class, args);
		pullData.DoThing();
	}

}
