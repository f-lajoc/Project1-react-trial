export default function Vehicle({ name, price, emoji, colour, soldout }) {
	return (
		<>
		
				<li>
					{emoji} {colour} {name} costs ${price} {soldout? "🛑unavailable": ""}
				</li>
		
		</>
	);
}
