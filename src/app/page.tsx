import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>CI/CD GithubActions test2</h1> 
      <div>Prueba subida1</div>
      <div>Prueba subida2</div>
      <div>Prueba subida3</div>
      <div>Prueba subida4-</div>
      <div>Prueba subida5</div>
      <div>Prueba subida6</div>
      <div>Prueba subida7</div>
      <section className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold">
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h2>
      </section>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </main>
  );  
}  
