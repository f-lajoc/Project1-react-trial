import styles from "./Vehicle.module.css";

export default function Vehicle({ name, price, emoji, colour, soldout }) {
	return (
		<>
			<li className={styles.listitems}>
				{emoji} {colour} {name} costs ${price} {soldout ? "🛑unavailable" : ""}
			</li>
		</>
	);
}
