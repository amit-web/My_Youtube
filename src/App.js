import { Provider } from "react-redux";
import "./App.css";
import "./App.css";
import Body from "./components/Body";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchVideo from "./components/SearchVideo";

function App() {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
        {
          path: "searchWatch",
          element: <SearchVideo />,
        },
      ],
    },
  ]);
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={appRoute}>  
          <Body />
        </RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
