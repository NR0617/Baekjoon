import java.io.*;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
       
            
            StringTokenizer st;
            // StringTokenizer를 선언한 이유는,
            // 요구사항이 입력받을 때 한줄로 받도록 되어있기 때문이다.
            // split처럼 사용할수있다.
                           
                st = new StringTokenizer(br.readLine(), " ");
                
                int A = Integer.parseInt(st.nextToken()); //고정비
                int B = Integer.parseInt(st.nextToken()); //변동비
                int C = Integer.parseInt(st.nextToken()); //가격
        
        if(C-B <= 0){
             System.out.println("-1");
        } else {
            System.out.println((A/(C-B)+1));
           
        }
            
            br.close();
   
    }
}