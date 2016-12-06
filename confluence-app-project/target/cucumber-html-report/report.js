$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test\\resources\\com\\confluence\\app\\framework\\testcases\\createPageTest.feature");
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
  "name": "\"createPageLink\" element should be present",
  "keyword": "Then ",
  "line": 12
});
formatter.step({
  "name": "I click on \"createPageLink\"",
  "keyword": "And ",
  "line": 13
});
formatter.step({
  "name": "I enter \"PageHeading\" as \"This is confluence product test\"",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "I click on \"saveButton\"",
  "keyword": "And ",
  "line": 15
});
formatter.step({
  "name": "\"PageTitle\" should be \"This is confluence product test\"",
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
  "duration": 41346691988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "createPageLink",
      "offset": 1
    }
  ],
  "location": "CommonUtils.element_should_be_present(String)"
});
formatter.result({
  "duration": 37534738,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "createPageLink",
      "offset": 12
    }
  ],
  "location": "CommonUtils.I_click(String)"
});
formatter.result({
  "duration": 135908086,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PageHeading",
      "offset": 9
    },
    {
      "val": "This is confluence product test",
      "offset": 26
    }
  ],
  "location": "CommonUtils.I_enter(String,String)"
});
formatter.result({
  "duration": 6680195926,
  "status": "passed"
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
  "duration": 177073721,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PageTitle",
      "offset": 1
    },
    {
      "val": "This is confluence product test",
      "offset": 23
    }
  ],
  "location": "CreatePageTest.ElementText_should_be(String,String)"
});
formatter.result({
  "duration": 5102584777,
  "status": "passed"
});
formatter.uri("test\\resources\\com\\confluence\\app\\framework\\testcases\\pageRestrictionsTest.feature");
formatter.feature({
  "id": "page-restrictions-test-feature",
  "description": "\r\nThis feature demostrates the  functionality \r\nof putting the three restrictions(No Restrictions , Editing Restrictions , View and editing Restrictions)\r\nfor a page.",
  "name": "Page Restrictions test feature",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "page-restrictions-test-feature;put-page-restrictions-scenario",
  "tags": [
    {
      "name": "@restrictions",
      "line": 7
    }
  ],
  "description": "",
  "name": "Put page restrictions scenario",
  "keyword": "Scenario",
  "line": 8,
  "type": "scenario"
});
formatter.step({
  "name": "I click on \"***Menu\"",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "I click on \"RestrictionsMenuOption\"",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "\"RestrictionsMenuArrowButton\" element should be present",
  "keyword": "Then ",
  "line": 11
});
formatter.step({
  "name": "I select \"EditingRestrictionsMenuOption\"",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "I click on \"applyButton\"",
  "keyword": "And ",
  "line": 13
});
formatter.step({
  "name": "\"EditingrestrictionsImage\" element should be present",
  "keyword": "Then ",
  "line": 14
});
formatter.match({
  "arguments": [
    {
      "val": "***Menu",
      "offset": 12
    }
  ],
  "location": "CommonUtils.I_click(String)"
});
formatter.result({
  "duration": 215325536,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RestrictionsMenuOption",
      "offset": 12
    }
  ],
  "location": "CommonUtils.I_click(String)"
});
formatter.result({
  "duration": 140606343,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RestrictionsMenuArrowButton",
      "offset": 1
    }
  ],
  "location": "CommonUtils.element_should_be_present(String)"
});
formatter.result({
  "duration": 2281300591,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EditingRestrictionsMenuOption",
      "offset": 10
    }
  ],
  "location": "PageRestrictionsTest.I_select(String)"
});
formatter.result({
  "duration": 3349807054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "applyButton",
      "offset": 12
    }
  ],
  "location": "CommonUtils.I_click(String)"
});
formatter.result({
  "duration": 3511764160,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EditingrestrictionsImage",
      "offset": 1
    }
  ],
  "location": "CommonUtils.element_should_be_present(String)"
});
formatter.result({
  "duration": 27489866,
  "status": "passed"
});
});