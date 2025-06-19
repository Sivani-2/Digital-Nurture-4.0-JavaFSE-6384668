// Singleton pattern example
public class Main {
    public static void main(String[] args) {
        // Getting the instance of WaterJug
        WaterJug jug1 = WaterJug.getInstance();
        WaterJug jug2 = WaterJug.getInstance();

        // Verifying whether both are the same instance or not
        if (jug1==jug2) {
            System.out.println("Both are the same instance.");
        } else {
            System.out.println("Both are different instances.");
        }

        //Drinking water from the jug and printing the available quantity
        System.out.println(jug1.getQuantity());
        jug1.drink(100);
        System.out.println(jug1.getQuantity());
        jug2.drink(200);
        System.out.println(jug1.getQuantity());
    }
}