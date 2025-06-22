export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  return (
    <div>
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === 1}>
        prev
      </button>
      {currentPage} / {totalPages}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        next
      </button>
    </div>
  );
};
