import { ComponentA, Fieldset } from "@app1/shared";

export const SharedApp = () => {
  return (
    <Fieldset title="App 2" color="yellow">
      This section is provided by App 2.
      <ComponentA>
        This component is provided by App 1 but rendered by App 2.
      </ComponentA>
    </Fieldset>
  );
};
