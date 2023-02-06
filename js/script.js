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

  console.log(reader);
  console.log("ggj");
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

    // console.log(reader);
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

    // localStorage.setItem('thumbnail', reader.result);
    // console.log;
    // count
   
  
    // while( localStorage[localStorage.length+1]=='undefined'){
    
    // }

    // console.log(localStorage.length);
    let len=localStorage.length;
    while( typeof( localStorage[len+1])!='undefined'){
            
        console.log("S");
        len++;
    }
    // console.log(len);
        
    localStorage.setItem(len + 1, JSON.stringify(ob));
  }
}
//     submitbnt.addEventListener('click',function(){

// });

if (typeof( localStorage.getItem[6])=='undefined'){
}
else{
    console.log("p");
    
}
// console.log("S");
let newob;

function setvalue() {
  // for (x in localStorage){
  //     newob = JSON.parse(localStorage[x]);

  //     // console.log(newob["productId"]);
  // }

  //   for (let i = 1; i <= localStorage.length; i++) {
  // console.log(i);
  for (i in localStorage) {
    try {
      newob = JSON.parse(localStorage[i]);
      //   console.log(newob["productId"]);
      //   console.log();
      if (newob["productId"].NaN) {
      } else {
        // console.log(newob["productId"]);

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
        //   td2.innerHTML = newob["image"];
        let src = newob["image"];
        td2.innerHTML = "<img  width='100' src=' ".concat(src).concat("'>");

        td3.innerHTML = newob["price"];
        td4.innerHTML = newob["description"];

        let edit = document.createElement("i");
        edit.classList.add("fa-solid");
        edit.setAttribute("id", "edit");
        edit.classList.add("fa-pen-to-square");
        edit.setAttribute("onclick", 'editval("'.concat(i).concat('")'));

        let remove = document.createElement("i");
        remove.classList.add("fa-solid");
        remove.setAttribute("id", "remove");
        remove.classList.add("fa-trash");
        remove.setAttribute("onclick", "removeval(".concat(i).concat(")"));

        actiondiv.appendChild(edit);
        actiondiv.appendChild(remove);
        //     console.log(newob['productId']);
        //     console.log(newob['productName']);
        //     console.log(newob['image']);
        //     console.log(newob['price']);
        //     console.log(newob['description']);
      }
    } catch (e) {
      // console.log(e);
    }
  }
}

function removeval(id) {
  localStorage.removeItem(id);
  // setvalue();
  location.reload();
}

function editval(id) {
  // submitbnt
  submitbnt.classList.toggle("dnone");
  update.classList.toggle("dnone");
  addnew.classList.toggle("dnone");
  storeid.value = id;

  let newob = JSON.parse(localStorage[id]);

  productId.value = newob["productId"];
  productName.value = newob["productName"];
  //   image.value=newob['image'];
  image.setAttribute("src", newob["image"]);
  image.setAttribute("type", "image");
  image.setAttribute("width", "50px");
  price.value = newob["price"];
  description.innerHTML = newob["description"];

  // productId

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



