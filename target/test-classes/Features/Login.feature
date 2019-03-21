 Feature: Application Login
 
 
 @WebTest
 Scenario: Home page default Login
 Given User is on NetBanking landing page
 When User login to application with "jin" and "1234"
 Then Home Page is displayed
 And Cards displayed are "true"
 
 @MobileTest
 Scenario: Home page default Login
 Given User is on NetBanking landing page
 When User login to application with "john" and "4321"
 Then Home Page is displayed
 And Cards displayed are "false"
 
 @MobileTest
 Scenario: Home page default Login
 Given User is on NetBanking landing page
 When User sign up with following details
| Jenny | abcd | jenny@abcd.com | Australia | 12345 |
| John | efgh | john@abcd.com | Australia | 12345 |
 Then Home Page is displayed
 And Cards displayed are "false"
 
 @WebTest
 Scenario Outline: Home page default Login
 Given User is on NetBanking landing page
 When User log in to application with <Username> and <Password>
 Then Home Page is displayed
 And Cards displayed are "false"
 Examples:
 | Username | Password |
 | user1    | pass1    | 
 | user2    | pass2    |
 | user3    | pass3    |
 | user4    | pass4    | 