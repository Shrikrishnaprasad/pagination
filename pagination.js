var request = new XMLHttpRequest();
request.open(
  "GET",
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json",
  true
);

var table = document.createElement("table");
table.setAttribute("class", "table");
var thead = document.createElement("thead");
thead.setAttribute("class", "thead-dark");
var tr = document.createElement("tr");

var th1 = createTrTh("th", "ID");
var th2 = createTrTh("th", "NAME");
var th3 = createTrTh("th", "EMAIL");

tr.append(th1, th2, th3);
thead.append(tr);

var tbody = document.createElement("tbody");

request.send();
request.onload = function () {
  var data = JSON.parse(this.response);

  for (let i in data) {
    //console.log(data[i].name + " : " + data[i].email);
    var tbodytr = document.createElement("tr");
    if (i / 10 < 1) {
      tbodytr.setAttribute("class", "tr-1 rows");
    } else if (i / 10 < 2) {
      tbodytr.setAttribute("class", "tr-2 rows");
    } else if (i / 10 < 3) {
      tbodytr.setAttribute("class", "tr-3 rows");
    } else if (i / 10 < 4) {
      tbodytr.setAttribute("class", "tr-4 rows");
    } else if (i / 10 < 5) {
      tbodytr.setAttribute("class", "tr-5 rows");
    } else if (i / 10 < 6) {
      tbodytr.setAttribute("class", "tr-6 rows");
    } else if (i / 10 < 7) {
      tbodytr.setAttribute("class", "tr-7 rows");
    } else if (i / 10 < 8) {
      tbodytr.setAttribute("class", "tr-8 rows");
    } else if (i / 10 < 9) {
      tbodytr.setAttribute("class", "tr-9 rows");
    } else if (i / 10 < 10) {
      tbodytr.setAttribute("class", "tr-10 rows");
    }

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    td1.innerHTML = data[i].id;
    td2.innerHTML = data[i].name;
    td3.innerHTML = data[i].email;
    tbodytr.append(td1, td2, td3);
    tbody.append(tbodytr);
    if (i % 10 == 0) {
      createBtn(Number(i) + Number(10));
    }
  }
  document.getElementById("pages").append(" >");
};

function createTrTh(elementName, value = "") {
  var td = document.createElement(elementName);
  td.innerHTML = value;
  //return tr.append(td);
  return td;
}

// tbody.append(tbodytr);
// tbody.append(tbodytr1);
// tbody.append(tbodytr2);
table.append(thead, tbody);
document.body.append(table);

document.getElementById("pages").append("< ");

function createBtn(i) {
  var button = document.createElement("button");
  button.type = "button";
  button.classList.add("btn", "btn-secondary", `${i / 10}`);
  button.addEventListener("click", displayTr);
  button.innerHTML = i / 10;
  document.getElementById("pages").append(button);
}

function displayTr() {
  var num = this.className.split(" ");
  //alert(num[2]);
  var tr = document.querySelectorAll(`.tr-${num[2]}`);
  var rows = document.querySelectorAll(".rows");
  for (var x = 0; x < rows.length; x++) {
    rows[x].style.display = "none";
  }
  for (var x = 0; x < tr.length; x++) {
    tr[x].style.display = "";
  }
}
