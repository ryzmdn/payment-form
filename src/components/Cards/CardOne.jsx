import PropTypes from "prop-types";
import Chip from "@/assets/chip.svg";

export function CardOne({ name, cvv, number, valid, expired }) {
  return (
    <div className="w-[330px] h-[190px] m-auto rounded-xl relative text-white shadow-2xl lg:w-[390px] lg:h-[210px]">
      <div className="relative object-cover w-full h-full rounded-xl bg-gradient-to-br from-slate-900 to-gray-900"></div>

      <div className="w-full px-5 absolute top-5 left-0">
        <div className="flex justify-between items-center">
          <img className="w-auto h-7 lg:h-9" alt="Card chip" src={Chip} />
          <img
            className="w-auto h-7 lg:h-8"
            alt="card logo"
            src="https://img.logoipsum.com/289.svg"
          />
        </div>
        <div className="w-full py-5 text-start">
          <p className="text-2xl font-medium tracking-wider lg:text-3xl lg:tracking-wider">{number || "#### #### #### ####"}</p>
          <div className="absolute left-6 mt-1">
            <p className="font-medium tracking-wider text-xs">
              {cvv || "####"}
            </p>
          </div>
        </div>
        <div className="pt-7">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium tracking-widest">{name || "--- ---"}</p>
            </div>
            <div className="inline-flex items-center space-x-4">
              <div>
                <p className="text-[9px] font-thin leading-none">Valid</p>
                <p className="font-medium tracking-wider text-xs">{valid || "MM / YY"}</p>
              </div>
              <div>
                <p className="text-[9px] font-thin leading-none">Expire</p>
                <p className="font-medium tracking-wider text-xs">{expired || "MM / YY"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CardOne.propTypes = {
  name: PropTypes.string.isRequired,
  cvv: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  valid: PropTypes.string.isRequired,
  expired: PropTypes.string.isRequired,
}