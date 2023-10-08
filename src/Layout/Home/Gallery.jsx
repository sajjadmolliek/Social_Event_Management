/* eslint-disable react/prop-types */


const Gallery = ({ data }) => {
  return (
    <div className="my-10">
      <div className="w-[88%] mx-auto">
        <div>
          <h1 className="text-center font-bold text-5xl">Gallery</h1>
        </div>
        <div  className="grid md:grid-cols-2 lg:grid-cols-3  gap-5 mt-10">{
            data.map((event) => (
            <div key={event.id}  data-aos="flip-left">
                <figure>
                  <img className="w-[100%] h-64" src={event.image} alt="Picture" />
                </figure>
            </div>
          ))
        }</div>
      </div>
    </div>
  );
};

export default Gallery;
