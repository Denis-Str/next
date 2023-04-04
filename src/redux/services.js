import { createSlice } from '@reduxjs/toolkit';

export const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    services: [],
    isEdit: false,
    editingIndex: null,
  },
  reducers: {
    addService: (state, action) => {
      const { payload } = action;
      const currentItem = state.services.find(({ name }) => name === payload.name);

      if (currentItem && state.isEdit) {
        state.services = [
          ...state.services.filter(({ name }) => name !== payload.name),
          payload
        ];
        state.editingIndex = null;
      }
      if (currentItem === undefined) state.services.push(payload);
    },
    deleteService: (state, action) => {
      state.services = state.services.filter(({name}) => name !== action.payload);
    },
    toggleIsEdit: (state, action) => {
      state.isEdit = action.payload;
    },
    setEditingIndex: (state, action) => {
      state.editingIndex = action.payload;
    }
  },
})

export const { addService, deleteService, toggleIsEdit, setEditingIndex } = servicesSlice.actions;
export const isEdit = ({ services }) => services.isEdit;
export const services = ({ services }) => services.services;
export const editingIndex = ({ services }) => services.editingIndex;

export default servicesSlice.reducer
