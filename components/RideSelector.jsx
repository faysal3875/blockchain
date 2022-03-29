import Image from "next/image";
import uberX from "../assets/uberX.png";
import uberBlack from "../assets/uberBlack.png";
import uberBlackSuv from "../assets/uberBlackSuv.png";
import uberSelect from "../assets/uberSelect.png";
import uberXL from "../assets/uberXL.png";

const carList = [
  {
    service: "UberX",
    iconUrl: uberX,
    priceMultiplier: 1,
  },
  {
    service: "UberBlack",
    iconUrl: uberBlack,
    priceMultiplier: 1.5,
  },
  {
    service: "UberBlackSuv",
    iconUrl: uberBlackSuv,
    priceMultiplier: 1.5,
  },
  {
    service: "UberSelect",
    iconUrl: uberSelect,
    priceMultiplier: 2,
  },
  {
    service: "UberXL",
    iconUrl: uberXL,
    priceMultiplier: 2,
  },
];

const style = {
  wrapper: `h-full flex flex-col`,
  title: `text-gray-500 text-center text-xs py-2 border-b`,
  carList: `flex flex-col flex-1 overflow-scroll`,
  car: `flex p-3 m-2 items-center border-2 border-white`,
  selectedCar: `border-2 border-black flex p-3 m-2 items-center`,
  carImage: `h-14`,
  carDetails: `ml-2 flex-1`,
  service: `font-medium`,
  time: `text-xs text-blue-500`,
  priceContainer: `flex items-center`,
  price: `mr-[-0.8rem]`,
};

const basePrice = 123483;
const RideSelector = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>Choose a ride, or swipe up for more</div>
      <div className={style.carList}>
        {carList.map((car, index) => (
          <div key={index} className={style.car}>
            <Image
              src={car.iconUrl}
              className={style.carImage}
              height={50}
              width={50}
            />
            <div className={style.carDetails}>
              <div className={style.service}>{car.service}</div>
              <div className={style.time}> 5 min away</div>
            </div>
            <div className={style.priceContainer}>
              <div className={style.price}>
                {((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RideSelector;
