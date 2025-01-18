import Fruits from "./components/Fruits";
import FunfactApp from "./components/FunfactApp";
import Hello from "./components/Hello";
import Property from "./components/Property";
import Vehicles from "./components/Vehicles";

function App() {
	// const numbs=[1,2,3]
	const person = {
		name: "Funmi",
		gender: "Female",
		hobby: "Dancing",
	};
	return (
		<main>
			<div className="miniApp">
				<FunfactApp />
			</div>

			<div className="greetings">
				<Hello />
				<Property person={person} />
				<Fruits />
				{/* //parsing array "numbs" to props */}
				{/* <Property type="Church" location="Ibeju Lekki" emoji="⛪" numbs={numbs} /> */}
				<Vehicles />
			</div>
		</main>
	);
}

export default App;
