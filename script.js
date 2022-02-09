let count = -1;

const incButton = document.getElementsByClassName("inc-btn");
for (const inc of incButton) {
  inc.addEventListener("click", function (e) {
    count++;
    document.getElementById("display").innerText = count;
  });
}
const decButton = document.getElementsByClassName("dec-btn");

for (const dec of decButton) {
  dec.addEventListener("click", function (e) {
    if (count > 0) {
      count--;
    } else {
      alert(`Can't Decrease at This Moment`);
    }
    document.getElementById("display").innerText = count;
  });
}
