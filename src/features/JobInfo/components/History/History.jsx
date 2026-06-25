import "./style.css"

const History = ({ workerJobHistory }) => {
    return (
        <div className="col-12 col-md-6">
            <div className="job-history">
                <h4 className="mb-3">History</h4>

                {workerJobHistory?.length > 0 ? (
                    workerJobHistory.map((item, index) => (
                        <div key={index} className="job-history__item">
                            <span>
                                {item.status} by {item.workerName} at {item.createAt}
                            </span>
                        </div>
                    ))
                ) : (
                    <div className="job-history__item">
                        <span>No interactions</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default History;