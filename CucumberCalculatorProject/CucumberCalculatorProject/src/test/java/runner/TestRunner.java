package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/java/features/BMICalculator.feature", 
		glue = { "stepdefinition" },
		plugin = { "pretty","html:target/cucumber-reports"},
		tags = {"@Regression"}
		)


public class TestRunner {

}
