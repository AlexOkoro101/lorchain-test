import useGithubUser from '@/hooks/useGithubUser';
import { RepoProps, User } from '@/types';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import EmptyState from './emptystate';
import RepoCard from './repocard';

const Repositories = () => {
  //global user
  const { user }:User = useGithubUser();
  const [data, setData] = useState([]);
  const [paginationData, setPaginationData] = useState({
    currentPage: 1,
    itemsPerPage: 4
  })

  const indexOfLastPost = paginationData.currentPage * paginationData.itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - paginationData.itemsPerPage;
  const currentItems = data.slice(indexOfFirstPost, indexOfLastPost);
  

  useEffect(() => {
    if((user !== null) || (Object.keys(user).length > 0)) {
      getRepos()
    }
  }, [user])

  //function to get repositories
  const getRepos = () => {
  
    //fetch API
    fetch(`https://api.github.com/users/${user?.login}/repos`)
    .then(res => res.json())
    .then(result => {
      console.log(result);
      if(result.message) {
        //handle error
      }
      else {
        setData(result)
      }
    })
    .catch(e => {
      console.log(e)
    })
    .finally(() => {
      // setIsLoading(false);
    })
  }
  

  //page count
  const pageCount = Math.ceil(data?.length / paginationData.itemsPerPage);

  //functions
  const handlePageClick = ({ selected }: any) => {
    setPaginationData(prev => ({
      ...prev,
      currentPage: selected + 1
    }))
  }
  return (
    <div className="flex-grow">
      {data?.length >= 1 ? (
        <>
          <h1 className="text-[2rem] leading-[2.625rem] mb-[1.813rem] font-semibold">
            Repositories ({data.length})
          </h1>

          <div className="flex flex-col gap-[1.5rem]">
            {currentItems?.map((repo: RepoProps) => (
              <RepoCard
                key={repo.name}
                {...repo}
              />
            ))}
          </div>

          <div className="flex justify-end mt-[1.625rem]">
            <div className="flex gap-[1.474rem] items-center">
              <span 
                className="text-[#808080] text-sm leading-[1.313rem]"
              >
                {indexOfFirstPost + 1}-{indexOfLastPost} of {data.length} items
              </span>
              <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="<"
                containerClassName="pagination"
                pageLinkClassName="page-number"
                previousLinkClassName="page-number"
                activeLinkClassName="active-link"
                renderOnZeroPageCount={undefined}
              />
            </div>
          </div>

        </>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <EmptyState 
            type="repo"
          />
        </div>
      )}
    </div>
  );
};

export default Repositories;