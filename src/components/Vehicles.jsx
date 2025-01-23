import Vehicle from "./Vehicle";

const vehicles = [
	{ name: "Powerbike", colour: "Lemon", price: 1000, emoji: "🚲" },
	{ name: "Sportscar", colour: "Black", price: 10900, emoji: "🏎" },
	{ name: "Tesla truck", colour: "Red", price: 20100, emoji: "🚚" },
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
