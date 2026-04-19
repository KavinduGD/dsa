public class Main {
    public static void main(String[] args) {
        LinkedList list= new LinkedList();

        list.insertFirst(34);
        list.deleteFirst();
        // System.out.println(list.insertMiddle(34,23));
        list.insertFirst(77);
        list.insertFirst(1);
        list.insertFirst(10);
        list.insertFirst(455);
        list.insertFirst(88);
        list.displayList();
        
        // after deletion
        System.out.println("======================================");
        System.out.println("After deletion");
        list.deleteMiddle(10);
        list.displayList();
        
        // find
        System.out.println("======================================");
        System.out.println("find 88");
        System.out.println(list.find(88));
        
        //  check if the list is empty
        System.out.println("======================================");
        System.out.println("Check list empty or not");
        System.out.println(list.isEmpty());
    }
}
