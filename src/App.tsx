import './App.css';
import JobsContainer from './components/JobsContainer';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Navigate } from 'react-router';
import ChosenJobElement from './components/ChosenJobElement';

function App() {

  return (

    <BrowserRouter>
      <div className="w-full ">
        <Routes >
          <Route path="/" element={<Navigate to="/jobsList" />} />
          <Route element={<JobsContainer />} path='/jobsList' />
          <Route element={ < ChosenJobElement />} path='/chosenJob' />
          <Route element={<JobsContainer />}  path='*' />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
