import { Button, Modal } from "antd";
import React from "react";
import * as z from "zod";

const addEmployeeSchema = z.object({
  employeeName: z.string().min(2, "Name should be at least 2 characters long"),
  salary: z.number().min(0, "Salary must be a positive number"),
  department: z
    .string()
    .min(2, "Department should be at least 2 characters long"),
  role: z.string().min(2, "Role should be at least 2 characters long"),
  status: z.enum(["Active", "Inactive"], {
    required_error: "Status is required",
  }),
});

const AddEmployee = () => {
  const [isModelOpen, setIsModalOpen] = React.useState(false);

  const onAddEmployee = () => {
    setIsModalOpen(true);
  };

  const onCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" size="medium" onClick={onAddEmployee}>
        Add Employee
      </Button>
      <Modal
        centered={true}
        open={isModelOpen}
        onCancel={onCancel}
        title={
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-50 rounded">
              <div className="w-6 h-6 flex items-center justify-center">
                {/* <Building2 /> */}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold m-0">Add User</h3>
              <p className="text-sm text-gray-500 m-0 font-normal">
                Securely Add Users and Define Roles.
              </p>
            </div>
          </div>
        }
      >
        <form></form>
      </Modal>
    </>
  );
};

export default AddEmployee;
