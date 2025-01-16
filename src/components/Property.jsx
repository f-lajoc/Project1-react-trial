// NORMAL PROPS

//  function Property(props) {
// 	return (
// 		<h1>
// 			I own a {props.type} in {props.location}
// 		</h1>
// 	);
// }

//DESTRUCTURING PROPS

function Property({ location, type, emoji }) {
	return (
		<h1>
			I own a {type} in {location}
			{emoji}
		</h1>
	);
}
export default Property;
