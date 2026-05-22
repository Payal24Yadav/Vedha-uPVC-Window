import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../features/ui/uiSlice';
import productReducer from '../features/products/productSlice';
import galleryReducer from '../features/gallery/gallerySlice';
import testimonialReducer from '../features/testimonials/testimonialSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    products: productReducer,
    gallery: galleryReducer,
    testimonials: testimonialReducer,
  },
});
