import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Main {
    public static void main(String[] args) {
    // List of products
        List<Product> products=new ArrayList<>();
        products.add(new Product(101, "Samsung S21 FE 5G", "Electronics"));
        products.add(new Product(102, "T-shirt", "Clothing"));
        products.add(new Product(103, "Samsung Galaxy", "Electronics"));
        products.add(new Product(104, "Mascara", "Makeup & Cosmetics"));
        products.add(new Product(105, "Kurta", "Clothing"));
        
        String productName="Kurta";
        
        // Linear Search
        Product result1 = LinearSearch.linearSearch(products, productName);
        System.out.println("Linear Search Result: " + (result1 != null ? result1 : "Not Found"));
        
        // Binary Search (sorted by name)
        Collections.sort(products); // Array must be sorted before binary search
        Product result2 = BinarySearch.binarySearch(products, productName);
        System.out.println("Binary Search Result: " + (result2 != null ? result2 : "Not Found"));
    }
}