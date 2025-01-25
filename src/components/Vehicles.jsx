import Vehicle from "./Vehicle";

const vehicles = [
	{ name: "Powerbike", colour: "Lemon", price: 1000, emoji: "🚲" },
	{ name: "Sportscar", colour: "Black", price: 1900, emoji: "🏎" },
	{ name: "Tesla truck", colour: "Red", price: 2000, emoji: "🚚" },
	{ name: "Koenisegg", colour: "Green", price: 1800, emoji: "🚙" },
	{ name: "Highlander", colour: "Blue", price: 800, emoji: "🚘" },
];

export default function Vehicles() {
	return (
		<main>
			<ul>
				{vehicles.map((vehicle) => (
					<Vehicle
						key={vehicle.name}
						name={vehicle.name}
						colour={vehicle.colour}
						price={vehicle.price}
						emoji={vehicle.emoji}
					/>
				))}
			</ul>
		</main>
	);
}
