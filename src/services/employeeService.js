// ✅ Just keep this as a plain array, not an async function
const employeesList = [
  {
    employeeId: "0001",
    name: "John Doe",
    department: "Engineering",
    role: "Software Engineer",
    status: "Active",
  },
  {
    employeeId: "0002",
    name: "Jane Smith",
    department: "Marketing",
    role: "Marketing Manager",
    status: "Inactive",
  },
];

export const getEmployees = async () => {
  try {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(employeesList);
      }, 2000);
    });
  } catch (error) {
    console.error(error);
    return [];
  }
};
