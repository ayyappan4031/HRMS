import { Button, Input, Select } from "antd";
import { useState } from "react";
import { departmentList } from "../../utils/constants";

const Filters = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    name: "",
    status: undefined,
    department: undefined,
  });
  console.log("filters", filters);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    onSearch({ ...filters, [name]: value });
  };

  const handleSelectChange = (filed, value) => {
    const selectValue = { ...filters, [filed]: value };
    setFilters(selectValue);
    onSearch(selectValue);
  };
  const handleClear = () => {
    const cleared = { name: "", status: undefined, department: undefined };
    setFilters(cleared);
    onSearch(cleared);
  };

  return (
    <div className="flex md:flex-row items-center p-4 gap-4 flex-col">
      <Input
        className="text-left"
        placeholder="Search by name"
        name="name"
        value={filters.name}
        onChange={handleChange}
        style={{ width: 200 }}
      />
      <Select
        placeholder="Filter by Status"
        className="text-left"
        name="status"
        value={filters.status ?? undefined}
        options={[
          { label: "Active", value: "Active" },
          { label: "Inactive", value: "Inactive" },
        ]}
        onChange={(value) => handleSelectChange("status", value)}
        style={{ width: 200 }}
        allowClear
      />
      <Select
        className="text-left"
        placeholder="Filter by Department"
        name="department"
        value={filters.department ?? undefined}
        options={departmentList}
        onChange={(value) => handleSelectChange("department", value)}
        style={{ width: 200 }}
        allowClear
      />

      <Button
        className="w-[200px] md:w-max"
        type="primary"
        onClick={handleClear}
      >
        Clear
      </Button>
    </div>
  );
};

export default Filters;
