"use client";

import { FC, useState } from "react";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { Icons } from "./Icons";
import { useToast } from "@/hooks/use-toast";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const loginWithTwitter = async () => {
    setIsLoading(true);
    try {
      await signIn("twitter");
    } catch (err) {
      //toast error
      toast({
        title: "Unable to Sign In",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex justify-center", className)}>
      <Button
        onClick={loginWithTwitter}
        isLoading={isLoading}
        className="w-full"
      >
        {isLoading ? null : (
          <Icons.twitterLogo className="w-6 h-6 mr-2 fill-blue-500" />
        )}
        Twitter
      </Button>
    </div>
  );
};

export default UserAuthForm;
