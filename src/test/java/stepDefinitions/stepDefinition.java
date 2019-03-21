package stepDefinitions;


import java.util.List;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;
import cucumber.api.junit.Cucumber;

import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
public class stepDefinition {
	
	   @Given("^validate the browser$")
	    public void validate_the_browser() throws Throwable {
	       System.out.println("browser is validated");
	    }

	    @When("^Browser is triggered$")
	    public void browser_is_triggered() throws Throwable {
	    	  System.out.println("browser is triggered");
	    }

	    @Then("^check if browser is started$")
	    public void check_if_browser_is_started() throws Throwable {
	    	  System.out.println("browser is started");
	    }

    @Given("^User is on NetBanking landing page$")
    public void user_is_on_netbanking_landing_page() throws Throwable {
       System.out.println(" navingated to login url");
    }

    @When("^User login to application with \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_login_to_application_with_username_and_password(String strArg1, String strArg2) throws Throwable {
       System.out.println(strArg1);
       System.out.println(strArg2);
       
    }

    @Then("^Home Page is displayed$")
    public void home_page_is_displayed() throws Throwable {
    	System.out.println("validated home page");
    }

    @And("^Cards displayed are \"([^\"]*)\"$")
    public void check_cards_displayed(String strArg1) throws Throwable {
       System.out.println("cards displayed are :"+strArg1);
    }
    

    @When("^User sign up with following details$")
    public void user_sign_up_with_following_details(DataTable data) throws Throwable {
    	List<List<String>> obj = data.raw();  
    	System.out.println(obj.size());
    	System.out.println(obj.get(0).size());
    	System.out.println(obj.get(0).get(0));  //1 st row and 1st column
    	System.out.println(obj.get(0).get(1));
    	System.out.println(obj.get(0).get(2));
    	System.out.println(obj.get(0).get(3));
    	System.out.println(obj.get(0).get(4));
    }
    
    
    @When("^User log in to application with (.+) and (.+)$")
    public void user_log_in_to_application_with_and(String username, String password) throws Throwable {
        System.out.println(username);
        System.out.println(password);
    }


}