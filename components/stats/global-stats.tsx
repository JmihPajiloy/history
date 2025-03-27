"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useParams } from "next/navigation";
import { useFetchStats } from "@/hooks/use-fetch-stats";
import { StatsResponse } from "@/actions";


const chartConfig = {
  count: {
    label: "Ответы",
  },
} satisfies ChartConfig;


const GlobalStatsChart = ({ data }: { data: StatsResponse["questions"][number] }) => {
  const correctPercent = (data.correct_answers / (data.correct_answers + data.incorrect_answers) * 100).toFixed(1).replace(".0", "").replace(".", ",")

  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>{data.question_title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={data.answers.map((ans, i) => ({ ...ans, fill: `hsl(var(--chart-${(i % 5) + 1}))` }))}
            layout="vertical"
            margin={{
              left: 0
            }}
          >
            <YAxis
              dataKey="title"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                const index = data.answers.findIndex(ans => ans.title === value);
                return "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[index];
              }
              }
            />
            <XAxis dataKey="count" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />
            <Bar dataKey="count" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          С этим вопросом справилось {correctPercent}% пользователей
        </div>
      </CardFooter>
    </Card>
  );
};

export function GlobalStats() {
  const { id } = useParams<{ id: string }>();
  const {data} = useFetchStats(id);

  return (
    <div >
      <h2 className="font-bold text-3xl mb-5">Статистика ответов других пользователей</h2>
      <div className="grid gap-2 grid-cols-2 w-fit">
        {
          data?.questions.map((question) => <GlobalStatsChart key={question.question_id} data={question} />)
        }
      </div>
    </div>
  );
}
