"use client";
import React, { useState, useEffect } from "react";
import ImageBillboard from "<@>/components/ImageBillboard";
import { fetchByLanguage } from "<@>/lib/fetch";
import { languages, LanguagesType } from "<@>/data/languages";
import ReactSelect, { SingleValue } from "react-select";
import MediaGrid from "<@>/components/MediaGrid";

const page = () => {
  const [data, setData] = useState<MoviesResult[]>([]);

  console.log(data[0]);
  const fetchData = async (language: string) => {
    const data = await fetchByLanguage(language);
    console.log("fetchedData", data);
    setData(data.results);
  };
  useEffect(() => {
    fetchData(languages[0].value);
  }, []);
  const onChangeHandler = async (e: SingleValue<LanguagesType>) => {
    if (e) fetchData(e.value);
  };
  return (
    <div className="pb-32 relative">
      <div className="absolute top-24 right-10 z-[20]">
        <ReactSelect
          options={languages}
          onChange={onChangeHandler}
          unstyled
          classNames={{
            control: (state) =>
              `border border-gray-600 w-[150px] sm:w-[250px] bg-black  p-2 !border  font-semibold text-sm sm:text-lg !cursor-pointer`,
            option: (state) =>
              `${
                state.isSelected ? "font-bold" : "font-normal"
              } !cursor-pointer bg-black p-2 text-lg hover:bg-slate-800`,
            menu: () => "border border-gray-500 py-2 !z-20 bg-black",
          }}
          defaultValue={languages[0]}
        />
      </div>
      {data.length !== 0 && <ImageBillboard data={data[0]} />}

      <MediaGrid data={data} title="Movies" />
    </div>
  );
};

export default page;
