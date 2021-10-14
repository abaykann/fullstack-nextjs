import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('email is Required'),
    password: Yup.string().required('Password is required')

})
export default ValidationSchema