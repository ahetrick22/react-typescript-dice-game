# Dicey Stuff
A sample React app w/Typescript.

## Game Description
__Base Features:__ A six-sided die is rolled once every turn 🎲. The Dicey Stuff game will visually track how many of 
each number 
have been rolled. How many 1s, 2s, 3s, etc. Once a specific number has been rolled 5 times, that number is the winner and the game is over. The user may then start the game over, and they may also reset the game at any point.

__Additional Features:__ The die color can be changed at any time with the included color picker.

## Running locally
If you want to just play the game, [check out the project here](diceystuff.aliciahetrick.com). If you'd rather build & 
run it 
locally, follow these steps:

1. Clone down the repo: `git clone https://github.com/ahetrick22/react-typescript-dice-game.git`
2. Run `yarn` to install all dependencies (using yarn v1)
3. Run `yarn start` and open localhost:1234 in your browser.

## Testing
A very basic testing setup (one render test) is configured with Jest & react-testing-library. It can be run with 
`yarn test`. Additional tests should of course be added given more time.

## Deployment
This site was deployed with the command line tool from [surge](surge.sh).

## Troubleshooting
If you run into any issues with Parcel not rebuilding appropriately, use `yarn clean` to remove the cached build and 
then try `yarn start` or `yarn build` again. Occasionally changing imports & renaming files requires a fresh build 
to be forced. 

## Selected Dependencies
- [Parcel Bundler](https://parceljs.org/): note that an older version was used for expediency in project setup. It's no 
  longer supported and the 
  project should likely be upgraded in the near future.
  
- [React Router](https://reactrouter.com/): a basic routing setup is in place to ensure that all routes redirect to 
  the single page contained 
  within the app: Home. Because it's likely that an app will expand to include different routes fairly early on, it 
  made 
  sense to 
  set this up from the beginning.
  
- [Chakra-UI](https://chakra-ui.com/): this package is probably a little overkill for this project. However, given 
  the lack of wireframes at even low fidelity, I chose to use this 
  tool because it 
  comes 
  with some clean 
  components 
  that are already built to be accessible, generally mobile-responsive, and look decent with minimal configuration. I 
  considered Tailwind & Styled Components as well but decided this would ultimately be the best for my use case - 
  after all, why reinvent the wheel.

## Possible Expansions/Considerations
- Add additional tests
  
- Extract the game sections & logic into their own components. Seemed like pre-optimization and overkill at this 
  stage of the project, but it would be cleaner and would be a better split of the UI container and the actual game 
  logic
  
- Add a dark mode toggle switch (this is a simple feature to add with Chakra as they export a ThemeProvider that 
  allows for this)
  
- Add a "suspense mode" toggle switch which sets a timeout to allow for some suspense while the die rolls and shows 
  a "Rolling..." loading state, instead of immediately setting the roll value
  
- Hook it up to a simple database (or even a Google Sheet) to track winners over time and display some basic 
  percentages of how often each number wins
  
- Save the user's die color preference in local storage so that it persists on reload
  

## Attributions
Die SVGs used with free licenses from the Noun Project requiring attribution: "5" die by ladhina from the Noun 
Project, all other numbers by REVA from the Noun Project.
