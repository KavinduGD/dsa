public class LinkedList {
    private Link first;

    public LinkedList(){
        first=null;
    }

    public void displayList(){
        Link cur= first;

        while(cur!=null){
            cur.displayLink();
            cur=cur.next;
        }
    }

    public void insertFirst(int data){
        Link newLink= new Link(data);
        
        newLink.next=first;
        first =newLink;

    }

    public boolean insertMiddle(int key,int data){
        Link cur = first;
        // loop till the last link
        while(cur !=null){
            
            if(cur.data == key){
                Link newLink=new Link(data);
                newLink.next=cur.next;
                cur.next=newLink;
                return true;
            }
            cur=cur.next;
        }
        return false;
    }

    public Link deleteFirst(){
        Link temp = first;
        first = first.next;
        return temp;
    }

    public boolean deleteMiddle(int s){
        Link cur=first;
        Link previous= first;

        while(cur!=null){

            if(cur.data==s){
                // if data found in first link
                if(cur==first){
                    first=first.next;
                }else{
                    previous.next=cur.next;
                }
                return true;
            }
            previous=cur;
            cur=cur.next;
        }

        return false;
    }

    public boolean find(int s){
        Link cur=first;

        while(cur!=null){

            if(cur.data==s){
                return true;
            }
            cur=cur.next;
        }

        return false;
    }

    public boolean isEmpty(){
        return first==null;
    }


}
