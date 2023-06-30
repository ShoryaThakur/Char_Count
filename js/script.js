//Creating Variables
let totalEL = document.getElementById("total");
let leftEL = document.getElementById("left");
let dataEL = document.getElementById("textarea");
let remain = dataEL.getAttribute("maxlength");
leftEL.innerText = remain;
dataEL.addEventListener("keyup", () => {
  let update = dataEL.value.length;
//   console.log(dataEL.value.length);
  totalEL.innerText = update;
  let current = remain - update;
  leftEL.innerText = current;
});
