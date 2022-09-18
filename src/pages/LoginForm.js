import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";




const BasicForm = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    let user =  {
      email : values.email,
      pwd :values.password
    }
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate("/index");
    
    
  };
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <section className="public">
            <header>
                <h1>Login</h1>
            </header>
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        id="email"
        type="email"
        placeholder="Enter your email"
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}
      
     
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password ? "input-error" : ""}
      />
      {errors.password && touched.password && (
        <p className="error">{errors.password}</p>
      )}
      
      <button className="Submit-login"  disabled={isSubmitting} type="submit">
      Login
      </button>
    </form>
    </section>
  );
};
export default BasicForm;