import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import Project from './Pages/Project';
import Resume from './Pages/Resume';
import Error from './Pages/Error';

function App() {
  return (
    <div
    className='w-screen min-h-screen'
    >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
