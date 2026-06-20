import { parseAsString, useQueryState } from "nuqs";
import { useState, Activity } from "react";
import { Name } from "./Name";
import { NameInput } from "./NameInput";

export function Main() {
  const [visibility, setVisibility] = useState(true);
  const [name, setName] = useQueryState("name", parseAsString);

  return (
    <div>
      <p>
        <label>
          Enter your name: <NameInput />
        </label>
      </p>
      <p>
        <label>
          Make activity visible:{" "}
          <input
            type={"checkbox"}
            checked={visibility}
            onChange={(e) => setVisibility(e.target.checked)}
          />
        </label>
      </p>
      <p>
        unwrapped component: <Name />
      </p>
      <p>
        component wrapped with Activity:{" "}
        <Activity mode={visibility ? "visible" : "hidden"}>
          <Name />
        </Activity>
      </p>
    </div>
  );
}
