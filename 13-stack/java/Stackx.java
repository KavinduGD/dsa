public class Stackx{
    private int maxSize;
    private double[] stackArray;
    private int top;

    public Stackx(int maxSize){
        this.maxSize=maxSize;
        stackArray=new double[maxSize];
        top=-1;
    }

    // push
    public void push(double s){
        // if stack is full 
        if(top==maxSize-1){
            System.out.println("Stack is full");
        }
        else{
            stackArray[++top]=s;
        }
    }

    // pop
    public double pop(){
        // if stack is empty
        if(top==-1){
            return -99;
        }
        else{
            return stackArray[top--];
        }
    }

    //peak 
    public double peak(){
        // id stack is empty
        if(top==-1){
            return -99;
        }else{
            return stackArray[top];
        }
    }

    public boolean isEmpty(){
        return top==-1;
    }

    public boolean isFull(){
        return top==maxSize-1;
    }

}