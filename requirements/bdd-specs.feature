Feature: Calculate GPA

    As a user i want to be able to convert my grade from coeficiente de rendimento (CR) to grade point average (GPA)

    Scenario: Convert CR to GPA

Given that the user has internet connection
When the user enters the CR grade and press the Calculate button
Then the system should convert the CR grade to GPA
And show the result to the user
