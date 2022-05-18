import React, { useContext } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const SignupSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
 

});

function Login() {

  let navigate = useNavigate();



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  const onSubmit = async (data) => {
    console.log(data);
    
    
    try {
  const res = await axios.post(`/api/astronomy/user/login`,data);
   if (res.status === 200) {
  
    console.log(res);
    localStorage.setItem('token', res.data)
    alert('Success')
 
  } }
  catch (err) {
  alert("Failed");
  }




  ;}

  return (
    <div className="boxsearch">
      
    <form className="boxsearch" onSubmit={handleSubmit(onSubmit) }>
      
        <h1>Loguea tu Usuario</h1>
        
        <input placeholder="name" {...register("username", { minLength: 3 })} />
        {errors.name && <p>{errors.name}</p>}
      

      
       
        <input placeholder="Password" type="password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
      
  
 
    
      
      <input type="submit" />
    </form>
    

    
  </div>
  
  
);
}
export default Login;
