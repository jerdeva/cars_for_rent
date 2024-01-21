export const selectCars = state => state.cars.items;
export const selectAllCars = state => state.cars.allCars;
export const selectCarBrands = state => state.cars.carsBrands;
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;

export const selectFavoriteCars = state => state.favoriteCars.favorites;

export const selectFilter = state => state.filter;
export const selectFilterCarBrands = state => state.filter.carBrands;
