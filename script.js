
function validate(mycallback){
    let user=document.getElementById("user");
    let password=document.getElementById("password");

if(user.value==='admin' && password.value==12345){
    mycallback();

}
else{
    alert("Wrong credentials");
}


}



function form_input(){

    var x=document.getElementById("body");
    x.innerHTML=`<nav class="navbar navbar-light bg-light justify-content-between">
    <a class="navbar-brand" style="margin-left:15px;">To Do</a>
    <form class="form-inline">
      <button id="logout" class="btn btn-outline-success my-2 my-sm-0" type="submit" style="margin-right:20px;" onclick="logout()">Log Out</button>
    </form>
  </nav>
  
  <table class="table table-sm" style="width:90%; margin:auto;">
  <thead>
    <tr>
    
      <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">Completed</th>
    </tr>
  </thead>
  <tbody id="tbody">
   
  </tbody>
</table>`
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
if(this.readyState==4 && this.status==200){
    var response = JSON.parse(this.responseText);

    for(let i=0;i<response.length;i++){
     document.getElementById("tbody").innerHTML+=` <tr>
     <td style="width:200px;">${response[i].id}</td>
     <td>${response[i].title}</td>
     <td style="width:30px;";><input id="myCheck" type="checkbox" class="chk" onclick="myFunction()"></td>
     </tr>`
      }


     }
  }
  xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
  xhttp.send();



}

function logout(){
    let out = document.getElementById("logout");
     x.innerHTML=`<div class="row" style="height: 100px;margin-top:100px">
     <h1 style="text-align: center;font-size: 70px;">TO DO</h1>
     </div>
     <div class="row">
       <div class="col"></div>
       <div class="col">
         <h3 style="text-align: center;margin-bottom: 40px;">Log in</h3>
         <form action="#" >
           <label for="user" style="width: 100%;text-align: center;"><h5>Username</h5></label>
           <br>
           <input id="user" type="text" name="user" placeholder="John Doe" style="width: 100%;text-align: center;border-radius: 10px;">
            <br>
            <br>
           <label for="password" style="width: 100%;text-align: center;"><h5>Password</h5></label>
           <br>
           <input id="password" type="password" name="password" placeholder="**********" style="width: 100%;text-align: center;border-radius: 10px;">
           <br>
           <input id="submit" type="submit" style="width: 20%;text-align: center;border-radius: 10px;margin-top: 20px;margin-left: 180px;" onclick="validate(form_input)">
   
   
   
   
         </form>
   
         <p style="margin-top: 25px; text-align:center;color: red;">Do not have an account?</p>
         <h6 style="text-align: center;"><a href="#">Sign Up</a></h6>
       </div>
       <div class="col"></div>
     </div>
     <script src="script.js"></script>`
}
let count=0;
function myFunction(){
    var checkboxes=Array.from(document.getElementsByClassName("chk"));
    for (let i=0;i<checkboxes.length;i++){
        if(checkboxes[i].checked===true){
            count++;
        }
    }
    
    var p =new Promise(function(resolve,reject){
            
      if(count>1 && count%5==0){
        resolve(`Congrats, ${count} task have been completed`)
      }

    });

     p
     .then(function(e){
        alert(e);
     })


    count=0;
   }
    