// NORMAL PROPS

//  function Property(props) {
// 	return (
// 		<h1>
// 			I own a {props.type} in {props.location}
// 		</h1>
// 	);
// }

////DESTRUCTURING PROPS
////parsing arrays to props

// function Property({ location, type, emoji, numbs, person }) {
// 	return (
// 		<div>
// 			I own a {type} in {location}, house number {numbs}
// 			{emoji}
// 		</div>
// 	);

////pasrsing objects to props
function Property({person }) {
	return (
		<div>
			{person.name} is a {person.gender} that loves {person.hobby}
		</div>
	);
}
export default Property;
