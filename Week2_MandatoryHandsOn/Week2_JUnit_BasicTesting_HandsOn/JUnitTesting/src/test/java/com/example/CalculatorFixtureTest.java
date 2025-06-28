package com.example;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorFixtureTest {
    private Calculator calc;

    @Before
    public void setUp() {
        calc = new Calculator();  // runs before each test
    }

    @After
    public void tearDown() {
        calc = null;  // runs after each test
    }

    @Test
    public void testAdd() {
        int result = calc.add(4, 6);
        assertEquals(10, result);
    }

    @Test
    public void testSubtract() {
        int result = calc.subtract(10, 5);
        assertEquals(5, result);
    }
}
