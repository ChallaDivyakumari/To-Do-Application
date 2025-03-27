import Alert from '@mui/material/Alert';
import axios from "axios";
import {useState} from 'react';
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { AlertTitle, TextField, Button } from "@mui/material";


export function ToDoRegister(){

     const [success, setSuccess] = useState(false);
    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            userid: '',
            password: '',
            email: ''
        },
        validationSchema:yup.object(
            {
              userid: yup.string().required("UserId is required"),
              password: yup.string().min(6,"Password must atleast 6 characters.")
              .matches(/[A-Z]/, "Must include at least one uppercase letter")
              .matches(/[0-9]/, "Must include at least one number")
              .matches(/[\W_]/, "Must include at least one special character").required("Password is required"),
              email: yup.string().email("Invalid email address").required("Email is required")
            }
        ),
        onSubmit : (user)=>{
            axios.post(`http://127.0.0.1:4000/users`, user).then(()=>{
                console.log('Posted..');
            })
            setSuccess(true);
            setTimeout(()=>
            {
                navigate('/login');
            },10000) 
        }
    })

    return(
        <div className="container p-4 w-50 bg-light">
            <h3>Register User</h3>
            { success && <Alert variant="filled" severity="success">User Registered successfully</Alert>}
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt className='my-2'>User Id</dt>
                    <dd><TextField type="text" required id="outlined-required" label="UserId" variant="outlined" className="w-100" onChange={formik.handleChange} name="userid"/></dd>
                    <dd className="text-danger">{formik.errors.userid}</dd>
                    <dt className='my-2'>Password</dt>
                    <dd><TextField type="password" required id="outlined-required" label="Password" variant="outlined" className="w-100" onChange={formik.handleChange} name="password"/></dd>
                    <dd className="text-danger">{formik.errors.password}</dd>
                    <dt className='my-2'>Email</dt>
                    <dd><TextField type="email" required id="outlined-required" label="Email" variant="outlined" className="w-100" onChange={formik.handleChange} name="email"/></dd>
                    <dd className="text-danger">{formik.errors.email}</dd>
                </dl>
                <Button onClick={formik.handleSubmit} variant="contained" color="success">login</Button>
                <p className="mt-4">
                    Existing User <Link to="/login"> Login </Link>
                </p>
            </form>
        </div>
    )
}