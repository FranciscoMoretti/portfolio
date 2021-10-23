export default function VideoCardFull({ href, channel, title, index, thumbnail, notesAreAvailable}) {
  return (
    <a
      className="w-full"
      href={href}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="metric-card bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 max-w-72 w-full  h-full py-3 transform hover:scale-[1.01] transition-all">
        <div className="flex flex-col justify-between items-center h-full">
          <div className="flex flex-col items-center">
            <img width={thumbnail.width} height={thumbnail.height} src={thumbnail.url} alt="" />
            <h4 className="youtube-video-legend text-lg font-medium w-full text-gray-800 dark:text-gray-100">
              {title}
            </h4>
            <div className="youtube-video-legend text-gray-300 dark:text-gray-400 text-left self-start">
              {channel}
            </div>
          </div>
          {!notesAreAvailable &&
            <div className="flex items-center flex-row mt-2 sm:mt-0 w-full sm:w-auto justify-end	self-end">
                <p className="text-gray-500 dark:text-gray-400 text-left sm:text-right md:mb-0 mr-2 ml-10 sm:ml-0">
                  Watch on YouTube
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-500 dark:text-gray-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
            </div>
          }
          {notesAreAvailable &&
            <div className="flex items-center flex-row mt-2 sm:mt-0 w-full sm:w-auto justify-end	self-end">
              <p className="text-gray-500 dark:text-gray-400 text-left sm:text-right md:mb-0 mr-2 ml-10 sm:ml-0">
                Go to the notes
              </p>
            </div>
          }
        </div>
      </div>
    </a>
  );
}
