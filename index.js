let userForm=document.getElementById("userform");
const retrieveentries=()=>{
    let entries=localStorage.getItem("user-entries");
    if(entries){entries=JSON.parse(entries);}
    else{entries=[];}
    return entries;
}

window.onload = function() {
    var date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    minYear = yyyy - 55; 
    maxYear = yyyy - 18; 

    var min = minYear + "-" + mm + "-" + dd;
    var max = maxYear + "-" + mm + "-" + dd;

    document.getElementById("dob").setAttribute("min", min);
    document.getElementById("dob").setAttribute("max", max);
  };


let userEntries=retrieveentries();
const displayEntries=()=>{
    const entries=retrieveentries();
    const tableEntries=entries.map((entry)=>{
        const nCell=`<td class='border px-4 py-2'>${entry.name}</td>`;
        const eCell=`<td class='border px-4 py-2'>${entry.email}</td>`;
        const pCell=`<td class='border px-4 py-2'>${entry.password}</td>`;
        const dCell=`<td class='border px-4 py-2'>${entry.dob}</td>`;
        const aCell=`<td class='border px-4 py-2'>${entry.acceptTermsandconditions}</td>`;
        const row=`<tr>${nCell} ${eCell} ${pCell} ${dCell} ${aCell}</tr>`;
        return row;
    }).join("\n");
    const table=`<table class="table-auto w-full"><tr>
    <th class="px-4 py-2">Name</th>&emsp;
    <th class="px-4 py-2">Email</th>&emsp;
    <th class="px-4 py-2">Password</th>&emsp;
    <th class="px-4 py-2">dob</th>&emsp;
    <th class="px-4 py-2">accepted terms?</th>
    </tr>${tableEntries}</table>`;
    let details=document.getElementById("user-entries");
    details.innerHTML=table;
}
const saveUserForm=(event)=>{
event.preventDefault();
const name=document.getElementById("name").value;
const email=document.getElementById("email").value;
  const password=document.getElementById("password").value;
  const dob=document.getElementById("dob").value;
  const acceptTermsandconditions=document.getElementById("Terms").checked;

const entry={
  name,
  email,
  password,
  dob,
  acceptTermsandconditions
};
userEntries.push(entry);
  localStorage.setItem("user-entries",JSON.stringify(userEntries));
  displayEntries();
}
userForm.addEventListener("submit",saveUserForm);
displayEntries();
