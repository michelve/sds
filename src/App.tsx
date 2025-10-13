import { AllProviders } from "data";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ComponentShowcase } from "./examples/ComponentShowcase";
import { Playground } from "./examples/Playground";

function App() {
  return (
    <AllProviders>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ComponentShowcase />} />
          <Route path="/demo" element={<Playground />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AllProviders>
  );
}

export default App;
