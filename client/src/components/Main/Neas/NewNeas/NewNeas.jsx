import React, { useContext } from "react";
import { neasContext } from "../../../../context/neascontext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignupSchema = yup.object().shape({
  designation: yup.string().required(),
  discovery_date: yup.date().required(),
  h_mag: yup.string().required(),
  moid_au:yup.string().required(),
  q_au_1:yup.string().required(),
  q_au_2: yup.string().required(),
  period_yr: yup.string().required(),
  i_deg: yup.string().required(),
  pha: yup.string().required(),
  orbit_class: yup.string().required()



});

function NewNeas() {
  const { neas, save } = useContext(neasContext);
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
    // set([
    //   ...landings,
    //   {
    //     name:data.name,
    //     id:data.id,
    //     recclass:data.recclass,    
    //     mass:data.mass,
    //     fall:data.fall,
    //     year: data.year,
    //     reclat:data.reclat,
    //     reclong:data.reclong
    // }
    // ]);
    const res = await axios.post(`/api/astronomy/neas/create`,data)
    
 



    // const res = await axios.post(`http://localhost:5000/api/astronomy/landings/create`,data);
  
    



    // setTimeout(function () {
    //   return navigate("../listado", { replace: true });
    // }, 1000);
  };

  return (  
    <div className="divnewlanding">
    <form className="formnewlanding" onSubmit={handleSubmit(onSubmit) }>
    <h1>Crea tu Neas</h1>
      
        
        
        <input placeholder="designation" {...register("designation", { minLength: 3 })} />
        {errors.designation && <p>{errors.designation}</p>}
      
      
       
        <input type="date"{...register("discovery_date", { minLength: 3 })} />
        {errors.discovery_date && <p>{errors.discovery_date}</p>}
      

      
        
        <input placeholder="number" type="number" {...register("h_mag", { valueAsNumber: true })} />
        {errors.h_mag && <p>{errors.h_mag.message}</p>}
      
      
        
       
        <input placeholder="moid_au" type="number"{...register("moid_au", { minLength: 3 })} />
        {errors.moid_au&& <p>{errors.moid_au.message}</p>}
      
      
        
        <input placeholder="q_au_1" type="number" {...register("q_au_1", { valueAsNumber: true })} />
        {errors.q_au_1 && <p>{errors.q_au_1.message}</p>}
      
      
        
       
        <input placeholder="q_au_2" type="number"{...register("q_au_2", { minLength: 3 })} />
        {errors.q_au_2 && <p>{errors.q_au_2.message}</p>}
      
      
        
        <input placeholder="Year" type="number" {...register("period_yr")} />
        {errors.period_yr && <p>{errors.period_yr.message}</p>}
      
      
       
        <input placeholder="i_degree" type="number" {...register("i_deg", { valueAsNumber: true })} />
        {errors.i_deg && <p>{errors.i_deg.message}</p>}
      
      
        <input placeholder="Pha" {...register("pha", { valueAsNumber: true })} />
        {errors.pha && <p>{errors.pha.message}</p>}
      
      
        
        <input placeholder="orbitclass" {...register("orbit_class", { valueAsNumber: true })} />
        {errors.orbit_class && <p>{errors.orbit_class.message}</p>}
      
      
      <input type="submit" />
    </form>
  </div>
);
}
export default NewNeas;
