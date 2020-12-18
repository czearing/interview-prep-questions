import React from "react";
import "./styles.css";

export default function App() {
  let test = "ah";

  const uniqueCharacters = (message) => {
    let table = {};
    for (let i = 0; i < test.length; i++) {
      if (table[message[i]]) {
        return false;
      } else {
        table[message[i]] = 1;
      }
    }
    return true;
  };

  const isPermutation = (firstString, secondString) => {
    if (firstString.length === secondString.length) {
      let firstStrArr = firstString.split("").sort();
      let secondStrArr = secondString.split("").sort();
      for (let i = 0; i < firstStrArr.length; i++) {
        if (secondStrArr[i] !== firstStrArr[i]) {
          return false;
        }
      }
      return true;
    }
    return false;
  };

  const urlIfy = (message, searchValue, replaceValue) => {
    let totalToReplace = 0;
    for (let i = 0; i < message.length; i++) {
      if (message[i] === searchValue) {
        totalToReplace++;
      }
    }
    if (totalToReplace > 0) {
      const url = [];
      for (let i = 0; i < message.length; i++) {
        if (message[i] === searchValue) {
          url.push(replaceValue);
        } else {
          url.push(message[i]);
        }
      }
      return url.join("");
    }
    return message;
  };

  console.log(urlIfy("hello this is a test", " ", "%"));
  // console.log(uniqueCharacters(test))
  console.log(isPermutation("hello", "hello"));
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
