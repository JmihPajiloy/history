import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const QuizCard = () => {
  return (
    <Card className="h-fit ">
      <CardHeader className="flex py-4 flex-row items-center justify-between gap-4">
        <CardTitle>Даты и события</CardTitle>
        <Button>Пройти</Button>
      </CardHeader>
    </Card>
  );
};