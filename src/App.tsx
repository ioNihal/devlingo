import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/HomePage/Home';
import { Lesson } from './pages/LessonPage/Lesson';
import { Profile } from './pages/ProfilePage/Profile';
import { Experimental } from './pages/ExperimentalPage/Experimental';
import { Layout } from './components/Layout/Layout';

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
