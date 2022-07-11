function form_input(){

    x=document.getElementById("body");
    x.innerHTML=`<nav class="navbar navbar-light bg-light justify-content-between">
    <a class="navbar-brand" style="margin-left:15px;">To Do</a>
    <form class="form-inline">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit" style="margin-right:20px;">Log Out</button>
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
     <td style="width:30px;";><input type="checkbox"</td>
     </tr>`
      }


     }
  }
  xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
  xhttp.send();



}