import axios from "axios";
import { useFormik } from "formik";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import Alert from '@mui/material/Alert';
import { useState } from "react";
import { AlertTitle, Button, TextField } from "@mui/material";


export function ToDoLogin(){

    const [cookies, setCookie, removeCookie] = useCookies(['userid']);
    const [invalid, setInvalid] = useState(false);
    const [userNotfound, setUserNotfound] = useState(false);
    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            userid: '',
            password:''
        },
        validationSchema:yup.object(
            {
                userid: yup.string().required("UserId is required"),
                password: yup.string().min(6,"Password has atleast 6 characters")
                .matches(/[A-Z]/, "Must include at least one uppercase letter")
              .matches(/[0-9]/, "Must include at least one number")
              .matches(/[\W_]/, "Must include at least one special character").required("Password is required")
            }

        ),
        onSubmit: (user)=>{
            axios.get(`http://127.0.0.1:4000/users`)
            .then(response=>{
                let userdetails = response.data.find(item=> item.userid===user.userid);
                if(userdetails){
                    if(user.password===userdetails.password){
                        setCookie('userid', userdetails.userid);
                        navigate('/dashboard');
                    } else {
                        setInvalid(true);
                    }
                } else {
                    setUserNotfound(true);
                }
            })
        }
    })


    return(
        <div className="container p-4 w-50 bg-light">
            <h3>User Login</h3>
            {invalid && <Alert variant="filled" severity="error">Invalid Password</Alert>}
            {userNotfound && <Alert variant="filled" severity="warning">User doesn't exist</Alert>}
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt className="my-2">User Id</dt>
                    <dd><TextField type="text" required id="outlined-required" label="UserId" variant="outlined" className="w-100" onChange={formik.handleChange} name="userid"/></dd>
                    <dd className="text-danger">{formik.errors.userid}</dd>
                    <dt className="my-2">Password</dt>
                    <dd><TextField type="password" required id="outlined-required" label="Password" variant="outlined" className="w-100" onChange={formik.handleChange} name="password"/></dd>
                    <dd className="text-danger">{formik.errors.password}</dd>
                </dl>
                <Button onClick={formik.handleSubmit} variant="contained" color="success">login</Button>
                <p className="mt-4">
                    New User <Link to="/register"> Register </Link>
                </p>
            </form>
        </div>
    )
}