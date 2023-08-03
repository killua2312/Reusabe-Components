
interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (pageNumber: number) => void;
}

function Pagination({currentPage, totalPages, onPageChange}: PaginationProps) {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map((pageNumber) => (
                    <li
                        key={pageNumber}
                        className={`page-item ${pageNumber === currentPage ? 'active' : ''}`}
                    >
                        <button className="page-link" onClick={() => onPageChange(pageNumber)}>
                            {pageNumber}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;