import java.util.Scanner;

public class Main {
   public static void main(String[] args) {
       
      Scanner sc = new Scanner(System.in);
       
      int N = sc.nextInt();
      int i = 0;
       
       while(N>0){
                      i = i+1;

           N = N-i;
       }
      
       if(i%2 == 0){
          System.out.println((i+N)+ "/"+ (1-N));
       } else {
          System.out.println((1-N)+ "/"+ (i+N));
       }
   }
}