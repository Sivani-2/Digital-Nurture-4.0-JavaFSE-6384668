class RoadLogistics extends Logistics{
    @Override
    public Transport createTransport(){
        return new Truck(); //deliver through truck
    }
}