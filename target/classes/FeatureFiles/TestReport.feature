Feature:
 
@First
  Scenario Outline:
    Given user adds "<num1>" and "<num2>"
    Then message displayed Values Added
 
    Examples:
      | num1 | num2 |
      | 12   | 3    |
      | 5    | 7    |
   
@Second
  Scenario Outline:
    Given user adds "<num1>" and "<num2>"
    Then message displayed Values Added
 
    Examples:
      | num1 | num2 |
      | 3    | a    |
      | 1    | 2    |
      
@Third
  Scenario Outline:
    Given user adds "<num1>" and "<num2>"
    Then message displayed Values Added
 
    Examples:
      | num1 | num2 |
      | 1    | 4    |
      | 3    | 1    |
      
@Fourth
  Scenario Outline:
    Given user adds "<num1>" and "<num2>"
    Then message displayed Values Added
 
    Examples:
      | num1 | num2 |
      | 7    | 3    |
      | 5    | 10   |
      
@Fifth
  Scenario Outline:
    Given user adds "<num1>" and "<num2>"
    Then message displayed Values Added
 
    Examples:
      | num1 | num2 |
      | 12   | 3    |
      | 15   | 10   |               