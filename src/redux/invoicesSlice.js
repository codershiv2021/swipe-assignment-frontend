import { createSlice } from "@reduxjs/toolkit";

const invoicesSlice = createSlice({
  name: "invoices",
  initialState: { list: [] },
  reducers: {
    addInvoice: (state, action) => {
      state.list.push(action.payload);
    },
    deleteInvoice: (state, action) => {
      state.list = state.list.filter((invoice) => invoice.id !== action.payload);
    },
    updateInvoice: (state, action) => {
      const index = state.list.findIndex(
        (invoice) => invoice.id === action.payload.id
      );
      if (index !== -1) {
        state.list[index] = action.payload.updatedInvoice;
      }
    },
  },
});

export const {
  addInvoice,
  deleteInvoice,
  updateInvoice,
} = invoicesSlice.actions;

export const selectInvoiceList = (state) => state.invoices;

export default invoicesSlice.reducer;
