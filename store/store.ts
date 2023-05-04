import { create } from "zustand";

type State = {
  userEmail: string;
  selectedPlan: "mobile" | "basic" | "standard" | "premium";
};

type Action = {
  updateUserEmail: (userEmail: State["userEmail"]) => void;
  updateSelectedPlan: (choosedPlan: State["selectedPlan"]) => void;
};

const useStore = create<State & Action>()((set) => ({
  userEmail: "",
  selectedPlan: "mobile",
  updateUserEmail: (userEmail) => set(() => ({ userEmail: userEmail })),
  updateSelectedPlan: (selectedPlan) =>
    set(() => ({ selectedPlan: selectedPlan })),
}));

export default useStore;
