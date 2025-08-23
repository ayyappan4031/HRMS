import { Modal, Table, Form } from "antd";
import React, { useEffect, useState } from "react";
import getEmployees from "../../services/data";
import { FormOutlined, DeleteOutlined, UserOutlined } from "@ant-design/icons";

const EmployeesTable = () => {
  const [data, seData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleEditDetails = (employee) => {
    console.log("Editing employee:", employee);
    setSelectedEmployee(employee);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      const employees = await getEmployees();
      seData(employees);
    };
    fetchData();
  });

  const columns = [
    {
      title: "EmpId",
      width: 80,
      dataIndex: "employeeId",
      key: "employeeId",
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
    },

    {
      title: "Action",
      width: 150,
      key: "operation",
      render: () => (
        <div className="flex gap-3">
          <a>
            {" "}
            <FormOutlined />
          </a>

          <a onClick={() => handleEditDetails(selectedEmployee)}>
            <UserOutlined />
          </a>
          <a>
            <DeleteOutlined />
          </a>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* modal open when clisk on edit the detils */}
      <Modal open={isModalOpen} onCancel={handleCancel}>
        <Form></Form>
      </Modal>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{
          x: 800,
          y: 300,
        }}
      />
    </>
  );
};

export default EmployeesTable;
