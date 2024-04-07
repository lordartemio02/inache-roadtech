import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import Layout from "../components/Layout";
import { useLoginMutation } from "../store/api/authApi";
import { onAuthAction } from "../store/slices/authSlice";

const LoginPage = () => {
  const nav = useNavigate();
  const [value, setValue] = useState("");
  const [login] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = async () => {
    try {
      const { accessToken } = await login({
        phone: value,
      }).unwrap();

      dispatch(onAuthAction());
      localStorage.setItem("accessToken", accessToken);
      nav(-1);
    } catch (error) {}
  };

  const onChangeValue = (val: string) => {
    setValue(val);
  };

  return (
    <Layout hideFooter>
      <div className="my-4 mx-4 border rounded-12 border-natural-500 flex justify-center relative flex-col items-center">
        <p className="text-[24px] mb-10 mt-10">Войти в профиль</p>
        <Input
          onChange={(e) => onChangeValue(e.target.value)}
          placeholder="+79999999999"
          value={value}
          className={"mb-6 max-w-[215px]"}
        />
        <Button className="w-full max-w-[215px] mb-6" onClick={onSubmit}>
          Продолжить
        </Button>
      </div>
    </Layout>
  );
};

export default LoginPage;
