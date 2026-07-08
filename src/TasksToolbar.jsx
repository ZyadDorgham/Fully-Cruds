import "./Tasks.css";

export default function TasksToolbar({
  searchTerm,
  onSearchChange,
  currentFilter,
  onFilterChange,
  onSortByName,
  onSortByDate,
  onSortByPriority
}) {
  return (
    <section className="toolbar">
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="🔍 Search tasks..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <select onChange={(e) => onFilterChange(e.target.value)} defaultValue="All">
        <option value="All">📂 All</option>
        <option value="High">🔥 High</option>
        <option value="Medium">🟡 Medium</option>
        <option value="Low">🟢 Low</option>
      </select>

      <select>
        <option>🕒 Newest</option>
        <option>Oldest</option>
        <option>Due Date</option>
      </select>

      <div className="sort-buttons">
        <button className="sort-btn" onClick={onSortByName}>🔤 Name</button>
        <button className="sort-btn" onClick={onSortByDate}>📅 Date</button>
        <button className="sort-btn" onClick={onSortByPriority}>🔥 Priority</button>
      </div>
    </section>
  );
}
