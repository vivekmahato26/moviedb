import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import paymnetApi from "../../paymentApi";
export default createSlice({
    name: "Payment",
    initialState: {
        key: {
            value: "",
            status: "pending",
            error: null
        },
        order: {
            value: "",
            status: "pending",
            error: null
        },
        payment: {
            value: "",
            status: "pending",
            error: null
        }
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchKey.pending, (state,action) => {
            state.key.status ="pending";
            state.key.error = null;
        })
        builder.addCase(fetchKey.fulfilled, (state,action) => {
            state.key.value = action.payload;
            state.key.status = "fulfilled";
            state.key.error = null;
        })
        builder.addCase(fetchKey.rejected, (state,action) => {
            state.key.status = "rejected";
            state.key.error = action.payload;
        })
        builder.addCase(createOrder.pending, (state,action) => {
            state.order.status ="pending";
            state.order.error = null;
        })
        builder.addCase(createOrder.fulfilled, (state,action) => {
            state.order.value = action.payload;
            state.order.status = "fulfilled";
            state.order.error = null;
        })
        builder.addCase(createOrder.rejected, (state,action) => {
            state.order.status = "rejected";
            state.order.error = action.payload;
        })
        builder.addCase(fetchPayment.pending, (state,action) => {
            state.payment.status ="pending";
            state.payment.error = null;
        })
        builder.addCase(fetchPayment.fulfilled, (state,action) => {
            state.payment.value = action.payload;
            state.payment.status = "fulfilled";
            state.payment.error = null;
        })
        builder.addCase(fetchPayment.rejected, (state,action) => {
            state.payment.status = "rejected";
            state.payment.error = action.payload;
        })
    }
})

export const fetchKey = createAsyncThunk("key/fetch", async () => {
    try {
        const { data } = await axios.get(paymnetApi.getKey);
        return data;
    } catch (error) {
        return error;
    }
})
export const createOrder = createAsyncThunk("order/create", async (arg) => {
    try {
        const { data } = await axios.post(paymnetApi.createOrder,arg);
        return data;
    } catch (error) {
        return error;
    }
})
export const fetchPayment = createAsyncThunk("payment/fetch", async (arg) => {
    try {
        const { data } = await axios.post(paymnetApi.getPaymnet,arg);
        return data;
    } catch (error) {
        return error;
    }
})