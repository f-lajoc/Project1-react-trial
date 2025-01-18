export default function Fruits(){
    const fruits= ["kiwi","cashew","papaya"]
  return (
		<aside>
			<ul>
				{fruits.map((fruit => (
					<li key={fruit}>{fruit}</li>
				)))}
			</ul>
		</aside>
	);
}