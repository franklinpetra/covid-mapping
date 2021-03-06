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
        <div className={styles.container} style={{flexDirection:"row", marginLeft:"15%"}}>
          <img className={styles.imageMask} style={{mixBlendMode:"multiply", paddingRight:"10%"}} src={imageMask} alt="Social Distancing"/>
          <img className={styles.covidImage} src={ covidImage } alt="Covid 19 Banner"/>
          <img className={styles.girlMasked} style={{mixBlendMode: "multiply", paddingLeft:"10%"}} src={girlMasked} alt="Seated girl wearing a mask"/>
          <p style={{color:"grey", fontStyle:"italic", rightMargin:"5%"}} >We don’t know the actual number of COVID–19 cases, deaths & recoveries, just those that have been officially reported. Please view the visualizations with that in mind.</p>
        </div>
        <div className={styles.container}>
          <Cards data={ data }/>
          <CountryPicker handleCountryChange={ this.handleCountryChange }/>
          <Chart data={ data } country={ country }/>
        </div>
      </div>
    );
  }
}

export default App;
