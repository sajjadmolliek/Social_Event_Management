import wedding from "../../assets/banner_Image/wedding_Photojpg.jpg";
import eneversary from "../../assets/banner_Image/eneversary_Photo.jpg";
import engagement from "../../assets/banner_Image/elegant-couple-Photo.jpg";
import birthday from "../../assets/banner_Image/birthday-celebrations_Photo.jpg";
import retairment from "../../assets/banner_Image/Retairerment_Photo.jpg";
import babyShawer from "../../assets/banner_Image/BabyShawer.png";

const CarosoleBanner = () => {
  return (
    <div>
      <div className="w-[88%] rounded-2xl flex justify-center mx-auto lg:h-[650px] bg-black ">
        <div className="carousel w-[100%] mx-auto rounded-2xl  opacity-40">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={engagement} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide6" className="btn btn-circle ">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle ">
                ❯
              </a>
            </div>
          </div>

          <div id="slide2" className="carousel-item relative w-full">
            <img src={wedding} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={eneversary} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={babyShawer} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide5" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide5" className="carousel-item relative w-full">
            <img src={birthday} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide6" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide6" className="carousel-item relative w-full">
            <img src={retairment} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide5" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:-mt-[30%] -mt-[50%] mx-auto max-w-6xl  text-white h-96 ">
        <p className="lg:text-8xl  md:text-5xl text-2xl  font-bold text-center ">Join the celebration and <br /> {`let's make memories.`}</p>
        <br />
        <hr className="lg:w-[60rem] md:w-[30rem] w-[15rem] mx-auto" />
        <p className="lg:text-3xl text-sm font-thin text-center mt-5"> Life is a continuous event. <br className="lg:hidden md:hidden" /> Making your event more extraordinary. <br />Out Of This World Celebration! · We Turn Ideas Into Action.
</p>
      </div>
    </div>
  );
};

export default CarosoleBanner;
