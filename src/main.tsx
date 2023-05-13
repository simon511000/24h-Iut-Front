import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ProposalPage from './pages/ProposalPage.tsx'
import dayjs from 'dayjs'
import 'dayjs/locale/fr'
import Navbar from './components/Navbar.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HousePage } from './pages/HousePage.tsx'

dayjs.locale('fr')

const router = createBrowserRouter([
  {
    path: '/proposals',
    element: <>
      <Navbar />
      <ProposalPage />
    </>,
  },
  {
    path: '/my-house',
    element: <>
      <Navbar />
      <HousePage />
    </>,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <RouterProvider router={router} />
  </>
)
