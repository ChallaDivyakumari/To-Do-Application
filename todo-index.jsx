import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './todo-index.css';
import { ToDoHome } from './todo-home';
import { ToDoLogin } from './todo-login';
import { ToDoRegister } from './todo-register';
import { UserDashboard } from './user-dashboard';
import { AddAppointment } from './add-appointment';
import { DeleteAppointment } from './delete-appointment';
import { EditAppointment } from './edit-appointment';

export function ToDoIndex(){
    return(
        <div className="bg-image">
            <BrowserRouter>
                <header className='p-2 text-center text-white'>
                    <h1> <Link to="/" className='btn btn-light w-50'>TO-DO APP</Link> </h1>
                </header>
                <section>
                    <Routes>
                         <Route path='/' element={<ToDoHome />} />
                         <Route path='login' element={<ToDoLogin />} />
                         <Route path='register' element={<ToDoRegister/>} />
                         <Route path='dashboard' element={<UserDashboard />} />
                         <Route path='add-appointment' element={<AddAppointment />} />
                         <Route path='delete-appointment/:id' element={<DeleteAppointment />} />
                         <Route path='edit-appointment/:id' element={<EditAppointment />} />
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    )
}