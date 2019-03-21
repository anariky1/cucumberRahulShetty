$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Account.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "validate the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browser is triggered",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "check if browser is started",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.validate_the_browser()"
});
formatter.result({
  "duration": 111479574,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.browser_is_triggered()"
});
formatter.result({
  "duration": 67341,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.check_if_browser_is_started()"
});
formatter.result({
  "duration": 67855,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Home page default Login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@PortalTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User login to application with \"jin\" and \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Home Page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 128000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jin",
      "offset": 32
    },
    {
      "val": "1234",
      "offset": 42
    }
  ],
  "location": "stepDefinition.user_login_to_application_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 3511511,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_displayed()"
});
formatter.result({
  "duration": 51405,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "stepDefinition.check_cards_displayed(String)"
});
formatter.result({
  "duration": 101269,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "validate the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browser is triggered",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "check if browser is started",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.validate_the_browser()"
});
formatter.result({
  "duration": 61173,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.browser_is_triggered()"
});
formatter.result({
  "duration": 42666,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.check_if_browser_is_started()"
});
formatter.result({
  "duration": 47807,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Home page default Login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@PortalTest"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User login to application with \"john\" and \"4321\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Home Page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Cards displayed are \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 249831,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john",
      "offset": 32
    },
    {
      "val": "4321",
      "offset": 43
    }
  ],
  "location": "stepDefinition.user_login_to_application_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 169125,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_displayed()"
});
formatter.result({
  "duration": 40097,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 21
    }
  ],
  "location": "stepDefinition.check_cards_displayed(String)"
});
formatter.result({
  "duration": 91502,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "validate the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browser is triggered",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "check if browser is started",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.validate_the_browser()"
});
formatter.result({
  "duration": 122859,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.browser_is_triggered()"
});
formatter.result({
  "duration": 103325,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.check_if_browser_is_started()"
});
formatter.result({
  "duration": 53461,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Home page default Login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@PortalTest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User sign up with following details",
  "rows": [
    {
      "cells": [
        "Jenny",
        "abcd",
        "jenny@abcd.com",
        "Australia",
        "12345"
      ],
      "line": 26
    },
    {
      "cells": [
        "John",
        "efgh",
        "john@abcd.com",
        "Australia",
        "12345"
      ],
      "line": 27
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Home Page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Cards displayed are \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 63228,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.user_sign_up_with_following_details(DataTable)"
});
formatter.result({
  "duration": 2509618,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_displayed()"
});
formatter.result({
  "duration": 75052,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 21
    }
  ],
  "location": "stepDefinition.check_cards_displayed(String)"
});
formatter.result({
  "duration": 114120,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 32,
  "name": "Home page default Login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@PortalTest"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "User log in to application with \u003cUsername\u003e and \u003cPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Home Page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Cards displayed are \"false\"",
  "keyword": "And "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "application-login;home-page-default-login;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 38,
      "id": "application-login;home-page-default-login;;1"
    },
    {
      "cells": [
        "user1",
        "pass1"
      ],
      "line": 39,
      "id": "application-login;home-page-default-login;;2"
    },
    {
      "cells": [
        "user2",
        "pass2"
      ],
      "line": 40,
      "id": "application-login;home-page-default-login;;3"
    },
    {
      "cells": [
        "user3",
        "pass3"
      ],
      "line": 41,
      "id": "application-login;home-page-default-login;;4"
    },
    {
      "cells": [
        "user4",
        "pass4"
      ],
      "line": 42,
      "id": "application-login;home-page-default-login;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "validate the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browser is triggered",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "check if browser is started",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.validate_the_browser()"
});
formatter.result({
  "duration": 74024,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.browser_is_triggered()"
});
formatter.result({
  "duration": 48321,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.check_if_browser_is_started()"
});
formatter.result({
  "duration": 39582,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Home page default Login",
  "description": "",
  "id": "application-login;home-page-default-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@PortalTest"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "User log in to application with user1 and pass1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Home Page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Cards displayed are \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 39068,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 32
    },
    {
      "val": "pass1",
      "offset": 42
    }
  ],
  "location": "stepDefinition.user_log_in_to_application_with_and(String,String)"
});
formatter.result({
  "duration": 215903,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_displayed()"
});
formatter.result({
  "duration": 70426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 21
    }
  ],
  "location": "stepDefinition.check_cards_displayed(String)"
});
formatter.result({
  "duration": 111036,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "validate the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browser is triggered",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "check if browser is started",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.validate_the_browser()"
});
formatter.result({
  "duration": 77623,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.browser_is_triggered()"
});
formatter.result({
  "duration": 115149,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.check_if_browser_is_started()"
});
formatter.result({
  "duration": 81735,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Home page default Login",
  "description": "",
  "id": "application-login;home-page-default-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@PortalTest"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "User log in to application with user2 and pass2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Home Page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Cards displayed are \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 67341,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 32
    },
    {
      "val": "pass2",
      "offset": 42
    }
  ],
  "location": "stepDefinition.user_log_in_to_application_with_and(String,String)"
});
formatter.result({
  "duration": 112065,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_displayed()"
});
formatter.result({
  "duration": 51405,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 21
    }
  ],
  "location": "stepDefinition.check_cards_displayed(String)"
});
formatter.result({
  "duration": 98699,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "validate the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browser is triggered",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "check if browser is started",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.validate_the_browser()"
});
formatter.result({
  "duration": 107951,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.browser_is_triggered()"
});
formatter.result({
  "duration": 70426,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.check_if_browser_is_started()"
});
formatter.result({
  "duration": 50892,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Home page default Login",
  "description": "",
  "id": "application-login;home-page-default-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@PortalTest"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "User log in to application with user3 and pass3",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Home Page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Cards displayed are \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 51406,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user3",
      "offset": 32
    },
    {
      "val": "pass3",
      "offset": 42
    }
  ],
  "location": "stepDefinition.user_log_in_to_application_with_and(String,String)"
});
formatter.result({
  "duration": 129028,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_displayed()"
});
formatter.result({
  "duration": 56546,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 21
    }
  ],
  "location": "stepDefinition.check_cards_displayed(String)"
});
formatter.result({
  "duration": 83791,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "validate the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browser is triggered",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "check if browser is started",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.validate_the_browser()"
});
formatter.result({
  "duration": 75566,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.browser_is_triggered()"
});
formatter.result({
  "duration": 76080,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.check_if_browser_is_started()"
});
formatter.result({
  "duration": 53462,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Home page default Login",
  "description": "",
  "id": "application-login;home-page-default-login;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@PortalTest"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "User log in to application with user4 and pass4",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Home Page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Cards displayed are \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 161927,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user4",
      "offset": 32
    },
    {
      "val": "pass4",
      "offset": 42
    }
  ],
  "location": "stepDefinition.user_log_in_to_application_with_and(String,String)"
});
formatter.result({
  "duration": 296609,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_displayed()"
});
formatter.result({
  "duration": 79679,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 21
    }
  ],
  "location": "stepDefinition.check_cards_displayed(String)"
});
formatter.result({
  "duration": 72482,
  "status": "passed"
});
});