export default function Vehicle({name,price, emoji,colour}) {
  return (
    <>
      <li>{emoji} {colour} {name} costs ${price}</li>
    </>
  )
}