"use client";
import { Button } from "@/components/ui/button";
// import axios from "axios";

type Func = (x: number) => number

type Props = {
  state: number,
  setState: (a: number | Func) => void
}

// type Status = "loading" | "success" | "error"



export const Counter = ({ state, setState }: Props) => {
  // const [status, setStatus] = useState<Status>("loading");
  // const [error, setError] = useState();
  // const [result, setResult] = useState<string>("")
  // useEffect(() => {
  //   (async () => {try {
  //   const res = await axios.get<string>("/api")
  //   setStatus("success")
  //   setResult(res.data)
  // } catch (e) {
  //   setStatus("error")
  //   setError(e)
  // }})()
  // }, [setState]);

  return (
    <div className="flex flex-col gap-2 w-96 items-center justify-center" >
      <span className="">Count: {state}</span>
      <Button className="w-full" onClick={() => setState(x => x + 1)}>+1</Button>
      <Button className="w-full" onClick={() => setState(x => x - 1)}>-1</Button>
    </div>
  );
};