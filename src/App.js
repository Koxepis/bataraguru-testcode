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

  const bracket = function (inp) {
    const status = false;
    const maps = {
      "(": ")",
      "{": "}",
      "[": "]",
    };

    const char = [];

    for (let a = 0; a < inp.length; a++) {
      if (maps[inp[a]]) {
        char.push(maps[inp[a]]);
      } else {
        if (char.pop() !== inp[a]) {
          return status;
        }
      }
    }

    return char.length === 0;
  };

  return (
    <div className="App">
      Console Log It!!
      {console.log("Insert Factorial Result: ", factorial(8)) /*40320*/}
      {console.log("Insert Dash Result: ", insertDash("553847")) /*5538-47*/}
      {console.log("Insert Dash Result: ", insertDash("2468")) /*2-4-6-8*/}
      {console.log("Insert Bracket Result: ", bracket("({[]})")) /*true*/}
      {console.log("Insert Bracket Result: ", bracket("({[]))")) /*false*/}
    </div>
  );
}

export default App;
