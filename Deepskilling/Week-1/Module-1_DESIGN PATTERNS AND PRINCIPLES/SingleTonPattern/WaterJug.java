public class WaterJug {
    // an instance of WaterJug
    private static WaterJug jug=null;
    // a variable to store amount of water in the jug
    private int waterAvailable=1000;
    
    // Private constructor to prevent object creation
    private WaterJug() { }

    // Method to get the instance of WaterJug
    public static WaterJug getInstance() {
        if (jug == null) {
            jug = new WaterJug();
        }
        return jug;
    }

    // Method to drink water
    public void drink(int waterDrank) {
        waterAvailable -= waterDrank;
    }
    // Method to get the amount of water
    public int getQuantity() {
        return waterAvailable;
    }
}