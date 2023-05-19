// CustomButton is the child component of the App function (in app.js file)

export default function CustomButton({ text, color }) {
  return <button style={{ backgroundColor: color }}>{text}</button>;
}
