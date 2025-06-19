class SeaLogistics extends Logistics{
    @Override
    public Transport createTransport(){
        return new Ship(); //deliver through ship
    }
}