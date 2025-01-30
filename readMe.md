- To set up your react workspace, in vscode terminal, run
  ``npm create vite@latest`` OR npm init vite@latest nameOfApp
  name the App youre creating if used is first option
  then select react as framework
  then javascript as variant
  then follow the step provided
- ``npm run dev`` to run in browser
- Fragments are used to wrap main contents. Use either of below method, no need to import for second option, react automatically understands.
  ```import Fragment from 'react'
  <Fragment>
  <header> </header> 
  <h1> </h1> 
  <footer> </footer> 
  </Fragment>
  ```
  OR
  ```
  <>
  <header> </header> 
  <h1> </h1> 
  <footer> </footer>
  </>
  ```
- Do not use two return statements in a function, it will work but it is not a good practice. (conditional statement rendering using element variables)
  ```export default function ConditionalComponent() {
	let message;
	const greets = false;

	if (greets) {
		message = <p> Hiii <p/>;
	} else {
		message = <p> Hello <p/>;
	}
	return message;
}```
  - 4 ways of styling react apps:
  inline styling, css stylesheets (have only one stylesheet for the app), css modules (have stylesheets for each components), use a library(e.g tailwind css)
  -- For inline styling:
  -  [check Fruits.jsx for reference] Two curly brackets are used, the outermost to be able to write javascript code, the innermost to define object in which the css properties are stated in. e.g ``<p style={{color: "red", textAlign: "center"}}>...</p>``
  -  Also, camelCasing is used for css properties that has hyphen in react inline styling. e.g instead of ``font-size: 50px``, we use ``fontSize: 50px, ``
  - [check App.jsx for reference] For clean code, the inline styles could be declared in a const at the top e.g. ``const pageStyle = { backgroundColor: "black", color: "white" };`` and used down the code. e.g. ``<main style={pageStyle}>...</main>
  - [check App.jsx for reference] To use external css stylesheet, you need to import it in the particular component the style is applicable in