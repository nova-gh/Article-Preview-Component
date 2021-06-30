const articleComp = () => {
  return (
    <div className="h-auto mx-auto lg:w-3/5 lg:flex lg:flex-row">
      <img
        className="w-full h-48 lg:w-2/5 rounded-tl-md rounded-tr-md lg:h-auto lg:rounded-tr-none lg:rounded-bl-md "
        src="/assets/drawers.jpg"
        alt=""
      />
      {/* text cont */}
      <div className="p-8 bg-white 2xl:p-12 rounded-bl-md rounded-br-md lg:rounded-bl-none rounded-tr-md ">
        <h1 className="font-bold text-gray-700 2xl:text-xl">
          Shift the overall look and feel by adding these wonderful tocuhes to
          furniture in your home
        </h1>
        <p className="mt-4 text-sm font-medium text-gray-600 2xl:text-base">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I 've got some simple tips to help
          you make any room feel complete.
        </p>
        {/* user post details */}
        <div className="flex items-center mt-8">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-3xl"
              src="/assets/avatar-michelle.jpg"
              alt="Michelle's avatar"
            />
          </div>

          <div className="ml-4">
            <h1 className="text-sm font-bold text-gray-700">
              Michelle Appleton
            </h1>
            <p className="text-xs font-medium text-gray-400">28 Jun 2020</p>
          </div>
          <div className="flex items-center justify-center w-8 h-8 ml-auto bg-gray-200 rounded-2xl">
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="13"
            >
              <path
                fill="#6E8098"
                d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default articleComp;
