import "./App.css";

function App() {
  const factorial = (number) => {
    var factNumber = number;
    if (number === 0 || number === 1) return 1;

    while (number > 1) {
      number--;
      factNumber *= number;
    }
    return factNumber;
  };

  return (
    <div className="App">
      Console Log It!!
      {console.log(factorial(4))}
    </div>
  );
}

export default App;
