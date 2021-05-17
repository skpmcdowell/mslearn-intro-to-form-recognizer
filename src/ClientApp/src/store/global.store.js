import create, { SetState, GetState } from "zustand";
import { getDataUrlFromFile, getImageUriFromFileName } from "../utility";

// ---------------------------------------------------------------
// Global Methods (are here because they manipulate global state)
// ---------------------------------------------------------------
const setActiveTab = (tabName) => {
  const state = useStore.getState();
  useStore.setState({
    ...state,
    activeTab: tabName,
  });
};

const onSelectImage = (image) => {
  const state = useStore.getState();
  const uri = getImageUriFromFileName(image.filename);
  useStore.setState({
    ...state,
    selectedImage: { uri, file: undefined, dataUri: undefined },
  });
};
// ---------------------------------------------------------------
// Global State vars
// ---------------------------------------------------------------
// defines a store, setting the intial state
export const useStore = create((set, get) => ({
  activeTab: "Invoices",
  selectedImage: {
    uri: undefined,
    file: undefined,
    dataUri: undefined,
  },
  setActiveTab: setActiveTab,
  onSelectImage: onSelectImage,
}));
