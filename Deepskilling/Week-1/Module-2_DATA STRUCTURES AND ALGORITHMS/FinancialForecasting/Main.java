class Main{
    public static void main(String[] args) {
        // Initial amount
        double initialInvestment=1000;
        // Annual Growth Rate
        double r=0.5;
        int years=5;
        double res1=ForecastingTool.predictFutureValueRec(initialInvestment,r,years);
        System.out.printf("Recursive Function: Future value after %d years: %.2f\n",years,res1);
        double res2=ForecastingTool.predictFutureValueIter(initialInvestment,r,years);
        System.out.printf("Iterative Function: Future value after %d years: %.2f\n",years,res2);
    }
}