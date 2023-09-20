

// eslint-disable-next-line react/prop-types
export const Modal = ({ children, title, onSave, onClose }) => {
    return (
        <div id="add-contact" className="modal fade in" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header text-center">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 className="modal-title " id="myModalLabel">{title}</h4> </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-info waves-effect" data-dismiss="modal" onClick={onSave}>Save</button>
                        <button type="button" className="btn btn-default waves-effect" data-dismiss="modal" onClick={onClose}>Cancel</button>
                    </div>
                </div>
                {/* /.modal-content */}
            </div>
            {/* /.modal-dialog */}
        </div>
    )
}
