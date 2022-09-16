import * as yup from "yup";

// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  email: yup
  .string()
  .email("Please enter a valid email").required("Required")
  .min(5)
  .max(50),
  
  password: yup
    .string()
    .min(5)
    .max(20)
    .required("Required"),
 
});