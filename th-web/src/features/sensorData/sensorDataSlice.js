import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchMeasurements, fetchSensors } from './sensorDataAPI';

const initialState = {
    sensors: [],
    data: []
};

export const fetchMeasurementsAsync = createAsyncThunk(
    'sensor/fetchMeasurements',
    async (sensorId) => {
        return fetchMeasurements(sensorId);
    }
);

export const fetchSensorsAsync = createAsyncThunk(
    'sensor/fetchSensors',
    async () => {
        return fetchSensors();
    }
);

export const sensorGraphSlice = createSlice({
    name: 'sensor',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchMeasurementsAsync.fulfilled, (state, action) => {
            state.data = {
                ...state.data,
                [action.meta.arg]: action.payload
            };
        })
        .addCase(fetchSensorsAsync.fulfilled, (state, action) => {
            state.sensors = action.payload;
        });
    },
});

export const selectMeasurements = (state, sensorId) => state.sensor.data[sensorId];
export const selectSensors = (state) => state.sensor.sensors;

export default sensorGraphSlice.reducer;
