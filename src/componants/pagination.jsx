// eslint-disable-next-line react/prop-types
const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="my-5 flex justify-center gap-1 px-16 md:gap-5">
        <button
          className="cursor-pointer rounded-lg border-2 px-2 disabled:cursor-not-allowed disabled:bg-[#ccc]"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <button
              className={`cursor-pointer rounded-lg border-2 border-blue-500 px-2 transition duration-250 hover:scale-125 hover:bg-[rgba(0,0,0,.5)] md:px-5 md:text-2xl ${currentPage === pageNumber && "border-white bg-cyan-800 hover:scale-100 hover:bg-blue-400"}`}
              key={index}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          className="cursor-pointer rounded-lg border-2 px-2 disabled:cursor-not-allowed disabled:bg-[#ccc]"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
