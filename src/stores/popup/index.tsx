// store/popupStore.ts
import create from "zustand";

interface PopupStore {
  showPopup: boolean;
  setShowPopup: (show: boolean) => void;
}

const usePopupStore = create<PopupStore>((set) => ({
  showPopup: true,
  setShowPopup: (show) => set({ showPopup: show }),
}));

export default usePopupStore;
