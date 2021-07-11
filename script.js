let countNumber = document.getElementById("countNumber");
let lowerCount = document.getElementById("lowerCount");
let addCount = document.getElementById("addCount");

let counter = 0;

lowerCount.addEventListener("click", () => {
  if (counter === 0) {
    counter = 0;
    document.getElementById("error").innerHTML = "Minimum value reached!";
  } else {
    counter--;
    document.getElementById("error").innerHTML = "";
  }
  countNumber.innerHTML = counter;
});

addCount.addEventListener("click", () => {
  if (counter === 50) {
    counter = 50;
    document.getElementById("error").innerHTML = "Maximum value reached!";
  } else {
    counter++;
    document.getElementById("error").innerHTML = "";
  }
  countNumber.innerHTML = counter;
});
