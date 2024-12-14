import { useQuery } from "@tanstack/react-query";
import axios from "axios";


export const useFetchQuiz = (name: string) => {
  return useQuery({
    queryKey: ["quizes"],
    queryFn: () => axios.get("", { params: name })
  });
};
