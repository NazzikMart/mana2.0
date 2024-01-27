import { useForm } from "react-hook-form";
import { useState } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isAccount, setIsAcount] = useState(true);

  const handleRegistration = async (data) => {
    try {
      const response = await axios.post("http://localhost:3001/register", data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async (data) => {
    try {
      const response = await axios.post("http://localhost:3001/login", data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleAccount = () => {
    setIsAcount(!isAccount);
  };

  return (
    <div className="forms">
      {isAccount ? (
        <form
          className="profile-register"
          onSubmit={handleSubmit(handleRegistration)}
        >
          <h2 className="register-name">Реєстрація</h2>
          <input
            className="reg-name"
            placeholder="Введіть своє ім'я"
            {...register("firstName", { required: true })}
            type="text"
          />
          {errors.firstName && <p>Ім'я обов'язкове</p>}
          <input
            className="reg-number"
            placeholder="Введіть номер телефону"
            {...register("number", { required: true, pattern: /^[0-9\b]+$/ })}
            type="phone"
          />
          {errors.number && <p>Недійсний номер телефону</p>}
          <input
            className="reg-password"
            placeholder="Придумайте пароль"
            {...register("password", { required: true, minLength: 6 })}
            type="password"
          />
          {errors.password && <p>Пароль повинен бути принаймні 6 символів</p>}
          <div className="profile-btn-reg">
            <button className="btn-reg">Реєстрація</button>
          </div>
          <div className="profile-btn-log">
            <button className="btn-log" onClick={toggleAccount}>
              Увійти
            </button>
          </div>
        </form>
      ) : (
        <form className="profile-login" onSubmit={handleSubmit(handleLogin)}>
          <h2 className="login-name">Увійти</h2>
          <input
            className="log-number"
            placeholder="Введіть номер телефону"
            {...register("number", { required: true, pattern: /^[0-9\b]+$/ })}
            type="phone"
          />
          {errors.number && <p>Недійсний номер телефону</p>}
          <input
            className="log-password"
            placeholder="Введіть пароль"
            {...register("password", { required: true })}
            type="password"
          />
          {errors.password && <p>Пароль обов'язковий</p>}
          <div className="profile-btn-log">
            <Link
              to="/user"
              className="btn-log log-user"
              onClick={toggleAccount}
            >
              Увійти
            </Link>
          </div>
        </form>
      )}
    </div>
  );
}
