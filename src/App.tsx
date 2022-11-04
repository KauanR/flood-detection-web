import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import { DetectionPage } from './pages/detection'
import { JoinPage } from './pages/join'
import './App.scss'

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <JoinPage/>
        },
        {
            path: '/detection',
            element: <DetectionPage/>
        }
    ])

    return <RouterProvider router={router} />
}

export default App
