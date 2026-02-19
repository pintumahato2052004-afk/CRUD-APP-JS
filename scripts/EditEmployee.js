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

 const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

async function getEditEmployee(){
    

    try {
        let resp = await fetch(`https://crud-app-js-ztfj.onrender.com/employees/${id}`);
        let data = await resp.json();
        console.log(data);

        // PRE-FILL INPUT FIELDS
        firstnameEle.value = data.firstname
        middlenameEle.value = data.middlename
        lastnameEle.value = data.lastname
        dobEle.value = data.dob
        emailEle.value = data.email
        maritalstatusEle.value = data.maritalstatus
        phoneNoEle.value = data.phoneno
        streetEle.value = data.address.street
        stateEle.value = data.address.state
        countryEle.value = data.address.country
        zipCodeEle.value = data.address.zipcode
        cityEle.value = data.address.city
        
        
    } catch (error) {
        console.log(error);
        alert("Something went wrong ❌");
        
    }
}

window.addEventListener("DOMContentLoaded", ()=>{
    getEditEmployee()
});


// CREATE NEW UPDATE EMP OBJECT
employeeFormEle.addEventListener("submit", async (e)=>{
    e.preventDefault();

    let updateEmployeeData = {
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
  try {
    let resp = await fetch(`https://crud-app-js-ztfj.onrender.com/employees/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(updateEmployeeData),
    });
    console.log(resp);

    window.location.href = "AllEmployee.html"
        
  } catch (err) {
    console.log(err); 
  }
});