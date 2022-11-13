import './App.css';
import JobsContainer from './components/JobsContainer';
import { Route, Routes, HashRouter } from 'react-router-dom';
import { Navigate } from 'react-router';
import ChosenJobElement from './components/ChosenJobElement';


function App() {

  return (
    <HashRouter>
      <div className="w-full ">
        <Routes >
          <Route path="/" element={<Navigate to="/jobsList" />} />
          <Route element={<JobsContainer />} path='/jobsList' />
          <Route element={ < ChosenJobElement />} path='/chosenJob' />
          <Route element={<JobsContainer />}  path='*' />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
