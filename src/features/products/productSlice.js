import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCategory: 'all',
  activeType: 'all',
  selectedProduct: null,
  productModalOpen: false,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.activeCategory = action.payload;
      state.activeType = 'all';
    },
    setType: (state, action) => {
      state.activeType = action.payload;
    },
    openProductModal: (state, action) => {
      state.selectedProduct = action.payload;
      state.productModalOpen = true;
    },
    closeProductModal: (state) => {
      state.selectedProduct = null;
      state.productModalOpen = false;
    },
  },
});

export const { setCategory, setType, openProductModal, closeProductModal } = productSlice.actions;
export default productSlice.reducer;
