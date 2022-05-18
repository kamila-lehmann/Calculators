/* Currency Exchange Calculator */
import { useEffect } from "react";

const Currency = () => {
  useEffect(() => {
    requestCurrencies();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Fetch exchange rates from NBP API
  async function requestCurrencies() {
    try {
      const res = await fetch(
        "https://api.nbp.pl/api/exchangerates/tables/c?format=json"
      );
      const json = await res.json();
      const data = generateTableData(json);
      return data;
    } catch (error) {
      console.log("Error fetching data", error);
    }
  }

  // Generate data to fill in the table
  function generateTableData(data) {
    const currList = data[0].rates.filter((curr) => {
      if (
        curr.code == "USD" ||
        curr.code == "CAD" ||
        curr.code == "EUR" ||
        curr.code == "GBP" ||
        curr.code == "CHF"
      ) {
        return true;
      } else {
        return false;
      }
    });

    // Loop through an array of currency objects and append each to the table
    for (let i = 0; i < currList.length; i++) {
      const tableBody = document.querySelector("tbody");
      const row = document.createElement("tr");

      const currencyData = `
              <td>${currList[i].currency}</td>
              <td>${currList[i].ask}</td>
              <td>${currList[i].bid}</td>
          `;

      row.innerHTML = currencyData;
      tableBody.appendChild(row);
    }
  }

  function calculateCurrency() {
    const purchase_amount = document.getElementById("currency_purchase");
    const sale_amount = document.getElementById("currency_sale");
    const currency_result = document.getElementById("currency_result");
    const usd = document.getElementById("usd");
    const cad = document.getElementById("cad");
    const eur = document.getElementById("eur");
    const gbp = document.getElementById("gbp");
    const chf = document.getElementById("chf");

    // Convert exchange rates from table data to an array
    const tableData = Array.from(
      document.querySelectorAll("#currencyList tbody tr td")
    );

    let currencyArray = [];
    for (let i = 0; i < tableData.length; i++) {
      let item = tableData[i];
      currencyArray.push(item.innerText);
    }
    console.log(currencyArray);

    // Define either purchase or sale amount
    const purchase = purchase_amount.value;
    const sale = sale_amount.value;

    // Calculate the exchanged amount in PLN depending on transaction type and currency
    if (usd.checked && purchase > 0) {
      currency_result.value = (purchase * currencyArray[1]).toFixed(2);
    } else if (usd.checked && sale > 0) {
      currency_result.value = (sale * currencyArray[2]).toFixed(2);
    } else if (cad.checked && purchase > 0) {
      currency_result.value = (purchase * currencyArray[4]).toFixed(2);
    } else if (cad.checked && sale > 0) {
      currency_result.value = (sale * currencyArray[5]).toFixed(2);
    } else if (eur.checked && purchase > 0) {
      currency_result.value = (purchase * currencyArray[7]).toFixed(2);
    } else if (eur.checked && sale > 0) {
      currency_result.value = (sale * currencyArray[8]).toFixed(2);
    } else if (chf.checked && purchase > 0) {
      currency_result.value = (purchase * currencyArray[10]).toFixed(2);
    } else if (chf.checked && sale > 0) {
      currency_result.value = (sale * currencyArray[11]).toFixed(2);
    } else if (gbp.checked && purchase > 0) {
      currency_result.value = (purchase * currencyArray[13]).toFixed(2);
    } else if (gbp.checked && sale > 0) {
      currency_result.value = (sale * currencyArray[14]).toFixed(2);
    }
  }

  return (
    <div className="calc-currency" id="calc-currency">
      <h2>Currency Exchange Calculator</h2>

      <table className="currency_list" id="currencyList">
        <thead>
          <tr>
            <th scope="column">Currency</th>
            <th scope="column">Purchase</th>
            <th scope="column">Sale</th>
          </tr>
        </thead>
        <tbody></tbody>
        <tfoot>
          <tr>
            <td colSpan="3">
              The exchange rates are updated on working days between 7:00 am and
              9:00 am.
            </td>
          </tr>
        </tfoot>
      </table>

      <form
        action="index.html"
        method="post"
        className="form_4"
        name="calculator_currency"
      >
        <div className="currency_form">
          <fieldset className="purchase">
            <label htmlFor="currency_purchase">I want to buy</label>
            <input
              type="number"
              step="0.01"
              id="currency_purchase"
              name="currency_purchase"
              min="0"
            />
          </fieldset>
          <fieldset className="sale">
            <label htmlFor="currency_sale">I want to sell</label>
            <input
              type="number"
              step="0.01"
              min="0"
              id="currency_sale"
              name="currency_sale"
            />
          </fieldset>
          <fieldset className="currency">
            <label htmlFor="usd">USD</label>
            <input type="radio" id="usd" name="currency" value="usd" />
            <label htmlFor="cad">CAD</label>
            <input type="radio" id="cad" name="currency" value="cad" />
            <label htmlFor="eur">EUR</label>
            <input type="radio" id="eur" name="currency" value="eur" />
            <label htmlFor="gbp">GBP</label>
            <input type="radio" id="gbp" name="currency" value="gbp" />
            <label htmlFor="chf">CHF</label>
            <input type="radio" id="chf" name="currency" value="chf" />
          </fieldset>
        </div>
        <div className="calculate">
          <button
            type="button"
            id="calculate_currency"
            name="calculate_currency"
            onClick={() => calculateCurrency()}
          >
            Calculate
          </button>
        </div>
      </form>
      <div className="currency_result">
        <label htmlFor="currency_result">Amount converted into PLN</label>
        <input
          type="number"
          id="currency_result"
          name="currency_result"
          readOnly
        />
      </div>
    </div>
  );
};
export default Currency;
