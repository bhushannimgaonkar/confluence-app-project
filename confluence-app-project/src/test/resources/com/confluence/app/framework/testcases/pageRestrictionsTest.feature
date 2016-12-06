Feature: Page Restrictions test feature

This feature demostrates the  functionality 
of putting the three restrictions(No Restrictions , Editing Restrictions , View and editing Restrictions)
for a page.

@restrictions
Scenario: Put page restrictions scenario
And I click on "***Menu"
And I click on "RestrictionsMenuOption" 
Then "RestrictionsMenuArrowButton" element should be present
And I select "EditingRestrictionsMenuOption"
And I click on "applyButton"
Then "EditingrestrictionsImage" element should be present