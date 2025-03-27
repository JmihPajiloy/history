import { useQuery } from "@tanstack/react-query";
import { fetchQuizStats } from "@/actions/fetch-quiz-stats";

export const useFetchStats = (quizID: string) => {
  return useQuery({
    queryKey: ["stats", quizID],
    queryFn: async () => {
      const [res, err] = await fetchQuizStats(quizID);
      console.log(err);
      if (err) throw err;
      return res;
    },
    staleTime: 1000 * 60 * 5,
  });
};