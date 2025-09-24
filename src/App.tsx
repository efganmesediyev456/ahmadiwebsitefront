import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store';

// Import pages
import Home from "./pages/home/Home";
import WhoWeAre from "./pages/whoweare/WhoWeAre";
import WhoWeDo from "./pages/WhoWeDo/WhoWeDo";
import OurWorks from "./pages/OurWorks/OurWorks";
import WorkPageDetail from "./pages/WorkPageDetail/WorkPageDetail";
import Contact from "./pages/Contact/Contact";




const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={<Navigate to="/en" replace />} 
          />

          <Route path="/:lang">
            <Route index element={<Home key={location.pathname} />} />
            <Route path="whoweare"  element={<WhoWeAre key={location.pathname} />} />
            <Route path="whowedo" element={<WhoWeDo key={location.pathname} />} />
            <Route path="ourworks" element={<OurWorks key={location.pathname} />} />
            <Route path="ourworks/:slug" element={<WorkPageDetail key={location.pathname} />} />
            <Route path="contact" element={<Contact key={location.pathname} />} />
          </Route>

          <Route 
            path="*" 
            element={<Navigate to="/en" replace />} 
          />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
