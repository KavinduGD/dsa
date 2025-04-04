public class QuickFind {
    private int[] id;

    public QuickFind(int n){
        id=new int[n];
        for(int i=0;i<n;i++){
            id[i]=i;
        }   
    }

    public boolean connected(int p,int q){
        return(id[p]==id[q]);
    }

    public void union(int p,int q){
        int com_p=id[p];
        int com_q=id[q];

        for(int i=0;i<id.length;i++){
            
            if(id[i]==com_p){
                
                id[i]=com_q;
            }
        }
    }

    public void  display(){
        for(int i=0;i<id.length;i++){
            System.out.println(id[i]);
            }
        }

    
}