import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>CI/CD GithubActions test2</h1> 
      <div>Prueba subida1</div>
      <div>Prueba subida2</div>
      <div>Prueba subida3</div>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </main>
  );  
}  
