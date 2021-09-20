


// import { useState } from "react";



// export default function PrivatePage(props) {
//   const [image, setImage] = useState(null);
//   const [createObjectURL, setCreateObjectURL] = useState(null);

//   const uploadToClient = (event) => {
//     if (event.target.files && event.target.files[0]) {
//       const i = event.target.files[0];

//       setImage(i);
//       setCreateObjectURL(URL.createObjectURL(i));
//     }
//   };

//   const uploadToServer = async (event) => {
//     const body = new FormData();
//     body.append("file", image);
//     const response = await fetch("/api/productsV2/create", {
//       method: "POST",
//       headers: { 'Content-Type': 'application/json' },
//       body
//     });
//   };

//   return (
//     <div>
//       <div>
//         <img src={createObjectURL} />
//         <h4>Select Image</h4>
//         <input type="file" name="file" onChange={uploadToClient} />

//         <input
//             onChange={fieldHandler.bind(this)}
//             type="text" 
//             placeholder="Title" 
//             name="title" 
//         />

//         <button
//           className="btn btn-primary"
//           type="submit"
//           onClick={uploadToServer}
//         >
//           Send to server
//         </button>
//       </div>
//     </div>
//   );
// }



import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  age: yup.number().positive().integer().required(),
});

export default function App() {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <p>{errors.firstName?.message}</p>
        
      <input {...register("age")} />
      <p>{errors.age?.message}</p>
      
      <input type="submit" />
    </form>
  );
}
