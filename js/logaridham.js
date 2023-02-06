function scientific(e) {
  eql();
  if (e == "sin") {
    var ans = Math.sin(mainip.value);
  } else if (e == "cos") {
    var ans = Math.cos(mainip.value);
  } else if (e == "tan") {
    var ans = Math.tan(mainip.value);
  } else if (e == "cosec") {
    var ans = eval(1 / Math.sin(mainip.value));
  } else if (e == "sec") {
    var ans = eval(1 / Math.cos(mainip.value));
  } else if (e == "cot") {
    var ans = eval(1 / Math.tan(mainip.value));
  } else if (e == "ln") {
    var ans = Math.log(mainip.value);
  } else if (e == "log") {
    var ans = Math.log10(mainip.value);
  } else if (e == "pos") {
    if (mainip.value < 0) {
      mainip.value = eval(mainip.value * -1);
    }
    var ans = mainip.value;
  } else if (e == "1/x") {
    var ans = eval(1 / mainip.value);
  } else if (e == "root2") {
    var ans = Math.sqrt(mainip.value);
  } else if (e == "+-") {
    var ans = eval(mainip.value * -1);
  } else if (e == "10res") {
    var ans = eval(10 ** mainip.value);
  } else if (e == "nfacto") {
    eql();
    mainip.value = Math.floor(mainip.value);
    if (mainip.value > 500) {
      ans = "Infinity";
    } else if (mainip.value < 0) {
      ans = 0;
    } else if (
      mainip.value == 0 ||
      mainip.value == 1 ||
      mainip.value == "" ||
      mainip.value == " "
    ) {
      ans = 1;
    } else {
      let n = mainip.value;
      ans = 1;
      while (true) {
        if (n == 1) {
          break;
        }
        ans = eval(ans * n);
        n--;
      }
    }
  } else {
    var ans = mainip.value;
  }

  mainip.value = ans;
  calculate();
}
