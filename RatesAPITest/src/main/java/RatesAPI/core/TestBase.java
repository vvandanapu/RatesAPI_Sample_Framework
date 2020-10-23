package RatesAPI.core;


import RatesAPI.logger.TestVerification;
import RatesAPI.logger.TestLogger;

/**
 * Class Description - It is the framework base class. Every testcase must extend this class.
 * 
 * @author Vijay Vandanapu
 * 
 */
public class TestBase {
	 
	public RestAPIRequest restRequest = new RestAPIRequest();
	public TestVerification testVP = new TestVerification();
	public TestLogger testLogger = new TestLogger();

	
}

