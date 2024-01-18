import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://65a935e9219bfa371868c91a.mockapi.io';


  export const fetchCars = createAsyncThunk(
    'cars/fetchAll',
    async (_, thunkAPI) => {
      try {
        const response = await axios.get('/cars');

        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );