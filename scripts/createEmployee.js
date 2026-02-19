const employeeFormEle = document.getElementById("employee-form");
const firstnameEle = document.getElementById("firstname");
const middlenameEle = document.getElementById("middlename");
const lastnameEle = document.getElementById("lastname");
const dobEle = document.getElementById("dob");
const emailEle = document.getElementById("email");
const maritalstatusEle = document.getElementById("maritalstatus");
const phoneNoEle = document.getElementById("phoneno");
const streetEle = document.getElementById("street");
const cityEle = document.getElementById("city");
const stateEle = document.getElementById("state");
const countryEle = document.getElementById("country");
const zipCodeEle = document.getElementById("zipcode");

employeeFormEle.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("Form Submitted");

  let newEmployeeData = {
    firstname: firstnameEle.value.trim(),
    middlename: middlenameEle.value.trim(),
    lastname: lastnameEle.value.trim(),
    dob: dobEle.value.trim(),
    email: emailEle.value.trim(),
    maritalstatus: maritalstatusEle.value.trim(),
    phoneno: phoneNoEle.value.trim(),
    address: {
      street: streetEle.value.trim(),
      city: cityEle.value.trim(),
      state: stateEle.value.trim(),
      country: countryEle.value.trim(),
      zipcode: zipCodeEle.value.trim(),
    },
  };

  try{

  let resp = await fetch("https://crud-app-js-ztfj.onrender.com/employees", {
    method : "POST",
    headers: {
        "Content-Type" : "application/json",
    },
    body: JSON.stringify(newEmployeeData),//<--SEND EMP DATA IN JSON-FORMAT
  });
  console.log(resp);
  //NAVIGATION 
  window.location.href="AllEmployee.html";
}catch(err){
    console.log(err);
    alert("Something went wrong  ❌");
    
    
}
  console.log(newEmployeeData);
});
