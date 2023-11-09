import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from "./error-page"
import Contact, { loader as contactLoader } from './routes/contact'
import Root, { loader as rootLoader, action as rootAction } from "./routes/root"
import { EditContact, action as editAction } from './routes/edit';
import { action as deleteContact } from './routes/destroy'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: '/', element: < Root />,
    loader: rootLoader,
    action: rootAction,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: 'contacts/:contactId/edit',
        element: <EditContact />,
        loader: contactLoader,
        action: editAction
      },
      {
        path: 'contacts/:contactId/destroy',
        action: deleteContact,
        errorElement: <div>OOPSIE!!</div>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
