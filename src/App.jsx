import Hello from "./components/Hello";
import Property from "./components/Property";

function App() {
	return (
		<div className="greetings">
			<Hello />
			<Property type="duplex" location="ibeju lekki" />
		</div>
	);
}

export default App;
