import Fruits from "./Fruits";
import Hello from "./Hello";

export default function ConditionalComponent() {
	const checkDisplay = false;
	return checkDisplay ? <Hello /> : <Fruits />;
}
