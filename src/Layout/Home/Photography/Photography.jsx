import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Photography = () => {
  const { id } = useParams();
  const [takeData, setTakeData] = useState([]);


  const dataCome = useLoaderData();



  useEffect(() => {
    const findData = dataCome.find((data) => data.id == id);
    if (findData) {
      setTakeData(findData);
    } 
  },[id,dataCome]);

  return (
    <>
      <div className="card h-[30rem] card-compact bg-base-100 shadow-xl w-[80%] mx-auto my-20">
        <figure>
          <img src={takeData.image} alt="Picture" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{takeData.title}</h2>
          <p className="my-4">{takeData.description}</p>
          <div className="card-actions justify-between mb-4 items-center">
            <button className="btn btn-success text-white">
              {takeData.price}
            </button>
            <button className="btn btn-success text-white">Show Details</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Photography;
