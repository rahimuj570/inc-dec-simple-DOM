let count = 0;

const incButton = document.getElementsByClassName("inc-btn");
for (const inc of incButton) {
  inc.addEventListener("click", function (e) {
    count++;
    document.getElementById("display").innerText = count;
  });
}
const incButton = document.getElementsByClassName("inc-btn");
