package RunnerClass;

import org.junit.runner.RunWith;

import com.github.mkolisnyk.cucumber.runner.ExtendedCucumber;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;
 
import cucumber.api.CucumberOptions;
 
@RunWith(ExtendedCucumber.class)
@ExtendedCucumberOptions(
        jsonReports = {"target/cucumber1.json","target/cucumber2.json","target/cucumber3.json","target/cucumber4.json","target/cucumber5.json"},
        toPDF = true,
        retryCount = 2,
        detailedReport = true, 
        detailedAggregatedReport = true, 
        outputFolder = "target")
@CucumberOptions(
		plugin = { "html:target/site/cucumber-pretty","json:target/cucumber5.json" }, 
        glue = "Calculate",
        features = {"src/main/java/FeatureFiles/TestReport.Feature" },
		monochrome = true, 
        strict = true,
        dryRun = false,
        tags = {"@Fifth"}
)
public class Test5Runner
{
}