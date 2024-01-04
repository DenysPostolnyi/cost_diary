// Challenge / Exercise

// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage, {loader} from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetail";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEvent";
import Root from "./pages/Root";
import EventsRoot from "./pages/EventsRoot";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/', element: <Root/>, children: [
            {path: '/', element: <HomePage/>},
            {
                path: 'events', element: <EventsRoot/>,
                children: [
                    {
                        index: true, element: <EventsPage/>, loader: loader
                    },
                    {path: ':eventId', element: <EventDetailPage/>},
                    {path: 'new', element: <NewEventPage/>},
                    {path: ':eventId/edit', element: <EditEventPage/>},
                ],
            },
        ],
        errorElement: <ErrorPage/>
    },
]);

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
