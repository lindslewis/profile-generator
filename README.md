# profile-generator

## Description
This is an app that was designed to simplify the process of publishing employee profile cards online.

This is achieved via the use of command-line prompts.

## Table of Contents
1. [Walkthrough Video](#walkthrough-video)
2. [Usage](#usage)
3. [Composition](#composition)
4. [Testing](#testing)
5. [Licensing](#licensing)
6. [Credits](#credits)

## Walkthrough Video

## Usage
This app must be initialized within a terminal, following command-line prompts once node index.js has been input in the teminal. The user may fill out as many positions as they need, and once they are done, a new HTML file is created from the input that they've given. This way also allows for easier additions to their team.

## Composition
This app utilizes several different NPM packages:
- [Node](#https://www.npmjs.com/package/node)
- [Inquirer](#https://www.npmjs.com/package/inquirer)
- [Jest](#https://www.npmjs.com/package/jest)

Inquirer was used in order to ask prompting questions in the terminal, take input from the user after the questions and to received better feedback on the errors as the app was designed.

Jest was used in order to run the tests included for the initial script files: `Employee.js`, `Engineer.js`, `Intern.js`, and `Manager.js`.


## Testing

There were 4 test suites used in this app:
- `Employee.test.js`
- `Engineer.test.js`
- `Intern.test.js`
- `Manager.test.js`

Each app interacts with their corresponding JS files with the same name. 

In total, there are 17 tests that are necessary to pass before moving on to export those files into the `index.js`, where the info gleaned from the index inquirer prompts will also depend on the previous files tested.

## Licensing

Copyright (c) 2022 Lindsay Lewis

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Credits

[Node.js](#https://nodejs.org/api/fs.html#fswritefilefile-data-options-callback) fileSystem information.

[Stephanie Gomez](#https://github.com/smariagomez)

[Axel Kern](#https://github.com/Axeljk)

University of Washington Coding Bootcamp: 
Instructor and Teaching Assistants
