package com.confluence.app.framework.testcases;

import com.confluence.app.framework.util.WebConnector;

import cucumber.api.java.en.And;

public class PageRestrictionsTest {

	
	WebConnector selenium=WebConnector.getInstance();
	
	@And("^I select \"([^\"]*)\"$")
	public void I_select(String menuoption){
		//click on menu arrow button
		selenium.click("RestrictionsMenuArrowButton");
		selenium.click(menuoption);
	}
}
