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
  