public class Main{
    public static void main(String[] args) {
        double result;
        Stackx stack= new Stackx(6);
        
        stack.push(8);
        stack.push(3);
        stack.push(5);
        stack.push(6);
        stack.push(12);
        stack.push(34);
        System.err.println(stack.peak());

        result= stack.pop();
        System.err.println(result);

        System.err.println(stack.peak());
    }
}