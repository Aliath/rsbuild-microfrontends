import { Fieldset } from "@/components/fieldset";
import { SharedApp } from "@app2/shared-app";
import "./app.css";

export const App = () => {
  return (
    <>
      <h1 className="text-gradient">RSBuild & Module Fedaration</h1>

      <Fieldset title="App 1" color="purple">
        This section is rendered by App 1.
        <SharedApp />
      </Fieldset>
    </>
  );
};
