import React from "react";

type Props = {
  children?: React.ReactNode;
};

const NotFound: React.FC<Props> = (props) => {
  const {} = props;
  return <h1>404: Page not found</h1>;
};

export default NotFound;
