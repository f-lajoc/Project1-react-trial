- Do not use two return statements in a function, it will work but it is not a good practice. (conditional statement rendering using element variables)
  ``export default function ConditionalComponent() {
	let message;
	const greets = false;

	if (greets) {
		message = <p> Hiii <p/>;
	} else {
		message = <p> Hello <p/>;
	}
	return message;
}``