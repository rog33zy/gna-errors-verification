import React from "react";
import CSVReader from "react-csv-reader";

const Reader = (props) => {
  const onFileLoadedHandler = (data) => props.setFileData(data);
  const papaParseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.toLowerCase().replace(/\W/g, "_"),
  };
  return (
    <div>
      <CSVReader
        onFileLoaded={onFileLoadedHandler}
        parserOptions={papaParseOptions}
        inputStyle={{
          opacity: 0,
          width: "600px",
          marginLeft: props.marginLeft,
          marginRight: props.marginRight,
        }}
      />
    </div>
  );
};

export default Reader;
