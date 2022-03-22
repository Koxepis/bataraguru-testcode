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

  const insertDash = (number) => {
    var strNumber = number.split("");
    var num = strNumber.map(Number);

    for (var i = 0; i < num.length; i++) {
      if (num[i - 1] % 2 === 0 && num[i] % 2 === 0) {
        num.splice(i, 0, "-");
      }
    }
    return num.join("");
  };

  return (
    <div className="App">
      Console Log It!!
      {console.log("Factorial Result: ", factorial(4))}
      {console.log("Insert Dash Result: ", insertDash("4162312"))}
    </div>
  );
}

export default App;
