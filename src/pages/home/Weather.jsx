import { Wind, CloudRain } from "lucide-react";

export default function Weather() {
  return (
    <div className="flex item-center justify-center">
      <div className="flex flex-col items-center">
        <div className="text-[18em] font-semibold">20&deg;</div>
        <div className="text-5xl font-semibold">Cloudy</div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-baseline items-center w-2xs gap-8">
          <Wind size={52} />
          <span className="text-3xl font-semibold">6.1 mph</span>
        </div>
        <div className="flex justify-baseline items-center w-2xs gap-8">
          <CloudRain size={52} />
          <span className="text-3xl font-semibold">90%</span>
        </div>
      </div>
    </div>
  );
}
