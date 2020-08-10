package stepdefinition;
import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
public class BMICalculatorStepDefinition {
	public static WebDriver driver;

@Given("^user is on calculator homepage$")
public void user_is_on_calculator_homepage() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	System.setProperty("webdriver.chrome.driver",
			"C:\\\\Users\\\\lyuvaraj\\\\Documents\\\\SDET\\\\chromedriver.exe");
	driver = new ChromeDriver();
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	driver.get("https://www.calculator.net/");
}


@Given("^verify the page title$")
public void verify_the_page_title() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	String actualTitle = driver.getTitle();
	driver.manage().window().maximize();
	String expectedTitle = "Calculator.net: Free Online Calculators - Math, Fitness, Finance, Science";
	assertEquals(actualTitle, expectedTitle);
	driver.quit();
}

@When("^user navigates to BMI calculator Page$")
public void user_navigates_to_BMI_calculator_Page() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.linkText("BMI Calculator")).click();
   
}

@When("^verify the BMI page title$")
public void verify_the_BMI_page_title() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	String actualTitle = driver.getTitle();
	driver.manage().window().maximize();
	String expectedTitle = "BMI Calculator";
	assertEquals(actualTitle, expectedTitle);
    
}

@When("^user enters \"([^\"]*)\",\"([^\"]*)\"and \"([^\"]*)\"$")
public void user_enters_and(String arg1, String arg2, String arg3) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.name("cage")).clear();
	driver.findElement(By.name("cage")).sendKeys(arg1);
	driver.findElement(By.name("cheightmeter")).clear();
	driver.findElement(By.name("cheightmeter")).sendKeys(arg2);
	driver.findElement(By.name("ckg")).clear();
	driver.findElement(By.name("ckg")).sendKeys(arg3);
	}

@Then("^calculate the BMI value$")
public void calculate_the_BMI_value() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.xpath("//input[@value='Calculate']")).click();
	
}

@Then("^store the BMI result value$")
public void store_the_BMI_result_value() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	String BMI_value  = driver.findElement(By.xpath("/html/body/div[3]/div[1]/div[4]/div/b")).getText();
	System.out.println("BMI Value is" + BMI_value);
	driver.close();
	
}

}
