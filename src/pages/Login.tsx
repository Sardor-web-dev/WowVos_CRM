import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom";


const regex = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  };

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
      const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log("Form Data:", data);
        navigate("/home");
    };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-25 w-full h-screen">
        <img src="/logo.png" alt="" />
        <div className="flex flex-col max-w-[407px] items-center justify-center gap-15">
            <div className="max-w-[360px]">
          <p className="text-3xl font-bold">Sign in to your account</p>
            </div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center gap-5">
            <label>
              <Input {...register("email", {required:true, pattern:regex.email})} className="w-[360px] h-[50px] text-center text-2xl" type="email" placeholder="Email" />
              {errors.email && <span className="text-red-500">Invalid Email</span>}
            </label>
            <label> 
              <Input {...register("password", {required:true, pattern:regex.password})} className="w-[360px] h-[50px] text-center text-2xl" type="password" placeholder="Password" />
              {errors.password && <span className="text-red-500">Invalid Password</span>}
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
            <Button type="submit" className="w-[360px] h-[50px] bg-blue-600 text-white hover:bg-blue-900 cursor-pointer ">Sign In</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;