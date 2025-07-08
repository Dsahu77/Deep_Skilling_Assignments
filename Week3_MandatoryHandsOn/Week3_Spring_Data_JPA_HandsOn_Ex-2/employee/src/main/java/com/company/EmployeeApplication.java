package com.company;

import com.company.model.Employee;
import com.company.service.EmployeeService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class EmployeeApplication {

    private static EmployeeService employeeService;

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(EmployeeApplication.class, args);
        employeeService = context.getBean(EmployeeService.class);

        testAddEmployee();
    }

    private static void testAddEmployee() {
        Employee emp = new Employee();
        emp.setName("Jane Doe");
        emp.setSalary(55000);

        employeeService.addEmployee(emp);
        System.out.println("✅ Employee inserted: " + emp);
    }
}
