$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GET_Exchange_Rates_for_date_API2.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Vijay Vandanapu"
    }
  ],
  "line": 3,
  "name": "GET Exchange rates for particular date",
  "description": "As an individual, He/she must be able to fetch the Exchange rates for EUR currency using appropriate date",
  "id": "get-exchange-rates-for-particular-date",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@GET_Exchange_rates_for_date"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "GET_Exchange_Rates_Date_01 : Verification of the http response code when user requests for GET Exchange rates for appropriate date",
  "description": "",
  "id": "get-exchange-rates-for-particular-date;get-exchange-rates-date-01-:-verification-of-the-http-response-code-when-user-requests-for-get-exchange-rates-for-appropriate-date",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "User has the GET Exchange rates API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User invokes GET Exchange rates API endpoint with appropriate date",
  "rows": [
    {
      "cells": [
        "Date"
      ],
      "line": 10
    },
    {
      "cells": [
        "2019-09-20"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Verify that Http response code is 200 OK",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesAPITest.user_has_the_GET_Exchange_rates_API_endpoint()"
});
formatter.result({
  "duration": 298518744,
  "status": "passed"
});
formatter.match({
  "location": "RatesAPITest.user_invokes_GET_Exchange_rates_API_endpoint_with_appropriate_date(DataTable)"
});
formatter.result({
  "duration": 2680615526,
  "status": "passed"
});
formatter.match({
  "location": "RatesAPITest.verify_that_Http_response_code_is_OK()"
});
formatter.result({
  "duration": 2937652,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "GET_Exchange_Rates_Date_02 : Verification of the Date value in the response which should match with the requested date value when user requests for GET Exchange rates for appropriate date",
  "description": "",
  "id": "get-exchange-rates-for-particular-date;get-exchange-rates-date-02-:-verification-of-the-date-value-in-the-response-which-should-match-with-the-requested-date-value-when-user-requests-for-get-exchange-rates-for-appropriate-date",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "User has the GET Exchange rates API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User invokes GET Exchange rates API endpoint with appropriate date",
  "rows": [
    {
      "cells": [
        "Date"
      ],
      "line": 17
    },
    {
      "cells": [
        "2019-09-20"
      ],
      "line": 18
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Verify Date value in the Exchange rates API response matches the date value in the request",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesAPITest.user_has_the_GET_Exchange_rates_API_endpoint()"
});
formatter.result({
  "duration": 454384,
  "status": "passed"
});
formatter.match({
  "location": "RatesAPITest.user_invokes_GET_Exchange_rates_API_endpoint_with_appropriate_date(DataTable)"
});
formatter.result({
  "duration": 262419011,
  "status": "passed"
});
formatter.match({
  "location": "RatesAPITest.verify_Date_value_in_the_Exchange_rates_API_response_matches_the_date_value_in_the_request()"
});
formatter.result({
  "duration": 438171645,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "GET_Exchange_Rates_Date_03 : To verify exchange rate is available for few major countries as per the requirement when user requests for GET Exchange rates for appropriate date",
  "description": "",
  "id": "get-exchange-rates-for-particular-date;get-exchange-rates-date-03-:-to-verify-exchange-rate-is-available-for-few-major-countries-as-per-the-requirement-when-user-requests-for-get-exchange-rates-for-appropriate-date",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "User has the GET Exchange rates API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User invokes GET Exchange rates API endpoint with appropriate date",
  "rows": [
    {
      "cells": [
        "Date"
      ],
      "line": 24
    },
    {
      "cells": [
        "2019-09-20"
      ],
      "line": 25
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Verify that exchange rates are available for major countries as per the requirement in the API response",
  "rows": [
    {
      "cells": [
        "GBP",
        "INR",
        "SGD",
        "USD",
        "AUD",
        "ZAR"
      ],
      "line": 27
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RatesAPITest.user_has_the_GET_Exchange_rates_API_endpoint()"
});
formatter.result({
  "duration": 438425,
  "status": "passed"
});
formatter.match({
  "location": "RatesAPITest.user_invokes_GET_Exchange_rates_API_endpoint_with_appropriate_date(DataTable)"
});
formatter.result({
  "duration": 258034166,
  "status": "passed"
});
formatter.match({
  "location": "RatesAPITest.verify_that_exchange_rates_are_available_for_major_countries_as_per_the_requirement_in_the_API_response(DataTable)"
});
formatter.result({
  "duration": 148963177,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "GET_Exchange_Rates_Date_04 : Verification of the http response code when user requests for GET Exchange rates for appropriate date using invalid endpoint",
  "description": "",
  "id": "get-exchange-rates-for-particular-date;get-exchange-rates-date-04-:-verification-of-the-http-response-code-when-user-requests-for-get-exchange-rates-for-appropriate-date-using-invalid-endpoint",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "User has the invalid GET Exchange rates API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "User invokes invalid GET Exchange rates API endpoint with appropriate date",
  "rows": [
    {
      "cells": [
        "Date"
      ],
      "line": 32
    },
    {
      "cells": [
        "2019-09-20"
      ],
      "line": 33
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Verify that Http response code is 404 Not Found",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesAPITest.user_has_the_invalid_GET_Exchange_rates_API_endpoint()"
});
formatter.result({
  "duration": 384019,
  "status": "passed"
});
formatter.match({
  "location": "RatesAPITest.user_invokes_invalid_GET_Exchange_rates_API_endpoint_with_appropriate_date(DataTable)"
});
formatter.result({
  "duration": 272403034,
  "status": "passed"
});
formatter.match({
  "location": "RatesAPITest.verify_that_Http_response_code_is_Not_Found()"
});
formatter.result({
  "duration": 417103,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "GET_Exchange_Rates_Date_05 : Verification of the http response code when user requests for GET Exchange rates for appropriate date using invalid date format",
  "description": "",
  "id": "get-exchange-rates-for-particular-date;get-exchange-rates-date-05-:-verification-of-the-http-response-code-when-user-requests-for-get-exchange-rates-for-appropriate-date-using-invalid-date-format",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "User has the GET Exchange rates API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "User invokes GET Exchange rates API endpoint with appropriate date",
  "rows": [
    {
      "cells": [
        "Date"
      ],
      "line": 39
    },
    {
      "cells": [
        "22-09-2020"
      ],
      "line": 40
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "Verify that Http response code is 400 Bad Request",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Verify the error message in the response",
  "keyword": "And "
});
formatter.match({
  "location": "RatesAPITest.user_has_the_GET_Exchange_rates_API_endpoint()"
});
formatter.result({
  "duration": 342427,
  "status": "passed"
});
formatter.match({
  "location": "RatesAPITest.user_invokes_GET_Exchange_rates_API_endpoint_with_appropriate_date(DataTable)"
});
formatter.result({
  "duration": 492043582,
  "status": "passed"
});
formatter.match({
  "location": "RatesAPITest.verify_that_Http_response_code_is_Bad_Request()"
});
formatter.result({
  "duration": 411749,
  "status": "passed"
});
formatter.match({
  "location": "RatesAPITest.verify_the_error_message_in_the_response()"
});
formatter.result({
  "duration": 14715964,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "GET_Exchange_Rates_Date_06 : Verification of the http response code when user requests for GET Exchange rates without a date in the request",
  "description": "",
  "id": "get-exchange-rates-for-particular-date;get-exchange-rates-date-06-:-verification-of-the-http-response-code-when-user-requests-for-get-exchange-rates-without-a-date-in-the-request",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 45,
  "name": "User has the GET Exchange rates API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "User invokes GET Exchange rates API endpoint with appropriate date",
  "rows": [
    {
      "cells": [
        "Date"
      ],
      "line": 47
    },
    {
      "cells": [
        ""
      ],
      "line": 48
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "Verify that Http response code is 400 Bad Request",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Verify the error message in the response",
  "keyword": "And "
});
formatter.match({
  "location": "RatesAPITest.user_has_the_GET_Exchange_rates_API_endpoint()"
});
formatter.result({
  "duration": 339541,
  "status": "passed"
});
formatter.match({
  "location": "RatesAPITest.user_invokes_GET_Exchange_rates_API_endpoint_with_appropriate_date(DataTable)"
});
formatter.result({
  "duration": 494685051,
  "status": "passed"
});
formatter.match({
  "location": "RatesAPITest.verify_that_Http_response_code_is_Bad_Request()"
});
formatter.result({
  "duration": 289807,
  "status": "passed"
});
formatter.match({
  "location": "RatesAPITest.verify_the_error_message_in_the_response()"
});
formatter.result({
  "duration": 13745160,
  "status": "passed"
});
formatter.uri("GET_Latest_Exchange_Rates_API.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Vijay Vandanapu"
    }
  ],
  "line": 3,
  "name": "GET latest Exchange rates",
  "description": "As an individual, He/she must be able to fetch the latest Exchange rates for EUR currency",
  "id": "get-latest-exchange-rates",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@GET_Latest_Exchange_Rates"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "GET_Exchange_Rates_Date_01 : Verification of the http response code when user requests for GET latest Exchange rates",
  "description": "",
  "id": "get-latest-exchange-rates;get-exchange-rates-date-01-:-verification-of-the-http-response-code-when-user-requests-for-get-latest-exchange-rates",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "User has the GET latest Exchange rates API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User invokes GET latest Exchange rates API endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Verify that Http response code is 200 OK",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesAPITest.user_has_the_GET_latest_Exchange_rates_API_endpoint()"
});
formatter.result({
  "duration": 436926,
  "status": "passed"
});
formatter.match({
  "location": "RatesAPITest.user_invokes_GET_latest_Exchange_rates_API_endpoint()"
});
formatter.result({
  "duration": 251797810,
  "status": "passed"
});
formatter.match({
  "location": "RatesAPITest.verify_that_Http_response_code_is_OK()"
});
formatter.result({
  "duration": 351500,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "GET_Exchange_Rates_Date_02 : Verification of the Date value in the response which should match with the requested date value when user requests for GET latest Exchange rates",
  "description": "",
  "id": "get-latest-exchange-rates;get-exchange-rates-date-02-:-verification-of-the-date-value-in-the-response-which-should-match-with-the-requested-date-value-when-user-requests-for-get-latest-exchange-rates",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "User has the GET latest Exchange rates API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User invokes GET latest Exchange rates API endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Verify Date value in the Exchange rates API response matches current date",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesAPITest.user_has_the_GET_latest_Exchange_rates_API_endpoint()"
});
formatter.result({
  "duration": 508122,
  "status": "passed"
});
formatter.match({
  "location": "RatesAPITest.user_invokes_GET_latest_Exchange_rates_API_endpoint()"
});
formatter.result({
  "duration": 242717425,
  "status": "passed"
});
formatter.match({
  "location": "RatesAPITest.verify_Date_value_in_the_Exchange_rates_API_response_matches_current_date()"
});
formatter.result({
  "duration": 13714254,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c2021-04-0[2]\u003e but was:\u003c2021-04-0[1]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat RatesAPI.logger.TestVerification.assertStringEquals(TestVerification.java:87)\n\tat RatesAPI.stepDefinition.RatesAPITest.verify_Date_value_in_the_Exchange_rates_API_response_matches_current_date(RatesAPITest.java:112)\n\tat ✽.Then Verify Date value in the Exchange rates API response matches current date(GET_Latest_Exchange_Rates_API.feature:15)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 17,
  "name": "GET_Exchange_Rates_Date_03 : To verify exchange rate is available for few major countries as per the requirement when user requests for GET latest Exchange rates",
  "description": "",
  "id": "get-latest-exchange-rates;get-exchange-rates-date-03-:-to-verify-exchange-rate-is-available-for-few-major-countries-as-per-the-requirement-when-user-requests-for-get-latest-exchange-rates",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "User has the GET latest Exchange rates API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User invokes GET latest Exchange rates API endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Verify that exchange rates are available for major countries as per the requirement in the API response",
  "rows": [
    {
      "cells": [
        "GBP",
        "INR",
        "SGD",
        "USD",
        "AUD",
        "ZAR"
      ],
      "line": 21
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RatesAPITest.user_has_the_GET_latest_Exchange_rates_API_endpoint()"
});
formatter.result({
  "duration": 1313032,
  "status": "passed"
});
formatter.match({
  "location": "RatesAPITest.user_invokes_GET_latest_Exchange_rates_API_endpoint()"
});
formatter.result({
  "duration": 294435405,
  "status": "passed"
});
formatter.match({
  "location": "RatesAPITest.verify_that_exchange_rates_are_available_for_major_countries_as_per_the_requirement_in_the_API_response(DataTable)"
});
formatter.result({
  "duration": 103112761,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "GET_Exchange_Rates_Date_04 : Verification of the http response code when user requests for GET latest Exchange rates using invalid endpoint",
  "description": "",
  "id": "get-latest-exchange-rates;get-exchange-rates-date-04-:-verification-of-the-http-response-code-when-user-requests-for-get-latest-exchange-rates-using-invalid-endpoint",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "User has the invalid GET latest Exchange rates API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User invokes invalid GET latest Exchange rates API endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Verify that Http response code is 404 Not Found",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesAPITest.user_has_the_invalid_GET_latest_Exchange_rates_API_endpoint()"
});
formatter.result({
  "duration": 417454,
  "status": "passed"
});
formatter.match({
  "location": "RatesAPITest.user_invokes_invalid_GET_latest_Exchange_rates_API_endpoint()"
});
formatter.result({
  "duration": 297677077,
  "status": "passed"
});
formatter.match({
  "location": "RatesAPITest.verify_that_Http_response_code_is_Not_Found()"
});
formatter.result({
  "duration": 260411,
  "status": "passed"
});
});