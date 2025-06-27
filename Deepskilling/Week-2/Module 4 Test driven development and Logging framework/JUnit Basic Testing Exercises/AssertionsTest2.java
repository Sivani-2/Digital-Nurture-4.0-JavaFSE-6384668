// Exercise 3: Assertions in JUnit
// red

import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest2 {

    @Test
    public void exampleTest() {
        int result2 = someMethod();
        assertEquals("The result should be 42", 40, result2);
        
    }

    private int someMethod() {
        return 42;
    }
}
