import FunfactApp from "./components/FunfactApp";
import Hello from "./components/Hello";
import Property from "./components/Property";


function App() {
	const numbs=[1,2,3]
	return (
		<main>
			<div className="miniApp">
				<FunfactApp/>
			</div>

			<div className="greetings">
				<Hello />
				<Property type="Church" location="Ibeju Lekki" emoji="⛪" numbs={numbs} />
				
			</div>
		</main>
	);
}

export default App;
