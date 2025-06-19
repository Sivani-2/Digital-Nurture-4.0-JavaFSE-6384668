import java.util.List;
public class LinearSearch{
    public static Product linearSearch(List<Product> products, String name) {
        //converting to lowercase in order to ignore case sensitivity while comparing
        name = name.toLowerCase();
        for (Product p : products) {
            if (p.getProductName().equals(name)) {
                return p;
            }
        }
        return null;
    }
}