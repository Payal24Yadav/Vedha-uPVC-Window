import { createSlice } from '@reduxjs/toolkit';
import { productsData } from '../../data/products';

const initialState = {
  allProducts: productsData,
  filteredProducts: productsData,
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
      state.filteredProducts = filterProducts(state.allProducts, action.payload, state.activeType);
    },
    setType: (state, action) => {
      state.activeType = action.payload;
      state.filteredProducts = filterProducts(state.allProducts, state.activeCategory, action.payload);
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

function filterProducts(products, category, type) {
  return products.filter((product) => {
    const categoryMatch = category === 'all' || product.category === category;
    const typeMatch = type === 'all' || product.type === type;
    return categoryMatch && typeMatch;
  });
}

export const { setCategory, setType, openProductModal, closeProductModal } = productSlice.actions;
export default productSlice.reducer;
