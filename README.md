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

Test 1: Test: "It will replace numbers that contain 1 with "Beep!" <br>
        Expect(1).toEqual("0 Beep!");

Test 2: Test: "It will replace numbers that contain 2 with "Boop!" <br>
        Expect(2).toEqual("0 Beep! Boop!");

Test 3: Test: "It will replace numbers that contain 3 with "won't you be my neighbor?" <br>
        Expect(3).toEqual("0 Beep! Boop! Won't you be my neighbor?");

Test 4: Test: "It will replace multi-digit numbers that contain 1 with "Beep!" <br>
        Expect(10).toEqual("0 Beep! Boop! Won't you be my neighbor? 4 5 6 7 8 9 Beep');

Test 5: Test "It will replace multi-digit numbers that contain 3 with "Won't you be my neighbor?" 3 takes priority over 1. <br>
        Expect(13).toEqual("0 Beep! Boop! Won't you be my neighbor? 4 5 6 ...Won't you be my neighbor?");

Test 6: Test: "It will replace multi-digit numbers that contain 2 with "Boop!" 2 takes priority over 1. <br>
        Expect(21).toEqual("0 Beep! Boop! Won't you be my neighbor? 4 5 6 ...Boop!);

Test 7: Test: "It will replace multi-digit numbers that contain 3 with "Won't you be my neighbor?" 3 takes priority over 2.<br>
        Expect(32).toEqual("0 Beep! Boop! Won't you be my neighbor? 4 5 6 ...Boop! Won't you be my neighbor?);
        
## Setup/Installation Requirements

* Clone repository: https://github.com/marnionrails/Neighborhood
* Open Neighborhood repository
* Open index.html in your favorite browser

## Known Bugs

* None at this time

## License

This software is licensed under the GPL license. Copyright (c) 2021 Marni Sucher

## Contact Information

Marni Sucher <suchermarni@gmail.com>
