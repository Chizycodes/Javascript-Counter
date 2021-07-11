let countNumber = document.getElementById("countNumber");
let lowerCount = document.getElementById("lowerCount");
let addCount = document.getElementById("addCount");

let counter = 0;

lowerCount.addEventListener("click", () => {
  counter--;
  countNumber.innerHTML = counter;
  counter = Math.min(49, Math.max(1, counter));
});

addCount.addEventListener("click", () => {
  counter++;
  countNumber.innerHTML = counter;
  counter = Math.min(49, Math.max(1, counter));
});
