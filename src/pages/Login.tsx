import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom";

type Inputs = {
    email: string
    password: string
  }
const LoginPage = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-25 w-full h-screen">
        <img src="/logo.png" alt="" />
        <div className="flex flex-col max-w-[407] items-center justify-center gap-15">
            <div className="max-w-[360px]">
          <p className="text-3xl font-bold">Sign in to your account</p>
            </div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center gap-7">
            <label>
              <Input {...register("email", {required:true})} className="w-[360px] h-[50px] text-center text-2xl" type="email" placeholder="Email" />
            </label>
            <label> 
              <Input {...register("password", {required:true})} className="w-[360px] h-[50px] text-center text-2xl" type="password" placeholder="Password" />
            </label>
            <div className="flex items-center w-[350px] justify-between">
              <label className="flex gap-2">
              <input type="radio" />
                <p>Remember Me</p>
              </label>
              <label>
                <a>Forgot password?</a>
              </label>
            </div>
            <Button onClick={() => navigate('/home')} type="submit" className="w-[360px] h-[50px] bg-blue-600 text-white hover:bg-blue-900 cursor-pointer ">Sign In</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;