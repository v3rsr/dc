import { FC } from "react";
import { User } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";
import { Icons } from "./Icons";
import { AvatarProps } from "@radix-ui/react-avatar";

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, "name" | "image">;
}

const UserAvatar: FC<UserAvatarProps> = ({ user, ...props }) => {
  return (
    <Avatar {...props}>
      {user.image ? (
        <AvatarImage
          src={user.image}
          alt={user.name ?? ""}
          referrerPolicy="no-referrer"
        />
      ) : (
        <AvatarFallback>
          {" "}
          <span className="sr-only"> {user.name} </span>{" "}
          <Icons.user className="w-4 h-4" />{" "}
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
