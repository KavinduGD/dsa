public class Link {
    public int data;
    public Link next;

    public Link(int s){
        data=s;
        next=null;
    }

    public void displayLink(){
        System.out.println(data);
    }
}
