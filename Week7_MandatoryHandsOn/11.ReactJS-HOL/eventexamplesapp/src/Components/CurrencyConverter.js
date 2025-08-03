import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: 0, 
    };
    this.conversionRate = 0.011;
  }

  handleInputChange = (event) => {
    this.setState({ rupees: event.target.value });
  }
  handleSubmit = () => {
    const convertedEuros = this.state.rupees * this.conversionRate;
    alert(`${this.state.rupees} INR is approximately €${convertedEuros.toFixed(2)}`);
  }

  render() {
    return (
      <div>
        <h2 className="currency-title">Currency Convertor!!!</h2>
        <div>
          <label>Indian Rupees (INR):</label>
          <input
            type="number"
            value={this.state.rupees}
            onChange={this.handleInputChange}
            placeholder="Enter amount in INR"
          />
        </div>
        <button onClick={this.handleSubmit}>Convert to Euro</button>
      </div>
    );
  }
}

export default CurrencyConvertor;
