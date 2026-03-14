import { createRoot } from 'react-dom/client'
import './index.css'
import {TodoPage} from "./TodoPage.tsx";

const rootEl = document.getElementById('root')
const reactRoot = createRoot(rootEl!)
reactRoot.render(<TodoPage />)
