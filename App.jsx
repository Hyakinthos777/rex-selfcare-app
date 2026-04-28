import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CheckIn from "./pages/CheckIn";
import Activities from "./pages/Activities";
import Progress from "./pages/Progress";
import RexChat from "./pages/RexChat";
import Goals from "./pages/Goals";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/check-in" element={<CheckIn />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/chat" element={<RexChat />} />
          <Route path="/goals" element={<Goals />} />
        </Routes>
      </Layout>
    </Router>
  );
}
