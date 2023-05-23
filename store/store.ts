import { create } from "zustand";

type favorite = {
  id: string;
  mediaType: "movie" | "tv";
};

export type MediaFavorite = {
  shows: ShowsResult[];
  movies: MoviesResult[];
};

type State = {
  userEmail: string;
  selectedPlan: "mobile" | "basic" | "standard" | "premium";
  activeSlideIndex: number;
  favorites: MediaFavorite;
};

type Action = {
  updateUserEmail: (userEmail: State["userEmail"]) => void;
  updateSelectedPlan: (choosedPlan: State["selectedPlan"]) => void;
  updateActiveSlideIndex: (activeSlideIndex: State["activeSlideIndex"]) => void;
  addFavorites: (favorites: State["favorites"]) => void;
  removeFavorites: (favorites: State["favorites"]) => void;
};

const useStore = create<State & Action>()((set) => ({
  userEmail: "",
  selectedPlan: "mobile",
  activeSlideIndex: 0,
  favorites: { movies: [], shows: [] },
  updateUserEmail: (userEmail) => set(() => ({ userEmail: userEmail })),
  updateSelectedPlan: (selectedPlan) =>
    set(() => ({ selectedPlan: selectedPlan })),
  updateActiveSlideIndex: (activeSlideIndex) =>
    set(() => ({ activeSlideIndex: activeSlideIndex })),
  addFavorites: (favorites) =>
    set((state) => ({
      favorites: {
        movies: [...state.favorites.movies, ...favorites.movies],
        shows: [...state.favorites.shows, ...favorites.shows],
      },
    })),
  removeFavorites: (favorites) =>
    set((state) => ({
      favorites: favorites,
    })),
}));

export default useStore;
