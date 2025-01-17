// NORMAL PROPS

//  function Property(props) {
// 	return (
// 		<h1>
// 			I own a {props.type} in {props.location}
// 		</h1>
// 	);
// }

//DESTRUCTURING PROPS

function Property({ location, type, emoji, numbs }) {
	return (
		<h1>
			I own a {type} in {location}, house number {numbs}
			{emoji}
		</h1>
	);
}
export default Property;
