// Exercise 4: Arrange-Act-Assert (AAA) Pattern, Test Fixtures, Setup and Teardown Methods in JUnit

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class AAAPatternTest {
    private int value;

    @Before
    public void setUp() {
        value = 10;
        System.out.println("Setup complete.");
    }

    @Test
    public void testAddition() {
        int result = value + 5;
        assertEquals(15, result);
    }

    @Test
    public void testMultiplication() {
        int result = value * 2;
        assertEquals(20, result);
    }

    @After
    public void tearDown() {
        value = 0;
        System.out.println("Teardown complete.");
    }
}
