

export function ModalEjemplo() {
    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>


            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card" style={{width: "18rem;"}}>
                <img src="..." class="card-img-top" alt="..." />
                <div class ="card-body">
                <h5 class ="card-title">Card title</h5>
                <p class ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class ="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}