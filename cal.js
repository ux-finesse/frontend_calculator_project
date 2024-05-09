
const button = document.querySelectorAll("button");
const output = document.getElementById("output");

for(let i =0; i<button.length; i++){
button[i].addEventListener("click", () =>
{
const buttonValue = button[i].textContent;
if(buttonValue === "=")
{
  calculateResult();
}
else 
{
  appendValue(buttonValue);
}
});
}

function clearResult()
{
  output.value="";
}

function calculateResult()
{
  output.value =eval(output.value);
}

function appendValue(buttonValue)
{
  output.value = output.value + buttonValue;
}

document.addEventListener("keydown", keyboardInputHandler);

function keyboardInputHandler(e){
  e.preventDefault()

  if (e.key === "0") {
     output.value += "0";
  } else if (e.key === "1") {
     output.value += "1";
  } else if (e.key === "2") {
     output.value += "2";
  } else if (e.key === "3") {
     output.value += "3";
  } else if (e.key === "4") {
     output.value += "4";
  } else if (e.key === "5") {
     output.value += "5";
  } else if (e.key === "6") {
     output.value += "6";
  } else if (e.key === "7") {
     output.value += "7";
  } else if (e.key === "7") {
     output.value += "7";
  } else if (e.key === "8") {
     output.value += "8";
  } else if (e.key === "9") {
     output.value += "9";
  }

  //operators
  if (e.key === "+") {
     output.value += "+";
  } else if (e.key === "-") {
     output.value += "-";
  } else if (e.key === "*") {
     output.value += "*";
  } else if (e.key === "/") {
     output.value += "/";
  }

  //decimal key
  if (e.key === ".") {
     output.value += ".";
  }

  //press enter to see result
  if (e.key === "Enter") {
    output.value = eval(output.value);
  }

  //backspace for removing the last input
  if (e.key === "Backspace") {
    const resultInput =  output.value;
    //remove the last element in the string
     output.value = resultInput.substring(0,  output.value.length - 1);
  }
}