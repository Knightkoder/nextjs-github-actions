import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>CI/CD GithubActions test2</h1> 
      <div className="flex flex-col items-center justify-center">
        <Image src="/nextjs.png" alt="Next.js Logo" width={180} height={60} />
      </div>
      <div className="flex flex-col items-center justify-center ">
        <a
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          href="https://nextjs.org/docs"
        >
          Learn Next.js
        </a>
        </div>

      <section className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold">
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h2>
      </section>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </main>
  );  
}  


