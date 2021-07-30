import React from 'react';

import DonutChart from 'nerdpack-design-system/dist/packages/donutchart/DonutChart'
import style from 'nerdpack-design-system/dist/assets/css/variable.module.scss'

console.log(style.lurelGreen, "logstyle")

const data = [12, 14, 23, 7]
const datalabels = ["Advanced Apps", "Intermediate Apps", "Basic Apps", "Non Onboarded Apps"]
// const colors = ['red', 'blue', 'green', 'yellow']
const colors = ['#39803b', '#3077af', '#de762d', '#d8dada']
// const colors = [style.lurelGreen, style.blue, style.tahitiGold, style.grey]
const percentIncrease = ["4%"] 
const showhidelabel = false
const totalPercentage =["56%"]

// const halfdata = [10, 90]
// const halfdatalabels = ["0-25% apps enabled", "26-75% apps enabled", "76-100% apps enabled"]
// const halfcolors = [style.persianRed, style.grey, style.black]
// const halfpercentIncrease = ["4%"] 
// const halftotalPercentage = ["18"]

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
         

        
//       </header>
//     </div>
//   );
// }


// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class DesignSystemNerdletNerdlet extends React.Component {
  render() {
    return <DonutChart
          data={data}
          datalabel={datalabels}
          showhidelabel= {showhidelabel}
          donutsize="85%"
          colors= {colors}
          percentIncrease = {percentIncrease}
          totalPercent = {totalPercentage}
        />
    //  <h1>Hello, design-system-nerdlet Nerdlet!</h1>;
  }
}
