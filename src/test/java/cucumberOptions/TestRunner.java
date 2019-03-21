package cucumberOptions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/java/Features",
		glue="stepDefinitions",tags="@PortalTest",dryRun=false,monochrome=true,strict=true,
		plugin={"pretty","html:target/cucumber","json:target/cucumber.json","junit:target/cukes.xml"}
		)
public class TestRunner {
//provide feature file and step definition
	
	
}
