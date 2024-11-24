import PaginationArrow from "./pagination-arrow";
import PaginationBtn from "./pagination-btn";

type PaginationProps = {
  setCurrentPage: (page: number) => void;
  numberOfPages: number;
  currentPage: number;
};

const Pagination = ({
  setCurrentPage,
  numberOfPages,
  currentPage,
}: PaginationProps) => {
  const MAX_VISIBLE_BUTTONS = 5;

  const handleButtonClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevArrowClick = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  const handleNextArrowClick = () => {
    if (currentPage === numberOfPages) return;
    setCurrentPage(currentPage + 1);
  };

  if (!numberOfPages) return;

  const startPage = Math.max(
    Math.min(
      currentPage - Math.floor(MAX_VISIBLE_BUTTONS / 2),
      numberOfPages - MAX_VISIBLE_BUTTONS + 1
    ),
    1
  );
  const endPage = Math.min(startPage + MAX_VISIBLE_BUTTONS - 1, numberOfPages);

  const visibleButtons = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  return (
    <div className="flex justify-center items-center gap-3 py-4 mt-5">
      <PaginationArrow onClick={handlePrevArrowClick} content="<" />
      {visibleButtons.map((page) => (
        <PaginationBtn
          onClick={() => handleButtonClick(page)}
          currentPage={currentPage}
          key={page}
          content={page}
        />
      ))}
      <PaginationArrow onClick={handleNextArrowClick} content=">" />
    </div>
  );
};

export default Pagination;
