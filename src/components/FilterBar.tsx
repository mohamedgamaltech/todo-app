interface FilterBarProps {
    filter: "all" | "completed" | "pending";
    setFilter: (filter: "all" | "completed" | "pending") => void;
  }
  
  const FilterBar: React.FC<FilterBarProps> = ({ filter, setFilter }) => {
    return (
      <div className="filter-bar">
        <button onClick={() => setFilter("all")} className={filter === "all" ? "active" : ""}>
          All
        </button>
        <button onClick={() => setFilter("completed")} className={filter === "completed" ? "active" : ""}>
          Completed
        </button>
        <button onClick={() => setFilter("pending")} className={filter === "pending" ? "active" : ""}>
          Pending
        </button>
      </div>
    );
  };
  
  export default FilterBar;
  