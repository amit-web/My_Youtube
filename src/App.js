import { Provider } from "react-redux";
import "./App.css";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {
  const appRoute = createBrowserRouter([{
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
    ]
  }  
  ]);
  return (
    <div>
      <Provider store={store}>
        <Head />
        <RouterProvider router={appRoute}>
          <Body />
        </RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
