export default function CustomButton({ text, color }) {
  function handleClick() {
    window.alert(text);
  }
  return (
    <button onClick={handleClick} style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}
