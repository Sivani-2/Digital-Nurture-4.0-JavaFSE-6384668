import java.util.List;

public class BinarySearch{
    public static Product binarySearch(List<Product> products, String name) {
        //convert to lowercase in order to ignore case sensitivity while comparing
        name = name.toLowerCase();
        int left = 0, right = products.size() - 1;

        while (left <= right) {
            int mid = left + (right-left) / 2;
            int res = products.get(mid).getProductName().compareTo(name);

            if (res == 0) return products.get(mid);
            else if (res < 0) left = mid + 1;
            else right = mid - 1;
        }
        return null;
    }
}