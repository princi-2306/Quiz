import { stat } from 'fs';
import { userInfo } from 'os';
import React from 'react'
import { create } from 'zustand'
// import { devtools, persist } from "zustand/middleware"

// const userQuiz = create(
//     devtools(
//         persist(
//             (set, get) => ({
//                 user : {username, email, },
//                 users: [],
                
//             }),
//             {name: 'quiz-storage'}
//         )
//     )
// )

const userQuiz = create((set) => ({
  currentUser: null,
  users: [],
  login: (user) => set({ currentUser: user }),
  logout: () => {
    set({ currentUser: null });
    localStorage.removeItem("tokens");
  },
  addUser: (user) =>
    set((state) => {
      if (
        state.users.some((u) => u._id === user._id || u.email === user.email)
      ) {
        console.log("user already exists");
        return state;
      }
      return {
        users: [user, ...state.users],
        currentUser: user,
      };
    }),
  removeUser: (userId) =>
    set((state) => ({
      users: state.users.filter((p) => p._id !== userId),
    })),
  quizes: [],
  addQuiz: (quiz) =>
    set((state) => {
      if (
        state.quizes.some((q) => q._id === quiz._id)
      ) {
        console.log("user already exists");
        return state;
      }
      return {
        quizes: [quiz, ...state.quizes],
        currentUser: quiz,
      };
    }),
}));

export default userQuiz;