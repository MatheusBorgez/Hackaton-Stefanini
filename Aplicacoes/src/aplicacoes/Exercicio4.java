/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package aplicacoes;

/**
 *
 * @author mathe
 */
public class Exercicio4 {
    public static void main(String[] args) {
        String palavra1 = "arara";
        String palavra2 = "abacate";
        
        System.out.println("A palavra " + EhPalindromo(palavra1));
        System.out.println("A palavra " + EhPalindromo(palavra2));
        
    }
    
    public static String EhPalindromo(String palavra) {
        if(palavra.equals(new StringBuilder(palavra).reverse().toString())) {
            return palavra + " é um palíndromo";
        }
        else {
            return palavra + " não é um palíndromo";
        }
    }
}
