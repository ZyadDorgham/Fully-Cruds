import "./Tasks.css";

export default function TasksStats({ total, completed, pending, highPriority }) {
  return (
    <section className="stats">
      <div className="stat">
        <h2>{total}</h2>
        <span>📌 Total</span>
      </div>
      <div className="stat">
        <h2>{completed}</h2>
        <span>✅ Completed</span>
      </div>
      <div className="stat">
        <h2>{pending}</h2>
        <span>⏳ Pending</span>
      </div>
      <div className="stat">
        <h2>{highPriority}</h2>
        <span>🔥 High Priority</span>
      </div>
    </section>
  );
}