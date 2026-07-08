import "./Tasks.css";

export default function TasksHeader({ onAddTask }) {
  return (
    <section className="header">
      <div className="header-text">
        <h1>📋 My Tasks</h1>
        <p>Manage, organize and track all your work efficiently.</p>
      </div>
      <button onClick={onAddTask} className="add-btn">
        ➕ Add Task
      </button>
    </section>
  );
}