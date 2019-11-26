$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Search.feature");
formatter.feature({
  "line": 2,
  "name": "Wales User Journey",
  "description": "As a person from Wales\r\nI need to know what help I can get with my NHS costs\r\nSo that I can get the treatment I need",
  "id": "wales-user-journey",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "duration": 13006427500,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Wales User Journey with valid credential",
  "description": "",
  "id": "wales-user-journey;wales-user-journey-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am a person from Wales",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I put my circumstances into the Checker tool",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should get a result of whether I will get help or not",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepDef.iAmAPersonFromWales()"
});
formatter.result({
  "duration": 4223908100,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDef.iPutMyCircumstancesIntoTheCheckerTool()"
});
formatter.result({
  "duration": 10494618800,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDef.iShouldGetAResultOfWhetherIWillGetHelpOrNot()"
});
formatter.result({
  "duration": 135774600,
  "status": "passed"
});
formatter.after({
  "duration": 1240787700,
  "status": "passed"
});
});