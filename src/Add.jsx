import './Add.css';

export default function Add({showaddmodel,CloseModal,formadd,HandleInput,AddTask}){
    return(

        <>
            {showaddmodel && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>✨ Add New Task</h2>
              <button className="modal-close" onClick={CloseModal}>
                ✕
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Task Title</label>
                <input
                  name="title"
                  value={formadd.title}
                  onChange={HandleInput}
                  type="text"
                  placeholder="e.g. Design homepage"
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Priority</label>
                  <select
                    name="Priority"
                    value={formadd.Priority}
                    onChange={HandleInput}
                  >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Due Date</label>
                  <input
                    name="Date"
                    value={formadd.Date}
                    onChange={HandleInput}
                    type="date"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="Description"
                  value={formadd.Description}
                  onChange={HandleInput}
                  rows="3"
                  placeholder="Write some details..."
                />
              </div>
              <div className="form-group">
                <label>Status</label>
                <select
                  name="Status"
                  value={formadd.Status}
                  onChange={HandleInput}
                >
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-cancel" onClick={CloseModal}>
                Cancel
              </button>
              <button onClick={AddTask} className="btn-save">
                ➕ Save Task
              </button>
            </div>
          </div>
        </div>
      )}


        </>
    )
}