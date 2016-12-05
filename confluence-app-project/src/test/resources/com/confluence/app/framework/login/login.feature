Feature: Logging in to confluence

In order to work  
on confluence application
I want to login

@login
Scenario Outline: Logging in to confluence
Given I go to "LoginURL" on "<Browser>"
And I enter "loginUsername" as "<username>"
And I enter "loginPassword" as "<password>"
And I click on "loginButton"
Then login should be "<expectedResult>"

Examples:
|Browser | username                    |  password   |   expectedResult |
|Mozilla | bhushan.nimgaonkar@gmail.com|  Bhushan@123|   success        |
|Chrome  | bhuhsahn                    |  nbczccc    |   failure        | 