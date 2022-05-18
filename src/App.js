import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Salary from "./Salary";
import Costs from "./Costs";
import Tax from "./Tax";
import Currency from "./Currency";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/salary-calculator" element={<Salary />} />
        <Route path="/costs-calculator" element={<Costs />} />
        <Route path="/income-tax-calculator" element={<Tax />} />
        <Route path="/currency-calculator" element={<Currency />} />
      </Routes>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("root"));
