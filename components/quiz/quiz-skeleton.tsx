import { Skeleton } from "@/components/ui/skeleton";
import { RadioGroup } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink, PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";

export const QuizSkeleton = () => {
  return <main className="grow flex flex-col items-center ">
    <div className="flex w-96 justify-between items-center py-4">
      <Skeleton className="font-semibold text-lg">Вопрос # 32/33 </Skeleton>
    </div>
    <Skeleton className="text-xl font-medium my-4 text-center">Очень длинный заголовок вопроса</Skeleton>
    <div className="flex flex-col gap-2 p-4">
      <RadioGroup className="grid grid-cols-2 gap-2">
        <Skeleton className="flex rounded-lg w-48 h-24" />
        <Skeleton className="flex rounded-lg w-48 h-24" />
        <Skeleton className="flex rounded-lg w-48 h-24" />
        <Skeleton className="flex rounded-lg w-48 h-24" />
      </RadioGroup>
      <Button type="submit" className="my-4">Проверить ответ</Button>
    </div>
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href={`/quizes/`}>
            1
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext href={`/quizes`} />
        </PaginationItem>

      </PaginationContent>
    </Pagination>
  </main>;
};