package com.cognizant.spring_learn.controller;

import com.cognizant.spring_learn.util.JwtConstants;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(@RequestHeader("Authorization") String authHeader) {
        LOGGER.info("START");
        LOGGER.debug("Authorization Header: {}", authHeader);

        String user = getUser(authHeader);
        String token = generateJwt(user);

        Map<String, String> response = new HashMap<>();
        response.put("token", token);

        LOGGER.info("END");
        return response;
    }

    private String getUser(String authHeader) {
        String encodedCredentials = authHeader.substring("Basic ".length());
        byte[] decoded = Base64.getDecoder().decode(encodedCredentials);
        String decodedString = new String(decoded, StandardCharsets.UTF_8);
        String user = decodedString.split(":")[0];

        LOGGER.debug("User: {}", user);
        return user;
    }

    private String generateJwt(String user) {
        Key key = Keys.hmacShaKeyFor(JwtConstants.SECRET.getBytes(StandardCharsets.UTF_8));

        return Jwts.builder()
                .setSubject(user)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 20 * 60 * 1000)) // 20 minutes
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }
}



