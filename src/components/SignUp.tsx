import { FC } from "react";
import { Icons } from "./Icons";
import Link from "next/link";
import UserAuthForm from "./UserAuthForm";

const SignUp: FC = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col text-center">
        <Icons.logoDark className="mx-auto h-20 w-20 shadow-2xl" />
        <h1 className="text-2xl font-semibold tracking-tight mt-4">
          DCentral Sign Up
        </h1>
        <p className="text-sm max-w-xs mx-auto">
          Get back into those communities you love.
        </p>

        <UserAuthForm className="mt-8" />

        <p className="text-sm text-zinc-700 px-8 text-center mt-2">
          Already Signed Up?{" "}
          <Link
            href="/sign-in"
            className="hover:text-zinc-800 underline underline-offset-4 text-sm"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
