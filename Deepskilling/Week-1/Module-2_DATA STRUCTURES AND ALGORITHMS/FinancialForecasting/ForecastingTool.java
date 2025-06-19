class ForecastingTool{
    // Recursive approach to predict future value
    static double predictFutureValueRec(double initial, double rate, int years){
        if(years==0) return initial;
        return (1+rate)*predictFutureValueRec(initial, rate, years-1);
    }

    // Iterative approach to predict future value
    static double predictFutureValueIter(double initial, double rate, int years){
        double res=initial;
        for(int i=0;i<years;i++) res*=(1+rate);
        return res;
    }
}