import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';
import Login from './Login';
import Navbar from './Navbar';
import Tasks from './Tasks';
import About from './About'; 
import Dashboard from './Dashbaord';
import Home from './Home'
function App() {
  return (
    <AuthProvider>

        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home/>
              </PrivateRoute>
            }
          />
          <Route
            path="/Dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/tasks"
            element={
              <PrivateRoute>
                <Tasks />
              </PrivateRoute>
            }
          />
          <Route
            path="/about"
            element={
              <PrivateRoute>
                <About />
              </PrivateRoute>
            }
          />
        </Routes>

    </AuthProvider>
  );
}

export default App;