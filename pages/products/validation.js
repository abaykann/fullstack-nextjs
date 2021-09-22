import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
    // fullname: Yup.string().required('Fullname is required'),
    // username: Yup.string()
    //   .required('Username is required')
    //   .min(6, 'Username must be at least 6 characters')
    //   .max(20, 'Username must not exceed 20 characters'),
    // email: Yup.string()
    //   .required('Email is required')
    //   .email('Email is invalid'),
    // password: Yup.string()
    //   .required('Password is required')
    //   .min(6, 'Password must be at least 6 characters')
    //   .max(40, 'Password must not exceed 40 characters'),
    // confirmPassword: Yup.string()
    //   .required('Confirm Password is required')
    //   .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),

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

          picture: Yup
          .mixed()
          .required("You need to provide a file")
          .test("fileSize", "The file is too large", (value) => {
            return value && value[0].size <= 2000000;
          })
          .test("type", "We only support jpeg", (value) => {
            return value && value[0].type === "image/jpeg";
          }),
          
  });
  

export default ValidationSchema