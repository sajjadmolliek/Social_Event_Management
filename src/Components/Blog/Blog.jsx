import { useLoaderData } from "react-router-dom";

const Blog = () => {
//   const blogData = [
//     {
//       id: 1,
//       title: 'How to Plan the Perfect Wedding',
//       imageSrc: 'image1.jpg',
//       content:
//         'Planning a wedding can be overwhelming. In this article, we provide you with tips and tricks to make your wedding planning process smooth and stress-free.',
//     },
//     {
//       id: 2,
//       title: 'The Art of Event Decoration',
//       imageSrc: 'image2.jpg',
//       content:
//         'Decorations play a crucial role in setting the mood of an event. Learn about the latest trends in event decoration and how to make your events visually stunning.',
//     },
//     {
//       id: 3,
//       title: 'Catering: Beyond Delicious Food',
//       imageSrc: 'image3.jpg',
//       content:
//         'Discover the art of catering and how it can elevate your events. From menu planning to presentation, we delve into the world of catering excellence.',
//     },
//     // Add more blog data entries as needed
//   ];
  const blogData = useLoaderData();

  return (
    <div className="bg-gray-100 p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4 mt-10 text-center">Welcome to Our Blog</h1>
        <p className="text-gray-700 w-2/5 text-center  mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque arcu eget
          neque dictum, quis bibendum libero feugiat. Sed in massa nec leo mattis laoreet.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%]  mx-auto">
          {blogData.map((blog) => (
            <div key={blog.id} className="bg-white w-96 mx-auto mb-10 rounded-lg p-10" data-aos="flip-left">
              <div className="text-center">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="mx-auto w-32 h-32 rounded-full"
                />
                <h2 className="text-xl font-semibold mt-4 mb-2">{blog.title}</h2>
              </div>
              <p className="text-gray-700 mb-4">{blog.description}</p>
                <div className="flex justify-center items-center">
                <button className="btn btn-success text-white" >Share</button>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
