const who = "It's me Component";

function displayContent() {
	return <h2>Hallo from the other side, wie geh't es dir</h2>;
}

function Hello() {
	return (
		<section>
			<h1>
				{who} {10 / 2}
			</h1>
			{displayContent()}
			<h3>Es dir mit gut</h3>
		</section>
	);
}
export default Hello;
