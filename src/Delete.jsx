
import './Delete.css';

export default function DeleteItem({Deleted,CloseDeleteModel,Delete,selectid}){

    return(

        <>

              {Deleted && (
        <div className="modal-overlay delete-modal">
          <div className="modal delete-modal-content">
            <div className="modal-header delete-header">
              <h2>🗑️ Delete Task</h2>
              <button className="modal-close" onClick={CloseDeleteModel}>
                ✕
              </button>
            </div>
            <div className="modal-body delete-body">
              <div className="delete-icon">⚠️</div>
              <p className="delete-text">
                Are you sure you want to delete this task?
              </p>
              <p className="delete-subtext">This action cannot be undone.</p>
            </div>
            <div className="modal-footer delete-footer">
              <button className="btn-cancel" onClick={CloseDeleteModel}>
                Cancel
              </button>
              <button
                className="btn-delete"
                onClick={() => Delete(selectid)}
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        </div>
      )}
        
        </>
    )
}