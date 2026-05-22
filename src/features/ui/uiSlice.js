import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: false,
  mobileMenuOpen: false,
  inquiryModalOpen: false,
  inquiryProduct: null,
  // New boolean for generic inquiry state
  isInquiryOpen: false,
  scrollProgress: 0,
  loading: true,
  lightboxOpen: false,
  lightboxImage: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.mobileMenuOpen = false;
    },
    // Existing modal actions
    openInquiryModal: (state, action) => {
      state.inquiryModalOpen = true;
      state.inquiryProduct = action.payload || null;
    },
    closeInquiryModal: (state) => {
      state.inquiryModalOpen = false;
      state.inquiryProduct = null;
    },
    // New generic inquiry actions (compatible with ProductCard)
    openInquiry: (state, action) => {
      state.isInquiryOpen = true;
      // reuse same payload for consistency
      state.inquiryProduct = action.payload || null;
    },
    closeInquiry: (state) => {
      state.isInquiryOpen = false;
      state.inquiryProduct = null;
    },
    setScrollProgress: (state, action) => {
      state.scrollProgress = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    openLightbox: (state, action) => {
      state.lightboxOpen = true;
      state.lightboxImage = action.payload;
    },
    closeLightbox: (state) => {
      state.lightboxOpen = false;
      state.lightboxImage = null;
    },
  },
});

export const {
  toggleDarkMode,
  setDarkMode,
  toggleMobileMenu,
  closeMobileMenu,
  openInquiryModal,
  closeInquiryModal,
  openInquiry,
  closeInquiry,
  setScrollProgress,
  setLoading,
  openLightbox,
  closeLightbox,
} = uiSlice.actions;

export default uiSlice.reducer;
