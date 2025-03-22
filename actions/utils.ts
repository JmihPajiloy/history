import axios from "axios";
import { z, ZodError } from "zod";
import { auth } from "@/auth";

export const API_URL = process.env.API_URL;
if (!API_URL) {
  throw new Error("No API_URL env var found. Please set it in your .env file.");
}

export const api = axios.create({
  baseURL: API_URL,
})

export const getEmail = async () => {
  const creds = await auth();
  if (!creds?.user?.email) {
    console.error("Не удается получить доступ к email пользователя: ", creds?.user);
    throw new Error("Не удается получить доступ к email пользователя");
  }
  return creds.user.email;
};
export type AnswerResponse = {
  title: string;
  after_title: string | null,
  photos_url: string[],
  is_chosen: boolean;
  is_correct: boolean | null;
  question_id: number;
}

export type QuestionResponse = {
  title: string;
  description: string;
  photos_url: string[];
  is_answered: boolean;
  quiz_id: number;
  answers: AnswerResponse[];
}

export type QuizResponse = {
  title: string;
  description: string;
  questions: QuestionResponse[];
  photos_url: string[] | null;
  preview_photo: string | null
  is_completed: boolean;
}