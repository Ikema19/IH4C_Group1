import { NextPage } from "next";
import React from "react";
import Layout from "../../components/template/layout";
import { spots as localSpotsData } from "../../constants";
import Image from "next/image";
import Link from "next/link";

type State = {
  spots: any[]; // FIXME: any
};

const initialState: State = {
  spots: [],
};

const TravelBrochure: NextPage = () => {
  const [spots, setSpots] = React.useState(initialState.spots);

  React.useEffect(() => {
    const key = "travel-brochures-spots";
    const storedSpots = localStorage.getItem(key);

    if (!storedSpots) return;

    const parsedSpots = JSON.parse(storedSpots);
    if (!Array.isArray(parsedSpots)) return;

    // TODO: モックではなくAPIから取得する
    setSpots(localSpotsData.filter((spot) => parsedSpots.includes(spot.id)));
  }, []);

  const handleClick = (spotId: string) => {
    const key = "travel-brochures-spots";
    const storedSpots = localStorage.getItem(key);

    if (!storedSpots) return;

    const parsedSpots = JSON.parse(storedSpots);
    if (!Array.isArray(parsedSpots)) return;

    const newSpots = parsedSpots.filter((spot: string) => spot != spotId);

    localStorage.setItem(key, JSON.stringify(newSpots));
    setSpots(localSpotsData.filter((spot) => newSpots.includes(spot.id)));
  };

  return (
    <Layout>
      <select>
        <option>すべてのスポット</option>
      </select>
      <ul className="grid gap-8 grid-flow-row grid-cols-[repeat(2,1fr)]">
        {spots.map((spot) => {
          return (
            <li key={spot.id}>
              <Image
                src="/no-image.png"
                alt={spot.name}
                width={1980}
                height={1150}
                sizes={"100vw"}
                className="rounded-sm"
              />
              <p>{spot.name}</p>
              <div className="flex">
                <Link href={`/spots/${spot.id}`}>
                  <span className="text-blue-500">詳細</span>
                </Link>
                <button onClick={(spotId) => handleClick(spot.id)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default TravelBrochure;
