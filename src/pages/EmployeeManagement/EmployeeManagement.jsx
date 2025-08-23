import AddEmployee from "./AddEmployee";
import EmployeesTable from "./EmployeesTable";

const EmployeeManagement = () => {
  return (
    <div className="  ">
      <div className="flex justify-between items-center mb-4">
        <div className="text-left">
          <div className="text-xl font-semibold">Manage Your Employees</div>
          <div className="text-sm">
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
