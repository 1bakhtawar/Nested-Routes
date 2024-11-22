import Link from "next/link";


export default function Home() {
  return (
  <div className="bg-green-400">
   <main className="flex text-white w-full px-8 h-20 gap-12 bg-blue-500 justify-end">
   
   <div className="m-4 space-x-28 text-3xl">
   <Link href="/">Home</Link>
     <Link href="about">About</Link>
      <Link href="login">Login</Link>
   </div>
     </main>
      <h1 className="font-bold text-8xl text-slate-600 h-screen text-center m-32">This is my home page</h1>
    </div>  
    );
}
