"use client"
import { create } from "zustand/react";

type Topic = {
  name: string,
  inView: boolean
}

type State = {
  topics: Topic[],
}

type Actions = {
  add(x: Topic): void
  get current(): Topic | null
  setInView(name: string): void
}

export const useTopic = create<State & Actions>((set, get) => ({
  topics: [],

  get current(): Topic | null {
    return get().topics.find(topic => topic.inView) ?? null;
  },

  setInView(name: string) {
    set(state => ({
      ...state,
      topics: state.topics.map(t => t.name === name ? { name, inView: true } : t)
    }));
  },


  add(x: Topic) {
    set(
      state => ({
        ...state.topics,
        topics: state.topics.concat([x])
      })
    );
  }

}));