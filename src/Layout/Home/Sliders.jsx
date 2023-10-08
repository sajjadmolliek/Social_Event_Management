import { useState } from "react";
import Photography from "../../assets/Services-image/Photography.jpg";
import decoration from "../../assets/Services-image/decoration.jpg";
import cataring from "../../assets/Services-image/cataring.jpg";
import { Link } from "react-router-dom";

const Sliders = () => {
  const [state1, setState1] = useState(true);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);

  const hide1 = () => {
    setState1(true);
    setState2(false);
    setState3(false);
  };
  const hide2 = () => {
    setState1(false);
    setState2(true);
    setState3(false);
  };
  const hide3 = () => {
    setState1(false);
    setState2(false);
    setState3(true);
  };

  return (
    <div className="">
      <div className=" my-10 ">
        <div className="lg:h-[90vh] lg:grid lg:grid-cols-2 justify-center items-center lg:w-[80%] lg:mx-auto">
          <div >
            {state1 ? (
              <div className="lg:w-full ">
                <div className="lg:w-3/4 lg:text-justify p-10 lg:p-0">
                  <h1 className="text-4xl text-center lg:text-start lg:text-6xl font-bold">
                    {"PHOTOGRAPHY"}
                  </h1>
                  <p className="text-lg my-10 text-justify lg:text-start ">{`Our team of dedicated photographers is committed to capturing the essence and emotion of every occasion. With an unwavering commitment to professionalism, creativity, and personalized service, we ensure that your photography experience is exceptional. Our cutting-edge equipment guarantees high-quality results, while our competitive pricing makes professional photography accessible to all. We don't just take pictures; we craft stories and emotions that will stand the test of time. Contact us today to capture the moment; relive the memories with [Sajjad Photography Studio]`}</p>
                  <div className="w-40 mx-auto lg:w-full">
                    <Link className="bg-[#F9A51A]  font-bold text-black rounded-lg px-4 py-2">{`Booking ->`}</Link>
                  </div>
                </div>
              </div>
            ) : state2 ? (
              <div className="lg:w-full ">
                <div className="lg:w-3/4 lg:text-justify p-10 lg:p-0">
                  <h1 className="text-4xl text-center lg:text-start lg:text-6xl font-bold">
                    {"DECORATION"}
                  </h1>
                  <p className="text-lg my-10 text-justify lg:text-start ">{`At [Sajjad Decoration LTD.], we specialize in turning ordinary spaces into extraordinary environments, leaving a lasting impression on your guests. Our team of skilled decorators brings creativity, precision, and attention to detail to every project. we take your vision and breathe life into it. Contact us today to discuss your upcoming occasion, and let us transform your dreams into reality.`}</p>
                  <div className="w-40 mx-auto lg:w-full">
                    <Link className="bg-[#F9A51A] font-bold text-black rounded-lg px-4 py-2">{`Booking ->`}</Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="lg:w-full ">
                <div className="lg:w-3/4 lg:text-justify p-10 lg:p-0">
                  <h1 className="text-4xl text-center lg:text-start lg:text-6xl font-bold">
                    {"CATERING"}
                  </h1>
                  <p className="text-lg my-10 text-justify lg:text-start ">{`At [Sajjad Catering LTD.], we're dedicated to elevating your event with exceptional cuisine. Our expert chefs and attentive team ensure every bite is a delight. From intimate gatherings to grand celebrations, let us handle the cuisine while you relish the moment. Contact us today to make your occasion extraordinary.`}</p>
                  <div className="w-40 mx-auto lg:w-full">
                    <Link className="bg-[#F9A51A] font-bold text-black rounded-lg px-4 py-2">{`Booking ->`}</Link>
                  </div>{" "}
                </div>
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-4">
            <div className="w-[80%] lg:w-[100%] rounded-2xl mx-auto">
              <img
                src={Photography}
                alt="Image 1"
                className={` ${
                  !state1 ? "border-0" : "border-y-8 border-x-4"
                } rounded-2xl border-[#36D399]`}
              />
              <div className="-mt-16 ml-2 text-2xl font-bold text-red-600">{`PHOTOGRAPHY`}</div>
            </div>
            <div className="w-[80%] lg:w-[100%] rounded-2xl mx-auto">
              <img
                src={decoration}
                alt="Image 1"
                className={` ${
                  !state2 ? "border-0" : "border-y-8 border-x-4"
                } rounded-2xl border-[#36D399]`}
              />
              <div className="-mt-16 ml-2 text-2xl font-bold text-white">
                DECORATION
              </div>
            </div>
            <div className="w-[80%] lg:w-[100%] rounded-2xl mx-auto">
              <img
                src={cataring}
                alt="Image 1"
                className={` ${
                  !state3 ? "border-0" : "border-y-8 border-x-4"
                } rounded-2xl border-[#36D399]`}
              />
              <div className="-mt-16 ml-2 text-2xl font-bold text-white">
                CATERING
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-20 h-[10vh]">
          <div className="flex justify-center">
            <button
              onClick={hide3}
              href="#slide1"
              className={`${!state1 ? "hidden" : "visible"} text-2xl px-2`}
            >
              ❮
            </button>
            <button
              onClick={hide2}
              href="#slide2"
              className={`${!state1 ? "hidden" : "visible"} text-2xl px-2`}
            >
              ❯
            </button>
          </div>
          <div className="flex justify-center ">
            <button
              onClick={hide1}
              href="#slide1"
              className={`${!state2 ? "hidden" : "visible"} text-2xl px-2`}
            >
              ❮
            </button>
            <button
              onClick={hide3}
              href="#slide2"
              className={`${!state2 ? "hidden" : "visible"} text-2xl px-2`}
            >
              ❯
            </button>
          </div>
          <div className="flex justify-center">
            <button
              onClick={hide2}
              href="#slide1"
              className={`${!state3 ? "hidden" : "visible"} text-2xl px-2`}
            >
              ❮
            </button>
            <button
              onClick={hide1}
              href="#slide2"
              className={`${!state3 ? "hidden" : "visible"} text-2xl px-2`}
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sliders;
