"use server";

import { api, getEmail, type QuizResponse } from "@/actions/utils";



export const fetchQuiz = async (quizID: string | number) => {
  const email = await getEmail();
  const response = await api.get<QuizResponse>(`/quiz/${quizID}`, {
    headers: {
      "Authorization": email
    }
  });

  const data = response.data;
  return {
    id: data.questions[0].quiz_id,
    title: data.title,
    description: data.description,
    preview: data.preview_photo,
    progress: data.questions.filter(x => x.is_answered).length / data.questions.length,
    questions: data.questions.map((question) => ({
      id: question.answers[0].question_id,
      title: question.title,
      variants: question.answers.map((answer) => ({
        title: answer.title,
        isChosen: answer.is_chosen,
        description: answer.after_title,
        photos: answer.photos_url
      })),
      photos: question.photos_url,
      description: question.description,
      isAnswered: question.is_answered
    }))
  };
};