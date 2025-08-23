// ✅ Just keep this as a plain array, not an async function
const employeesList = [
  {
    employeeId: "0001",
    name: "John Doe",
    email: "ayyappan.sjec@gmail.com",
    joiningDate: "2025-08-23",
    department: "Engineering",
    role: "Software Engineer",
    status: "Active",
  },
  {
    employeeId: "0002",
    name: "Jane Smith",
    email: "ayyappan.sjec@gmail.com",
    joiningDate: "2025-05-15",
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
