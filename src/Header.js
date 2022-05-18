const Header = () => {
  return (
    <header className="main-header">
      <a href="/">
        <h1 className="name">Financial Calculators</h1>
      </a>
      <div className="main-nav">
        <ul>
          <a href="/salary-calculator">
            <li>Salary Calculator</li>
          </a>
          <a href="/costs-calculator">
            <li>Tax-deductible Costs Calculator</li>
          </a>
          <a href="/income-tax-calculator">
            <li>Income Tax Calculator</li>
          </a>
          <a href="/currency-calculator">
            <li>Currency Exchange Calculator</li>
          </a>
        </ul>
      </div>
    </header>
  );
};

export default Header;
