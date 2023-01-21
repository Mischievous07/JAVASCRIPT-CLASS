/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.lab2.a;

/**
 *
 * @author hkrav
 */
import java.util.Scanner;
public class Lab21a {
    public static void main(String[] args) {
        
 {
  Scanner converter = new Scanner(System.in);
 
   System.out.println("Enter amount of miles");
      double miles = converter.nextDouble();
       double conversion = miles * 1.609;
        System.out.println("Your miles to kilometers conversion is: " + conversion);
 }
 }
}
