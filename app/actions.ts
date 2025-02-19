"use server";


import { signIn } from "@/auth";

export async function login() {
  return await signIn("vk");
}