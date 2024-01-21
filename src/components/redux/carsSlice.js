import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const initialState = {
  allItems: [],
  items: [],
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: initialState,
  reducers: {
    carFilterSet(state, { payload }) {
      state.items = state.allItems.filter(
        car =>
          car.make === payload.selectedCarBrand &&
          car.rentalPrice === '$' + payload.selectedPrice &&
          car.mileage <= payload.selectedKmTo &&
          car.mileage >= payload.selectedKmFrom
      );
    },
    carFilterReset(state, { payload }) {
      state.items = state.allItems;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
        state.allItems = action.payload;
      });
  },
});

const carsReducer = carsSlice.reducer;
export default carsReducer;

export const { carFilterSet, carFilterReset } = carsSlice.actions;
