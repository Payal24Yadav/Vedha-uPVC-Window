import { createSlice } from '@reduxjs/toolkit';
import { galleryData } from '../../data/gallery';

const initialState = {
  allItems: galleryData,
  filteredItems: galleryData,
  activeFilter: 'all',
  lightboxOpen: false,
  selectedImage: null,
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setGalleryFilter: (state, action) => {
      state.activeFilter = action.payload;
      if (action.payload === 'all') {
        state.filteredItems = state.allItems;
      } else {
        state.filteredItems = state.allItems.filter(
          (item) => item.category === action.payload
        );
      }
    },
    openLightbox: (state, action) => {
      state.lightboxOpen = true;
      state.selectedImage = action.payload; // payload can be { items, index } or an image object
    },
    closeLightbox: (state) => {
      state.lightboxOpen = false;
      state.selectedImage = null;
    },
    setSelectedImage: (state, action) => {
      state.selectedImage = action.payload;
    },
  },
});

export const {
  setGalleryFilter,
  openLightbox,
  closeLightbox,
  setSelectedImage,
} = gallerySlice.actions;

export default gallerySlice.reducer;
