# Mr. Roboger's Neighborhood

#### Independent Project for Epicodus

#### By **Marni Sucher**

## Technologies Used

* HTML/CSS
* Bootstrap
* JavaScript
* jQuery

## Description

This web application takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:

* Numbers that contain a 1: all digits are replaced with "Beep!"
* Numbers that contain a 2: all digits are replaced with "Boop!"
* Numbers that contain a 3: all digits are replaced with "Won't you be my neighbor?"

These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. So, for example, in your finished program,

* The number 13 should be replaced with "Won't you be my neighbor?"
* The number 21 should be replaced with "Boop".
* The number 32 should be replaced with "Won't you be my neighbor?"
* A user should be able to enter a new number and see new results over and over again.

## Tests

Test 1: Describe: neighbor();
        Test: "It will take 1 from the user and return "Beep!"
        Expect(1).toEqual("Beep!);

Test 2: Test: "It will take 1 from the user and return "0 Beep!"
        Expect(1).toEqual("0 Beep!");

Test 3: Test: "It will take 2 from the user and return "0 Beep! Boop!"
        Expect(2).toEqual("0 Beep! Boop!");

Test 4: Test: "It will take 3 from the user and return "0 Beep! Boop! Won't you be my neighbor?"
        Expect(3).toEqual("0 Beep! Boop! Won't you be my neighbor?");

## Setup/Installation Requirements

* Clone repository: https://github.com/marnionrails/Neighborhood
* Open Neighborhood repository
* Open index.html in your favorite browser


_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## License

This software is licensed under the GPL license. Copyright (c) 2021 Marni Sucher

## Contact Information

Marni Sucher <suchermarni@gmail.com>
