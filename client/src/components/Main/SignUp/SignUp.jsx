import React, { useContext } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Login from "../Login/Login"

const SignupSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
 

});

function SignUp() {

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
    alert(JSON.stringify(data));
    
   
  const res = await axios.post(`/api/astronomy/user/create`,data);
  
  };

  return (
    <div className="divnewlanding">
      
  
      
    <form className="boxsearch" onSubmit={handleSubmit(onSubmit) }>
      
        <h1>Crea tu Usuario</h1>
        
        <input placeholder="Name"{...register("username", { minLength: 3 })} />
        {errors.name && <p>{errors.name}</p>}
      

      
       
        <input placeholder="password" type="password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
    
  
 
    
      
      <input type="submit" />
    </form>
    <Login/>
   
    
  </div>
  
  
);
}
export default SignUp;
