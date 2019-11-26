package qa.walesuserjourney.com;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import qa.walesuserjourney.com.driver.DriverFactory;

public class Hooks {
    private DriverFactory driverFactory= new DriverFactory();

    @Before
    public void setUp()
    {
        driverFactory.openBrowser("chrome");
        driverFactory.setUrl("https://services.nhsbsa.nhs.uk/check-for-help-paying-nhs-costs/start");
        driverFactory.maximize();
        driverFactory.deleteCookies();
        driverFactory.pageLoadTimeOut();
        driverFactory.implicitWait();
    }

    @After
    public void tearDown()
    {
        driverFactory.closeBrowser();
    }
}


