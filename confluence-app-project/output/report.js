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
  "description": "",
  "name": "Logging in to confluence",
  "keyword": "Scenario Outline",
  "line": 16,
  "type": "scenario"
});
formatter.step({
  "name": "I go to \"LoginURL\" on \"Mozilla\"",
  "keyword": "Given ",
  "line": 8,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I enter \"loginUsername\" as \"bhushan.nimgaonkar@gmail.com\"",
  "keyword": "And ",
  "line": 9,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I enter \"loginPassword\" as \"Bhushan@123\"",
  "keyword": "And ",
  "line": 10,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I click on \"loginButton\"",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "login should be \"success\"",
  "keyword": "Then ",
  "line": 12,
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
  "duration": 14737052133,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginUsername",
      "offset": 9
    },
    {
      "val": "bhushan.nimgaonkar@gmail.com",
      "offset": 28
    }
  ],
  "location": "LoginTest.I_enter(String,String)"
});
formatter.result({
  "duration": 200901001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginPassword",
      "offset": 9
    },
    {
      "val": "Bhushan@123",
      "offset": 28
    }
  ],
  "location": "LoginTest.I_enter(String,String)"
});
formatter.result({
  "duration": 85883759,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginButton",
      "offset": 12
    }
  ],
  "location": "LoginTest.I_click(String)"
});
formatter.result({
  "duration": 7444482175,
  "status": "passed"
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
  "duration": 36230112,
  "status": "passed"
});
formatter.scenario({
  "id": "logging-in-to-confluence;logging-in-to-confluence;;3",
  "description": "",
  "name": "Logging in to confluence",
  "keyword": "Scenario Outline",
  "line": 17,
  "type": "scenario"
});
formatter.step({
  "name": "I go to \"LoginURL\" on \"Chrome\"",
  "keyword": "Given ",
  "line": 8,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I enter \"loginUsername\" as \"bhuhsahn\"",
  "keyword": "And ",
  "line": 9,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I enter \"loginPassword\" as \"nbczccc\"",
  "keyword": "And ",
  "line": 10,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I click on \"loginButton\"",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "login should be \"failure\"",
  "keyword": "Then ",
  "line": 12,
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
  "duration": 10487291304,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginUsername",
      "offset": 9
    },
    {
      "val": "bhuhsahn",
      "offset": 28
    }
  ],
  "location": "LoginTest.I_enter(String,String)"
});
formatter.result({
  "duration": 130109181,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginPassword",
      "offset": 9
    },
    {
      "val": "nbczccc",
      "offset": 28
    }
  ],
  "location": "LoginTest.I_enter(String,String)"
});
formatter.result({
  "duration": 101963621,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginButton",
      "offset": 12
    }
  ],
  "location": "LoginTest.I_click(String)"
});
formatter.result({
  "duration": 2646996695,
  "status": "passed"
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
  "duration": 20050463976,
  "status": "passed"
});
});