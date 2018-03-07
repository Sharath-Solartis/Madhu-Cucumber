package Calculate;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Math {
	
	@Given("^user adds \"([^\"]*)\" and \"([^\"]*)\"$")
	public void add(int num1, int num2)
	{
		int sum = num1+num2;
		System.out.println("Sum :"+sum);
	}
	
	@Then("^message displayed Values Added$")
	public void display()
	{
		System.out.println("Values Added");
	}
}
