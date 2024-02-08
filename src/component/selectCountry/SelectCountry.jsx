import { City, Country, State } from "country-state-city";
import { useEffect, useState } from "react";
import { Selector } from "../selectCountry/Selector";

export const SelectCountry = () => {
  let countryData = Country.getAllCountries();
  const [stateData, setStateData] = useState();
  const [cityData, setCityData] = useState();

  const [country, setCountry] = useState(countryData[0]);
  const [state, setState] = useState();
  const [city, setCity] = useState();

  useEffect(() => {
    setStateData(State.getStatesOfCountry(country?.isoCode));
  }, [country]);

  useEffect(() => {
    setCityData(City.getCitiesOfState(country?.isoCode, state?.isoCode));
  }, [state]);

  useEffect(() => {
    stateData && setState(stateData[0]);
  }, [stateData]);

  useEffect(() => {
    cityData && setCity(cityData[0]);
  }, [cityData]);

  return (
    <>
      {/*  Addres */}
      <div className="w-100">
        <div className="form-control border-0 w-100">
          <div className="hederData ">
            <h5>العنوان النشئه</h5>
          </div>
          <label htmlFor="Country">الدولة</label>
          <Selector
            data={countryData}
            selected={country}
            setSelected={setCountry}
          />
        </div>
        {state && (
          <div className="form-control border-0 w-100">
            <label htmlFor="State">المحافظة</label>
            <Selector
              data={stateData}
              selected={state}
              setSelected={setState}
            />
          </div>
        )}
        {city && (
          <div className="form-control border-0 w-100">
            <label htmlFor="newAddress">العنوان</label>
            <Selector data={cityData} selected={city} setSelected={setCity} />
          </div>
        )}
      </div>
    </>
  );
};
