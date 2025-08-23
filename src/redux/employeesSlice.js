import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getEmployees } from "../services/employeeService";

// Async thunk for fetching employees
export const fetchEmployees = createAsyncThunk(
  "employees/fetchEmployees",
  async () => {
    const data = await getEmployees();
    return data;
  }
);

const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    employees: [],
    loading: false,
    error: null,
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter(
        (emp) => emp.employeeId !== action.payload
      );
    },
    updateEmployee: (state, action) => {
      const index = state.employees.findIndex(
        (emp) => emp.employeeId === action.payload.employeeId
      );
      if (index !== -1) {
        state.employees[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addEmployee, deleteEmployee, updateEmployee } =
  employeesSlice.actions;
export default employeesSlice.reducer;
