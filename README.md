# SoCo Full Stack Takehome Test

Thank you for taking the time to do our coding challenge. Below you'll find instructions and info on how to complete the exercise.

At Social Construct, we combine hardware and software to [deliver better buildings](https://techcrunch.com/2020/07/14/social-constructs-computer-optimized-buildings-could-shake-construction-industrys-foundations/). In the following problem, you'll display a floor plan with certain SoCo parts to the browser according to the functionality specified in the user story.

## Files and Folders
A basic React app has been provided for you. Once you clone this repository, you can run it with `npm start`. A number of helpful todos are inside `index.js` and `App.jxs` to help you get started.

## Task
* Fetch floor plan from the provided `studio_info.json` and SoCo parts from `floor_info.json` and format them into client readable results
    * You are not required to serve this separately from the dev server (i.e. `npm start`)
* Use the returned data to display the floor plan and SoCo assemblies following requirements of the user story below

### User Story
As a user, I can:
* View the floor plan including:
    * room(s) - including closets and bathrooms
    * door(s)
    * window(s)
    * kitchen(s)
    * floors and pucks
* View a list of the types of elements included in this floor plan
    * List should be in alphabetical order
    * List should show the count of each type of element
* Click on a type of element and toggle the visibility of all elements on / off
* Click on an instance of an element and have that element be highlighted a different color than the rest

Some [sample wireframes](https://github.com/SocialConstruct/takehome/blob/master/wireframes.png) have been provided for context and visual clarity.

## Client Implementation
We'd like you to use [React](https://reactjs.org/). On top of that, use whatever front-end libraries you feel comfortable with.

## Running the project
To startup the frontend client run the following command.

`npm start` - This will start the application for development

`npm run build` - Will create a production optimised build

`npm test` - Will run the front end tests

## Submission Guidelines
The zip file should be named {yourname}.zip.
Please include the `solution.md` file explaining what you did and why. This file already includes some follow-up questions.
The zip file should not include the node_modules folder.