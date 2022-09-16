import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import database from './db.js';
import { doc, setDoc } from "firebase/firestore/lite";



export default function EmployeeForm() {
  const [open, setOpen] = React.useState(false);
  const [showTable, setShowTable] = React.useState(false);
  const [name, setName] = React.useState("rama");
  const [email, setEmail] = React.useState("rama@gmail.com");
  const [count, setCount] = React.useState(10);


  const [allEmployees, setAllEmployees] = React.useState([])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  }

  React.useEffect(() => {
    const employeeCollection = collection(database, 'employees');
    const employees = getDocs(employeeCollection).then((response)=>{
    console.log("Success")
    let docs = response._docs;
    docs = docs.map((doc)=> doc.data())
    for (let doc of docs) {
      console.log(doc.name);
      console.log(doc.email);
    }
    //docs = docs._dc.map((doc)=>  doc.data() )
  }).catch((err)=>{
    console.log(err);
  })
  console.log(employees)
  console.log("writing now")
    // Add data to the store
    // setDoc(doc(database, "employees", "asfafsadfasfadasfdf"), {id: 12, name: "Sanju", email : "Sanju@gmail.com"})
    //     .then((docRef) => {
    //         console.log(docRef);
    //     })
    //     .catch((error) => {
    //         console.error("Error adding document: ", error);
    //     });

  })
  const handleClose = () => {

    let employeeName = document.getElementById("employeeName").value;
    let employeeEmail = document.getElementById("employeeEmail").value;
    //validate name and email if proper
    if (employeeName === "" || employeeEmail === "") {
        if (employeeName === "") {
          document.getElementById("employeeNameWarning").innerHTML = "Name is mandatory";
        }
        if (employeeEmail === "") {
          document.getElementById("employeeEmailWarning").innerHTML = "Email is mandatory";
        }
    } else {
      setOpen(false);
    let myEmployee = {}
    myEmployee["id"] = count;
    myEmployee["name"] = employeeName;
    myEmployee["email"] = employeeEmail;
    setCount(count+1)
    //existing allEmployees
    //Add my employees
    //reset all employees

    allEmployees.push(myEmployee)
    //setAllEmployees((allEmployees)=> {
      //return allEmployees;
    //})
    }
  };
  const handleChange = (event) => {
    console.log(event.target.value);
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Employee
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Employee Form</DialogTitle>
        <DialogContent>

          <TextField
            autoFocus
            margin="dense"
            id="employeeName"
            label="name"
            type="name"
            fullWidth
            variant="standard"
          />
          <label id="employeeNameWarning" style={{color:'red'}} > </label>

          <TextField
            autoFocus
            margin="dense"
            id="employeeEmail"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <label id="employeeEmailWarning" style={{color:"red"}}> </label>
        {//  <label htmlFor="myName">Name :</label>
          //<input type="text" id="myName" />
          //<label htmlFor="myName">Email :</label>
          //<input type="text" id="myEmail" />
        }

        </DialogContent>
        <DialogActions>
          <Button name="cancel" onClick={handleCancel}>Cancel</Button>
          <Button name="save" onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
      <TableContainer  style={{width: 500}} component={Paper}>
     <Table aria-label="simple table">
       <TableHead>
         <TableRow>
           <TableCell>Name</TableCell>
           <TableCell>Email</TableCell>
            <TableCell>Actions</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {allEmployees.map((employee) => (
           <TableRow
             key={employee.id}
           >
                  <TableCell >{employee.name}</TableCell>
                  <TableCell >{employee.email}</TableCell>
              <a href=<EmployeeForm />>    <button><TableCell ><EditIcon /></TableCell></button> </a>
                  <button><TableCell><DeleteIcon /></TableCell></button>
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
</div>
  );


}
