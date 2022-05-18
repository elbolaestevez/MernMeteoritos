import React, { useContext } from "react";
import { landingsContext } from "../../../context/landingscontext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignupSchema = yup.object().shape({
  name: yup.string().required(),
  id: yup.string().required(),
  recclass:  yup.string().required(),
  mass:yup.string().required(),
  fall:yup.string().required(),
  year: yup.date().required(),
  reclat: yup.string().required(),
  reclong: yup.string().required()

});

function NewLanding() {
  const { landings, set } = useContext(landingsContext);
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
    
    // axios({
    //   url:`http://localhost:5000/api/astronomy/landings/create`,
    //   method:"post",
    //   data:{
    //     name:"guille",
    //     id:"5",
    //     recclass:"fall",    
    //     mass:"720",
    //     fall:"hola",
    //     year: "1910",
    //     reclat:"10",
    //     reclong:"10"
        
    // }



    // })



    const res = await axios.post(`/api/astronomy/landings/create`,data);
  
    



    setTimeout(function () {
      return navigate("../listado", { replace: true });
    }, 1000);
  };

  return (
    <div className="divnewlanding">
    <h1>Crea tu Landing</h1>
   <form className="formnewlanding" onSubmit={handleSubmit(onSubmit) }>
     
      
       
       <input placeholder="Pon el nombre"{...register("name", { minLength: 3 })} />
       {errors.name && <p>{errors.name}</p>}
     

     
      
       <input placeholder="pon el id" type="number" {...register("id", { valueAsNumber: true })} />
       {errors.id && <p>{errors.id.message}</p>}
     
     
       
       
       <input placeholder="pon la clase" {...register("recclass", { minLength: 3 })} />
       {errors.recclass&& <p>{errors.recclass.message}</p>}
     
     
       
       <input placeholder="pon la Masa" {...register("mass" )} />

     
     
       
       
       <input placeholder="pon el State"{...register("fall", { minLength: 3 })} />
       {errors.fall && <p>{errors.fall.message}</p>}
     
     
      
       <input type="date" {...register("year")} />
       {errors.date && <p>{errors.date.message}</p>}
     
     
      
       <input placeholder="pon la latitude" type="number" {...register("reclat", { valueAsNumber: true })} />
       {errors.reclat && <p>{errors.reclat.message}</p>}
     
     
     
       <input placeholder="pon la longitud"type="number" {...register("reclong", { valueAsNumber: true })} />
       {errors.reclong && <p>{errors.reclong.message}</p>}
     
   
     
     <input type="submit" />
   </form>
 </div>
);
}
export default NewLanding;