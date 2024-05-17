import {create} from 'zustand';

// Define the state interface
interface SearchState {
  query: string;
  results: any[];
  loading: boolean;
  setQuery: (query: string) => void;
  setResults: (results: string[]) => void;
  setLoading: (loading: boolean) => void;
}

// Create the store with the defined state and actions
const useSearchStore = create<SearchState>((set) => ({
  query: '',
  results: [],
  loading: false,
  setQuery: (query: string) => set({ query }),
  setResults: (results: string[]) => set({ results }),
  setLoading: (loading: boolean) => set({ loading }),
}));

export default useSearchStore;
