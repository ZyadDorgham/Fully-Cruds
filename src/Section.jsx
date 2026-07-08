
export default function Section({OpenModelAdd,arr,OpenEdit,OpenDeleteModel}){
    return(

        <>

        <section className="header">
          <div className="header-text">
            <h1>📋 My Tasks</h1>
            <p>Manage, organize and track all your work efficiently.</p>
          </div>
          <button onClick={OpenModelAdd} className="add-btn">
            ➕ Add Task
          </button>
        </section>

        <section className="stats">
          <div className="stat">
            <h2>24</h2>
            <span>📌 Total</span>
          </div>
          <div className="stat">
            <h2>15</h2>
            <span>✅ Completed</span>
          </div>
          <div className="stat">
            <h2>7</h2>
            <span>⏳ Pending</span>
          </div>
          <div className="stat">
            <h2>2</h2>
            <span>🔥 High Priority</span>
          </div>
        </section>

         <section className="toolbar">
          <input type="text" placeholder="🔍 Search tasks..." />
          <select>
            <option>📂 All</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <select>
            <option>🕒 Newest</option>
            <option>Oldest</option>
            <option>Due Date</option>
          </select>
        </section>

        <section className="grid">
          {arr.map((task) => (
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
                <button className="edit" onClick={() => OpenEdit(task.id)}>
                  ✏️ Edit
                </button>
                <button
                  className="delete"
                  onClick={() => OpenDeleteModel(task.id)}
                >
                  🗑️ Delete
                </button>
                <button className="complete">✅ Complete</button>
              </div>
            </article>
          ))}
        </section>

        
        </>
    )
}