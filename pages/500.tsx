import React from "react";

type Props = {
  children?: React.ReactNode;
  
};

const Custom500: React.FC<Props> = (props) => {
  const {} = props;
  
  return <h1>500 - Server-side error occured</h1>;
};

export default Custom500;

