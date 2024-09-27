
const DismissibleAlert = ({ isVisible, onDismiss }) => {
  return (
    <>
      {isVisible && (
        <div
          className="flex items-center justify-between p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg border border-yellow-300"
          role="alert"
        >
          <span>
            <span className="text-[20px]">⚠️</span> This site is not live yet. Some features may not work as expected.
          </span>
          <button
            type="button"
            className="ml-3 p-1.5 text-yellow-500 bg-yellow-100 rounded-lg hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            onClick={onDismiss}
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 9l-5-5a1 1 0 011.414-1.414L10 6.586l5.586-5.586A1 1 0 0116.586 4l-5 5 5 5a1 1 0 01-1.414 1.414L10 11.414l-5.586 5.586A1 1 0 013.414 16l5-5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};


export default DismissibleAlert