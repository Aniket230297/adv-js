
let name=document.getElementById("name");
let profession=document.getElementById("profession");
let age=document.getElementById("age");
let button=document.getElementById("btn");
let error=document.getElementById("error");
let divcontainer=document.getElementById("add-element");


function func(){
    if(name.value==="" && profession.value==="" && age.value===""){
        error.innerText="Error:Please Make sure All the fields are filled before adding in an employee ! ";
        error.style.color="red";
    }else{
//    create DOM
/* <div class="span-item">
<p>1.</p>
<p>Name:John</p>
<p>Profession:Developer</p>
<p>Age:18</p>
</div>
<button class="delete-user">Delete User</button> */
let div=document.createElement("div");
div.className="span-item";
let p=document.createElement("p");
p.innerText=1;
let p1=document.createElement("p");
p1.innerText="Name:"+name.value;
let p2=document.createElement("p");
p2.innerText="Profession:"+profession.value;
let p3=document.createElement("p");
p3.innerText="Age:"+age.value;

let button1=document.createElement("button");
button1.className="delete-user";
button1.innerText="Delete User";
    
div.append(p);
div.append(p1);
div.append(p2);
div.append(p3);


divcontainer.append(div);
divcontainer.append(button1);


error.innerText="Success:Employee Added";
error.style.color="Green";
}


}

button.addEventListener("click", func)