export default function WeekForcast() {
  return (
    <div className="flex gap-8 mt-16 justify-center">
      <div className="flex flex-col gap-1 justify-center items-center border-2 border-accent-foreground/20 rounded-lg px-4 py-4 w-36">
        <h2 className="text-xl font-semibold mb-4">Today</h2>
        <span className="text-3xl font-medium">26&deg;</span>
        <span className="text-lg">Cloudy</span>
      </div>
      <div className="flex flex-col gap-1 justify-center items-center rounded-lg px-4 py-4 w-36">
        <h2 className="text-xl font-semibold mb-4">Monday</h2>
        <span className="text-3xl font-medium">26&deg;</span>
        <span className="text-lg">Cloudy</span>
      </div>
      <div className="flex flex-col gap-1 justify-center items-center  rounded-lg px-4 py-4 w-36">
        <h2 className="text-xl font-semibold mb-4">Tuesday</h2>
        <span className="text-3xl font-medium">26&deg;</span>
        <span className="text-lg">Cloudy</span>
      </div>
      <div className="flex flex-col gap-1 justify-center items-center  rounded-lg px-4 py-4 w-36">
        <h2 className="text-xl font-semibold mb-4">Wednesday</h2>
        <span className="text-3xl font-medium">26&deg;</span>
        <span className="text-lg">Cloudy</span>
      </div>
      <div className="flex flex-col gap-1 justify-center items-center  rounded-lg px-4 py-4 w-36">
        <h2 className="text-xl font-semibold mb-4">Thursday</h2>
        <span className="text-3xl font-medium">26&deg;</span>
        <span className="text-lg">Cloudy</span>
      </div>
      <div className="flex flex-col gap-1 justify-center items-center rounded-lg px-4 py-4 w-36">
        <h2 className="text-xl font-semibold mb-4">Friday</h2>
        <span className="text-3xl font-medium">26&deg;</span>
        <span className="text-lg">Cloudy</span>
      </div>
      <div className="flex flex-col gap-1 justify-center items-center rounded-lg px-4 py-4 w-36">
        <h2 className="text-xl font-semibold mb-4">Saturday</h2>
        <span className="text-3xl font-medium">26&deg;</span>
        <span className="text-lg">Cloudy</span>
      </div>
    </div>
  );
}
