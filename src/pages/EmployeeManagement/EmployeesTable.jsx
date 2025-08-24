import { Modal, Spin, Table, message } from "antd";
import React, { useEffect, useState } from "react";
import { FormOutlined, DeleteOutlined, UserOutlined } from "@ant-design/icons";
import UpdateEmployee from "./UpdateEmployee";
import ViewEmployee from "./ViewEmployee";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee, fetchEmployees } from "../../redux/employeesSlice";
import Filters from "./Filters";

const EmployeesTable = () => {
  const { employees, loading } = useSelector((state) => state.employees);

  const [filters, setFilters] = useState({
    name: "",
    status: "",
    department: "",
  });
  console.log("local storage", localStorage.getItem("employees"));
  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();

  console.log("selected employee", selectedEmployee);

  useEffect(() => {
    try {
      dispatch(fetchEmployees());
    } catch (err) {
      console.log(err);
      messageApi.error(err);
    }
  }, [dispatch]);

  useEffect(() => {
    if (employees.length > 0) {
      localStorage.setItem("employees", JSON.stringify(employees));
    }
  }, [employees]);

  const handleEditDetails = (employee) => {
    setSelectedEmployee(employee);
    setIsEditModalOpen(true);
  };

  const handleViewDetails = (employee) => {
    setSelectedEmployee(employee);
    setIsViewModalOpen(true);
  };

  const handleDelete = (employeeId) => {
    dispatch(deleteEmployee(employeeId));
    messageApi.success("Employee deleted successfully");
  };

  const handleCancel = () => {
    setIsEditModalOpen(false);
    setIsViewModalOpen(false);
    setSelectedEmployee(null);
  };

  const filteredEmployees = employees.filter((emp) => {
    const matchesName = emp.name
      ?.toString()
      .toLowerCase()
      .includes(filters.name?.toString().toLowerCase() || "");

    const matchesStatus = filters.status ? emp.status === filters.status : true;

    const matchesDepartment = filters.department
      ? emp.department === filters.department
      : true;

    return matchesName && matchesStatus && matchesDepartment;
  });

  const columns = [
    {
      title: "EmpId",
      width: 80,
      dataIndex: "employeeId",
      key: "employeeId",
      render: (id) => id.slice(0, 4),
    },
    {
      title: "Employee Name",
      width: 150,
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Department",
      width: 150,
      dataIndex: "department",
      key: "department",
      sorter: (a, b) => a.department.localeCompare(b.department),
    },
    {
      title: "Role",
      width: 150,
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Status",
      width: 150,
      dataIndex: "status",
      key: "status",
      sorter: (a, b) => a.status.localeCompare(b.status),
    },
    {
      title: "Action",
      width: 150,
      key: "operation",
      render: (record) => (
        <div className="flex gap-3">
          <a onClick={() => handleViewDetails(record)}>
            <UserOutlined />
          </a>
          <a onClick={() => handleEditDetails(record)}>
            <FormOutlined />
          </a>
          <a onClick={() => handleDelete(record.employeeId)}>
            <DeleteOutlined />
          </a>
        </div>
      ),
    },
  ];

  return (
    <>
      {contextHolder}
      <Modal
        open={isEditModalOpen}
        onCancel={handleCancel}
        title="Update Employee"
        footer={null}
        centered
        key={selectedEmployee?.employeeId}
      >
        {selectedEmployee && (
          <UpdateEmployee employee={selectedEmployee} onClose={handleCancel} />
        )}
      </Modal>
      <Modal
        open={isViewModalOpen}
        onCancel={handleCancel}
        title="View Employee"
        footer={null}
        centered={true}
        key={selectedEmployee?.employeeId}
      >
        {selectedEmployee && (
          <ViewEmployee employee={selectedEmployee} onClose={handleCancel} />
        )}
      </Modal>

      <Filters onSearch={(newFilters) => setFilters(newFilters)} />

      <Table
        columns={columns}
        dataSource={filteredEmployees}
        pagination={true}
        loading={loading}
        rowKey="employeeId"
        scroll={{ x: 800, y: 300 }}
      />
    </>
  );
};

export default EmployeesTable;
