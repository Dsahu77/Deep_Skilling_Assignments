package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {

    public static void main(String[] args) {
        // Load context
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Get bean
        BookService bookService = context.getBean("bookService", BookService.class);

        // Test
        bookService.addBook("The Pragmatic Programmer");
    }
}
