# react-useState

---

## 🦉 Lecture

### Morning:

- [Topic 1 | useState Motivation](./lecture/topic-1-useState-motivation.md)
- [Topic 2 | useState Basics](./lecture/topic-2-useState-basics.md)
- [Topic 3 | useState Setter](./lecture/topic-3-useState-setter.md)
- [Topic 4 | useState Conditional Renders](./lecture/topic-4-useState-conditional-renders.md)
- [Topic 5 | useState and Objects](./lecture/topic-5-useState-and-objects.md)

### Check-in:

- [Topic 6 | React Developer Tools](./lecture/topic-6-react-developer-tools.md)
- [Topic 7 | Stale State](./lecture/topic-7-stale-state.md)

Keep in mind that these slides are markdown files, so they are not interactive as they are during their presentation.

---

## Setup

In this workshop, we'll be building a simple and well known game: tic-tac-toe.

Make sure to `yarn install` the dependencies from the root folder.  From there, you can `yarn start`, and the initial state (haha) of the application should open up in your browser.

If you want to load React on the specified PORT of 3004, you can use `yarn start-mac` or `yarn start-windows` depending on the OS you're on.

Take a look around the files and folder structure that already exists.  It can be intimidating to jump into codebase when it's partway through development, so it's perfectly normal to feel like there's a lot to take in.

`index.js` is rendering `<GlobalStyles/>` and `<App/>`.

Of note: GlobalStyles declares three css variables: --accent, --player1, --player2

`App.js` establishes a couple of `<Route>`s:

| URL     | Component     | Contents                                         |
| ------- | ------------- | ------------------------------------------------ |
| "/"     | `<Home/>`     | Header, links to "/game" and external rules      |
| "/game" | `<Game/>`     | You'll be building the game here <3              |
| "/*"    | `<Navigate/>` | no content - force navigates the url back to "/" |

Finally, take note that each Route is represented by its own folder. So the components you build for the `<Game/>` component should be placed in that folder `src/components/Game`.

---

## ⚡ Exercises

By the end of exercise-7, we'll have a functional hot-seat game

### [Exercise 1:](./workshop/exercise-1.md) -  Player Names

### [Exercise 2:](./workshop/exercise-2.md) -  `<PlayerTracker/>`

### [Exercise 3:](./workshop/exercise-3.md) -  `board` State and `<Board/>`

### [Exercise 4:](./workshop/exercise-4.md) -  `<Cell/>` and Clicking a `<Cell/>`

### [Exercise 5:](./workshop/exercise-5.md) -  Disabling `<Cell/>` Clicks

### [Exercise 6:](./workshop/exercise-6.md) -  `calculateResult` Helper

### [Exercise 7:](./workshop/exercise-7.md) -  `<Result/>`

<center>🟡 - Minimally complete workshop (75%) - 🟡</center>

---

The objective of Exercises 8-10 will provide some quality of life improvements and keep track of past games.

### [Exercise 8:](./workshop/exercise-8.md) -  Play Again and Quit Buttons

### [Exercise 9:](./workshop/exercise-9.md) - Adjusting Board Size

### [Exercise 10:](./workshop/exercise-10.md) -  Tracking History

<center>🟢 - Complete workshop (100%) - 🟢</center>

---

### [Exercise 11:](./workshop/exercise-11.md) -  Bot(s)

<center>🔵 - Stretch (150%) - 🔵</center>