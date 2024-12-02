import Image from "next/image";
import pic from "@/public/img.png";
// import { Button } from "@/components/ui/button";

export default function Page() {

  return (
    <main className="flex flex-col py-4 px-10 min-h-screen">
      <div className="flex flex-col mb-10">
        <h1 className="font-bold text-center font-serif text-8xl pb-5 border-y-2 border-y-accent-foreground ">
          Ленинград, после войны
        </h1>
        <div className="w-full h-1 bg-accent-foreground rounded my-2"/>
      </div>
      <div className="w-96 h-fit flex flex-col gap-2">
        <Image src={pic} alt="Main photo" className="rounded-md" />
        {/*<Button className="w-full font-serif tracking-widest	 font-bold" size="lg">Тык</Button>*/}
      </div>
      <h2 className="font-bold py-10 font-serif text-5xl">Квизычи</h2>
      <div className="flex gap-4 w-full">
        <div className="w-1/5 bg-primary h-96 rounded-md" />
        <div className="w-1/5 bg-primary h-96 rounded-md" />
        <div className="w-1/5 bg-primary h-96 rounded-md" />
        <div className="w-1/5 bg-primary h-96 rounded-md" />
        <div className="w-1/5 bg-primary h-96 rounded-md" />
      </div>
    </main>
  );
}
