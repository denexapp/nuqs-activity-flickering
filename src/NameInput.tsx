import { FC } from "react";
import { parseAsString, useQueryState } from "nuqs";

export const NameInput: FC = () => {
  const [name, setName] = useQueryState("name", parseAsString);

  return <input value={name ?? ''} onChange={(e) => setName(e.target.value)} />;
};
