import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;

public class MyServiceTest_Exercise2 {

    @Test
    public void testVerifyInteraction() {
        // Step 1: Create mock
        ExternalApi mockApi = mock(ExternalApi.class);

        // Step 2: Pass mock into service
        MyService service = new MyService(mockApi);

        // Step 3: Call the method which should trigger interaction
        service.fetchData();

        // Step 4: Verify the interaction occurred
        verify(mockApi).getData();
    }
}