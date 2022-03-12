
export const fileUpload = async (file) =>{

  const cloudUrl = 'https://api.Cloudinary.com/v1_1/dilwbkj5s/image/upload';
  const formData = new FormData();
  formData.append('upload_preset','EjercicioCRUD');
  formData.append('file',file);
  
  
  const resp = await fetch(cloudUrl, {
      method: 'POST',
      body: formData
  })
     const cloudResp = await resp.json();
     return cloudResp.secure_url;

}


// export const fileUpload = async (file) => {
//   const cloudUrl = "https://api.cloudinary.com/v1_1/dilwbkj5s/image/upload";
//   const formData = new FormData();
//   formData.append("upload_preset", "heroes-app");
//   formData.append("file", file);

//   try {
//     const resp = await fetch(cloudUrl, {
//       method: "POST",
//       body: formData,
//     });

//     if (resp.ok) {
//       const cloudResp = await resp.json();
//       return cloudResp.secure_url;
//     } else {
//       throw await resp.json();
//     }
//   } catch (error) {
//     throw error;
//   }
// };
