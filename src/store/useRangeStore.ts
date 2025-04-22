import { create } from 'zustand';

interface RangeState {
  rangeValues: [number, number];
  locations: {
    [key: string]: number;
  };
  setRangeValues: (values: [number, number]) => void;
  setLocations: (locations: { [key: string]: number }) => void;
}

const useRangeStore = create<RangeState>((set) => ({
  rangeValues: [11.4, 34.9],
  locations: {
    'Lâm Đồng': 11.4,
    'Hà Nội': 34.9
  },
  setRangeValues: (values) => set({ rangeValues: values }),
  setLocations: (locations) => set({ locations })
}));

export default useRangeStore; 