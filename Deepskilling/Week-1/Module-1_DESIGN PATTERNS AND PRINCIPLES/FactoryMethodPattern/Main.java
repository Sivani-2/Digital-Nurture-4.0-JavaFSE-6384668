class Main{
    public static void main(String[] args) {
        Logistics logistics;

        // Creating object for RoadLogistics and delivering 
        logistics=new RoadLogistics();
        logistics.planDelivery();

        // Creating object for RoadLogistics and delivering 
        logistics=new SeaLogistics();
        logistics.planDelivery();
    }
}