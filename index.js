import  '../node_modules/bootstrap/dist/css/bootstrap.css';
import  '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FlipkartMobile } from './Component/Flipkart-mobile';
import { FormDemo } from './Component/FormDemo/form-demo';
import { Weather } from './Component/WeatherDemo/weather';
import { ClassBinding } from './Component/ClassBinding/class-binding';
import { MouseDemo } from './Component/MouseDemo/mouse-demo';
import { MouseAnimation } from './Component/MouseAnimation/mouse-animation';
import { KeyDemo } from './Component/KeyboardEvents/key-demo';
import { ButtonDemo } from './Component/Button-Demo/button-demo';
import { ElementDemo } from './Component/Element-Demo/element-demo';
import { EmiCalculator } from './Component/CalculatorDemo/calculator-demo';
import { CarouselDemo } from './Component/CarouselDemo/carousel-demo';
import { StopWatch } from './Component/StopWatchDemo/stopwatch-demo';
import { ReactForm } from './Component/FormikDemo/formik-demo';
import { HookFormDemo } from './Component/React_form_demo/hook_form_demo';
import { CustomDemo } from './Component/CustomDemo/custom-demo';
import { ConditionalDemo } from './Component/ConditionalComponent/conditional-demo';
import { ConditionalRendering } from './Component/ConditionalRendering/conditional-renderingdemo';
import { CoditionalSession } from './Component/Conditional-Session/conditional-session-demo';
import { ConditionalLocalStrorage } from './Component/Conditional-Localstorage/conditional-localstrorage-demo';
import { CookiesProvider } from 'react-cookie';
import { ConditionalCookies } from './Component/Conditional-Cookie/conditional-cookie-demo';
import { ContextDemo } from './Component/ContextDemo/context-demo';
import { Amazon } from './Component/AmazonDemo/amazon-demo';
import { ReducerDemo } from './Component/ReducerDemo/reducer-demo';
import { ToDO } from './Component/ToDo-Demo/todo';
import { Login } from './Component/LoginDemo/login';
import { MUIDemo } from './Component/MuiDemo/mui-demo';
import { Navbar } from './Controlled_Components/navbar';
import { DataGrid } from './Controlled_Components/data-grid';
import { ToDoIndex } from './To-Do/todo-index';
import { AdminLogin } from './Component/ClassComponent/admin-login';
import { FakestoreHome } from './FakeStore/fakestore-home';
import { LoginForm } from './Component/ClassComponent/login-form';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
    <ToDoIndex/>
  </CookiesProvider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
