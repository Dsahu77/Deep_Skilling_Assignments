package com.cognizant.spring_learn;

import java.text.SimpleDateFormat;
import java.text.ParseException;
import java.util.Date;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(SpringLearnApplication.class, args);
        LOGGER.info("Inside main method");
//        displayCountry();
        displayDate(); 
        displayCountries();
    }
//
//    public static void displayCountry() {
//        try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("country.xml")) {
//            Country country = context.getBean("country", Country.class);
//            LOGGER.debug("Country : {}", country.toString());
//        }
//    }

    public static void displayCountries() {
        LOGGER.info("START");

        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        List<Country> countryList = context.getBean("countryList", List.class);

        LOGGER.debug("Country List: {}", countryList);

        LOGGER.info("END");

        ((ClassPathXmlApplicationContext) context).close(); // close to avoid resource leak
    }

    public static void displayDate() {
        ApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml");
        SimpleDateFormat format = context.getBean("dateFormat", SimpleDateFormat.class);

        try {
            Date date = format.parse("31/12/2018");
            System.out.println("Parsed Date: " + date);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        ((ClassPathXmlApplicationContext) context).close();
    }

}

