const who = "It's me Component";

function displayContent() {
  return <p>Hallo Kemisola, wie geh't es dir</p>;
}


function Hello() {
  return (
		<div>
			<h1>
				Hello from the other side! {who} {10 / 2}
			</h1>
			{displayContent()}
		</div>
	);
}
export default Hello;
