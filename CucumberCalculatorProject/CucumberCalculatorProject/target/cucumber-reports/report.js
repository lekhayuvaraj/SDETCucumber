$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/BMICalculator.feature");
formatter.feature({
  "line": 1,
  "name": "calculator",
  "description": "I want to calculate BMI based on age,height and weight",
  "id": "calculator",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Login to calculator.net website",
  "description": "",
  "id": "calculator;login-to-calculator.net-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on calculator homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "verify the page title",
  "keyword": "And "
});
formatter.match({
  "location": "BMICalculatorStepDefinition.user_is_on_calculator_homepage()"
});
formatter.result({
  "duration": 6053131100,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefinition.verify_the_page_title()"
});
formatter.result({
  "duration": 3115479500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Calculate BMI",
  "description": "",
  "id": "calculator;calculate-bmi",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user is on calculator homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user navigates to BMI calculator Page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "verify the BMI page title",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters \"\u003cAge\u003e\",\"\u003cHeight\u003e\"and \"\u003cWeight\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "calculate the BMI value",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "store the BMI result value",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "calculator;calculate-bmi;",
  "rows": [
    {
      "cells": [
        "Age",
        "Height",
        "Weight"
      ],
      "line": 19,
      "id": "calculator;calculate-bmi;;1"
    },
    {
      "cells": [
        "10",
        "127",
        "40"
      ],
      "line": 20,
      "id": "calculator;calculate-bmi;;2"
    },
    {
      "cells": [
        "30",
        "156",
        "70"
      ],
      "line": 21,
      "id": "calculator;calculate-bmi;;3"
    },
    {
      "cells": [
        "25",
        "152",
        "55"
      ],
      "line": 22,
      "id": "calculator;calculate-bmi;;4"
    },
    {
      "cells": [
        "20",
        "160",
        "45"
      ],
      "line": 23,
      "id": "calculator;calculate-bmi;;5"
    },
    {
      "cells": [
        "35",
        "160",
        "70"
      ],
      "line": 24,
      "id": "calculator;calculate-bmi;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Calculate BMI",
  "description": "",
  "id": "calculator;calculate-bmi;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user is on calculator homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user navigates to BMI calculator Page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "verify the BMI page title",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters \"10\",\"127\"and \"40\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "calculate the BMI value",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "store the BMI result value",
  "keyword": "And "
});
formatter.match({
  "location": "BMICalculatorStepDefinition.user_is_on_calculator_homepage()"
});
formatter.result({
  "duration": 4533763000,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefinition.user_navigates_to_BMI_calculator_Page()"
});
formatter.result({
  "duration": 907569300,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefinition.verify_the_BMI_page_title()"
});
formatter.result({
  "duration": 2141537900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 13
    },
    {
      "val": "127",
      "offset": 18
    },
    {
      "val": "40",
      "offset": 27
    }
  ],
  "location": "BMICalculatorStepDefinition.user_enters_and(String,String,String)"
});
formatter.result({
  "duration": 374616800,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefinition.calculate_the_BMI_value()"
});
formatter.result({
  "duration": 532168900,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefinition.store_the_BMI_result_value()"
});
formatter.result({
  "duration": 57922900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Calculate BMI",
  "description": "",
  "id": "calculator;calculate-bmi;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user is on calculator homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user navigates to BMI calculator Page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "verify the BMI page title",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters \"30\",\"156\"and \"70\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "calculate the BMI value",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "store the BMI result value",
  "keyword": "And "
});
formatter.match({
  "location": "BMICalculatorStepDefinition.user_is_on_calculator_homepage()"
});
formatter.result({
  "duration": 4713991100,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefinition.user_navigates_to_BMI_calculator_Page()"
});
formatter.result({
  "duration": 942521000,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefinition.verify_the_BMI_page_title()"
});
formatter.result({
  "duration": 2149274500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 13
    },
    {
      "val": "156",
      "offset": 18
    },
    {
      "val": "70",
      "offset": 27
    }
  ],
  "location": "BMICalculatorStepDefinition.user_enters_and(String,String,String)"
});
formatter.result({
  "duration": 441959200,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefinition.calculate_the_BMI_value()"
});
formatter.result({
  "duration": 560824100,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefinition.store_the_BMI_result_value()"
});
formatter.result({
  "duration": 38901600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Calculate BMI",
  "description": "",
  "id": "calculator;calculate-bmi;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user is on calculator homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user navigates to BMI calculator Page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "verify the BMI page title",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters \"25\",\"152\"and \"55\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "calculate the BMI value",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "store the BMI result value",
  "keyword": "And "
});
formatter.match({
  "location": "BMICalculatorStepDefinition.user_is_on_calculator_homepage()"
});
formatter.result({
  "duration": 4775234700,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefinition.user_navigates_to_BMI_calculator_Page()"
});
formatter.result({
  "duration": 1051270300,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefinition.verify_the_BMI_page_title()"
});
formatter.result({
  "duration": 2149327000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 13
    },
    {
      "val": "152",
      "offset": 18
    },
    {
      "val": "55",
      "offset": 27
    }
  ],
  "location": "BMICalculatorStepDefinition.user_enters_and(String,String,String)"
});
formatter.result({
  "duration": 526887400,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefinition.calculate_the_BMI_value()"
});
formatter.result({
  "duration": 543641500,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefinition.store_the_BMI_result_value()"
});
formatter.result({
  "duration": 55938300,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Calculate BMI",
  "description": "",
  "id": "calculator;calculate-bmi;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user is on calculator homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user navigates to BMI calculator Page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "verify the BMI page title",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters \"20\",\"160\"and \"45\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "calculate the BMI value",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "store the BMI result value",
  "keyword": "And "
});
formatter.match({
  "location": "BMICalculatorStepDefinition.user_is_on_calculator_homepage()"
});
formatter.result({
  "duration": 5395884500,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefinition.user_navigates_to_BMI_calculator_Page()"
});
formatter.result({
  "duration": 936482300,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefinition.verify_the_BMI_page_title()"
});
formatter.result({
  "duration": 2168348300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 13
    },
    {
      "val": "160",
      "offset": 18
    },
    {
      "val": "45",
      "offset": 27
    }
  ],
  "location": "BMICalculatorStepDefinition.user_enters_and(String,String,String)"
});
formatter.result({
  "duration": 350525100,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefinition.calculate_the_BMI_value()"
});
formatter.result({
  "duration": 560673200,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefinition.store_the_BMI_result_value()"
});
formatter.result({
  "duration": 36918500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Calculate BMI",
  "description": "",
  "id": "calculator;calculate-bmi;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user is on calculator homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user navigates to BMI calculator Page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "verify the BMI page title",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters \"35\",\"160\"and \"70\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "calculate the BMI value",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "store the BMI result value",
  "keyword": "And "
});
formatter.match({
  "location": "BMICalculatorStepDefinition.user_is_on_calculator_homepage()"
});
formatter.result({
  "duration": 5321264100,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefinition.user_navigates_to_BMI_calculator_Page()"
});
formatter.result({
  "duration": 1036599100,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefinition.verify_the_BMI_page_title()"
});
formatter.result({
  "duration": 2157447900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 13
    },
    {
      "val": "160",
      "offset": 18
    },
    {
      "val": "70",
      "offset": 27
    }
  ],
  "location": "BMICalculatorStepDefinition.user_enters_and(String,String,String)"
});
formatter.result({
  "duration": 506448700,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefinition.calculate_the_BMI_value()"
});
formatter.result({
  "duration": 591351900,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefinition.store_the_BMI_result_value()"
});
formatter.result({
  "duration": 51534600,
  "status": "passed"
});
});