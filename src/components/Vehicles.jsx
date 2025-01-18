export default function Vehicles() {
	const vehicles = [
		{ name: "Powerbike", colour: "Lemon", price: 1000, emoji: "🚲" },
		{ name: "Sportscar", colour: "Black", price: 10900, emoji: "🏎" },
		{ name: "Tesla truck", colour: "Red", price: 20100, emoji: "🚚" },
	];
	return (
		<main>
			<ul>
				{vehicles.map((vehicle) => (
					<li key="vehicle.name">
						{vehicle.emoji} {vehicle.colour} {vehicle.name} costs $
						{vehicle.price}
					</li>
				))}
			</ul>
		</main>
	);
}
