import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Lesson } from './pages/Lesson';
import { Profile } from './pages/Profile';
import { Experimental } from './pages/Experimental';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lesson/:courseId/:lessonId" element={<Lesson />} />
          <Route path="profile" element={<Profile />} />
          <Route path="experimental" element={<Experimental />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
