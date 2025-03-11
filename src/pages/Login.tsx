import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const LoginPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-25 w-full h-screen">
        <img src="/logo.png" alt="" />
        <div className="flex flex-col max-w-[407] items-center justify-center gap-15">
            <div className="max-w-[360px]">
          <p className="text-3xl font-bold">Sign in to your account</p>
            </div>
          <form className="flex flex-col items-center justify-center gap-7">
            <label>
              <Input className="w-[360px] h-[50px] text-center text-2xl" type="email" placeholder="Email" />
            </label>
            <label> 
              <Input className="w-[360px] h-[50px] text-center text-2xl" type="password" placeholder="Password" />
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
            <Button className="w-[360px] h-[50px] bg-blue-600 text-white hover:bg-blue-900 cursor-pointer ">Sign In</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
