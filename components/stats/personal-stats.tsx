"use client";

import { type ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import { useFetchQuiz } from "@/hooks";
import { notFound, useParams } from "next/navigation";
import type { QuizByIDResponse } from "@/actions";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "../ui/skeleton";

const chartConfig = {
  completed: {
    label: "Выполнено",
    color: "hsl(var(--chart-2))"
  }
} satisfies ChartConfig;

const PersonalStatsChart = ({ data }: { data: QuizByIDResponse }) => {
  const completed = data.questions
    .filter(q => q.answers.some(a => a.is_correct && a.is_chosen))
    .length;
  const all = data.questions.length;
  const chartData = [
    {
      completed: completed / all,
      fill: "hsl(var(--chart-2))"
    }
  ];

  return (
    <Card className="w-60 h-80 shrink-0">
      <CardHeader className="border-b mb-5">
        <CardTitle>Ваш результат</CardTitle>
        <CardDescription>{completed}/{all} верных ответов</CardDescription>
      </CardHeader>
      <CardContent className="relative">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={90}
            endAngle={90 + chartData[0].completed * 360}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="completed" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {(chartData[0].completed * 100).toFixed(0)}%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Правильно
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

const PersonalStatsChartSkeleton = () => {
  return (
    <Card className="w-60 h-80 shrink-0">
      <CardHeader className="border-b mb-5">
        <CardTitle>
          <Skeleton className="w-fit"> Ваш результат</Skeleton>
        </CardTitle>
        <CardDescription>
          <Skeleton className="w-fit">000/000 верных ответов</Skeleton>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Skeleton className="m-auto size-40 rounded-full" />
      </CardContent>
    </Card>
  );
};


export const PersonalStats = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isSuccess, isError, isLoading } = useFetchQuiz(id);

  if (isError) notFound()
  if (isLoading) return (
    <div className="flex justify-between sm:flex-row flex-col">
      <div className="flex flex-col gap-2 pb-2">
        <h1 className="font-extrabold text-4xl">
          <Skeleton className="w-fit">Фото-квиз</Skeleton>
        </h1>
        <Skeleton className="w-fit">Описание длинное очень... Вот такое</Skeleton>
      </div>
      <PersonalStatsChartSkeleton />
    </div>
  );

  if (isSuccess) return (
    <div className="flex justify-between sm:flex-row flex-col">
      <div className="flex flex-col gap-2 pb-2">
        <h1 className="font-extrabold text-4xl">{data.title}</h1>
        <p>{data.description}</p>
      </div>
      <PersonalStatsChart data={data} />
    </div>
  );
};