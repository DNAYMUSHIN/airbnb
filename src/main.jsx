import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './components/NavBar.jsx'
import SectionMain from "./components/SectionMain.jsx";
import Card from "./components/Card.jsx";
import CardsList from "./components/CardsList.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <NavBar />
      <SectionMain />
      <CardsList />
  </StrictMode>,
)
