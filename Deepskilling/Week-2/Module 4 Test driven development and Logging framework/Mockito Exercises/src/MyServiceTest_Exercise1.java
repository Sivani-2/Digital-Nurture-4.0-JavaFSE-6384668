import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;

public class MyServiceTest_Exercise1 {

    @Test
    public void testExternalApi() {
        // Step 1: Mock the ExternalApi
        ExternalApi mockApi = mock(ExternalApi.class);

        // Step 2: Stub the method to return mock data
        when(mockApi.getData()).thenReturn("Mock Data");

        // Step 3: Inject mock into service and call method
        MyService service = new MyService(mockApi);
        String result = service.fetchData();

        // Step 4: Assert the mocked result
        assertEquals("Mock Data", result);
    }
}
