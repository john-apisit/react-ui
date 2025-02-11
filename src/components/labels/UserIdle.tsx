import { useIdle } from "@uidotdev/usehooks";

const UserIdle = () => {
  const idle = useIdle(5000);
  return (
    <div className="flex gap-2 items-center">
      <div className="relative flex gap-2 items-center size-3">
        <div
          className={`absolute rounded-full inset-0 animate-ping ${
            idle
              ? "text-orange-500 bg-orange-500"
              : "text-green-500 bg-green-500"
          }`}
        ></div>
        <div
          className={`rounded-full size-full ${
            idle
              ? "text-orange-500 bg-orange-500"
              : "text-green-500 bg-green-500"
          }`}
        ></div>
      </div>
      <span>{idle ? "Inactive" : "Active"}</span>
    </div>
  );
};

export default UserIdle;
