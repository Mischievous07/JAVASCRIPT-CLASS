/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */

/**
 *
 * @author hkrav
 */import java.util.Scanner;

public class Lab22java {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
       
        
         
        int ineedthis = 703;
        
        Scanner calculator = new Scanner(System.in);
        
        System.out.println("Please enter your height in inches: ");
        double heightInches = calculator.nextDouble();
        System.out.println("Please enter your weight in pounds: ");
         double weight = calculator.nextDouble();
         
             double weightKilo = weight / 2.205;
                double heightCentimeter = heightInches * 2.54;
                  double BMI = ineedthis * weight / (heightInches * heightInches);
       System.out.println("Your weight in kilograms is: " + weightKilo);
        System.out.println("Your height in centimeters is: " + heightCentimeter);
        
         System.out.println("That brings your Body Mass Index to: " + BMI);
    }
    
}
