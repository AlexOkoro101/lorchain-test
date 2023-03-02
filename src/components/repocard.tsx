import { RepoProps } from "@/types";
import { FC } from "react";

const RepoCard: FC = ({ html_url, name, description }: RepoProps) => {
  return (
    <div className="rounded-md bg-white px-8 py-6">
      <a 
        href={html_url ?? ''} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-primary leading-[1.813rem] text-2xl"
      >
        <span>
          {name ?? 'N/A'}
        </span>
      </a>
      <p className="text-base leading-[1.21rem] mt-4">
        {description ?? 'N/A'}
      </p>
    </div>
  );
};

export default RepoCard;