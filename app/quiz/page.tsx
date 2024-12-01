"use client"
import React, { useState } from "react";
import { Counter } from "@/components/counter";
import { Button } from "@/components/ui/button";

const Page = () => {
  const [state, setState] = useState(0);
  const [hidden, setHidden] = useState(false)
  return (
    <div className="p-4">
      <Button onClick={() => setHidden(x => !x)}>
        {hidden ? "show" : "hide"}
      </Button>
      {
        hidden || <Counter state={state} setState={setState }/>
      }
    </div>
  );
};

export default Page;