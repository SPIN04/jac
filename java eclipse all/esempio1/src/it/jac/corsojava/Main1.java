package it.jac.corsojava;
import java.util.Scanner;

public class Main1 {
    // Create a Scanner instance as a class variable
    private static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        System.out.println("programma avviato");
        String a = leggi();
        int numero = Integer.parseInt(a);
        String[] args1 = new String[numero];
        for (int i = 0; i < numero; i++) {
            String argomento = leggi();
            args1[i] = argomento;
        }
        stampa(numero, args1);

        String str = "ciao";
        System.out.println(str);
        
        // Close the scanner at the end
        scanner.close();
    }

    public static String leggi() {
        String argomento = "";
        try {
            System.out.print("inserisci valore: ");
            argomento = scanner.nextLine();
        } catch (Exception e) {
            System.out.println("hem errore");
        }
        return argomento;
    }

    public static void stampa(int i, String[] args1) {
        for (int j = 0; j < i; j++) {
            try {
                System.out.println("argomenti passati posizione " + j + ": " + args1[j]);
            } catch (Exception e) {
                System.out.println("non so cosa sia successo");
            }
        }
    }
}
