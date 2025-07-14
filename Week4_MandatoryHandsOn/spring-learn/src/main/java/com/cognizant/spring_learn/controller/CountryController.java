package com.cognizant.spring_learn.controller;

import com.cognizant.spring_learn.Country;
import com.cognizant.spring_learn.service.CountryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class CountryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);

//    @RequestMapping("/country")
//    public Country getCountryIndia() {
//        LOGGER.info("START - getCountryIndia()");
//        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
//        Country country = context.getBean("country", Country.class);
//        LOGGER.debug("Country: {}", country.toString());
//        LOGGER.info("END - getCountryIndia()");
//        return country;
//    }
//}
    
    @Autowired
    private CountryService countryService;

    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) {
        LOGGER.info("START - getCountry with code {}", code);
        Country country = countryService.getCountry(code);
        LOGGER.debug("Found Country: {}", country);
        LOGGER.info("END - getCountry");
        return country;
    }
}
    
