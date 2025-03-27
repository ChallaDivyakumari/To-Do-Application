import axios from "axios";
import { useFormik } from "formik";
import { useCookies } from "react-cookie"
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Button, TextField} from "@mui/material";


export function AddAppointment(){

    const today = new Date().toISOString().split("T")[0];
    const [cookies, setCookie, removeCookie] = useCookies(['userid']);
    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            title: '',
            date: '',
            userid: cookies['userid']
        },
        validationSchema: yup.object(
            {
               title: yup.string().required("Title is required"),
               date: yup.string().required("Date is required")
            }
        ),
        onSubmit: (appointment) => {
            axios.post(`http://127.0.0.1:4000/appointments`, appointment)
            .then(()=>{
                console.log('appontment addded');
            })
            navigate('/dashboard');
        }
    })

    return(
        <div className="container bg-light w-50 p-4">
            <h3>Add New Appointment - {cookies['userid']} </h3>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt className="my-2">Title</dt>
                    <dd><TextField required id="outlined-required" label="Title" variant="outlined" type="text" onChange={formik.handleChange} className="w-100" name="title"/></dd>
                    <dd className="text-danger">{formik.errors.title}</dd>
                    <dt className="my-2">Date</dt>
                    <dd><TextField required id="outlined-required" label="d" variant="outlined" type="date" onChange={formik.handleChange} className="w-100" name="date"/></dd>
                    <dd className="text-danger">{formik.errors.date}</dd>
                </dl>
                <Button onClick={formik.handleSubmit} variant="contained" color="success">Add</Button>
                <Link to="/dashboard" className="btn btn-warning mx-2"> CANCEL </Link>
            </form>
        </div>
    )
}