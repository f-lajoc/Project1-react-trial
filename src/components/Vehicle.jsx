export default function Vehicle({ name, price, emoji, colour }) {
	return (
		<>
			{price > 800 ? (
				<li>
					{emoji} {colour} {name} costs ${price}
				</li>
			) : (
				""
			)}
		</>
	);
}
