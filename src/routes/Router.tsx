import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../app/Home/page";
import About from "../app/about/about";
import ChannelBox from "../app/channel-box/page";
import ChannelViewAll from "../app/channel-box/view-all/page";
import ChannelDetail from "../app/channel-box/ChannelDetail/ChannelDetail";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "channel-box",
          element: <ChannelBox />,
        },
        {
          path: "channel-box/view-all",
         element: <ChannelViewAll />,
        },
        {
          path: "channel-box/:id",
          element: <ChannelDetail />,
        }
    ],
  },
]);

export default router;