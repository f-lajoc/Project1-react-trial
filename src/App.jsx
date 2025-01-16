import Hello from "./components/Hello";
import Property from "./components/Property";

function App() {
	return (
		<div className="greetings">
			<Hello />
			<Property type="Church" location="Ibeju Lekki" emoji="⛪" />
			<Property type="GardenHouse" location="Eleyele" emoji="🏡" />
		</div>
	);
}

export default App;
