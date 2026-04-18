public class CircularQueue {
    private int maxSize;    
    private int[] circularQueueArray;
    private int front;
    private int rear;
    private int noItems;

    public CircularQueue(int s){
        maxSize=s;
        circularQueueArray=new int[maxSize];
        front=0;
        rear=-1;
        noItems=0;        
    }

    public void insert(int s){
        
        if(noItems == maxSize){
            System.out.println("Circular queue is full");
        }else{
            // if rear at the end of the array
            if(rear==maxSize-1){
                rear=-1;
            }
            circularQueueArray[++rear]=s;
        }
    }

    public int remove(){
        if(noItems==-0){
            System.out.println("Circular queue is empty");
            return -99;
        }else{
            int temp=circularQueueArray[front++];
            if(front==maxSize){
                front=0;
            }
            return temp;
        }
    }

    public int frontPeak(){
        if(noItems==0){
            System.err.println("Circular queue is empty");
            return -99;
        }else{
            return circularQueueArray[front];
        }
    }

    public boolean isEmpty(){
        return noItems==0;
    }

    public boolean isFull(){
        return noItems==maxSize;
    }
}
