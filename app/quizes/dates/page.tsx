import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Page = () => {

  return (
    <main className="grow flex flex-col items-center justify-center ">

      <div className="flex flex-col gap-2 p-4 bg-secondary rounded-lg">
        <h2 className="font-heading font-semibold text-4xl">Вопрос 1</h2>
        <p className="text-xl py-4">Когда началась Великая Отечественная война?</p>
        <RadioGroup>
          <div className="flex gap-2">
            <RadioGroupItem value="a" id="a" />
            <Label htmlFor="a">22 июня 1940 года</Label>
          </div>
          <div className="flex gap-2">
            <RadioGroupItem value="b" id="b" />
            <Label>1 сентября 1939 года</Label>
          </div>
          <div className="flex gap-2">
            <RadioGroupItem value="c" id="c" />
            <Label>22 июня 1941 года</Label>
          </div>
          <div className="flex gap-2">
            <RadioGroupItem value="d" id="d" />
            <Label>7 ноября 1941 года</Label>
          </div>
        </RadioGroup>
        <Button className="my-4">Проверить ответ</Button>
      </div>

    </main>
);
};

export default Page;