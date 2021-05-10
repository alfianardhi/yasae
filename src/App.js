import './assets/css/app.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Homepage from 'pages/HomePage'

function App() {
  return (
    <div className='App'>
      <Router>
        <Route path='/' exact component={Homepage} />
      </Router>
    </div>
  )
}

export default App
