package RunnerClass;

import org.junit.runner.RunWith;

import com.github.mkolisnyk.cucumber.runner.ExtendedCucumber;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;
 
import cucumber.api.CucumberOptions;
 
@RunWith(ExtendedCucumber.class)
@ExtendedCucumberOptions(
		jsonReports = {"target/cucumber2.json"},
        retryCount = 2, 
        detailedReport = true,
        detailedAggregatedReport = true, 
        outputFolder = "target")
@CucumberOptions(
		plugin = { "html:target/site/cucumber-pretty","json:target/cucumber2.json" }, 
        glue = "Calculate",
        features = {"src/main/java/FeatureFiles/TestReport.Feature" },
		monochrome = true, 
        strict = true,
        dryRun = false,
        tags = {"@Second"}
)
public class Test2Runner
{
}