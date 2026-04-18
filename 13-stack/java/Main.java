public class Main{
    public static void main(String[] args) {
        double result;
        Stackx stack= new Stackx(3);
        
        stack.push(8);
        System.err.println(stack.peak());

        result= stack.pop();
        System.err.println(result);

        System.err.println(stack.peak());
    }
}