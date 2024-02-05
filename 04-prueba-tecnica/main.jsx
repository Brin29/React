import { createRoot } from 'react-dom/client'
import {App} from './src/App.jsx'

// Como es un archivo js vite no transpila el codigo debe ser un archivo jsx
const root = createRoot(document.getElementById('app'))
root.render(
  <App firstWord={"ciao"}/>
)
