import { Descriptions } from "antd";
import dayjs from "dayjs";

const ViewEmployee = ({ employee }) => {
  return (
    <>
      {employee && (
        <Descriptions bordered column={1} size="small" layout="horizontal">
          <Descriptions.Item label="Name">{employee.name}</Descriptions.Item>
          <Descriptions.Item label="Email">{employee.email}</Descriptions.Item>
          <Descriptions.Item label="Joining Date">
            {employee.joiningDate
              ? dayjs(employee.joiningDate).format("DD-MM-YYYY")
              : "-"}
          </Descriptions.Item>
          <Descriptions.Item label="Department">
            {employee.department}
          </Descriptions.Item>
          <Descriptions.Item label="Role">{employee.role}</Descriptions.Item>
          <Descriptions.Item label="Status">
            {employee.status}
          </Descriptions.Item>
        </Descriptions>
      )}
    </>
  );
};

export default ViewEmployee;
