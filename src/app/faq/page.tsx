export default function Faq() {
  return (
    <div>
      <div className="2xl:mx-auto 2xl:container py-12 lg:px-20 md:px-6 px-4 ">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center text-center space-y-4">
            <h1 className="text-3xl lg:text-4xl font-semibold leading-9 md:leading-7 lg:leading-9 text-gray-800">
              Frequently Asked Questions
            </h1>
            <p className="text-base leading-6 text-center text-gray-600 w-full md:w-10/12">
              Here are few of the most frequently asked questions by our
              valueable customers
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-6 justify-items-around gap-x-6 gap-y-6 xl:gap-y-0 xl:gap-x-8 mt-10">
            <button className="w-full focus:outline-none border focus:border-gray-800 border-transparent bg-gray-50 flex justify-center items-center flex-col text-center py-10 px-12 space-y-6">
              <svg
                width={64}
                height={64}
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3333 50.6667C16.2789 50.6667 18.6667 48.2789 18.6667 45.3333C18.6667 42.3878 16.2789 40 13.3333 40C10.3878 40 8 42.3878 8 45.3333C8 48.2789 10.3878 50.6667 13.3333 50.6667Z"
                  stroke="#4B5563"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M45.3333 50.6667C48.2789 50.6667 50.6667 48.2789 50.6667 45.3333C50.6667 42.3878 48.2789 40 45.3333 40C42.3878 40 40 42.3878 40 45.3333C40 48.2789 42.3878 50.6667 45.3333 50.6667Z"
                  stroke="#4B5563"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M50.668 47.9997H56.0013V31.9997C56.0013 27.049 54.5965 22.301 52.0961 18.8003C49.5956 15.2997 46.2042 13.333 42.668 13.333H40.0013L44.0013 31.9997H56.0013M18.668 47.9997H40.0013H18.668Z"
                  stroke="#4B5563"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M32 47.9997V13.333H40"
                  stroke="#4B5563"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 45.3333V32H32"
                  stroke="#4B5563"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-xl font-medium leading-5 text-gray-800">
                Shipping
              </p>
            </button>
            <button className="w-full focus:outline-none border focus:border-gray-800 border-transparent bg-gray-50 flex justify-center items-center flex-col text-center py-10 px-12 space-y-6">
              <svg
                width={64}
                height={64}
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44.5346 21.3333C44.0038 19.8273 43.0345 18.5146 41.7514 17.5641C40.4682 16.6136 38.93 16.0689 37.3346 16H26.668C24.5462 16 22.5114 16.8429 21.0111 18.3431C19.5108 19.8434 18.668 21.8783 18.668 24C18.668 26.1217 19.5108 28.1566 21.0111 29.6569C22.5114 31.1571 24.5462 32 26.668 32H37.3346C39.4564 32 41.4912 32.8429 42.9915 34.3431C44.4918 35.8434 45.3346 37.8783 45.3346 40C45.3346 42.1217 44.4918 44.1566 42.9915 45.6569C41.4912 47.1571 39.4564 48 37.3346 48H26.668C25.0726 47.9311 23.5344 47.3864 22.2512 46.4359C20.9681 45.4854 19.9988 44.1727 19.468 42.6667"
                  stroke="#4B5563"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M32 48V56M32 8V16V8Z"
                  stroke="#4B5563"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-xl font-medium leading-5 text-gray-800">
                Payment
              </p>
            </button>
            <button className="w-full focus:outline-none border focus:border-gray-800 border-transparent bg-gray-50 flex justify-center items-center flex-col text-center py-10 px-12 space-y-6">
              <svg
                width={64}
                height={64}
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.5333 11.512C28.6693 6.82933 35.3307 6.82933 36.4667 11.512C36.6371 12.2155 36.9713 12.8687 37.4419 13.4187C37.9125 13.9686 38.5064 14.3996 39.1751 14.6767C39.8438 14.9537 40.5684 15.0689 41.2901 15.013C42.0117 14.957 42.71 14.7315 43.328 14.3547C47.4427 11.848 52.1547 16.5573 49.648 20.6747C49.2717 21.2924 49.0465 21.9902 48.9907 22.7114C48.9349 23.4326 49.05 24.1567 49.3267 24.825C49.6035 25.4933 50.034 26.0869 50.5833 26.5575C51.1326 27.0281 51.7852 27.3624 52.488 27.5333C57.1707 28.6693 57.1707 35.3307 52.488 36.4667C51.7845 36.6371 51.1313 36.9713 50.5813 37.4419C50.0314 37.9125 49.6004 38.5064 49.3233 39.1751C49.0463 39.8438 48.9311 40.5684 48.987 41.2901C49.043 42.0117 49.2685 42.71 49.6453 43.328C52.152 47.4427 47.4427 52.1547 43.3253 49.648C42.7076 49.2717 42.0098 49.0465 41.2886 48.9907C40.5674 48.9349 39.8433 49.05 39.175 49.3267C38.5067 49.6035 37.9131 50.034 37.4425 50.5833C36.9719 51.1326 36.6376 51.7852 36.4667 52.488C35.3307 57.1707 28.6693 57.1707 27.5333 52.488C27.3629 51.7845 27.0287 51.1313 26.5581 50.5813C26.0875 50.0314 25.4936 49.6004 24.8249 49.3233C24.1562 49.0463 23.4316 48.9311 22.7099 48.987C21.9883 49.043 21.29 49.2685 20.672 49.6453C16.5573 52.152 11.8453 47.4427 14.352 43.3253C14.7283 42.7076 14.9535 42.0098 15.0093 41.2886C15.0651 40.5674 14.95 39.8433 14.6733 39.175C14.3965 38.5067 13.966 37.9131 13.4167 37.4425C12.8674 36.9719 12.2148 36.6376 11.512 36.4667C6.82933 35.3307 6.82933 28.6693 11.512 27.5333C12.2155 27.3629 12.8687 27.0287 13.4187 26.5581C13.9686 26.0875 14.3996 25.4936 14.6767 24.8249C14.9537 24.1562 15.0689 23.4316 15.013 22.7099C14.957 21.9883 14.7315 21.29 14.3547 20.672C11.848 16.5573 16.5573 11.8453 20.6747 14.352C23.3413 15.9733 26.7973 14.5387 27.5333 11.512Z"
                  stroke="#4B5563"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M32 40C36.4183 40 40 36.4183 40 32C40 27.5817 36.4183 24 32 24C27.5817 24 24 27.5817 24 32C24 36.4183 27.5817 40 32 40Z"
                  stroke="#4B5563"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-xl font-medium leading-5 text-gray-800">
                Account
              </p>
            </button>
            <button className="w-full focus:outline-none border focus:border-gray-800 border-transparent bg-gray-50 flex justify-center items-center flex-col text-center py-10 px-12 space-y-6">
              <svg
                width={64}
                height={64}
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M47.9987 21.333H26.6654C23.7198 21.333 21.332 23.7208 21.332 26.6663V47.9997C21.332 50.9452 23.7198 53.333 26.6654 53.333H47.9987C50.9442 53.333 53.332 50.9452 53.332 47.9997V26.6663C53.332 23.7208 50.9442 21.333 47.9987 21.333Z"
                  stroke="#4B5563"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.332 38.6665L38.644 21.3545"
                  stroke="#4B5563"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M35.9883 53.344L53.3323 36L35.9883 53.344Z"
                  stroke="#4B5563"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.8945 51.7704L51.7665 22.8984"
                  stroke="#4B5563"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M42.668 21.3337V16.0003C42.668 14.5858 42.1061 13.2293 41.1059 12.2291C40.1057 11.2289 38.7491 10.667 37.3346 10.667H16.0013C14.5868 10.667 13.2303 11.2289 12.2301 12.2291C11.2299 13.2293 10.668 14.5858 10.668 16.0003V37.3337C10.668 38.7481 11.2299 40.1047 12.2301 41.1049C13.2303 42.1051 14.5868 42.667 16.0013 42.667H21.3346"
                  stroke="#4B5563"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-xl font-medium leading-5 text-gray-800">
                Products
              </p>
            </button>
            <button className="w-full focus:outline-none border focus:border-gray-800 border-transparent bg-gray-50 flex justify-center items-center flex-col text-center py-10 px-12 space-y-6">
              <svg
                width={64}
                height={64}
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45.332 2.66699L55.9987 13.3337L45.332 24.0003"
                  stroke="#4B5563"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 29.333V23.9997C8 21.1707 9.12381 18.4576 11.1242 16.4572C13.1246 14.4568 15.8377 13.333 18.6667 13.333H56"
                  stroke="#4B5563"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.6667 61.3333L8 50.6667L18.6667 40"
                  stroke="#4B5563"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M56 34.667V40.0003C56 42.8293 54.8762 45.5424 52.8758 47.5428C50.8754 49.5432 48.1623 50.667 45.3333 50.667H8"
                  stroke="#4B5563"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-xl w-40 font-medium leading-5 text-gray-800">
                Return Policy
              </p>
            </button>
            <button className="w-full focus:outline-none border focus:border-gray-800 border-transparent bg-gray-50 flex justify-center items-center flex-col text-center py-10 px-12 space-y-6">
              <svg
                width={64}
                height={64}
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3333 10.667H24L29.3333 24.0003L22.6667 28.0003C25.5226 33.7911 30.2093 38.4778 36 41.3337L40 34.667L53.3333 40.0003V50.667C53.3333 52.0815 52.7714 53.438 51.7712 54.4382C50.771 55.4384 49.4145 56.0003 48 56.0003C37.598 55.3682 27.7871 50.951 20.4182 43.5821C13.0493 36.2132 8.63213 26.4023 8 16.0003C8 14.5858 8.5619 13.2293 9.5621 12.2291C10.5623 11.2289 11.9188 10.667 13.3333 10.667"
                  stroke="#4B5563"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M40 18.667C41.4145 18.667 42.771 19.2289 43.7712 20.2291C44.7714 21.2293 45.3333 22.5858 45.3333 24.0003"
                  stroke="#4B5563"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M40 8C44.2435 8 48.3131 9.68571 51.3137 12.6863C54.3143 15.6869 56 19.7565 56 24"
                  stroke="#4B5563"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-xl w-40 font-medium leading-5 text-gray-800">
                Contact
              </p>
            </button>
          </div>
          <div className="mt-16 flex justify-start flex-col items-start w-full text-left space-y-8">
            <div className=" flex justify-start items-start flex-col text-left w-full xl:w-8/12">
              <h3 className="text-xl font-medium leading-7 md:leading-5 text-left text-gray-800">
                How long does it take for my package to arrive?
              </h3>
              <p className="mt-6 text-base leading-6 text-gray-600">
                For sterling silver items, your order will be delivered within 7
                to 10 business days, including production and delivery, after
                you place an order.
              </p>{" "}
              <br />
              <p className="text-base leading-6 text-gray-600">
                For sterling silver items, your order will be delivered within 7
                to 10 business days, including production and delivery, after
                you place an order.
              </p>
            </div>
            <hr className="border border-gray-100 w-full" />
            <div className="flex justify-start items-start flex-col text-left w-full xl:w-8/12 ">
              <h3 className="text-xl font-medium leading-7 md:leading-5 text-left text-gray-800">
                Where is my order?
              </h3>
              <p className="mt-6 text-base leading-6 text-gray-600">
                Remeber you can query the staus of your oders any time in My
                orders in the My aacount section.l if you are not resigered at
                Mango.com, you can access dierectly in the Orders section. In
                this cause, you will have enter your em-mail address and order
                number.
              </p>{" "}
              <br />
              <p className="text-base leading-6 text-gray-600">
                What is more, when your order leaves our wharehouses, we will
                send you an e-mail.
              </p>
            </div>
            <hr className="border border-gray-100 w-full" />
            <div className="flex justify-start items-start flex-col text-left w-full xl:w-8/12">
              <h3 className="text-xl font-medium leading-7 md:leading-5 text-left text-gray-800">
                Can I cancel or change my Order?
              </h3>
              <p className="mt-6 text-base leading-6 text-gray-600">
                Yes, you can change or cancel your order within the first 10
                days of your order placement.
              </p>
            </div>
            <hr className="border border-gray-100 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
