import { EmptyStateType } from "@/types";
import { FC } from "react";
import { SearchIconAlt, TimesIcon, UserIcon } from "./icons";

const EmptyState:  FC<EmptyStateType> = ({ type }) => {
  return (
    <div className="flex flex-col gap-[2.625rem] justify-center items-center max-w-[13.125rem] m-auto">
      {type === 'user' && (
        <UserIcon />
      )}
      {type === 'repo' && (
        <TimesIcon />
      )}
      {type === 'default' && (
        <SearchIconAlt />
      )}
      <p 
        className="text-[#808080] text-[1.375rem] leading-[1.925rem] text-center"
      >
        {type === 'user' && 'User not found'}
        {type === 'repo' && 'Repository list is empty'}
        {type === 'default' && 'Start with searching a GitHub user'}
      </p>
    </div>
  );
};

export default EmptyState;