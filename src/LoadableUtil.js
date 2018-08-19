import Loadable from "react-loadable";
import Loading from "./components/Spinner";

export function LoadAsync(path) {
  return Loadable({
    loader: () => import(`./components/${path}`),
    loading: Loading
  });
}
