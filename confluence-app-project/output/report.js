$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com\\confluence\\app\\framework\\login\\login.feature");
formatter.feature({
  "id": "logging-in-to-confluence",
  "description": "\r\nIn order to work  \r\non confluence application\r\nI want to login",
  "name": "Logging in to confluence",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "logging-in-to-confluence;logging-in-to-confluence;;2",
  "tags": [
    {
      "name": "@login",
      "line": 7
    }
  ],
  "description": "",
  "name": "Logging in to confluence",
  "keyword": "Scenario Outline",
  "line": 17,
  "type": "scenario"
});
formatter.step({
  "name": "I go to \"LoginURL\" on \"Mozilla\"",
  "keyword": "Given ",
  "line": 9,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I enter \"loginUsername\" as \"bhushan.nimgaonkar@gmail.com\"",
  "keyword": "And ",
  "line": 10,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I enter \"loginPassword\" as \"Bhushan@123\"",
  "keyword": "And ",
  "line": 11,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I click on \"loginButton\"",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "login should be \"success\"",
  "keyword": "Then ",
  "line": 13,
  "matchedColumns": [
    3
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "LoginURL",
      "offset": 9
    },
    {
      "val": "Mozilla",
      "offset": 23
    }
  ],
  "location": "LoginTest.I_go_to_Confluence(String,String)"
});
formatter.result({
  "duration": 45320037447,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 17
    }
  ],
  "location": "LoginTest.Login_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "logging-in-to-confluence;logging-in-to-confluence;;3",
  "tags": [
    {
      "name": "@login",
      "line": 7
    }
  ],
  "description": "",
  "name": "Logging in to confluence",
  "keyword": "Scenario Outline",
  "line": 18,
  "type": "scenario"
});
formatter.step({
  "name": "I go to \"LoginURL\" on \"Chrome\"",
  "keyword": "Given ",
  "line": 9,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I enter \"loginUsername\" as \"bhuhsahn\"",
  "keyword": "And ",
  "line": 10,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I enter \"loginPassword\" as \"nbczccc\"",
  "keyword": "And ",
  "line": 11,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I click on \"loginButton\"",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "login should be \"failure\"",
  "keyword": "Then ",
  "line": 13,
  "matchedColumns": [
    3
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "LoginURL",
      "offset": 9
    },
    {
      "val": "Chrome",
      "offset": 23
    }
  ],
  "location": "LoginTest.I_go_to_Confluence(String,String)"
});
formatter.result({
  "duration": 22974070121,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "failure",
      "offset": 17
    }
  ],
  "location": "LoginTest.Login_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
});