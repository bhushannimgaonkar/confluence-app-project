package com.confluence.app.framework.testcases;

import org.junit.Assert;

import com.confluence.app.framework.util.WebConnector;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class CreatePageTest {

	//steps definitions for create Page functionality
	WebConnector selenium=WebConnector.getInstance();
	
	@Given("^I am logged in \"([^\"]*)\"$")
	public void I_am_logged_in(String BrowserType){
		//check if logged in or not then login
		selenium.OpenBrowser(BrowserType);
		if(!selenium.isLoggedin()){
			selenium.doDefaultLogin();
		}
	}
	
	
	//@And()
	
	
	
	@Then("^\"([^\"]*)\" should be \"([^\"]*)\"$")
	public void ElementText_should_be(String object,String text){
		
		Assert.assertTrue("Text not matched "+text,selenium.verifyText(object, text));
	}
	
	
	
	
}
