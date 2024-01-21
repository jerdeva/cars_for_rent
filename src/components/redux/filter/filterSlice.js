import { createSlice } from '@reduxjs/toolkit';
import carBrandsData from '../../../makes.json';

const filterInitialState = {
  carBrands: carBrandsData,
  selectedCarBrand: '',
  selectedPrice: 0,
  selectedKmFrom: 0,
  selectedKmTo: 0,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterSelectCarBrandSet(state, { payload }) {
      state.selectedCarBrand = payload;
    },
    filterSelectPriceSet(state, { payload }) {
      state.selectedPrice = payload;
    },
    filterSelectKmFromSet(state, { payload }) {
      state.selectedKmFrom = payload;
    },
    filterSelectKmToSet(state, { payload }) {
      state.selectedKmTo = payload;
    },
    filterReset(state, { payload }) {
      state = filterInitialState;
    },
  },
});

const filterReducer = filterSlice.reducer;
export default filterReducer;

export const {
  filterSelectCarBrandSet,
  filterSelectPriceSet,
  filterSelectKmFromSet,
  filterSelectKmToSet,
  filterReset,
} = filterSlice.actions;
