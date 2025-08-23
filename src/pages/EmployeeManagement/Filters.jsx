import { Button, Input } from "antd";
import { useState } from "react";

const Filters = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    name: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setFilters({ ...filters, name: value });
    onSearch(value);
  };

  const handleClear = () => {
    setFilters({ name: "" });
    onSearch("");
  };

  return (
    <div className="flex flex-row items-center p-4 gap-4">
      <Input
        placeholder="Search by name"
        value={filters.name}
        onChange={handleChange}
        style={{ width: 200 }}
      />
      <Button type="primary" onClick={handleClear}>
        Clear
      </Button>
    </div>
  );
};

export default Filters;
