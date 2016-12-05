package com.confluence.app.framework.login;

import org.junit.Assert;

import com.confluence.app.framework.util.WebConnector;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class LoginTest {
	
	
	///Step definitions 
	WebConnector selenium = WebConnector.getInstance();
	
	@Given("^I go to \"([^\"]*)\" on \"([^\"]*)\"$")
	public void I_go_to_Confluence(String url, String browserType){
		System.out.println("I go to loginURL "+browserType+" On "+url);
		selenium.OpenBrowser(browserType);
		selenium.navigate(url);
		
	}
	
	
	
	@Then("^login should be \"([^\"]*)\"$")
	public void Login_should_be(String expectedResult){
		
		System.out.println("Login- "+expectedResult);
		boolean result=selenium.isElementPresent("createPageLink");
		String actualResult=null;
		
		if(result)
			actualResult="success";
		else
			actualResult="failure";
		Assert.assertEquals(expectedResult, actualResult);
		
		
	}
	

}
