public class Product implements Comparable<Product> {
    // attributes of a product
    int productId;
    String productName;
    String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        //converting to lowercase in order to ignore case sensitivity while comparing
        this.productName = productName.toLowerCase();
        this.category = category.toLowerCase();
    }

    public String getProductName() {
        return productName;
    }

    @Override
    public int compareTo(Product other) {
        return this.productName.compareTo(other.productName);
    }

    @Override
    public String toString() {
        return productId + ": " + productName + " (" + category + ")";
    }
}
