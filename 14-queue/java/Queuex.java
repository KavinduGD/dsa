public class Queuex {
   private int maxSize;
   private int[] queueArray;
   private int front;
   private int rear;
   private int noItems;

   public Queuex(int s){
    maxSize=s;
    queueArray=new int[maxSize];
    front=0;
    rear=-1;
    noItems=0;
   }

   public void insert(int s){
    // rear at the last index- cannot insert
    if(rear==maxSize-1){
        System.err.println("Queue is full");
    }else{
        queueArray[++rear]=s;
        noItems++;
    }
   }

   public int remove(){
    // if queue is empty cannot remove
    if(noItems==0){
        System.out.println("Queue is Empty");
        return -99;
    }else{
        noItems--;
        return queueArray[front++];
    }
   }

   public int peakFront(){
    // if queue is empty cannot remove
    if(noItems==0){
        System.out.println("Queue is Empty");
        return -99;
    }else{
        return queueArray[front];
    }
   }

   public boolean isEmpty(){
    return noItems==0;
   }

   public boolean isFull(){
    return rear==maxSize-1;
   }

}
