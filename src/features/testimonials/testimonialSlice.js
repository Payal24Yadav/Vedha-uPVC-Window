import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeIndex: 0,
  autoplay: true,
};

const testimonialSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {
    setActiveTestimonial: (state, action) => {
      state.activeIndex = action.payload;
    },
    nextTestimonial: (state, action) => {
      const total = action.payload;
      state.activeIndex = (state.activeIndex + 1) % total;
    },
    prevTestimonial: (state, action) => {
      const total = action.payload;
      state.activeIndex = (state.activeIndex - 1 + total) % total;
    },
    toggleAutoplay: (state) => {
      state.autoplay = !state.autoplay;
    },
  },
});

export const { setActiveTestimonial, nextTestimonial, prevTestimonial, toggleAutoplay } = testimonialSlice.actions;
export default testimonialSlice.reducer;
