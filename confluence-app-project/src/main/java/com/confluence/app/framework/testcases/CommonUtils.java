package com.confluence.app.framework.testcases;

import com.confluence.app.framework.util.WebConnector;

import cucumber.api.java.en.And;

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
}
