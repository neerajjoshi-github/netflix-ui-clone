import { create } from "zustand";

type State = {
  userEmail: string;
  selectedPlan: "mobile" | "basic" | "standard" | "premium";
  activeSlideIndex: number;
};

type Action = {
  updateUserEmail: (userEmail: State["userEmail"]) => void;
  updateSelectedPlan: (choosedPlan: State["selectedPlan"]) => void;
  updateActiveSlideIndex: (activeSlideIndex: State["activeSlideIndex"]) => void;
};

const useStore = create<State & Action>()((set) => ({
  userEmail: "",
  selectedPlan: "mobile",
  activeSlideIndex: 0,
  updateUserEmail: (userEmail) => set(() => ({ userEmail: userEmail })),
  updateSelectedPlan: (selectedPlan) =>
    set(() => ({ selectedPlan: selectedPlan })),
  updateActiveSlideIndex: (activeSlideIndex) =>
    set(() => ({ activeSlideIndex: activeSlideIndex })),
}));

export default useStore;
