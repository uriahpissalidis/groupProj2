import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import availabilityService from "./availabilityService";

const initialState = {
  availabilities: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//create new availability
export const createAvailability = createAsyncThunk(
  "availabilities/create",
  async (availabilityData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth;
      return await availabilitySlice.createAvailability(
        availabilityData,
        token
      );
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get user availabilities
export const getAvailabilities = createAsyncThunk(
  "availabilities/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await availabilityService.getAvailabilities(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete user availability
export const deleteAvailability = createAsyncThunk(
  "availabilities/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await availabilityService.deleteAvailability(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const availabilitySlice = createSlice({
  name: "availability",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAvailability.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAvailability.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.availabilities.push(action.payload);
      })
      .addCase(createAvailability.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAvailabilities.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAvailabilities.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.availabilities = action.payload;
      })
      .addCase(getAvailabilities.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteAvailability.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAvailability.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.availabilities = state.availabilities.filter(
          (availability) => availability._id !== action.payload.id
        );
      })
      .addCase(deleteAvailability.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = availabilitySlice.actions;
export default availabilitySlice.reducer;
