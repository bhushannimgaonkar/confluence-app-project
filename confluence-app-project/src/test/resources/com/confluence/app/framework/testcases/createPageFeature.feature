Feature: Check createPage functionality

In order to create a page after logging
I have to click on createPage link
and Check the presence of page Heading text field
and Enter heading into the text field 
and click on the save button.

@createPage
Scenario: CreatePage scenario
Given I am logged in "Mozilla"
Then "createPagelink" element should be present
And I click on "createPageLink"
And I Enter "PageHeading" as "This is confluence product test"
And I click on "saveButton"
Then "PageTitle" should be "This is Product Test"
