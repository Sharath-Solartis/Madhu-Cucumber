$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/FeatureFiles/TestReport.Feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "",
  "id": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 44,
  "name": "",
  "description": "",
  "id": ";",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 43,
      "name": "@Fifth"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "user adds \"\u003cnum1\u003e\" and \"\u003cnum2\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "message displayed Values Added",
  "keyword": "Then "
});
formatter.examples({
  "line": 48,
  "name": "",
  "description": "",
  "id": ";;",
  "rows": [
    {
      "cells": [
        "num1",
        "num2"
      ],
      "line": 49,
      "id": ";;;1"
    },
    {
      "cells": [
        "12",
        "3"
      ],
      "line": 50,
      "id": ";;;2"
    },
    {
      "cells": [
        "15",
        "10"
      ],
      "line": 51,
      "id": ";;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 50,
  "name": "",
  "description": "",
  "id": ";;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 43,
      "name": "@Fifth"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "user adds \"12\" and \"3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "message displayed Values Added",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 11
    },
    {
      "val": "3",
      "offset": 20
    }
  ],
  "location": "Math.add(int,int)"
});
formatter.result({
  "duration": 76105127,
  "status": "passed"
});
formatter.match({
  "location": "Math.display()"
});
formatter.result({
  "duration": 205592,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "",
  "description": "",
  "id": ";;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 43,
      "name": "@Fifth"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "user adds \"15\" and \"10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "message displayed Values Added",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 11
    },
    {
      "val": "10",
      "offset": 20
    }
  ],
  "location": "Math.add(int,int)"
});
formatter.result({
  "duration": 128615,
  "status": "passed"
});
formatter.match({
  "location": "Math.display()"
});
formatter.result({
  "duration": 46186,
  "status": "passed"
});
});