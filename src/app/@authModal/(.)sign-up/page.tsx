"use-client";

import CloseModal from "@/components/CloseModal";
import SignUp from "@/components/SignUp";

const page = () => {
  return (
    <div className="fixed inset-0 bg-zinc-900/20 z-10">
      <div className="container flex items-center h-full max-w-lg mx-auto">
        <div className="relative bg-white h-git w-full py-20 px-2 rounded-xl">
          <div className="absolute top-2 right-2">
            <CloseModal />
          </div>
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default page;
