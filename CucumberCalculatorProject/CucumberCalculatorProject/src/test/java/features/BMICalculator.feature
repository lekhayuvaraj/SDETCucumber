Feature: calculator
  I want to calculate BMI based on age,height and weight
  
 @Regression 
 Scenario: Login to calculator.net website
    Given user is on calculator homepage
    And verify the page title 
 @Regression
  Scenario Outline: Calculate BMI
    Given user is on calculator homepage
    When user navigates to BMI calculator Page
    And verify the BMI page title
    And user enters "<Age>","<Height>"and "<Weight>"
    Then calculate the BMI value
    And store the BMI result value
    
    
    Examples:
    		|Age|Height|Weight|
    		|10|127|40|
        |30|156|70|
				|25|152|55|
				|20|160|45|
				|35|160|70|
  

  