// import { createSlice } from '@reduxjs/toolkit';

// interface HeaderState {
//   showSideBar: boolean; // Tracks the sidebar visibility
// }

// const initialState: HeaderState = {
//   showSideBar: false, // Initially, the sidebar is hidden
// };

// export const headerSlice = createSlice({
//   name: 'header', // A more descriptive name for this slice
//   initialState,
//   reducers: {
//     toggleSideBar: (state) => {
//       state.showSideBar = !state.showSideBar; // Toggle the sidebar state
//     },
//     setSideBarVisibility: (state, action) => {
//       state.showSideBar = action.payload; // Explicitly set sidebar visibility
//     },
//   },
// });

// // Export the actions for use in components
// export const { toggleSideBar, setSideBarVisibility } = headerSlice.actions;

// // Export the reducer to be added to the store
// export default headerSlice.reducer;

// redux/slices/headerSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface HeaderState {
  showSideBar: boolean;
}

const initialState: HeaderState = {
  showSideBar: false,
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.showSideBar = !state.showSideBar;
    },
    closeSideBar: (state) => {
      state.showSideBar = false;
    },
  },
});

export const { toggleSideBar, closeSideBar } = headerSlice.actions;

export default headerSlice.reducer;
