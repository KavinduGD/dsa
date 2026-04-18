public class Main {
 
    public static void main(String[] args) {
        Queuex queue= new Queuex(6);
        queue.insert(45);
        queue.insert(34);
        queue.insert(24);
        queue.insert(5);
        queue.insert(22);
        queue.insert(53);

        System.out.println( queue.peakFront());
        
        queue.remove();
        queue.remove();
        queue.remove();
        
        System.out.println( queue.peakFront());
    }
}
