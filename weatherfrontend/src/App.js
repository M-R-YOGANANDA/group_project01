import logo from './logo.svg';
import './App.css';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Forecast from './pages/Forecast';
import AQI from './pages/Aqi';
import WeatherMap from './pages/Weathermap';
import Location from './pages/Location';



const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/settings', element: <Settings />},
  {path: '/forecast', element: <Forecast />},
  {path: '/aqi', element: <AQI />},
  {path: '/weathermap', element: <WeatherMap />},
  {path: '/location', element: <Location />},
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
