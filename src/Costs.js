/* Tax-deductible Costs Calculator */

const Costs = () => {
  function calculateCosts() {
    const inv_entry = document.getElementById("inv_entry");
    const goods = document.getElementById("goods");
    const side_costs = document.getElementById("side_costs");
    const inv_end = document.getElementById("inv_end");
    const other_costs = document.getElementById("other_costs");
    const wages = document.getElementById("wages");
    const total_costs = document.getElementById("total_costs");
    // Calculate the amount of tax deductible expenses
    total_costs.value = (
      +inv_entry.value +
      +goods.value +
      +side_costs.value -
      +inv_end.value +
      +other_costs.value -
      +wages.value
    ).toFixed(2);
  }

  // Call the calculateCosts function on button click

  return (
    <div className="calc-costs" id="calc-costs">
      <h2>Tax-deductible Costs Calculator</h2>
      <form
        action="index.html"
        method="post"
        name="calculator_costs"
        className="form_3"
      >
        <div className="inv_entry_section">
          <label htmlFor="inv_entry">
          Inventory value at the beginning of the year:</label>
          <input
            type="number"
            step="0.01"
            min="0"
            id="inv_entry"
            name="inv_entry"
            required
            autoComplete="off"
          />
        </div>
        <div className="goods_section">
          <label htmlFor="goods">Expenses for the purchase of goods:</label>
          <input
            type="number"
            step="0.01"
            min="0"
            id="goods"
            name="goods"
            required
            autoComplete="off"
          />
        </div>
        <div className="side_costs_section">
          <label htmlFor="side_costs">Expenses for incidental purchase costs:</label>
          <input
            type="number"
            step="0.01"
            min="0"
            id="side_costs"
            name="side_costs"
            required
            autoComplete="off"
          />
        </div>
        <div className="inv_end_section">
          <label htmlFor="inv_end">
          Inventory value at the end of the year:</label>
          <input
            type="number"
            step="0.01"
            min="0"
            id="inv_end"
            name="inv_end"
            required
            autoComplete="off"
          />
        </div>
        <div className="other_costs_section">
          <label htmlFor="other_costs">Other expenses:</label>
          <input
            type="number"
            step="0.01"
            min="0"
            id="other_costs"
            name="other_costs"
            required
            autoComplete="off"
          />
        </div>
        <div className="wages_section">
          <label htmlFor="wages">
          Value of salaries in kind included in other columns:
          </label>
          <input
            type="number"
            step="0.01"
            min="0"
            id="wages"
            name="wages"
            required
            autoComplete="off"
          />
        </div>
        <div className="calculate">
          <button
            type="button"
            id="calculate_costs"
            name="calculate_costs"
            onClick={() => calculateCosts()}
          >
            Calculate
          </button>
        </div>
      </form>
      <div className="total_costs_section">
        <label htmlFor="total_costs">Total Costs:</label>
        <input type="number" id="total_costs" name="total_costs" readOnly />
      </div>
    </div>
  );
};

export default Costs;
