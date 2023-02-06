function memoryfun(m){
    if (m=='ms'){
      eql()
      localStorage.setItem("memory",mainip.value);
    }
    else if(m=='mr'){
      mainip.value=localStorage.getItem("memory");
    }
    else if(m=='m+'){
      mainip.value=eval(mainip.value+"+"+localStorage.getItem("memory"));
    }
    else if(m=='m-'){
      mainip.value=eval(mainip.value+"-"+localStorage.getItem("memory"));
    }
    eql();
  }