/* Core */
import { Provider } from "react-redux";

/* Instruments */
import { store } from "./redux";

export const Providers = (props: React.PropsWithChildren<{}>) => {
  return <Provider store={store}>{props.children}</Provider>;
};
