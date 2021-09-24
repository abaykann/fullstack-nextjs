import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
    productName: Yup.string()
      .required('Product Name is required')
      .min(5, 'Product Name must be at least 5 characters')
      .max(40, 'Product Name must not exceed 40 characters'),

    price: Yup.number()
      .typeError('price must be a number :(')
      .required("Please provide plan cost :(")
      .min(1000, "Too little")
      .max(900000000, 'Very costly!'),


    discount : Yup.number()
      .transform((currentValue, originalValue) => {
          return originalValue === '' ? 0 : currentValue;
      })
      .nullable()
      .typeError('Must be a number')
      .max(100, 'Very costly!'),

    categoryId: Yup.number()
      .typeError('Pleace Select One')
      .required("Pleace Select One"),

   

          // picture: Yup
          // .mixed()
          // // .typeError('You need to provide a file')
          // .nullable()
          // .required()
          // .test("fileSize", "The file is too large", (value) => {
          //   return value && value[0].size <= 2000000;
          // })
          // .test("type", "We only support jpeg & png File", (value) => {
          //   // return value && value[0].type === "image/jpeg";
          //   return value && (
          //     value[0].type === "image/jpeg" ||
          //     value[0].type === "image/png" 
          // );
          // }),

          // picture: Yup
          // .mixed()
          // .required("You need to provide a file")
          // .test("fileSize", "The file is too large", (value) => {
          //   return value && value[0].size <= 2000000;
          // })
          // .test("type", "We only support jpeg", (value) => {
          //   return value && value[0].type === "image/jpeg";
          // }),

          picture: Yup
          .mixed()
          .required("You need to provide a file")
          .test("fileSize", "The file is too large", (value) => {
            return value && value[0].size <= 200000;
          })
          .test("type", "We only support jpeg/png file", (value) => {
            return value && (
              value[0].type === "image/jpeg"||
              value[0].type === "image/png" 
            );
          }),
          
  });
  

export default ValidationSchema