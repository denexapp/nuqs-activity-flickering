import { FC } from "react";
import { parseAsString, useQueryState } from "nuqs";

export const Name: FC = () => {
  const [name] = useQueryState("name", parseAsString);

  return <>{name}</>;
};
