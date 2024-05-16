// Tu código aquí
let btn = document.querySelector("#btn");
let names= document.querySelector("#first");
let apellido= document.querySelector("#last");
btn.addEventListener('click', async ()=>{
    let response = await fetch('https://randomuser.me/api/');
    let data = await response.json();
   // document.querySelector('#name').textContent=data.name;
   console.log(data); 
   names.innerHTML=(data.results[0].name.first);
    apellido.innerHTML=data.results[0].name.last;
    document.querySelector("#country").innerHTML=data.results[0].location.country;
    document.querySelector("#phone").innerHTML=data.results[0].phone;
    document.querySelector("#email").innerHTML=data.results[0].email;
    document.querySelector("#photo").src=data.results[0].picture.medium;
});