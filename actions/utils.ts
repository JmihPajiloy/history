import axios from "axios";
import { auth } from "@/auth";
import type { ErrorResponse, Result } from "@/actions/types";

export const API_URL = process.env.API_URL;
if (!API_URL) {
  throw new Error("No API_URL env var found. Please set it in your .env file.");
}

class AuthorizationError extends Error {}

export const api = axios.create({
  baseURL: API_URL,
});

export const tryCatch = async <T>(callback: () => Promise<T>): Promise<Result<T, ErrorResponse>> => {
  try {
    const result = await callback();
    return [result, null]
  } catch (e) {
    return [null, handleError(e)]
  }
}

export const handleError = (error: unknown): ErrorResponse => {
  if (axios.isAxiosError(error)) {
    if (!error.response) {
      return {
        type: "HttpError",
        title: "Ошибка сети",
        status: 500,
        details: "Не удалось связаться с сервером. Попробуйте еще раз позже"
      };
    }
    return {
      type: "HttpError",
      status: error.response.status,
      details: error.response.data?.detail ?? error.response.statusText
    };
  } else if (error instanceof Error) {
    return { type: error.name, details: error.message };
  }
  return {
    type: "UnknownError",
    title: "Неизвестная ошибка",
    details: "Упс... Что-то пошло не так"
  };
};

export const getEmail = async () => {
  const creds = await auth();
  if (!creds?.user?.email) {
    console.error("Не удается получить доступ к email пользователя: ", creds?.user);
    throw new AuthorizationError("Не удается получить доступ к email пользователя");
  }
  return creds.user.email;
};
