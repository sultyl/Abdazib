import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "./Nav";
import { useState } from "react";
import Logo from "./Logo";

export default function Layout({children}) {
  const [showNav, setShowNav] = useState(false);
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-[#2713bd] w-screen h-screen flex items-center">
        <div className="w-full text-center">
          <button onClick={() => signIn('google')} className="bg-white p-4 px-6 rounded-lg">Log in with Google </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#2713bd] min-h-screen">
      <div className="md:hidden flex items-center p-4">
        <button onClick={() => setShowNav(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#2713bd] bg-white rounded-sm">
        <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
        </svg>
        </button>
        <div className="flex grow justify-center text-white font-bold mr-8">
          <Logo />
        </div>
      </div>
      <div className="flex min-h-screen">
      <Nav show={showNav} />
      <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">
        {children}
      </div>
    </div>
    </div>
  );
  
}
