package com.god.stats;

import java.io.IOException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// mvn spring-boot:run -D spring-boot.run.profiles=dev
@SpringBootApplication
public class StatsApplication {

	public static void main(String[] args) throws IOException {
		SpringApplication.run(StatsApplication.class, args);
		pullData.PullData();
	}

}
