import logo from './logo.svg';
import './App.css';
import React from 'react';
// import TwoLevelPieChart from './piechart';
import CombinedJailPopulationPieChart from './piechart';


function App() {
  const jailData = {
    JailList: [
      // {
      //   "StateCode": "30",
      //   "StateName": "Delhi",
      //   "JailCode": "1",
      //   "JailName": "Central Jail No.1",
      //   "JailCategory": "Central",
      //   "JailContact": "01124305678",
      //   "JaileMail": "support-eprisons@nic.in",
      //   "JailLongitude": "17.38",
      //   "JailLatitude": "74.42",
      //   "MaxInmateLimit": "1000",
      //   "Jail Current Population": {
      //     "Total Population": "1000",
      //     "UT": "400",
      //     "CT": "200",
      //     "DT": "200",
      //     "CP": "200",
      //     "OthersCategory": "0",
      //     "Transgender": "300",
      //     "Male": "400",
      //     "Female": "300",
      //     "India": "500",
      //     "Pakistan": "200",
      //     "Bangladesh": "50",
      //     "Nepal": "100",
      //     "Srilanka": "100",
      //     "OtherCountries": "10",
      //     "Hindu": "200",
      //     "Muslim": "300",
      //     "Christianity": "300",
      //     "Sikhism": "200",
          
      //     "Male UT": "200",
      //     "Male CT": "200",
      //     "Male GT": "200",
      //     "Male CP": "200",
  
      //     "Female UT": "50",
      //     "Female CT": "50",
      //     "Female GT": "50",
      //     "Female CP": "50",
  
      //     "Transgender UT": "250",
      //     "Transgender CT": "250",
      //     "Transgender GT": "250",
      //     "Transgender CP": "250", 
  
      //     "Male Hindu": "150",
      //     "Male Muslim": "150",
      //     "Male Sikhism": "150",
  
          
      //     "Female Hindu": "150",
      //     "Female Muslim": "150",
      //     "Female Sikhism": "150",
  
          
      //     "Transgender Hindu": "150",
      //     "Transgender Muslim": "150",
      //     "Transgender Sikhism": "150",
  
      //     "Female India": "300",
      //     "Female Pakistani": "250",
      //     "Female Srilanka": "200",
  
      //     "Male India": "300",
      //     "Male Pakistani": "250",
      //     "Male Srilanka": "200",
  
      //     "Transgender India": "300",
      //     "Transgender Pakistani": "250",
      //     "Transgender Srilanka": "200",
  
      //     "Hindu UT": "210",
      //     "Hindu CT": "210",
      //     "Hindu GT": "210",
      //     "Hindu CP": "210",
  
      //     "Muslim UT": "210",
      //     "Muslim CT": "210",
      //     "Muslim GT": "210",
      //     "Muslim CP": "210",
  
      //     "Christianity UT": "210",
      //     "Christianity CT": "210",
      //     "Christianity GT": "210",
      //     "Christianity CP": "210",
  
      //     "Sikhism UT": "210",
      //     "Sikhism CT": "210",
      //     "Sikhism GT": "210",
      //     "Sikhism CP": "210",
  
          
      //     "Hindu India": "210",
      //     "Hindu Pakistan": "210",
      //     "Hindu Nepal": "210",
  
      //     "Muslim India": "210",
      //     "Muslim Pakistan": "210",
      //     "Muslim Nepal": "210",
  
      //     "Christianity India": "210",
      //     "Christianity Pakistan": "210",
      //     "Christianity Nepal": "210",
  
      //     "Sikhism India": "210",
      //     "Sikhism Pakistan": "210",
      //     "Sikhism Nepal": "210",
  
  
      //     "Hindu Male": "210",
      //     "Hindu Female": "210",
      //     "Hindu Transgender": "210",
  
      //     "Muslim Male": "210",
      //     "Muslim Female": "210",
      //     "Muslim Transgender": "210",
  
      //     "Christianity Male": "210",
      //     "Christianity Female": "210",
      //     "Christianity Transgender": "210",
  
      //     "Sikhism Male": "210",
      //     "Sikhism Female": "210",
      //     "Sikhism Transgender": "210",
  
         
      //     "India Transgender": "100",
      //     "India Male": "100",
      //     "India Female": "100",
         
      //     "Pakistan Transgender": "100",
      //     "Pakistan Male":"100",
      //     "Pakistan Female":"100",
         
      //     "Nepal Transgender": "100",
      //     "Nepal Male": "100",
      //     "Nepal Female": "100",
          
  
      //     "India Hindu": "150",
      //     "India Muslim": "150",
      //     "India Sikhism": "150",
  
      //     "Pakistan Hindu": "150",
      //     "Pakistan Muslim": "150",
      //     "Pakistan Sikhism": "150",
  
      //     "Nepal Hindu": "150",
      //     "Nepal Muslim": "150",
      //     "Nepal Sikhism": "150",
  
  
      //     "India UT": "100",
      //     "India CT": "100",
      //     "India GT": "100",
      //     "India CP": "100",
  
      //     "Pakistan UT": "100",
      //     "Pakistan CT": "100",
      //     "Pakistan GT": "100",
      //     "Pakistan CP": "100",
  
      //     "Srilanka UT": "100",
      //     "Srilanka CT": "100",
      //     "Srilanka GT": "100",
      //     "Srilanka CP": "100",
  
      //     "Nepal UT": "100",
      //     "Nepal CT": "100",
      //     "Nepal GT": "100",
      //     "Nepal CP": "100",

          
      //     "UT India": "100",
      //     "CT India": "100",
      //     "GT India": "100",
      //     "CP India": "100",

      //     "UT Pakistan": "100",
      //     "CT Pakistan": "100",
      //     "GT Pakistan": "100",
      //     "CP Pakistan": "100",

      //     "UT Srilanka": "100",
      //     "CT Srilanka": "100",
      //     "GT Srilanka": "100",
      //     "CP Srilanka": "100",

      //     "UT Nepal": "100",
      //     "CT Nepal": "100",
      //     "GT Nepal": "100",
      //     "CP Nepal": "100",

      //     "UT Male": "200",
      //     "CT Male": "200",
      //     "GT Male": "200",
      //     "CP Male": "200",

      //     "UT Female": "50",
      //     "CT Female": "50",
      //     "GT Female": "50",
      //     "CP Female": "50",

      //     "UT Transgender": "250",
      //     "CT Transgender": "250",
      //     "GT Transgender": "250",
      //     "CP Transgender": "250", 
      //   },
      //   "Visitors": {
      //     "TodayTotalVisit": "5000",
      //     "VCBasedVisits": "1000",
      //     "PhysicalVisits": "1000"
      //   },
      //   "ActiveUsers": {
      //     "PIMS": "5000",
      //     "VIMS": "100",
      //     "Court": "100",
      //     "Police": "20"
      //   }
      // },
      // {
      //   "StateCode": "30",
      //   "StateName": "Delhi",
      //   "JailCode": "2",
      //   "JailName": "Central Jail No.2",
      //   "JailCategory": "Central",
      //   "JailContact": "01124305679",
      //   "JaileMail": "support-eprisons@nic.in",
      //   "JailLongitude": "17.39",
      //   "JailLatitude": "75.43",
      //   "MaxInmateLimit": "1200",
      //   "Jail Current Population": {
      //     "Total Population": "1000",
      //     "UT": "400",
      //     "CT": "200",
      //     "DT": "200",
      //     "CP": "200",
      //     "OthersCategory": "0",
      //     "Transgender": "300",
      //     "Male": "400",
      //     "Female": "300",
      //     "India": "500",
      //     "Pakistan": "220",
      //     "Bangladesh": "50",
      //     "Nepal": "100",
      //     "Srilanka": "100",
      //     "OtherCountries": "10",
      //     "Hindu": "200",
      //     "Muslim": "300",
      //     "Christianity": "300",
      //     "Sikhism": "200",
  
      //     "Male UT": "200",
      //     "Male CT": "200",
      //     "Male GT": "200",
      //     "Male CP": "200",
  
      //     "Female UT": "50",
      //     "Female CT": "50",
      //     "Female GT": "50",
      //     "Female CP": "50",
  
      //     "Transgender UT": "250",
      //     "Transgender CT": "250",
      //     "Transgender GT": "250",
      //     "Transgender CP": "250",
  
      //     "Male Hindu": "50",
      //     "Male Muslim": "50",
      //     "Male Sikhism": "50",
          
      //     "Female Hindu": "50",
      //     "Female Muslim": "50",
      //     "Female Sikhism": "50",
          
      //     "Transgender Hindu": "250",
      //     "Transgender Muslim": "250",
      //     "Transgender Sikhism": "250",
  
      //     "Female India": "300",
      //     "Female Pakistani": "250",
      //     "Female Srilanka": "200",
  
      //     "Male India": "300",
      //     "Male Pakistani": "250",
      //     "Male Srilanka": "200",
  
      //     "Transgender India": "300",
      //     "Transgender Pakistani": "250",
      //     "Transgender Srilanka": "200",
  
          
      //     "Hindu UT": "210",
      //     "Hindu CT": "210",
      //     "Hindu GT": "210",
      //     "Hindu CP": "210",
  
      //     "Muslim UT": "210",
      //     "Muslim CT": "210",
      //     "Muslim GT": "210",
      //     "Muslim CP": "210",
  
      //     "Christianity UT": "210",
      //     "Christianity CT": "210",
      //     "Christianity GT": "210",
      //     "Christianity CP": "210",
  
      //     "Sikhism UT": "210",
      //     "Sikhism CT": "210",
      //     "Sikhism GT": "210",
      //     "Sikhism CP": "210",
  
  
      //     "Hindu Male": "210",
      //     "Hindu Female": "210",
      //     "Hindu Transgender": "210",
  
      //     "Muslim Male": "210",
      //     "Muslim Female": "210",
      //     "Muslim Transgender": "210",
  
      //     "Christianity Male": "210",
      //     "Christianity Female": "210",
      //     "Christianity Transgender": "210",
  
      //     "Sikhism Male": "210",
      //     "Sikhism Female": "210",
      //     "Sikhism Transgender": "210",
  
      //     "Hindu India": "210",
      //     "Hindu Pakistan": "210",
      //     "Hindu Nepal": "210",
  
      //     "Muslim India": "210",
      //     "Muslim Pakistan": "210",
      //     "Muslim Nepal": "210",
  
      //     "Christianity India": "210",
      //     "Christianity Pakistan": "210",
      //     "Christianity Nepal": "210",
  
      //     "Sikhism India": "210",
      //     "Sikhism Pakistan": "210",
      //     "Sikhism Nepal": "210",
          
  
      //     "India Transgender": "100",
      //     "India Male": "100",
      //     "India Female": "100",
         
  
      //     "Pakistan Transgender": "100",
      //     "Pakistan Male":"100",
      //     "Pakistan Female":"100",
          
  
      //     "Nepal Transgender": "100",
      //     "Nepal Male": "100",
      //     "Nepal Female": "100",
         
  
          
      //     "India Hindu": "150",
      //     "India Muslim": "150",
      //     "India Sikhism": "150",
  
      //     "Pakistan Hindu": "150",
      //     "Pakistan Muslim": "150",
      //     "Pakistan Sikhism": "150",
  
      //     "Nepal Hindu": "150",
      //     "Nepal Muslim": "150",
      //     "Nepal Sikhism": "150",
  
      //     "India UT": "100",
      //     "India CT": "100",
      //     "India GT": "100",
      //     "India CP": "100",
  
          
      //     "Pakistan UT": "100",
      //     "Pakistan CT": "100",
      //     "Pakistan GT": "100",
      //     "Pakistan CP": "100",
  
      //     "Srilanka UT": "100",
      //     "Srilanka CT": "100",
      //     "Srilanka GT": "100",
      //     "Srilanka CP": "100",
  
         
      //     "Nepal UT": "100",
      //     "Nepal CT": "100",
      //     "Nepal GT": "100",
      //     "Nepal CP": "100",

      //     "UT India": "100",
      //     "CT India": "100",
      //     "GT India": "100",
      //     "CP India": "100",

      //     "UT Pakistan": "100",
      //     "CT Pakistan": "100",
      //     "GT Pakistan": "100",
      //     "CP Pakistan": "100",

      //     "UT Srilanka": "100",
      //     "CT Srilanka": "100",
      //     "GT Srilanka": "100",
      //     "CP Srilanka": "100",

      //     "UT Nepal": "100",
      //     "CT Nepal": "100",
      //     "GT Nepal": "100",
      //     "CP Nepal": "100",

      //     "UT Nepal": "100",
      //     "CT Nepal": "100",
      //     "GT Nepal": "100",
      //     "CP Nepal": "100",

      //     "UT Male": "200",
      //     "CT Male": "200",
      //     "GT Male": "200",
      //     "CP Male": "200",

      //     "UT Female": "50",
      //     "CT Female": "50",
      //     "GT Female": "50",
      //     "CP Female": "50",

      //     "UT Transgender": "250",
      //     "CT Transgender": "250",
      //     "GT Transgender": "250",
      //     "CP Transgender": "250", 
      //   },
      //   "Visitors": {
      //     "TodayTotalVisit": "5000",
      //     "VCBasedVisits": "1000",
      //     "PhysicalVisits": "1000"
      //   },
      //   "ActiveUsers": {
      //     "PIMS": "5000",
      //     "VIMS": "100",
      //     "Court": "100",
      //     "Police": "20"
      //   }
      // }

      
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
          "Total Population": "6300",
          "UT": "500",
          "CT": "500",
          "DT": "500",
          "CP": "500",
          "OthersCategory": "0",
          "Transgender": "400",
          "Male": "400",
          "Female": "400",
          "India": "300",
          "Pakistan": "300",
          "Bangladesh": "300",
          "Nepal": "300",
          "Srilanka": "300",
          "OtherCountries": "10",
          "Hindu": "400",
          "Muslim": "400",
          "Christianity": "400",
          "Sikhism": "400",
  
          "Male UT": "100",
          "Male CT": "100",
          "Male GT": "100",
          "Male CP": "100",

          "Female UT": "100",
          "Female CT": "100",
          "Female GT": "100",
          "Female CP": "100",

          "Transgender UT": "100",
          "Transgender CT": "100",
          "Transgender GT": "100",
          "Transgender CP": "100",

          "Male Hindu": "100",
          "Male Muslim": "100",
          "Male Sikhism": "100",
          "Male Christanity": "100",

          "Female Hindu": "100",
          "Female Muslim": "100",
          "Female Sikhism": "100",
          "Female Christanity": "100",

          "Transgender Hindu": "100",
          "Transgender Muslim": "100",
          "Transgender Sikhism": "100",
          "Transgender Christanity": "100",
          
  
          "Female India": "100",
          "Female Pakistan": "100",
          "Female Srilanka": "100",
          "Female Nepal": "100",
  
          "Male India": "100",
          "Male Pakistan": "100",
          "Male Srilanka": "100",
          "Male Nepal": "100",
  
          "Transgender India": "100",
          "Transgendere Pakistan": "100",
          "Transgender Srilanka": "100",
          "Transgender Nepal": "100",
  
          
          "Hindu UT": "125",
          "Hindu CT": "125",
          "Hindu GT": "125",
          "Hindu CP": "125",
  
          "Muslim UT": "125",
          "Muslim CT": "125",
          "Muslim GT": "125",
          "Muslim CP": "125",
  
          "Christianity UT": "125",
          "Christianity CT": "125",
          "Christianity GT": "125",
          "Christianity CP": "125",
  
          "Sikhism UT": "125",
          "Sikhism CT": "125",
          "Sikhism GT": "125",
          "Sikhism CP": "125",
  
  
          "Hindu Male": "100",
          "Hindu Female": "100",
          "Hindu Transgender": "100",
  
          "Muslim Male": "100",
          "Muslim Female": "100",
          "Muslim Transgender": "100",
  
          "Christianity Male": "100",
          "Christianity Female": "100",
          "Christianity Transgender": "100",
  
          "Sikhism Male": "100",
          "Sikhism Female": "100",
          "Sikhism Transgender": "100",
  
          "Hindu India": "75",
          "Hindu Pakistan": "75",
          "Hindu Nepal": "75",
          "Hindu Srilanka": "75",
  
          "Muslim India": "75",
          "Muslim Pakistan": "75",
          "Muslim Nepal": "75",
          "Muslim Srilanka": "75",
  
          "Christianity India": "75",
          "Christianity Pakistan": "75",
          "Christianity Nepal": "75",
          "Christianity Srilanka": "75",
  
          "Sikhism India": "75",
          "Sikhism Pakistan": "75",
          "Sikhism Nepal": "75",
          "Sikhism Srilanka": "75",
          
  
          "India Transgender": "100",
          "India Male": "100",
          "India Female": "100",
          
         
  
          "Pakistan Transgender": "100",
          "Pakistan Male":"100",
          "Pakistan Female":"100",
          
          
  
          "Nepal Transgender": "100",
          "Nepal Male": "100",
          "Nepal Female": "100",

          "Srilanka Transgender": "100",
          "Srilanka Male": "100",
          "Srilanka Female": "100",
          
         
  
          
          "India Hindu": "75",
          "India Muslim": "75",
          "India Sikhism": "75",
          "India Christanity": "75",
  
          "Pakistan Hindu": "75",
          "Pakistan Muslim": "75",
          "Pakistan Sikhism": "75",
          "Pakistan Christanity": "75",
  
          "Nepal Hindu": "75",
          "Nepal Muslim": "75",
          "Nepal Sikhism": "75",
          "Nepal Christanity": "75",
  
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
          "Nepal CP": "100",
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
          "Total Population": "6300",
          "UT": "500",
          "CT": "500",
          "DT": "500",
          "CP": "500",
          "OthersCategory": "0",
          "Transgender": "400",
          "Male": "400",
          "Female": "400",
          "India": "300",
          "Pakistan": "300",
          "Bangladesh": "300",
          "Nepal": "300",
          "Srilanka": "300",
          "OtherCountries": "10",
          "Hindu": "400",
          "Muslim": "400",
          "Christianity": "400",
          "Sikhism": "400",
  
          "Male UT": "100",
          "Male CT": "100",
          "Male GT": "100",
          "Male CP": "100",

          "Female UT": "100",
          "Female CT": "100",
          "Female GT": "100",
          "Female CP": "100",

          "Transgender UT": "100",
          "Transgender CT": "100",
          "Transgender GT": "100",
          "Transgender CP": "100",

          "Male Hindu": "100",
          "Male Muslim": "100",
          "Male Sikhism": "100",
          "Male Christanity": "100",

          "Female Hindu": "100",
          "Female Muslim": "100",
          "Female Sikhism": "100",
          "Female Christanity": "100",

          "Transgender Hindu": "100",
          "Transgender Muslim": "100",
          "Transgender Sikhism": "100",
          "Transgender Christanity": "100",
          
  
          "Female India": "100",
          "Female Pakistan": "100",
          "Female Srilanka": "100",
          "Female Nepal": "100",
  
          "Male India": "100",
          "Male Pakistan": "100",
          "Male Srilanka": "100",
          "Male Nepal": "100",
  
          "Transgender India": "100",
          "Transgendere Pakistan": "100",
          "Transgender Srilanka": "100",
          "Transgender Nepal": "100",
  
          
          "Hindu UT": "125",
          "Hindu CT": "125",
          "Hindu GT": "125",
          "Hindu CP": "125",
  
          "Muslim UT": "125",
          "Muslim CT": "125",
          "Muslim GT": "125",
          "Muslim CP": "125",
  
          "Christianity UT": "125",
          "Christianity CT": "125",
          "Christianity GT": "125",
          "Christianity CP": "125",
  
          "Sikhism UT": "125",
          "Sikhism CT": "125",
          "Sikhism GT": "125",
          "Sikhism CP": "125",
  
  
          "Hindu Male": "100",
          "Hindu Female": "100",
          "Hindu Transgender": "100",
  
          "Muslim Male": "100",
          "Muslim Female": "100",
          "Muslim Transgender": "100",
  
          "Christianity Male": "100",
          "Christianity Female": "100",
          "Christianity Transgender": "100",
  
          "Sikhism Male": "100",
          "Sikhism Female": "100",
          "Sikhism Transgender": "100",
  
          "Hindu India": "75",
          "Hindu Pakistan": "75",
          "Hindu Nepal": "75",
          "Hindu Srilanka": "75",
  
          "Muslim India": "75",
          "Muslim Pakistan": "75",
          "Muslim Nepal": "75",
          "Muslim Srilanka": "75",
  
          "Christianity India": "75",
          "Christianity Pakistan": "75",
          "Christianity Nepal": "75",
          "Christianity Srilanka": "75",
  
          "Sikhism India": "75",
          "Sikhism Pakistan": "75",
          "Sikhism Nepal": "75",
          "Sikhism Srilanka": "75",
          
  
          "India Transgender": "100",
          "India Male": "100",
          "India Female": "100",
          
         
  
          "Pakistan Transgender": "100",
          "Pakistan Male":"100",
          "Pakistan Female":"100",
          
          
  
          "Nepal Transgender": "100",
          "Nepal Male": "100",
          "Nepal Female": "100",

          "Srilanka Transgender": "100",
          "Srilanka Male": "100",
          "Srilanka Female": "100",
          
         
  
          
          "India Hindu": "75",
          "India Muslim": "75",
          "India Sikhism": "75",
          "India Christanity": "75",
  
          "Pakistan Hindu": "75",
          "Pakistan Muslim": "75",
          "Pakistan Sikhism": "75",
          "Pakistan Christanity": "75",
  
          "Nepal Hindu": "75",
          "Nepal Muslim": "75",
          "Nepal Sikhism": "75",
          "Nepal Christanity": "75",
  
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
          "Nepal CP": "100",
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
