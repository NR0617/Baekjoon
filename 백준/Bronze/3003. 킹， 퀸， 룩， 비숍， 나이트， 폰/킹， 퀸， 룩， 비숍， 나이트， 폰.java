import java.util.Scanner;

public class Main {
    public static void main (String[] args){
        Scanner in = new Scanner(System.in);
        
        int A = in.nextInt();
        int B = in.nextInt();
        int C = in.nextInt();
        int D = in.nextInt();
        int E = in.nextInt();
        int F = in.nextInt();
        System.out.print(1-A + " ");
        System.out.print(1-B + " ");
        System.out.print(2-C + " ");
        System.out.print(2-D + " ");
        System.out.print(2-E + " ");
        System.out.print(8-F);
        in.close();
    }
}