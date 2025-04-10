const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: null,
  role: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user } = action.payload;
      state.user = user;
      state.role = user?.role;
      state.isAuthenticated = true;
    },
    deleteUser: (state) => {
      state.user = null;
      state.role = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, deleteUser } = authSlice.actions;
export default authSlice.reducer;
