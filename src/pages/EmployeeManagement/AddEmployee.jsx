import { Button, Modal, Input, Select, DatePicker, message } from "antd";
import { TeamOutlined } from "@ant-design/icons";
import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { departmentList, rolesList } from "../../utils/constants";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../redux/employeesSlice";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "../../hooks/useLocalStorate";

const addEmployeeSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  joiningDate: z.string().min(1, "Joining date is required"),
  // salary: z.number().min(0, "Salary must be a positive number"),
  department: z.string().min(1, "Department is required"),
  role: z.string().min(2, "Role is required"),
  status: z.enum(["Active", "Inactive"], {
    required_error: "Status is required",
  }),
});

const AddEmployee = () => {
  const dispatch = useDispatch();
  const [isModelOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [employees, setEmployees] = useLocalStorage("employees", []);
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(addEmployeeSchema),
    defaultValues: {
      name: "",
      email: "",
      joiningDate: "",
      salary: "",
      department: "",
      role: "",
      status: "Active",
    },
  });

  const onAddEmployee = () => {
    setIsModalOpen(true);
  };

  const onCancel = () => {
    setIsModalOpen(false);
    reset();
  };
  const onSubmit = (data) => {
    console.log("form submitted", data);
    const newEmployee = { employeeId: uuidv4(), ...data };
    dispatch(addEmployee(newEmployee));
    setIsModalOpen(false);
    reset();
    setEmployees([...employees, newEmployee]);
    messageApi.success("Employee added successfully!");
  };
  return (
    <>
      {/* contextholder is used for antd toadst message renders */}
      {contextHolder}
      <Button
        className=" w-[200px] md:w-max"
        type="primary"
        size="medium"
        onClick={onAddEmployee}
      >
        Add Employee
      </Button>
      <Modal
        centered={true}
        open={isModelOpen}
        onCancel={onCancel}
        footer={null}
        title={
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-50 rounded">
              <div className="w-6 h-6 flex items-center justify-center">
                <TeamOutlined style={{ fontSize: "28px" }} />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold m-0">Add Employee</h3>
              <p className="text-sm text-gray-500 m-0 font-normal">
                Securely Add Employees and Define Roles.
              </p>
            </div>
          </div>
        }
      >
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-1">
          <div className="flex flex-row">
            <label className="text-sm font-medium mb-1 w-4/12">
              Name<span className="text-red-500"> *</span>
            </label>
            <div className="w-full">
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="e.g. Jane"
                    status={errors.name ? "error" : ""}
                    className="h-10"
                  />
                )}
              />
              <div className="h-5">
                <p className="text-sm text-red-500">{errors.name?.message}</p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-row">
            <label className="text-sm font-medium mb-1 w-4/12">
              Email ID<span className="text-red-500"> *</span>
            </label>
            <div className="w-full">
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="e.g. 123@example.com"
                    status={errors.email ? "error" : ""}
                    className="h-10"
                  />
                )}
              />
              <div className="h-5">
                <p className="text-sm text-red-500">{errors.email?.message}</p>
              </div>
            </div>
          </div>

          {/* joining date */}
          <div className="flex flex-row">
            <label className="text-sm font-medium mb-1 w-4/12">
              Joining Date<span className="text-red-500"> *</span>
            </label>
            <div className="w-full">
              <Controller
                name="joiningDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    value={field.value ? dayjs(field.value) : null}
                    onChange={(date) =>
                      field.onChange(date ? date.format("YYYY-MM-DD") : "")
                    }
                    placeholder="Select Joining Date"
                    status={errors.joiningDate ? "error" : ""}
                    className="h-10 w-full"
                  />
                )}
              />
              <div className="h-5">
                <p className="text-sm text-red-500">
                  {errors.joiningDate?.message}
                </p>
              </div>
            </div>
          </div>

          {/* salary */}
          {/* <div className="flex flex-row">
            <label className="text-sm font-medium mb-1 w-4/12">
              Salary<span className="text-red-500"> *</span>
            </label>
            <div className="w-full">
              <Controller
                name="salary"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="e.g. Austin"
                    status={errors.salary ? "error" : ""}
                    className="h-10"
                  />
                )}
              />
              <div className="h-5">
                <p className="text-sm text-red-500">{errors.salary?.message}</p>
              </div>
            </div>
          </div> */}

          {/* departments */}
          <div className="flex flex-row">
            <label className="text-sm font-medium mb-1 w-4/12">
              Department<span className="text-red-500"> *</span>
            </label>
            <div className="w-full">
              <Controller
                name="department"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    showSearch
                    options={departmentList}
                    placeholder="Select Departmetn"
                    status={errors.department ? "error" : ""}
                    className="w-full h-10"
                    size="large"
                  />
                )}
              />
              <div className="h-5">
                <p className="text-sm text-red-500">
                  {errors.department?.message}
                </p>
              </div>
            </div>
          </div>

          {/* roles */}
          <div className="flex flex-row">
            <label className="text-sm font-medium mb-1 w-4/12">
              Role<span className="text-red-500"> *</span>
            </label>
            <div className="w-full">
              <Controller
                name="role"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    showSearch
                    options={rolesList}
                    placeholder="Select Role"
                    status={errors.role ? "error" : ""}
                    className="w-full h-10"
                    size="large"
                  />
                )}
              />
              <div className="h-5">
                <p className="text-sm text-red-500">{errors.role?.message}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-row">
            <label className="text-sm font-medium mb-1 w-4/12">
              Status<span className="text-red-500"> *</span>
            </label>
            <div className="w-full">
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    showSearch
                    options={[
                      { label: "Active", value: "Active" },
                      { label: "Inactive", value: "Inactive" },
                    ]}
                    placeholder="Select Status"
                    status={errors.status ? "error" : ""}
                    className="w-full h-10"
                    size="large"
                  />
                )}
              />
              <div className="h-5">
                <p className="text-sm text-red-500">{errors.status?.message}</p>
              </div>
            </div>
          </div>

          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="w-full h-10 bg-theme"
          >
            Create Employee
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default AddEmployee;
