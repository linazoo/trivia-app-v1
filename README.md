## My Process

- My process starts with reading project requirements thoroughly and identifying areas that are most important. Two main areas of focus we’re looking for are completeness and functionality, so I want to plan out this project to have the most time reserved for that.

- After making sure I have a clear understanding of the requirements I want to start writing down what the simplest way to describe what I need to build from a user’s perspective:

-A user can:

- Start a game (beginning game view)
- Answer question(s) & get feedback after answering (while they're playing)
- Know their score once user is finished with the game

## What I built and how

I built this project with React because it’s a library that will help me set up the infrastructure and logic of the application (state management, data fetching, data flow) and write the application in a component based manner. This way, I can think about the state I need to manage in order to update the UI accordingly, and React can worry about updating the DOM.

I tried to break down the project into smaller tasks which then I can break into components. My App component holds the Trivia component, WelcomeBanner and GameOver components and game logic (advance, score, reset game). The Trivia component handles the state of the different type of questions (single or multiple answer). In the WelcomeBanner I show your highest score, in the GameOver I show a funny gif, your trivia level and the highest score you've achieved by using a Localstorage hook. I wanted to stay closer to the original design but wanted to make it better so I used the Button and CheckMark component from Material UI

I started by getting every question I needed on the screen and moved on to managing the state of the game and interactions.
I used Material UI (MUI) for the interface to help with scalability, the experience and accessibility. I made some additional decisions like switching to buttons instead of radio buttons, so I can get the built in benefits and user experience from MUI. If I could, I would try to collaborate with the designers a bit more to try to come up with a more finished design since the one provided was a bit ambiguous.

If I had more time I would add a progress indicator and a timer and also build a way to change the question categories from the welcome screen. I would also build a way to gracefully handle the localstorage on incognito windows (notice opening in incognito window I don't handle that case).

---

# Trivia game

You have been assigned a new trivia game prototype. Your task is to build a fully functional experience that meets the requirements below.

You received a partial, rough design. It is missing some layouts, features, and design details. As you develop the game, add those missing aspects in your prototype by extending the theme in the provided designs. You may also augment your own features or break away from the theme entirely reskinning the experience if you like. Consider features not included in the design such as a timer to impress us.

## Guideline for completing the exercise

- Sample questions have been provided for you, but feel free to create your own. Your final set of questions must meet the following criteria:
  - Five questions minimum
  - At least one question should have only a single answer
  - At least one question should have multiple answers
  - Other question formats are welcome but not required
  - Focus your browser and device compatibility solely on desktop Chrome and the Chrome mobile emulator. Use the Chrome emulator to test mobile device compatibility. Physical mobile device testing is not required.
  - It should be responsive and accessible.
  - You may edit any file in the project, and add any assets you require.
  - You may look up anything you like.
  - Any of the following languages, frameworks and packages are permitted but are not required. If you would like to use anything outside of this list, please contact your recruiter with the package name, link and reason you require it.
    - JavaScript / TypeScript
    - React
    - CSS / Sass
    - CSS in JS
      - [Emotion](https://emotion.sh/docs/introduction)
        - To use the [CSS prop](https://emotion.sh/docs/css-prop#jsx-pragma) make sure to add `/** @jsxImportSource @emotion/react */` to the top of your file.
      - [Styled Components](https://styled-components.com/)
      - [ThemeUI](https://theme-ui.com/)
    - Redux
    - React Router
  - Your finished code should be of a quality that you would submit to your peers for a code review.

## Designs

JPEG images for the game are included in this repo. This Figma file is also available for you to reference as well.

To import the file in Figma, download the [Trivia-game-Figma-design.fig](https://github.com/indeed-de-exercise/figma/raw/main/Trivia-game-Figma-design.fig) file. Open Figma (website or app) and use the Import file button to import the design.

## The user experience

- Questions:
  - Each question screen is presented one at a time.
    - Design: [Question.png](./Question/png) or Figma Question board.
  - When the user submits an answer, they are presented with an indication if they were correct or wrong.
    - Design: [Correct-Answer.png](./Correct-Answer.png) or Figma Correct Answer board.
- Results:
  - After the final question, the user is sent to the results screen. The screen includes the current score, high score and the date they achieved the high score. Messaging on the screen should change based on the user’s score.
    - Design: [Final-Score.png](./Final-Sorce.png) or Figma Final Score board.

## How to clone the game

Open the CodeSandbox template and save to create your own unique fork.

## How to submit your game

Send the URL for your saved fork to your Indeed recruiter.
