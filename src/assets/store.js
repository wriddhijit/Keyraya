import { create } from "zustand";

export const useStore = create((set) => ({
    count: 0,
    increment: () => { 
        set({ count: 1 });
    },
    decrement: () => {
        set({ count: -1 });
     }
}))