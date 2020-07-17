import React, { useState } from 'react';
import NavBar from './Components/Navbar';
import Cards from './Components/Cards';
import SearchData from './Components/searchData';
import Chart from './Components/charts.js';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const response = await fetch('https://covid19.mathdro.id/api');
    const data = await response.json();

    this.setState({ data });
  }
  handleCountryChange = async (cun) => {
    console.log(cun);
    if (cun) {
      const response = await fetch(
        `https://covid19.mathdro.id/api/countries/${cun}`
      );
      const data = await response.json();

      this.setState({ data, country: cun });
    }
  };

  render() {
    const { data, country } = this.state;
    return (
      <>
        <NavBar />

        <Cards data={data} />
        <SearchData handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </>
    );
  }
}

export default App;
