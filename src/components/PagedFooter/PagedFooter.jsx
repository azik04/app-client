import "./style.css";

const PagedFooter = ({
    pageSize,
    pageNumber,
    hasNextPage,
    hasPrevPage,
    totalCount,
    setPageNumber,
    setPageSize
}) => {
    const totalPages = Math.ceil(totalCount / pageSize);

    return (
        <div className="page-footer">
            
            <div className="page-footer__info">
                <span>
                    {(pageNumber - 1) * pageSize + 1}-
                    {Math.min(pageNumber * pageSize, totalCount)} of {totalCount}
                </span>
            </div>

            <div className="page-footer__controls">
                
                <div className="page-footer__rows">
                    <span className="page-footer__label">Rows per page:</span>
                    <select
                        value={pageSize}
                        onChange={(e) => {
                            setPageSize(Number(e.target.value));
                            setPageNumber(1);
                        }}
                        className="page-footer__select form-control-sm"
                    >
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                        <option value={250}>250</option>
                    </select>
                </div>

                <div className="page-footer__pagination">
                    <button disabled={!hasPrevPage} className="page-footer__btn btn btn-sm" onClick={() => setPageNumber(pageNumber - 1)}>
                        <i className="fa-solid fa-less-than"></i>
                    </button>

                    <span className="page-footer__page">{pageNumber}/{totalPages}</span>

                    <button disabled={!hasNextPage} className="page-footer__btn btn btn-sm" onClick={() => setPageNumber(pageNumber + 1)}>
                        <i className="fa-solid fa-greater-than"></i>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default PagedFooter;