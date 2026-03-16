import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 2000,
    expectedReturn: 6,
    duration: 5,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleInputChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onInputChange={handleInputChange} userInput={userInput} />
      {!inputIsValid && (
        <p className="center">
          Please enter a valid duration (at least 1 year).
        </p>
      )}
      {inputIsValid && <Result userInput={userInput} />}
    </>
  );
}

export default App;
