import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"
import { Link, useNavigate } from "react-router-dom";


export function UserDashboard(){

    let navigate = useNavigate();

    const [cookies, setCookie, removeCookie] = useCookies(['userid']);
    const [appointments, setAppointments] = useState([{id:0, title:'', date:'', userid:''}]);

    useEffect(()=>{

        axios.get(`http://127.0.0.1:4000/appointments`)
        .then(response=>{
             let user_appointments = response.data.filter(appointment => appointment.userid===cookies['userid']);
             setAppointments(user_appointments);
        })

    },[])

    function handleSignout(){
        removeCookie('userid');
        navigate('/');
    }

    return(
        <div className="container bg-light w-50 p-4">
            <h3 className="d-flex justify-content-between "> <span>{cookies['userid']}</span> <span>DASHBOARD</span> <span><button className="btn btn-link" onClick={handleSignout} >Signout</button></span> </h3>
            <Link to="/add-appointment" className="btn btn-success bi bi-calendar-event"> Add Appointment </Link>
            <div className="mt-2 overflow-auto" style={{height:'400px'}}>
                {
                    appointments.map(appointment=>
                        <div key={appointment.id} className="alert m-2 alert-success">
                            <h4>{appointment.title}</h4>
                            <p>{appointment.date}</p>
                            <div>
                            <Link to={`/edit-appointment/${appointment.id}`} className="bi bi-pen-fill btn btn-warning"> </Link>
                            <Link to={`/delete-appointment/${appointment.id}`} className="bi bi-trash-fill btn btn-danger mx-2" ></Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}