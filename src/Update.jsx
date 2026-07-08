import './Update.css';

export default function Update({Edit,CloseEditModal,formEdit,HandleEditInput,SaveEdit}){

    return(

        <>
              {Edit && (
        <div className="modal-overlay edit-modal">
          <div className="modal edit-modal-content">
            <div className="modal-header edit-header">
              <h2>✏️ Edit Task</h2>
              <button className="modal-close" onClick={CloseEditModal}>
                ✕
              </button>
            </div>
            <div className="modal-body edit-body">
              <div className="form-group">
                <label>Task Title</label>
                <input
                  type="text"
                  placeholder="e.g. Design homepage"
                  value={formEdit.title}
                  onChange={HandleEditInput}
                  name="title"
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Priority</label>
                  <select
                    name="Priority"
                    value={formEdit.Priority}
                    onChange={HandleEditInput}
                  >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Due Date</label>
                  <input
                    type="date"
                    name="Date"
                    value={formEdit.Date}
                    onChange={HandleEditInput}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  rows="3"
                  placeholder="Write some details..."
                  name="Description"
                  value={formEdit.Description}
                  onChange={HandleEditInput}
                />
              </div>
              <div className="form-group">
                <label>Status</label>
                <select
                  name="Status"
                  value={formEdit.Status}
                  onChange={HandleEditInput}
                >
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </select>
              </div>
            </div>
            <div className="modal-footer edit-footer">
              <button className="btn-cancel" onClick={CloseEditModal}>
                Cancel
              </button>
              <button className="btn-save" onClick={SaveEdit}>
                💾 Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
      

        </>
    )
}