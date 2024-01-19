import Styles from "./WidgetPrimary.module.css";
import Container from "@amoshydra.local/container";
import Item from "@amoshydra.local/item";

// @ts-ignore
const config = JSON.stringify(____PROJECT_MODULE_FEDERATION_CONFIG_SHARED____, null, 2);
// @ts-ignore
const flavor = JSON.stringify(____PROJECT_FLAVOR____);

export const Main = () => {
  return (
    <div className={Styles.cssApp}>
      <h1>Remote - {flavor}</h1>
      <Container />
      <br />
      <Item />

      <h2>Shared config</h2>
      <pre>{config}</pre>
    </div>
  )
};
