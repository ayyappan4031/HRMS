import { Modal, Table, message } from "antd";
import React, { useState } from "react";
import { FormOutlined, DeleteOutlined, UserOutlined } from "@ant-design/icons";
import UpdateEmployee from "./UpdateEmployee";
import ViewEmployee from "./ViewEmployee";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee } from "../../redux/employeesSlice";

const EmployeesTable = () => {
  const employees = useSelector((state) => state.employees.employees);
  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();

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
      sorter: true,
    },
    {
      title: "Department",
      width: 150,
      dataIndex: "department",
      key: "department",
    },
    { title: "Role", width: 150, dataIndex: "role", key: "role" },
    { title: "Status", width: 150, dataIndex: "status", key: "status" },
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
      >
        {selectedEmployee && (
          <ViewEmployee employee={selectedEmployee} onClose={handleCancel} />
        )}
      </Modal>

      <Table
        columns={columns}
        dataSource={employees}
        pagination={true}
        rowKey="employeeId"
        scroll={{ x: 800, y: 300 }}
      />
    </>
  );
};

export default EmployeesTable;
