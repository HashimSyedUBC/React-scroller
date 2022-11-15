# Convergence React Horizontal Scroller
### How to run 
```sh
npm install --force
npm start
open http://localhost:3000/ in browser
```
## Criteria
- When the app starts, fetch /photos JSON data from the http://jsonplaceholder.typicode.com website ✅ 
- Create a horizontally scrollable list of photos that represent the data you fetched. Each photo should have the “title” text written diagonally across the photo, have rounded corners, a border, and should have a drop shadow.  This should scroll smoothly.  ✅ 
- The photos that are downloaded must be cached so that if the app is terminated, the next session should not have to download previously downloaded images again. 🚧
- Add a button to the screen below the scrollable photo list. Tapping this button will reorder the list in completely random order. Use a recursive function to reorder the list. 🚧

## Reflection
- As this was my first time ever writing react, it was very challenging and interesting to see this come to life. I was only able to fit 2 of the 4 required criterias stated by Convergence, however being considering I had already finished the first task, it still taught me a bunch about frontend devleopment
- useState and useEffect - Perhaps the biggest the takeway from this project was learning these two react hooks. Prior to attempting this project, frontend devleopment seemed mostly like design work to me. However with state management and asyncronous method calls with useEffect, I am beginning to see a much wider view of frontend development
- For this project, I also decide to use a library that helped me create horizontal scrollers, and although it was incompatible with the current node version, I learned to use the --force method to make the project work anyway. Although this is definitely not the best practice, it has still taught me a lot library compatiblilities when trouble shooting this error. 
- Lastly I also learned proper architechture to fetch data from the api, by using useEffect and .then() functions, I now understand effiecient api requests and wait times as well. By storing the data in state of the component, it will allow me to dynamically change after loading. 
- 

## License

MIT

**Free Software, Hell Yeah!**