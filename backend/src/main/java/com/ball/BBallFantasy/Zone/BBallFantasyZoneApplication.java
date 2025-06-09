package com.ball.BBallFantasy.Zone;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class BBallFantasyZoneApplication {

	public static void main(String[] args) {
		SpringApplication.run(BBallFantasyZoneApplication.class, args);
	}

}
