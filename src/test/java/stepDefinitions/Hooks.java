package stepDefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	
	//will execute before executing specific mobile scenario
	@Before("@MobileTest")
	public void beforeMobileValidation(){
		System.out.println("executing hooks before script for mobile test");
	}
	
	
	@After("@MobileTest")
	public void afterMobileValidation(){
		System.out.println("executing hooks after script for mobile test");
	}
	
	
	//will execute before executing specific web scenario
	@Before("@WebTest")
	public void beforeWebValidation(){
		System.out.println("executing hooks before script for web test");
	}
	
	
	@After("@WebTest")
	public void afterWebValidation(){
		System.out.println("executing hooks after script for web test");
	}
	

}
