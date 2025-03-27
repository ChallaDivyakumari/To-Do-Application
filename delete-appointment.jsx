import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";


export function DeleteAppointment(){

    let params = useParams();
    let navigate = useNavigate();

    const [appointment, setAppointment] = useState({id:0, title:'', date:'', userid:''});

    useEffect(()=>{
        axios.get(`http://127.0.0.1:4000/appointments/${params.id}`)
        .then(response=>{
             setAppointment(response.data);
        })
    },[])

    function handleDeleteClick(){
        axios.delete(`http://127.0.0.1:4000/appointments/${params.id}`)
        .then(()=>{
            console.log('deleted..');
        });
        navigate('/dashboard');
    }

    return(
        <div className="container bg-light w-50 p-4">
            <h3>Delete Appointment</h3>
             <h5 className="my-3">Are you sure want to delete? <br/> <span className="text-danger my-3">{appointment.title}</span> </h5>
             <Button onClick={handleDeleteClick} variant="contained" color="error">yes</Button>
            <Link to="/dashboard" className="btn btn-warning mx-2">CANCEL</Link>
        </div>
    )
}