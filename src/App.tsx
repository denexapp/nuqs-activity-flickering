import "./styles.css";
import { NuqsAdapter } from "nuqs/adapters/react-router/v7";
import { Main } from "./Main";

export default function App() {
  return (
    <NuqsAdapter>
      <Main />
    </NuqsAdapter>
  );
}
