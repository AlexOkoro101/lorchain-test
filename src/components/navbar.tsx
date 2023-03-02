import useGithubUser from '@/hooks/useGithubUser';
import React, { useState } from 'react';
import { Inter } from 'next/font/google';
import { Logo, SearchIcon } from './icons';
import { User } from '@/types';
const inter = Inter({ subsets: ['latin']});


const Navbar = () => {
  const { setUser, setIsLoading, setError }: User = useGithubUser();
  const [username, setUsername] = useState('');

  //function to search username
  const searchUsername = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
  
    //fetch API
    fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(result => {
      console.log(result);
      if(result.message) {
        setError(result.message);
        setUser({});
      }
      else {
        setUser(result)
      }
    })
    .catch(e => {
      console.log(e)
    })
    .finally(() => {
      setIsLoading(false);
    })
  }

  return (
    <div 
      className="h-[4.5rem] px-[2.563rem] bg-primary flex gap-[1.376rem] items-center"
    >
      <Logo />
      <form
        onSubmit={searchUsername}
        className="flex items-center gap-[0.688rem] bg-white rounded-[0.375rem] h-[2.5rem] w-[31.25rem] px-[1.188rem]"
      >
        <SearchIcon />
        <input 
          type="search" 
          name="github-user"
          id="github-user"
          placeholder="Enter GitHub username"
          value={username}
          className={`border-0 bg-transparent text-sm ${inter.className} active:outline-none focus:outline-none focus-visible:outline-none flex-grow placeholder:text-[#808080]`}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input type="submit" style={{position: "absolute", left: "-9999px"}}/>
      </form>
    </div>
  )
}

export default Navbar;