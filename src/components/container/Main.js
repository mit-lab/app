import React, {Component} from 'react';
import '../../App.css';
import { dataStatistics, columnsStatistics, dataMessage, columnsMessage, chartData } from '../data'


// components
import Footer from '../presentational/Footer';
import Message from '../presentational/Message';
import Statistics from '../presentational/Statistics';
import Header from '../presentational/Header';


class Main extends  Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true, 
      isHiddenMessage: true,
      isHiddenstatistics: true, 
      isHiddenChart: false, 
      nameButtoon: null,
      current: 'message', 
      valueDataStatistics: '', 
      valueColumnStatistics: '', 
      dataMessage: '',
      columnsMessage: '', 
      chartData: ''
    };
    this.showStatistics = this.showStatistics.bind(this);
    this.showMessage = this.showMessage.bind(this);
    this.showMessageDetails = this.showMessageDetails.bind(this);
    this.showStatisticsDetails = this.showStatisticsDetails.bind(this);
    this.changeMenu = this.changeMenu.bind(this);
    this.showChart = this.showChart.bind(this);
  }


  componentDidMount() {
    this.setState({
      dataStatistics: dataStatistics,
      columnsStatistics: columnsStatistics,
      dataMessage: dataMessage, 
      columnsMessage: columnsMessage, 
      chartData: chartData
    })
  }

  changeMenu(e) {
    this.setState({ current: e.key});
  }

  showStatistics() {
      this.setState(state => ({isHidden: false }));
  }
  showMessage() {
    this.setState(state => ({isHidden: true }));
  }

  showMessageDetails() {
    this.setState(state => ({ isHiddenMessage: false }));
  }

  showStatisticsDetails() {
      this.setState(state => ({ isHiddenstatistics: false }));
  }

  showChart() {
    this.setState(state => ({
      isHiddenChart: !this.state.isHiddenChart, 
      nameButtoon: !this.state.nameButtoon
  }));
}


  render(props) {
    return (
      <div className="Main">
        {/* header */}
        <Header 
          changeMenu={this.changeMenu}
          showMessage={this.showMessage}
          showStatistics={this.showStatistics}
          current={this.state.current}
        />
        {/* main */}
        <main className="MainWr">
          {this.state.isHidden&&
            <Message
              showMessageDetails={this.showMessageDetails}
              isHiddenMessage={this.state.isHiddenMessage}
              dataMessage={this.state.dataMessage}
              columnsMessage={this.state.columnsMessage}
             />
          }
          {!this.state.isHidden&&
            <Statistics
              showStatisticsDetails={this.showStatisticsDetails}
              isHiddenstatistics={this.state.isHiddenstatistics}
              showChart={this.showChart}
              isHiddenChart={this.state.isHiddenChart}
              chartData={this.state.chartData}
              nameButtoon={this.state.nameButtoon}
              dataStatistics={this.state.dataStatistics}
              columnsStatistics={this.state.columnsStatistics}
            />
          }
        </main>
        {/* footer */}
        <Footer />
      </div>
    );
  };  
}


export default Main;