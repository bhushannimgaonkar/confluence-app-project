package com.confluence.app.framework.testcases;

import org.junit.Assert;

import com.confluence.app.framework.util.WebConnector;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class CommonUtils {
	
	WebConnector selenium= WebConnector.getInstance();

	@And("^I click on \"([^\"]*)\"$")
	public void I_click(String object){
		System.out.println("Clicking on "+object);
		selenium.click(object);
	}
	
	@And("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
	public void I_enter(String object,String text){
		System.out.println("entering "+ object+ " as "+text);
		selenium.type(object, text);
	}
	
	@Then("^\"([^\"]*)\" element should be present$")
	public void element_should_be_present(String expectedObject){
	   Assert.assertTrue("Element not found"+expectedObject,selenium.isElementPresent(expectedObject));	
	}
}
