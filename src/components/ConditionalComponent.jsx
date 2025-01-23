import Fruits from "./Fruits";
import Hello from "./Hello";

export default function ConditionalComponent() {
	let message;
	const checkDisplay = false;

	if (checkDisplay) {
		message = <Hello />;
	} else {
		message = <Fruits />;
	}
	return message;
}
