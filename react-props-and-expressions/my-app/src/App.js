import CustomButton from './Custombutton';

export default function App() {
  return (
    <div>
      <CustomButton text="I" color="red" />
      <CustomButton text="know" color="green" />
      <CustomButton text="React!" color="lightblue" />
    </div>
  );
}

// App function is the parent component -- App component renders multiple instances of CustomButton component
