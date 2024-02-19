import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/router";
import { FadeLoading } from "@/config/appLoading";

interface SavePlacesProps {
  pickup: string;
  id: string;
  dropoff: string;
  deleteLocationItem: (id: string) => void;
  deletePlaceLoading: { [key: string]: boolean };
}

const SavePlaces: React.FC<SavePlacesProps> = ({
  pickup,
  id,
  dropoff,
  deleteLocationItem,
  deletePlaceLoading,
}) => {
  const router = useRouter();

  const findLocation = () => {
    router.push({
      pathname: "/confirm",
      query: {
        pickup: pickup,
        dropoff: dropoff,
      },
    });
  };

  return (
    <div className="w-full flex justify-between px-[20px] py-[7px] hover:bg-gray-100 active:bg-gray-200">
      <button onClick={findLocation} className="flex item-center">
        <p className="text-left text-[18px]">
          <span className="font-bold">From:</span>
          <span className="mx-[5px] capitalize">{pickup}</span>
          <span className="ml-[5px] font-bold">To:</span>
          <span className="mx-[5px] capitalize">{dropoff}</span>
        </p>
      </button>
      <button
        className=""
        onClick={() => deleteLocationItem(id)}
        disabled={deletePlaceLoading[id]}
      >
        {deletePlaceLoading[id] ? (
          <div className="mb-[-20px] mr-[-20px] p-2">
            <FadeLoading height={6} width={3} margin={-12} />
          </div>
        ) : (
          <DeleteIcon />
        )}
      </button>
    </div>
  );
};

export default SavePlaces;
