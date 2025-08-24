import AddEmployee from "./AddEmployee";
import EmployeesTable from "./EmployeesTable";

const EmployeeManagement = () => {
  return (
    <div className="md:border md:border-gray-200 md:rounded-lg md:p-4">
      <div className="flex justify-between items-center md:mb-4 flex-col md:flex-row gap-4">
        <div className="text-left">
          <div className="text-xl text-gray-500 font-bold md:text-xl md:font-semibold">
            Manage Your Employees
          </div>
          <div className="text-xs hidden md:block md:text-sm ">
            Your Team, Your Control, Manage Employees Here.
          </div>
        </div>
        <AddEmployee />
      </div>

      <div className=" rounded-lg">
        {/* <Filters dispatch={dispatch} /> */}
        <EmployeesTable />
      </div>
    </div>
  );
};

export default EmployeeManagement;
