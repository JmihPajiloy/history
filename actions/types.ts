export type Result<T, E> = [T, null] | [null, E]

export type HttpError = {
  type: "HttpError"
  title?: string
  status: number
  details: string
}
export type ErrorResponse = HttpError | {
  type: string
  title?: string
  details: string
  status?: undefined
}

export type StatsResponse = {
  questions: {
    question_id: number
    question_title: string;
    correct_answers: number;
    incorrect_answers: number;
    answers: {
      id: number
      title: string;
      count: number
    }[]
  }[]
}


export type AnswerResponse = {
  id: number
  title: string;
  after_title: string | null,
  photos_url: string[],
  is_chosen: boolean;
  is_correct: boolean | null;
  question_id: number;
}

export type QuestionResponse = {
  id: number
  title: string;
  description: string;
  photos_url: string[];
  is_answered: boolean;
  quiz_id: number;
  answers: AnswerResponse[];
}

export type QuizByIDResponse = {
  id: number
  title: string;
  description: string | null;
  photos_url: string[] | null;
  preview_photo: string | null
  is_completed: boolean;
  questions: QuestionResponse[];
}

export type QuizAllResponse = Omit<QuizByIDResponse, "questions">[]

export type ArticleByIDResponse = {
  id: number;
  title: string;
  description: string | null;
  author: string | null;
  content_url: string | null;
  photo_url: string | null;
}

export type ArticleAllResponse = ArticleByIDResponse[]