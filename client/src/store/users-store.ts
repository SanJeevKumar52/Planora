import { create } from "zustand";
import type { UserType } from "../interfaces";

export interface UsersStoreType {
  currentUser: UserType | null;
  setCurrentUser: (user: UserType) => void;
}

const usersGlobalStore = create((set) => ({
  currentUser: null,
  setCurrentUser: (user: UserType) => set({ currentUser: user }),
}));

export default usersGlobalStore;
