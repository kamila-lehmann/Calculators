/* Income Tax Calculator */

const Tax = () => {
  function calculateTax() {
    const income = document.getElementById("income").value;
    const costs = document.getElementById("costs").value;
    const profit = document.getElementById("profit");
    const preliminary_tax = document.getElementById("tax_preliminary");
    const health = document.getElementById("health").value;
    const tax_relief = document.getElementById("tax_relief").value;
    const prepaid_tax = document.getElementById("tax_prepaid").value;
    const final_tax = document.getElementById("tax_final");
    let tax;

    // Calculate the amount of profit
    profit.value = income - costs;

    // Calculate the tax amount before deductions
    if (profit.value >= 120001) {
      // for profit >= 120.0001 PLN
      tax = Math.round(15300 + (profit.value - 120000) * 0.32);
    } else {
      // for profit <= 120.000 PLN
      tax = Math.round(profit.value * 0.17);
    }
    preliminary_tax.value = tax;

    // Calculate the final amount of due tax
    final_tax.value = Math.round(tax - health - tax_relief - prepaid_tax);
  }

  return (
    <div className="calc-tax" id="calc-tax">
      <h2>Income Tax Calculator</h2>
      <form
        action="index.html"
        method="post"
        name="calculator_tax"
        className="form_2"
      >
        <div className="income_section">
          <label htmlFor="income">Income:</label>
          <input
            type="number"
            step="0.01"
            min="1"
            id="income"
            name="income"
            required
            autoComplete="off"
          />
        </div>

        <div className="costs_section">
          <label htmlFor="costs">Costs:</label>
          <input
            type="number"
            step="0.01"
            id="costs"
            name="costs"
            required
            autoComplete="off"
          />
        </div>

        <div className="profit_section">
          <label htmlFor="profit">Profit:</label>
          <input
            type="text"
            id="profit"
            name="profit"
            autoComplete="off"
            readOnly
          />
        </div>

        <div className="tax_preliminary_section">
          <label htmlFor="tax_preliminary">Preliminary Tax (17% / 32%):</label>
          <input
            type="number"
            step="0.01"
            id="tax_preliminary"
            name="tax_preliminary"
            autoComplete="off"
            readOnly
          />
        </div>

        <div className="health_section">
          <label htmlFor="health">Paid Health Contributions:</label>
          <input
            type="number"
            step="0.01"
            min="0"
            id="health"
            name="health"
            required
            autoComplete="off"
          />
        </div>

        <div className="tax_relief_section">
          <label htmlFor="tax_relief">Tax Relief:</label>
          <input
            type="number"
            step="0.01"
            min="0"
            id="tax_relief"
            name="tax_relief"
            required
            autoComplete="off"
          />
        </div>

        <div className="tax_prepaid_section">
          <label htmlFor="tax_prepaid">Paid Income Tax Advances:</label>
          <input
            type="number"
            step="0.01"
            min="0"
            id="tax_prepaid"
            name="tax_prepaid"
            required
            autoComplete="off"
          />
        </div>
        <div className="calculate">
          <button
            type="button"
            id="calculate_tax"
            name="calculate_tax"
            onClick={() => calculateTax()}
          >
            Calculate
          </button>
        </div>
      </form>

      <div className="tax_final_section">
        <label htmlFor="tax_final">Income Tax to pay:</label>
        <input
          type="number"
          step="0.01"
          id="tax_final"
          name="tax_final"
          required
          readOnly
        />
      </div>
    </div>
  );
};
export default Tax;
