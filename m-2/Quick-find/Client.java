public class  Client{
    
    public static void main(String[] args) {
        
        QuickFind QF=new QuickFind(10);

        System.out.println(QF.connected(0, 1));

        QF.union(1, 3);
        QF.union(2, 4);
        System.out.println(QF.connected(2, 8));
        QF.union(4, 8);
        
        System.out.println(QF.connected(2, 8));

        QF.display();
    }
}