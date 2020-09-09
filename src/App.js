import React from 'react';
import{ Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import imageMask from "./assets/LineWearingMasks.jpeg";
import covidImage from "./assets/Icon.png";
import girlMasked from "./assets/girlMasked.jpeg";

class App extends React.Component {
  state = {
    data: {},
    country:"",
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country)=>{
  const data = await fetchData(country);

  this.setState({ data, country:country });
}

  render() {
    const { data, country } = this.state;
    return (
      <div>
        <div className={styles.header} >
          <img className={styles.covidImage} src={ covidImage } alt="Covid 19 Banner"/>
          <img className={styles.imageMask} style={{mixBlendMode:"multiply"}} src={imageMask} alt="Social Distancing"/>
        </div>
        <div className={styles.container}>
          <Cards data={ data }/>
          <CountryPicker handleCountryChange={ this.handleCountryChange }/>
          <Chart data={ data } country={ country }/>
        </div>
        <div className={styles.footerData}>
          <img className={styles.girlMasked} style={{mixBlendMode: "multiply"}} src={girlMasked} alt="Seated girl wearing a mask"/>
        </div>
      </div>
    );
  }
}

export default App;