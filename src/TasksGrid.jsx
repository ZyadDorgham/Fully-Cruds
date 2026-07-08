import "./Tasks.css";

export default function TasksGrid({ tasks, onEdit, onDelete, onToggleComplete }) {
  return (
    <section className="grid">
      {tasks.map((task) => (
        <article className="card" key={task.id}>
          <div className="card-header">
            <h3>{task.title}</h3>
            <span className="priority high">{task.priority}</span>
          </div>
          <p className="desc">{task.desc}</p>
          <div className="meta">
            <span>{task.Due}</span>
            <span className="status pending">{task.status}</span>
          </div>
          <div className="actions">
            <button className="edit" onClick={() => onEdit(task.id)}>
              ✏️ Edit
            </button>
            <button
              className="delete"
              onClick={() => onDelete(task.id)}
            >
              🗑️ Delete
            </button>
            <button
              style={{ backgroundColor: task.Completed ? "red" : "blue" }}
              className="complete"
              onClick={() => onToggleComplete(task.id)}
            >
              ✅ Complete
            </button>
          </div>
        </article>
      ))}
    </section>
  );
}