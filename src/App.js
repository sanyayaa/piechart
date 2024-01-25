import logo from './logo.svg';
import './App.css';
import React from 'react';
// import TwoLevelPieChart from './piechart';
import CombinedJailPopulationPieChart from './piechart';


function App() {
  const jailData = {
    JailList: [
      {
        "StateCode": "30",
        "StateName": "Delhi",
        "JailCode": "1",
        "JailName": "Central Jail No.1",
        "JailCategory": "Central",
        "JailContact": "01124305678",
        "JaileMail": "support-eprisons@nic.in",
        "JailLongitude": "17.38",
        "JailLatitude": "74.42",
        "MaxInmateLimit": "1000",
        "Jail Current Population": {
          "Total Population": "1000",
          "UT": "400",
          "CT": "200",
          "DT": "200",
          "CP": "200",
          "OthersCategory": "0",
          "Transgender": "300",
          "Male": "600",
          "Female": "300",
          "India": "500",
          "Pakistan": "200",
          "Bangladesh": "50",
          "Nepal": "100",
          "Srilanka": "100",
          "OtherCountries": "10",
          "Hindu": "200",
          "Muslim": "300",
          "Christianity": "300",
          "Sikhism": "200",
          
          "Male UT": "200",
          "Male CT": "200",
          "Male GT": "200",
          "Male CP": "200",
  
          "Female UT": "50",
          "Female CT": "50",
          "Female GT": "50",
          "Female CP": "50",
  
          "Transgender UT": "250",
          "Transgender CT": "250",
          "Transgender GT": "250",
          "Transgender CP": "250", 
  
          "Male Hindu": "150",
          "Male Muslim": "150",
          "Male Sikhism": "150",
  
          
          "Female Hindu": "150",
          "Female Muslim": "150",
          "Female Sikhism": "150",
  
          
          "Transgender Hindu": "150",
          "Transgender Muslim": "150",
          "Transgender Sikhism": "150",
  
          "Female India": "300",
          "Female Pakistani": "250",
          "Female Srilanka": "200",
  
          "Male India": "300",
          "Male Pakistani": "250",
          "Male Srilanka": "200",
  
          "Transgender India": "300",
          "Transgendere Pakistani": "250",
          "Transgender Srilanka": "200",
  
          "Hindu UT": "210",
          "Hindu CT": "210",
          "Hindu GT": "210",
          "Hindu CP": "210",
  
          "Muslim UT": "210",
          "Muslim CT": "210",
          "Muslim GT": "210",
          "Muslim CP": "210",
  
          "Christianity UT": "210",
          "Christianity CT": "210",
          "Christianity GT": "210",
          "Christianity CP": "210",
  
          "Sikhism UT": "210",
          "Sikhism CT": "210",
          "Sikhism GT": "210",
          "Sikhism CP": "210",
  
          
          "Hindu India": "210",
          "Hindu Pakistan": "210",
          "Hindu Nepal": "210",
  
          "Muslim India": "210",
          "Muslim Pakistan": "210",
          "Muslim Nepal": "210",
  
          "Christianity India": "210",
          "Christianity Pakistan": "210",
          "Christianity Nepal": "210",
  
          "Sikhism India": "210",
          "Sikhism Pakistan": "210",
          "Sikhism Nepal": "210",
  
  
          "Hindu Male": "210",
          "Hindu Female": "210",
          "Hindu Transgender": "210",
  
          "Muslim Male": "210",
          "Muslim Female": "210",
          "Muslim Transgender": "210",
  
          "Christianity Male": "210",
          "Christianity Female": "210",
          "Christianity Transgender": "210",
  
          "Sikhism Male": "210",
          "Sikhism Female": "210",
          "Sikhism Transgender": "210",
  
         
          "India Transgender": "100",
          "India Male": "100",
          "India Female": "100",
         
          "Pakistan Transgender": "100",
          "Pakistan Male":"100",
          "Pakistan Female":"100",
         
          "Nepal Transgender": "100",
          "Nepal Male": "100",
          "Nepal Female": "100",
          
  
          "India Hindu": "150",
          "India Muslim": "150",
          "India Sikhism": "150",
  
          "Pakistan Hindu": "150",
          "Pakistan Muslim": "150",
          "Pakistan Sikhism": "150",
  
          "Nepal Hindu": "150",
          "Nepal Muslim": "150",
          "Nepal Sikhism": "150",
  
  
          "India UT": "100",
          "India CT": "100",
          "India GT": "100",
          "India CP": "100",
  
          "Pakistan UT": "100",
          "Pakistan CT": "100",
          "Pakistan GT": "100",
          "Pakistan CP": "100",
  
          "Srilanka UT": "100",
          "Srilanka CT": "100",
          "Srilanka GT": "100",
          "Srilanka CP": "100",
  
          "Nepal UT": "100",
          "Nepal CT": "100",
          "Nepal GT": "100",
          "Nepal CP": "100"
        },
        "Visitors": {
          "TodayTotalVisit": "5000",
          "VCBasedVisits": "1000",
          "PhysicalVisits": "1000"
        },
        "ActiveUsers": {
          "PIMS": "5000",
          "VIMS": "100",
          "Court": "100",
          "Police": "20"
        }
      },
      {
        "StateCode": "30",
        "StateName": "Delhi",
        "JailCode": "2",
        "JailName": "Central Jail No.2",
        "JailCategory": "Central",
        "JailContact": "01124305679",
        "JaileMail": "support-eprisons@nic.in",
        "JailLongitude": "17.39",
        "JailLatitude": "75.43",
        "MaxInmateLimit": "1200",
        "Jail Current Population": {
          "Total Population": "1000",
          "UT": "400",
          "CT": "200",
          "DT": "200",
          "CP": "200",
          "OthersCategory": "0",
          "Transgender": "300",
          "Male": "400",
          "Female": "300",
          "India": "500",
          "Pakistan": "220",
          "Bangladesh": "50",
          "Nepal": "100",
          "Srilanka": "100",
          "OtherCountries": "10",
          "Hindu": "200",
          "Muslim": "300",
          "Christianity": "300",
          "Sikhism": "200",
  
          "Male UT": "200",
          "Male CT": "200",
          "Male GT": "200",
          "Male CP": "200",
  
          "Female UT": "50",
          "Female CT": "50",
          "Female GT": "50",
          "Female CP": "50",
  
          "Transgender UT": "250",
          "Transgender CT": "250",
          "Transgender GT": "250",
          "Transgender CP": "250",
  
          "Male Hindu": "50",
          "Male Muslim": "50",
          "Male Sikhism": "50",
          
          "Female Hindu": "50",
          "Female Muslim": "50",
          "Female Sikhism": "50",
          
          "Transgender Hindu": "250",
          "Transgender Muslim": "250",
          "Transgender Sikhism": "250",
  
          "Female India": "300",
          "Female Pakistani": "250",
          "Female Srilanka": "200",
  
          "Male India": "300",
          "Male Pakistani": "250",
          "Male Srilanka": "200",
  
          "Transgender India": "300",
          "Transgendere Pakistani": "250",
          "Transgender Srilanka": "200",
  
          
          "Hindu UT": "210",
          "Hindu CT": "210",
          "Hindu GT": "210",
          "Hindu CP": "210",
  
          "Muslim UT": "210",
          "Muslim CT": "210",
          "Muslim GT": "210",
          "Muslim CP": "210",
  
          "Christianity UT": "210",
          "Christianity CT": "210",
          "Christianity GT": "210",
          "Christianity CP": "210",
  
          "Sikhism UT": "210",
          "Sikhism CT": "210",
          "Sikhism GT": "210",
          "Sikhism CP": "210",
  
  
          "Hindu Male": "210",
          "Hindu Female": "210",
          "Hindu Transgender": "210",
  
          "Muslim Male": "210",
          "Muslim Female": "210",
          "Muslim Transgender": "210",
  
          "Christianity Male": "210",
          "Christianity Female": "210",
          "Christianity Transgender": "210",
  
          "Sikhism Male": "210",
          "Sikhism Female": "210",
          "Sikhism Transgender": "210",
  
          "Hindu India": "210",
          "Hindu Pakistan": "210",
          "Hindu Nepal": "210",
  
          "Muslim India": "210",
          "Muslim Pakistan": "210",
          "Muslim Nepal": "210",
  
          "Christianity India": "210",
          "Christianity Pakistan": "210",
          "Christianity Nepal": "210",
  
          "Sikhism India": "210",
          "Sikhism Pakistan": "210",
          "Sikhism Nepal": "210",
          
  
          "India Transgender": "100",
          "India Male": "100",
          "India Female": "100",
         
  
          "Pakistan Transgender": "100",
          "Pakistan Male":"100",
          "Pakistan Female":"100",
          
  
          "Nepal Transgender": "100",
          "Nepal Male": "100",
          "Nepal Female": "100",
         
  
          
          "India Hindu": "150",
          "India Muslim": "150",
          "India Sikhism": "150",
  
          "Pakistan Hindu": "150",
          "Pakistan Muslim": "150",
          "Pakistan Sikhism": "150",
  
          "Nepal Hindu": "150",
          "Nepal Muslim": "150",
          "Nepal Sikhism": "150",
  
          "India UT": "100",
          "India CT": "100",
          "India GT": "100",
          "India CP": "100",
  
          
          "Pakistan UT": "100",
          "Pakistan CT": "100",
          "Pakistan GT": "100",
          "Pakistan CP": "100",
  
          "Srilanka UT": "100",
          "Srilanka CT": "100",
          "Srilanka GT": "100",
          "Srilanka CP": "100",
  
         
          "Nepal UT": "100",
          "Nepal CT": "100",
          "Nepal GT": "100",
          "Nepal CP": "100"
        },
        "Visitors": {
          "TodayTotalVisit": "5000",
          "VCBasedVisits": "1000",
          "PhysicalVisits": "1000"
        },
        "ActiveUsers": {
          "PIMS": "5000",
          "VIMS": "100",
          "Court": "100",
          "Police": "20"
        }
      }
    ]
  };
  return (
    <div className="App">
       <h1>Hello Charts</h1>
       <CombinedJailPopulationPieChart jailData={jailData.JailList} />
       {/* <TwoLevelPieChart /> */}
    </div>
  );
}

export default App;
