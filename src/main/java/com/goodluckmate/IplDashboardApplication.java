package com.goodluckmate;

import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.SpringApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan
public class IplDashboardApplication {
    
    public static void main(String[] args) {
        SpringApplication.run(IplDashboardApplication.class, args);
    }
}