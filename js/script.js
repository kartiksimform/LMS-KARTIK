let mainip = document.getElementById("mainip");
let mainop = document.getElementById("mainop");
let clear = document.getElementById("clear");
// function for caculation

function cal(e) {
  if (e == "π") {
    e = 3.14;
  } else if (!isNaN(e)) {
  } else {
    let ans = mainip.value;
    ans = ans.substring(ans.length - 1, ans.length);

    if (!(e >= 0 && e <= 9) && !(ans >= 0 && ans <= 9)) {
      if (
        ((e == "(" || e == ")") && (ans == "(" || ans == ")")) ||
        ans == "e"
      ) {
      } else if (e == "(" || e == ")") {
        mainip.value = mainip.value + e;
        calculate();
      } else {
        ans = mainip.value;
        ans = ans.substring(0, ans.length - 1);
        mainip.value = ans + e;
        calculate();
      }
    }
  }
  mainip.value = mainip.value + e;
  calculate();
}

function calculate() {
  if (mainip.value == "" || mainip.value == " ") {
    mainop.innerHTML = 0;
    return;
  }
  try {
    let ans = eval(mainip.value);
    mainop.innerHTML = ans;
  } catch (error) {
    // mainop.innerHTML="error";
  }
}

// for equal
function eql() {
  calculate();
  mainip.value = mainop.innerHTML;
}
function clearone() {
  let ans = mainip.value;
  ans = ans.substring(0, ans.length - 1);
  mainip.value = ans;
  calculate();
}

clear.addEventListener("click", () => {
  mainip.value = "";
  mainop.innerHTML = "";
});

function sqre() {
  mainip.value = mainip.value + "**2";
  calculate();
}
function xy() {
  mainip.value = mainip.value + "**";
  calculate();
}

function sci() {
  document.getElementById("science").classList.toggle("dnone");
  document.getElementById("science1").classList.toggle("dnone");
}
function fun() {
  document.getElementById("func").classList.toggle("dnone");
}
