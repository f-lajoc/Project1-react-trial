import ConditionalComponent from "./components/ConditionalComponent";
import Fruits from "./components/Fruits";
import FunfactApp from "./components/FunfactApp";
import Hello from "./components/Hello";
import Property from "./components/Property";
import Vehicles from "./components/Vehicles";

const pageStyle = { backgroundColor: "black", color: "white" };

function App() {
	// const numbs=[1,2,3]
	const person = {
		name: "Funmi",
		gender: "Female",
		hobby: "Dancing",
	};
	return (
		<main style={pageStyle}>
			<div className="miniApp">
				<FunfactApp />
			</div>

			<div className="greetings">
				<Hello />
				<Property person={person} />
				
				{/* //parsing array "numbs" to props */}
				{/* <Property type="Church" location="Ibeju Lekki" emoji="⛪" numbs={numbs} /> */}
				<ConditionalComponent/>
				<Vehicles />
			</div>
		</main>
	);
}

export default App;
