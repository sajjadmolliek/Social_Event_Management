const ContactUs = () => {
  return (
    <div className="my-20">
      <h1 className="text-3xl font-bold mb-4 mt-10 text-center underline">Contact Us</h1>
      <p className="text-gray-700 w-3/4 lg:w-2/5 text-center   mx-auto">
        If you have any questions or inquiries, please feel free to get in touch
        with us. We are here to assist you!
      </p>
      <div className=" p-8 lg:flex lg:w-[85%] mx-auto justify-center items-center ">
        <div className="container flex justify-center items-center mx-auto">
          <div className="mt-8">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-5">
                 Contact for Photography
              </h2>
              <p className="text-gray-700">
                <strong>Email:</strong> nana@nani.com
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +1 (123) 456-7890
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> 123 Main Street, Cityville, State
                12345
              </p>
            </div>

            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg font-medium">
              Contact Us
            </button>
          </div>
        </div>
        <div className="container flex justify-center items-center mx-auto">
          <div className="mt-8">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-5">
                 Contact for Decoration
              </h2>
              <p className="text-gray-700">
                <strong>Email:</strong> kaka@kaki.com
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +1 (456) 789-1234
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> 123 Main Street, Cityville, State
                12345
              </p>
            </div>

            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg font-medium">
              Contact Us
            </button>
          </div>
        </div>
        <div className="container flex justify-center items-center mx-auto">
          <div className="mt-8">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-5">
                 Contact Catering
              </h2>
              <p className="text-gray-700">
                <strong>Email:</strong> mama@mami.com
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +1 (789) 123-4567
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> 123 Main Street, Cityville, State
                12345
              </p>
            </div>

            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg font-medium">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
