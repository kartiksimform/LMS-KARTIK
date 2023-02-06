$(document).ready(function(){  
    $('#maintable').DataTable();  
}); 

let submitbnt = document.getElementById("submit");
let productId = document.getElementById("productId");
let productName = document.getElementById("productName");
let image = document.getElementById("image");
let price = document.getElementById("price");
let description = document.getElementById("description");
let tablebody = document.getElementById("tablebody");
let update = document.getElementById("update");
let addnew = document.getElementById("addnew");
let storeid = document.getElementById("storeid");
let warning = document.getElementById("warning");
let shows = document.getElementById("shows");
let count;
const reader = new FileReader();
image.addEventListener("change", (event) => {
  const imagee = event.target.files[0];

  reader.readAsDataURL(imagee);

  
});

function submitone(ev) {
  if (
    productId.value == "" ||
    description.value == "" ||
    price.value == "" ||
    productName.value == ""
  ) {
    warning.innerHTML = "*All Field Are Reqvired";
  } else {
    warning.innerHTML = "";

    let imgsrc;
    if(ev=='oldtonew'){
        imgsrc=image.src;
    }
    else{
        
        imgsrc=reader.result;
    }

    let ob = {
      productId: productId.value,
      productName: productName.value,
      image: imgsrc,
      price: price.value,
      description: description.value,
    };

 
  
    let len=localStorage.length;
    while( typeof( localStorage[len+1])!='undefined'){
            
        console.log("S");
        len++;
    }
        
    localStorage.setItem(len + 1, JSON.stringify(ob));
  }
}



let newob;

function setvalue() {
 
  for (i in localStorage) {
    try {
      newob = JSON.parse(localStorage[i]);

      if (newob["productId"].NaN) {
      } else {

        let tr = document.createElement("tr");
        tr.classList.add("table-row");
        let actiondiv = document.createElement("div");
        actiondiv.classList.add("tdinnerdiv");
        tablebody.appendChild(tr);
        let td0 = document.createElement("td");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        td0.classList.add("table-cell");
        td1.classList.add("table-cell");
        td2.classList.add("table-cell");
        td3.classList.add("table-cell");
        td4.classList.add("table-cell");
        td5.classList.add("table-cell");
        tr.appendChild(td0);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        td5.appendChild(actiondiv);

        td0.innerHTML = newob["productId"];
        td1.innerHTML = newob["productName"];
        let src = newob["image"];
        td2.innerHTML = "<img  width='100' src=' ".concat(src).concat("'>");

        td3.innerHTML = newob["price"];
        td4.innerHTML = newob["description"];

        let edit = document.createElement("i");
        edit.classList.add("fa-solid");
        edit.setAttribute("id", "edit");
        edit.classList.add("fa-pen-to-square");
        edit.classList.add("editbtn");
        edit.setAttribute("onclick", 'editval("'.concat(i).concat('")'));
        
        let remove = document.createElement("i");
        remove.classList.add("fa-solid");
        remove.setAttribute("id", "remove");
        remove.classList.add("fa-trash");
        remove.classList.add("removebtn");
        remove.setAttribute("onclick", "removeval(".concat(i).concat(")"));

        actiondiv.appendChild(edit);
        actiondiv.appendChild(remove);
  
      }
    } catch (e) {
      // console.log(e);
    }
  }
}

function removeval(id) {
  localStorage.removeItem(id);
  location.reload();
}

function editval(id) {
  submitbnt.classList.toggle("dnone");
  update.classList.toggle("dnone");
  addnew.classList.toggle("dnone");
  storeid.value = id;

  let newob = JSON.parse(localStorage[id]);

  productId.value = newob["productId"];
  productName.value = newob["productName"];
  image.setAttribute("src", newob["image"]);
  image.setAttribute("type", "image");
  image.setAttribute("width", "200px");
  price.value = newob["price"];
  description.innerHTML = newob["description"];

 
  console.log(id);
}

update.addEventListener("click", function () {
  if (
    productId.value == "" ||
    description.value == "" ||
    price.value == "" ||
    productName.value == ""
  ) {
    warning.innerHTML = "*All Field Are Reqvired";
  } else {
    warning.innerHTML = "";
    let imagename = image.src;
    console.log(imagename);
    let ob = {
      productId: productId.value,
      productName: productName.value,
      image: imagename,
      price: price.value,
      description: description.value,
    };

    localStorage.setItem(storeid.value, JSON.stringify(ob));
    location.reload();
  }
});

setvalue();



