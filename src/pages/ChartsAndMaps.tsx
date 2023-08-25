import LineChart from "../components/LineChart";
import { useQuery } from "react-query";
import { useState } from "react";
import Map from "../components/Map";

const ChartsAndMaps = () => {
  const [showMap, setShowMap] = useState(false);
  const covidQuery = useQuery("covidData", () =>
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all").then(
      (res) => res.json()
    )
  );

  const mapQuery = useQuery("mapData", () =>
    fetch("https://disease.sh/v3/covid-19/countries").then((res) => {
      return res.json();
    })
  );

  const mapData = mapQuery?.data?.map((e: any) => {
    return {
      country: e.country,
      cases: e.cases,
      deaths: e.deaths,
      recovered: e.recovered,
      position: [e.countryInfo.lat, e.countryInfo.long],
    };
  });

  if (covidQuery.isLoading && mapQuery.isLoading) return <h2>Loading...</h2>;

  if (covidQuery.error && mapQuery.error) return <h2>An error has occurred</h2>;

  return (
    <div className="h-full relative">
      <div className="flex justify-end items-center">
        <div className="border border-emerald-500 mb-1 inline-block px-4 py-1 rounded bg-emerald-200">
          <span className="mr-2">Show Map</span>
          <span>
            <input
              type="checkbox"
              onChange={(e) => setShowMap(!showMap)}
              checked={showMap}
              className="cursor-pointer"
            />
          </span>
        </div>
      </div>
      {!showMap ? (
        <div className="bg-red-300 p-3 flex flex-col rounded-md">
          <h2 className="text-black font-bold text-2xl mb-2 text-center uppercase tracking-tight">
            Case Fluctuations Using Line Chart
          </h2>
          <div className="bg-white rounded-md p-3 flex-grow h-[80%]">
            <LineChart covidData={covidQuery.data} />
          </div>
        </div>
      ) : (
        <div className="bg-green-300 p-3 flex flex-col rounded-md h-[95%]">
          <h2 className="text-black font-bold text-2xl mb-2 text-center uppercase tracking-tight">
            Case Info Using React Leaflet Map
          </h2>
          <div className="flex-1 bg-white rounded-md">
            <Map zoom={3} center={[51.505, -0.09]} markers={mapData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChartsAndMaps;
