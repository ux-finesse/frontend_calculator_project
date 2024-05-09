
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