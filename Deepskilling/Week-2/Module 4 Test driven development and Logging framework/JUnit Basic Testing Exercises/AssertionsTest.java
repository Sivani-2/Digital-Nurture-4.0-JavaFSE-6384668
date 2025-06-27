// Exercise 3: Assertions in JUnit
// green 

import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void exampleTest() {
        int result1 = someMethod();
        assertEquals("The result should be 42", 42, result1);
        
    }

    private int someMethod() {
        return 42;
    }
}
