# Team Profile Generator

## 🧐 Table of Contents

- Demo

- The Requirements

- User Story

- Installation Steps

- Authors

- Technologies Used

## 🚀 Demo

![HTML webpage titled “Raw Production Team” features key info] (assets/images/Screen Shot 2022-09-08 at 7.38.20 PM.png)

A generator that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.

## The Requirements
Your task is to build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Testing is key to making code maintainable, so you’ll also write a unit test for every part of your code and ensure that it passes each test.

Because this application won’t be deployed, you’ll need to provide a link to a walk-through video that demonstrates its functionality and all of the tests passing. You’ll need to submit a link to the video AND add it to the readme of your project.

## User Story
```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## 🛠️ Installation Steps
1.  Have node.js installed on your local environment
2.  Run 'npm init -y' in terminal
3.  Run 'npm install jest'
4.  Run 'npm install inquirer'
5.  Run 'node index.js'
6.  Complete prompting questions.
7.  Enjoy your index.html generated team!

## 🌟 Authors

- McKinley Faustin

## 🍰 Technologies Used
- HTML
- CSS
- JavaScript
- Node.js
- jest.js
- Github

