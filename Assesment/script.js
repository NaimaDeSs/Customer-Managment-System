"use strict";

let customerForm = document.getElementById("customer-form");
let name = document.getElementById("name");
let vatNumber = document.getElementById("vat");
let date = document.getElementById("date");
let address = document.getElementById("address");
let customerList = document.getElementById("customers-list");

let customer = {
  name: "",
  vatNumber: "",
  date: "",
  address: "",
};

if (localStorage.getItem("customer")) {
  customer = JSON.parse(localStorage.getItem("customer"));
}

document.querySelector(".save").addEventListener("click", function (event) {
  event.preventDefault();
  let nameValue = name.value;
  let vatValue = vatNumber.value;
  let dateValue = date.value;
  let addressValue = address.value;
  let customer = {
    name: nameValue,
    vatNumber: vatValue,
    date: dateValue,
    address: addressValue,
  };
  localStorage.setItem("customer", JSON.stringify(customer));
  console.log(customer);
  customerForm.reset();
  let listItem = document.createElement("li");
  listItem.innerHTML = `
      <span class="name"><strong>Full Name:&nbsp</strong>${customer.name}</span>
      <span class="vat"><strong>VAT IDN:&nbsp</strong>${customer.vatNumber}</span>
      <span class="date"><strong>Creation Date:&nbsp</strong>${customer.date}</span>
      <span class="address"><strong>Address:&nbsp</strong>${customer.address}</span>
    `;
  customerList.appendChild(listItem);
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.addEventListener("click", function () {
    customerList.removeChild(listItem);
    localStorage.removeItem(customer.name);
  });

  listItem.appendChild(deleteButton);
  let editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.addEventListener("click", function () {
    name.value = customer.name;
    vatNumber.value = customer.vatNumber;
    date.value = customer.date;
    address.value = customer.address;
  });
  listItem.appendChild(editButton);
});
