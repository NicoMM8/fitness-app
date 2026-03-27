import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import Workouts from './pages/Workouts';
import Routines from './pages/Routines';
import Catalog from './pages/Catalog';
import MealPlans from './pages/MealPlans';
import Calories from './pages/Calories';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Routes>
          <Route path="/" element={<Workouts />} />
          <Route path="/routines" element={<Routines />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/mealplans" element={<MealPlans />} />
          <Route path="/calories" element={<Calories />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

