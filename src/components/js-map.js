// Testing the javascript map function
const values = [1, 2, 3, 4, 5]
const students = ["dasola", "pelumi", "debby", "mr david", "kemi", "aunty shade"]

function square(element) {
  return Math.pow(element, 3)
}
console.log(values.map(square))

function upperCase(element) {
  return element.toUpperCase()
}
console.log(students.map(upperCase))

const dates = ["2025-01-30", "2001-03-14", "1979-01-17", "1997-01-09"]

function formatDates(element) {
  const separate = element.split("-")
  return `${separate[2]}/${separate[1]}/${separate[0]}`;
}
console.log(dates.map(formatDates))