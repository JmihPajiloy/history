"use server";


import { signIn } from "@/auth";

export const login = () => signIn("vk");
