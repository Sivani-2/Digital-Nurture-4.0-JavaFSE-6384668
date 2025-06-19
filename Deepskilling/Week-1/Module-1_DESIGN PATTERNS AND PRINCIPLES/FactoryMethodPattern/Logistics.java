abstract class Logistics{
    abstract Transport createTransport();
    // method to return the type of delivery
    public void planDelivery(){
        Transport transport=createTransport();
        transport.deliver();    
    }
}