import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [
    {
      employeeId: "001",
      name: "John Doe",
      email: "ayyappan@gmail.com",
      joiningDate: "2022-01-15",
      department: "Engineering",
      role: "Software Engineer",
      status: "Active",
    },
    {
      employeeId: "002",
      name: "John Doe",
      email: "ayyappan@gmail.com",
      doj: "2022-01-15",
      department: "Engineering",
      role: "Software Engineer",
      status: "Active",
    },
  ],
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
    updateEmployee: (state, action) => {
      const index = state.employees.findIndex(
        (e) => e.employeeId === action.payload.employeeId
      );
      if (index !== -1) {
        state.employees[index] = action.payload;
      }
    },
    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter(
        (e) => e.employeeId !== action.payload
      );
    },
  },
});

export const { addEmployee, updateEmployee, deleteEmployee } =
  employeesSlice.actions;
export default employeesSlice.reducer;
