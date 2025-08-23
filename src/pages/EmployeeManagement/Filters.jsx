import { Button, Input } from "antd";
import { useState } from "react";

const Filters = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    name: "",
    minId: "",
    maxId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    onSearch({ ...filters, [name]: value });
  };

  const handleClear = () => {
    const cleared = { name: "", minId: "", maxId: "" };
    setFilters(cleared);
    onSearch(cleared);
  };

  return (
    <div className="flex flex-row items-center p-4 gap-4">
      <Input
        placeholder="Search by name"
        name="name"
        value={filters.name}
        onChange={handleChange}
        style={{ width: 200 }}
      />
      <Input
        placeholder="Min Employee ID"
        name="minId"
        value={filters.minId}
        onChange={handleChange}
        style={{ width: 150 }}
      />
      <Input
        placeholder="Max Employee ID"
        name="maxId"
        value={filters.maxId}
        onChange={handleChange}
        style={{ width: 150 }}
      />

      <Button type="primary" onClick={handleClear}>
        Clear
      </Button>
    </div>
  );
};

export default Filters;
