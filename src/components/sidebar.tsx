import useGithubUser from "@/hooks/useGithubUser";
import { User } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { UserIconAlt, UsersIcon } from "./icons";

const Sidebar = () => {
  const { user }: User = useGithubUser();

  return (
    <div className="flex flex-col gap-[1.875rem] flex-shrink-0">
      <div className="w-[17.5rem] h-[17.5rem] rounded-full overflow-hidden relative">
        <Image 
          src={user?.avatar_url} 
          alt="user image"
          fill
        />
      </div>

      <div className="flex flex-col gap-[0.75rem]">
        <span
          className="block text-[1.625rem] leading-[2.113rem] font-semibold"
        >
          {user?.name ?? 'N/A'}
        </span>
        <a 
          href={user?.html_url ?? ''} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary block text-lg leading-[1.361rem] font-normal"
        >
          <span>
            {user?.login ?? 'N/A'}
          </span>
        </a>
      </div>

      <div className="flex gap-[1.25rem] items-center">
        <div 
          className="flex gap-2 items-center"
        >
          <UsersIcon />
          <span>{user?.followers ?? 0} Followers</span>
        </div>

        <div 
          className="flex gap-2 items-center"
        >
          <UserIconAlt />
          <span>{user?.following ?? 0} Following</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;