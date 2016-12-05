$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test\\resources\\com\\confluence\\app\\framework\\testcases\\createPageFeature.feature");
formatter.feature({
  "id": "check-createpage-functionality",
  "description": "\r\nIn order to create a page after logging\r\nI have to click on createPage link\r\nand Check the presence of page Heading text field\r\nand Enter heading into the text field \r\nand click on the save button.",
  "name": "Check createPage functionality",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "check-createpage-functionality;createpage-scenario",
  "tags": [
    {
      "name": "@createPage",
      "line": 9
    }
  ],
  "description": "",
  "name": "CreatePage scenario",
  "keyword": "Scenario",
  "line": 10,
  "type": "scenario"
});
formatter.step({
  "name": "I am logged in \"Mozilla\"",
  "keyword": "Given ",
  "line": 11
});
formatter.step({
  "name": "I click on \"CreatePageLink\"",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "\"createPagelink\" element should be present",
  "keyword": "Then ",
  "line": 13
});
formatter.step({
  "name": "I Enter \"PageHeading\" as \"This is Product Test\"",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "I click on \"saveButton\"",
  "keyword": "And ",
  "line": 15
});
formatter.step({
  "name": "\"PageTitle\" should be \"This is Product Test\"",
  "keyword": "Then ",
  "line": 16
});
formatter.match({
  "arguments": [
    {
      "val": "Mozilla",
      "offset": 16
    }
  ],
  "location": "CreatePageTest.I_am_logged_in(String)"
});
formatter.result({
  "duration": 51378575087,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreatePageLink",
      "offset": 12
    }
  ],
  "location": "CommonUtils.I_click(String)"
});
formatter.result({
  "duration": 1106618,
  "status": "failed",
  "error_message": "java.lang.IllegalArgumentException: Cannot find elements when the XPath expression is null.\r\n\tat org.openqa.selenium.By.xpath(By.java:113)\r\n\tat com.confluence.app.framework.util.WebConnector.click(WebConnector.java:99)\r\n\tat com.confluence.app.framework.testcases.CommonUtils.I_click(CommonUtils.java:14)\r\n\tat ✽.And I click on \"CreatePageLink\"(test\\resources\\com\\confluence\\app\\framework\\testcases\\createPageFeature.feature:12)\r\n"
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
      "val": "saveButton",
      "offset": 12
    }
  ],
  "location": "CommonUtils.I_click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "PageTitle",
      "offset": 1
    },
    {
      "val": "This is Product Test",
      "offset": 23
    }
  ],
  "location": "CreatePageTest.ElementText_should_be(String,String)"
});
formatter.result({
  "status": "skipped"
});
});