import React from "react";


function form(){
  return(
    <div class="emp-details">
      <label for="">Name</label>
      <input type="text" name="name" id="employeeName" value="" placeholder="Name" ><br><br>
      <label for="">Email</label>
      <input type="text" name="email" id="employeeEmail" value="" placeholder="Email"><br><br>
      <button  onclick="handleOnClick(event)"name="button">Submit</button>
    </div>
  );
}

export default form;
