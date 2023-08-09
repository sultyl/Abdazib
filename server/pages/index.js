import { useSession } from "next-auth/react";
import Layout from "../components/Layout";

export default function Home() {
  const {data: session} = useSession();
  console.log({session})
  return (
    <Layout>
      <div className="text-[#bd6513] flex justify-between">
        <h1>
          Welcome, <b>{session?.user?.name}</b>
        </h1>
        <div className="flex text-black font-semibold bg-gray-300  rounded-lg overflow-hidden">
          <img src={session?.user?.image} alt="img" className="w-6 h-6 rounded-full"/>
          <span className="px-2">
            {session?.user?.name}
          </span>
        </div>
      </div>
    </Layout>
  )  
}
