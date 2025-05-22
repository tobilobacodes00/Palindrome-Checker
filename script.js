const input = document.getElementById("text-input");
const check = document.getElementById("check-btn");
const result = document.getElementById("result");

check.addEventListener("click", checkPalindrome);

function checkPalindrome(){
  let value = document.getElementById("text-input").value;

 if(value === ""){
    alert("Please Input A Value")
    return;
  }

  let cleanedValue = value.toLowerCase().replace(/[^a-z0-9]/g, "");

let reversedValue = cleanedValue.split("").reverse().join("");

if (cleanedValue === reversedValue){
  result.innerText = `${value} is a palindrome.`;
}else{
  result.innerText = `${value} is not a palindrome.`;
}

}