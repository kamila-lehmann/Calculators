/* Salary Calculator */

const Salary = () => {
  //const button_salary = document.getElementById("oblicz_wynagrodzenie");

  function calculateSalary() {
    const salary_gross = document.getElementById("salary");
    const salary_net = document.getElementById("salary_net");
    const tax_relief = document.getElementById("tax_relief");
    const middle_class_relief = document.getElementById("middle_class_relief");
    const costs = document.getElementById("costs");
    const age = document.getElementById("age");
    const salary = salary_gross.value;

    // Calculate social security contributions
    const social = (salary_gross * 0.1371).toFixed(2);
    // Calculate health insurance contribution
    const health_base = salary_gross - social;
    const health_contribution = (health_base * 0.09).toFixed(2);

    let tax_relief_amount;
    let costs_amount;
    let middle_class_relief_amount;
    let tax_prepayment;

    // Calculate the amount of tax relief
    if (tax_relief.checked) {
      tax_relief_amount = 425;
    } else {
      tax_relief_amount = 0;
    }

    // Calculate the amount of tax relief for middle class (salary between 5.701 PLN and 11.141 PLN)
    if (middle_class_relief.checked && salary >= 5701 && salary <= 8549) {
      middle_class_relief_amount = (
        ((salary * 6.68).toFixed(2) - 380, 50) / 0.17
      ).toFixed(2);
    } else if (
      middle_class_relief.checked &&
      salary >= 8550 &&
      salary <= 11141
    ) {
      middle_class_relief_amount = (
        ((salary * -7.35).toFixed(2) + 819.08) /
        0.17
      ).toFixed(2);
    } else {
      middle_class_relief_amount = 0;
    }

    // Calculate the amount of tax decductible expenses
    if (costs.checked) {
      costs_amount = 250;
    } else {
      costs_amount = 350;
    }

    // Calculate the taxable income
    const tax_prepayment_base = health_base - costs_amount;

    // Check if the tax exemption applies due to the age
    if (age.checked) {
      tax_prepayment =
        (tax_prepayment_base * 0.17).toFixed(2) -
        tax_relief_amount -
        middle_class_relief_amount;
    } else {
      tax_prepayment = 0;
    }

    // Calculate the net salary
    const salary_to_pay = health_base - health_contribution - tax_prepayment;

    salary_net.value = salary_to_pay.toFixed(2);
  }

  return (
    <div className="calc-salary" id="calc-salary">
      <h2>Salary Calculator</h2>
      <form
        action="index.html"
        method="post"
        name="calculator_salary"
        className="form_1"
      >
        <div className="salary">
          <label htmlFor="salary">Gross Salary (in PLN)*</label>
          <input
            type="number"
            step="0.01"
            min="0"
            id="salary"
            name="salary"
            required
            autoComplete="off"
          />
        </div>

        <div className="tax_relief">
          <input
            type="checkbox"
            id="tax_relief"
            name="tax_relief"
            value="1"
            autoComplete="off"
          />
          <label htmlFor="tax_relief">Tax Relief</label>
        </div>

        <div className="middle_class_relief">
          <input
            type="checkbox"
            id="middle_class_relief"
            name="middle_class_relief"
            autoComplete="off"
          />
          <label htmlFor="middle_class_relief">Middle Class Relief**</label>
        </div>

        <div className="costs">
          <input
            type="checkbox"
            id="costs"
            name="costs"
            value="1"
            autoComplete="off"
          />
          <label htmlFor="costs">Working in the city of residence</label>
        </div>

        <div className="age">
          <input
            type="checkbox"
            id="age"
            name="age"
            value="1"
            autoComplete="off"
          />
          <label htmlFor="age">Over 26 years old</label>
        </div>

        <div className="calculate">
          <button
            type="button"
            id="calculate_salary"
            name="calculate_salary"
            onClick={() => calculateSalary()}
          >
            Calculate
          </button>
        </div>
      </form>
      <div className="salary_net">
        <label htmlFor="salary_net">Net Salary (in PLN)</label>
        <input type="number" id="salary_net" name="salary_net" readOnly />
      </div>
      <div className="info">
        <p>* From January 1, 2022, the minimum gross salary is 3,010 PLN.</p>
        <p>
          ** The middle class tax relief is applicable when the employee&#39;s
          income is at least 5,701 PLN and not more than 11,141 PLN.
        </p>
      </div>
    </div>
  );
};

export default Salary;
