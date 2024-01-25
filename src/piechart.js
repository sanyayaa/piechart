import React, { useState } from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const CombinedJailPopulationPieChart = ({ jailData }) => {


  const [selectedFilters, setSelectedFilters] = useState({
    prisonType: false,
    nationality: false,
    gender: false,
    religion: false,
  });
  const [filter1, setFilter1] = useState(null);
  const [filter2, setFilter2] = useState(null);

  const handleFilterChange = (filter) => {
    
    setSelectedFilters({
      prisonType: false,
      nationality: false,
      gender: false,
      religion: false,
      // Set the selected filter to true
      [filter]: true, 
    });

    // If two filters are already selected, unselect the filters
    if (filter1 !== null && filter2 !== null) {
      setFilter1(null);
      setFilter2(null);
      setSelectedFilters({ [filter]: false });
    } else if (selectedFilters[filter]) {
      // If the selected filter is already selected, unselect it
      setSelectedFilters({ ...selectedFilters, [filter]: false });
      if (filter === filter1) {
        setFilter1(null);
      } else if (filter === filter2) {
        setFilter2(null);
      }
    } else {
      // If the selected filter is not selected, select it
      if (filter1 === null) {
        setFilter1(filter);
      } else if (filter2 === null) {
        setFilter2(filter);
      }
      setSelectedFilters({ ...selectedFilters, [filter]: true });
    }
  };
  
  const getFilteredData = () => {
    const filteredData = [];
    // if (!selectedFilters.prisonType && !selectedFilters.nationality && !selectedFilters.gender && !selectedFilters.religion) {
    //   filteredData.push(
    //             { name: 'UT', value: getTotalValue('Male UT') + getTotalValue('Female UT') + getTotalValue('Transgender UT') },
    //             { name: 'CT', value: getTotalValue('Male CT') + getTotalValue('Female CT') + getTotalValue('Transgender CT') },
    //             { name: 'CP', value: getTotalValue('Male CP') + getTotalValue('Female CP') + getTotalValue('Transgender CP') },
    //             { name: 'GT', value: getTotalValue('Male GT') + getTotalValue('Female GT') + getTotalValue('Transgender GT') },
    //             { name: 'Indian', value: getTotalValue('India Male') + getTotalValue('India Female') + getTotalValue('India Transgender') },
    //             { name: 'Pakistani', value: getTotalValue('Pakistan Male') + getTotalValue('Pakistan Female') + getTotalValue('Pakistan Transgender') },
    //             // { name: 'Srilankan', value: getTotalValue('Srilanka Male') + getTotalValue('Srilanka Female') + getTotalValue('Srilanka Transgender') },
    //             { name: 'Nepali', value: getTotalValue('Nepal Male') + getTotalValue('Nepal Female') + getTotalValue('Nepal Transgender') },
    //             { name: 'Male', value: getTotalValue('Male') },
    //             { name: 'Female', value: getTotalValue('Female') },
    //             { name: 'Transgender', value: getTotalValue('Transgender') },
    //             { name: 'Hindu', value: getTotalValue('Hindu Male') + getTotalValue('Hindu Female') + getTotalValue('Hindu Transgender') },
    //             { name: 'Muslim', value: getTotalValue('Muslim Male') + getTotalValue('Muslim Female') + getTotalValue('Muslim Transgender') },
    //             { name: 'Sikhism', value: getTotalValue('Sikhism Male') + getTotalValue('Sikhism Female') + getTotalValue('Sikhism Transgender') },
    //             { name: 'Christianity', value: getTotalValue('Christianity Male') + getTotalValue('Christianity Female') + getTotalValue('Christianity Transgender') }
    //   );
    // }
    

    if (filter1 === 'prisonType') {
      filteredData.push(
        { name: 'UT', value: getTotalValue('Male UT') + getTotalValue('Female UT') + getTotalValue('Transgender UT') },
        { name: 'CT', value: getTotalValue('Male CT') + getTotalValue('Female CT') + getTotalValue('Transgender CT') },
        { name: 'CP', value: getTotalValue('Male CP') + getTotalValue('Female CP') + getTotalValue('Transgender CP') },
        { name: 'GT', value: getTotalValue('Male GT') + getTotalValue('Female GT') + getTotalValue('Transgender GT') }
      );
    }

    if (selectedFilters.nationality) {
      filteredData.push(
        { name: 'Indian', value: getTotalValue('India Male') + getTotalValue('India Female') + getTotalValue('India Transgender') },
        { name: 'Pakistani', value: getTotalValue('Pakistan Male') + getTotalValue('Pakistan Female') + getTotalValue('Pakistan Transgender') },
        // { name: 'Srilankan', value: getTotalValue('Srilanka Male') + getTotalValue('Srilanka Female') + getTotalValue('Srilanka Transgender') },
        { name: 'Nepali', value: getTotalValue('Nepal Male') + getTotalValue('Nepal Female') + getTotalValue('Nepal Transgender') },
        // { name: 'Bangladeshi', value: getTotalValue('Bangladesh Male') + getTotalValue('Bangladesh Female') + getTotalValue('Bangladesh Transgender') }
      );
    }

    if (selectedFilters.gender) {
      filteredData.push(
        { name: 'Male', value: getTotalValue('Male') },
        { name: 'Female', value: getTotalValue('Female') },
        { name: 'Transgender', value: getTotalValue('Transgender') }
      );
    }

    if (selectedFilters.religion) {
      filteredData.push(
        { name: 'Hindu', value: getTotalValue('Hindu Male') + getTotalValue('Hindu Female') + getTotalValue('Hindu Transgender') },
        { name: 'Muslim', value: getTotalValue('Muslim Male') + getTotalValue('Muslim Female') + getTotalValue('Muslim Transgender') },
        { name: 'Sikhism', value: getTotalValue('Sikhism Male') + getTotalValue('Sikhism Female') + getTotalValue('Sikhism Transgender') },
        { name: 'Christianity', value: getTotalValue('Christianity Male') + getTotalValue('Christianity Female') + getTotalValue('Christianity Transgender') }
      );
    }

    return filteredData;
  };

 


  const getFilteredData2 = () => {
    const filteredData2 = [];

    //gender & prisonType
    if (filter1 === 'gender' && filter2 === 'prisonType' || filter2 === 'gender' && filter1 === 'prisonType'){
      filteredData2.push(
        { name: 'Male UT', value: getTotalValue('Male UT')},
        { name: 'Female UT', value: getTotalValue('Female UT')},
        { name: 'Transgender UT', value: getTotalValue('Transgender UT')},

        { name: 'Male CT', value: getTotalValue('Male CT')},
        { name: 'Female CT', value: getTotalValue('Female CT')},
        { name: 'Transgender CT', value: getTotalValue('Transgender CT')},

        { name: 'Male CP', value: getTotalValue('Male CP')},
        { name: 'Female CP', value: getTotalValue('Female CP')},
        { name: 'Transgender CP', value: getTotalValue('Transgender CP')},

        { name: 'Male GT', value: getTotalValue('Male GT')},
        { name: 'Female GT', value: getTotalValue('Female GT')},
        { name: 'Transgender GT', value: getTotalValue('Transgender GT')},
      );
    }

    //gender & religion
    if (filter1 === 'gender' && filter2 === 'religion'){
      filteredData2.push(
        { name: 'Male Hindu', value: getTotalValue('Male Hindu')},
        { name: 'Female Hindu', value: getTotalValue('Female Hindu')},
        { name: 'Transgender Hindu', value: getTotalValue('Male Hindu')},

        { name: 'Male Muslim', value: getTotalValue('Male Muslim')},
        { name: 'Female Muslim', value: getTotalValue('Female Muslim')},
        { name: 'Transgender Muslim', value: getTotalValue('Male Muslim')},

        { name: 'Male Sikhism', value: getTotalValue('Male Sikhism')},
        { name: 'Female Sikhism', value: getTotalValue('Female Sikhism')},
        { name: 'Transgender Sikhism', value: getTotalValue('Male Sikhism')},
      );
    }
      
    //religion & prisonType
    if (filter1 === 'religion' && filter2 === 'prisonType' || filter2 === 'religion' && filter1 === 'prisonType'){
      filteredData2.push(
        { name: 'Hindu UT', value: getTotalValue('Hindu UT')},
        { name: 'Muslim UT', value: getTotalValue('Muslim UT')},
        { name: 'Christianity UT', value: getTotalValue('Christianity UT')},
        { name: 'Sikhism UT', value: getTotalValue('Sikhism UT')},

        { name: 'Male CT', value: getTotalValue('Male CT')},
        { name: 'Muslim CT', value: getTotalValue('Muslim CT')},
        { name: 'Christianity CT', value: getTotalValue('Christianity CT')},
        { name: 'Sikhism CT', value: getTotalValue('Sikhism CT')},

        { name: 'Male CP', value: getTotalValue('Male CP')},
        { name: 'Muslim CP', value: getTotalValue('Muslim CP')},
        { name: 'Christianity CP', value: getTotalValue('Christianity CP')},
        { name: 'Sikhism CP', value: getTotalValue('Sikhism CP')},

        { name: 'Male GT', value: getTotalValue('Male GT')},
        { name: 'Muslim GT', value: getTotalValue('Muslim GT')},
        { name: 'Christianity GT', value: getTotalValue('Christianity GT')},
        { name: 'Sikhism GT', value: getTotalValue('Sikhism GT')},
      );
    }

    // gender & nationality
    if (filter1 === 'gender' && filter2 === 'nationality'){
      filteredData2.push(
        { name: 'Male India', value: getTotalValue('Male India')},
        { name: 'Female India', value: getTotalValue('Female India')},
        { name: 'Transgender India', value: getTotalValue('Transgender India')},
        

        { name: 'Male Pakistan', value: getTotalValue('Male Pakistan')},
        { name: 'Female Pakistan', value: getTotalValue('Female Pakistan')},
        { name: 'Transgender Pakistan', value: getTotalValue('Transgender Pakistan')},


        { name: 'Male Srilanka', value: getTotalValue('Male Srilanka')},
        { name: 'Female Srilanka', value: getTotalValue('Female Srilanka')},
        { name: 'Transgender Srilanka', value: getTotalValue('Transgender Srilanka')},
      );
    }

    // religion & nationality
    if (filter1 === 'religion' && filter2 === 'nationality'){
      filteredData2.push(
        { name: 'Hindu India', value: getTotalValue('Hindu India')},
        { name: 'Muslim India', value: getTotalValue('Muslim India')},
        { name: 'Christianity India', value: getTotalValue('Christianity India')},
        { name: 'Sikhism India', value: getTotalValue('Sikhism India')},

        { name: 'Male Pakistan', value: getTotalValue('Male Pakistan')},
        { name: 'Muslim Pakistan', value: getTotalValue('Muslim Pakistan')},
        { name: 'Christianity Pakistan', value: getTotalValue('Christianity Pakistan')},
        { name: 'Sikhism Pakistan', value: getTotalValue('Sikhism Pakistan')},

        { name: 'Male Nepal', value: getTotalValue('Male Nepal')},
        { name: 'Muslim Nepal', value: getTotalValue('Muslim Nepal')},
        { name: 'Christianity Nepal', value: getTotalValue('Christianity Nepal')},
        { name: 'Sikhism Nepal', value: getTotalValue('Sikhism Nepal')},
      );
    }
    
    // religion & gender
    if (filter1 === 'religion' && filter2 === 'gender'){
      filteredData2.push(
        { name: 'Hindu Male', value: getTotalValue('Hindu Male')},
        { name: 'Hindu Female', value: getTotalValue('Hindu Female')},
        { name: 'Hindu Transgender', value: getTotalValue('Hindu Transgender')},

        { name: 'Muslim Male', value: getTotalValue('Muslim Male')},
        { name: 'Muslim Female', value: getTotalValue('Muslim Female')},
        { name: 'Muslim Transgender', value: getTotalValue('Muslim Transgender')},

        { name: 'Christianity Male', value: getTotalValue('Christianity Male')},
        { name: 'Christianity Female', value: getTotalValue('Christianity Female')},
        { name: 'Christianity Transgender', value: getTotalValue('Christianity Transgender')},

        { name: 'Sikhism Male', value: getTotalValue('Sikhism Male')},
        { name: 'Sikhism Female', value: getTotalValue('Sikhism Female')},
        { name: 'Sikhism Transgender', value: getTotalValue('Sikhism Transgender')},
        
      );
    }
  
    // nationality & prisionType
    if (filter1 === 'nationality' && filter2 === 'prisonType' || filter2=== 'nationality' && filter1 === 'prisonType'){
      filteredData2.push(
        { name: 'India UT', value: getTotalValue('India UT')},
        { name: 'Pakistan UT', value: getTotalValue('Pakistan UT')},
        { name: 'Srilanka UT', value: getTotalValue('Srilanka UT')},
        { name: 'Nepal UT', value: getTotalValue('Nepal UT')},

        { name: 'India CT', value: getTotalValue('India CT')},
        { name: 'Pakistan CT', value: getTotalValue('Pakistan CT')},
        { name: 'Srilanka CT', value: getTotalValue('Srilanka CT')},
        { name: 'Nepal CT', value: getTotalValue('Nepal CT')},

        { name: 'India CP', value: getTotalValue('India CP')},
        { name: 'Pakistan CP', value: getTotalValue('Pakistan CP')},
        { name: 'Srilanka CP', value: getTotalValue('Srilanka CP')},
        { name: 'Nepal CP', value: getTotalValue('Nepal CP')},

        { name: 'India GT', value: getTotalValue('India GT')},
        { name: 'Pakistan GT', value: getTotalValue('Pakistan GT')},
        { name: 'Srilanka GT', value: getTotalValue('Srilanka GT')},
        { name: 'Nepal GT', value: getTotalValue('Nepal GT')},
      );
    }

    // nationality & gender
    if (filter1 === 'nationality' && filter2 === 'gender'){
      filteredData2.push(
        { name: 'India Male', value: getTotalValue('India Male')},
        { name: 'India Female', value: getTotalValue('India Female')},
        { name: 'India Transgender', value: getTotalValue('India Transgender')},

        { name: 'Pakistan Male', value: getTotalValue('Pakistan Male')},
        { name: 'Pakistan Female', value: getTotalValue('Pakistan Female')},
        { name: 'Pakistan Transgender', value: getTotalValue('Pakistan Transgender')},

        { name: 'Nepal Male', value: getTotalValue('Nepal Male')},
        { name: 'Nepal Female', value: getTotalValue('Nepal Female')},
        { name: 'Nepal Transgender', value: getTotalValue('Nepal Transgender')},
      );
    }
      
    // nationality & religion
    if (filter1 === 'nationality' && filter2 === 'religion'){
      filteredData2.push(
        { name: 'India Hindu', value: getTotalValue('India Hindu')},
        { name: 'India Muslim', value: getTotalValue('India Muslim')},
        { name: 'India Sikhism', value: getTotalValue('India Sikhism')},

        { name: 'Pakistan Hindu', value: getTotalValue('Pakistan Hindu')},
        { name: 'Pakistan Muslim', value: getTotalValue('Pakistan Muslim')},
        { name: 'Pakistan Sikhism', value: getTotalValue('Pakistan Sikhism')},

        { name: 'Nepal Hindu', value: getTotalValue('Nepal Hindu')},
        { name: 'Nepal Muslim', value: getTotalValue('Nepal Muslim')},
        { name: 'Nepal Sikhism', value: getTotalValue('Nepal Sikhism')},
      );
    }
    
  // if (selectedFilters.filter1 && selectedFilters.filter2) {
  //   switch (`${selectedFilters.filter1}-${selectedFilters.filter2}`) {
  //     case 'gender-prisonType':
  //       //gender & prisonType
  //       filteredData2.push(
  //         { name: 'Male UT', value: getTotalValue('Male UT')},
  //         { name: 'Female UT', value: getTotalValue('Female UT')},
  //         { name: 'Transgender UT', value: getTotalValue('Transgender UT')},

  //         { name: 'Male CT', value: getTotalValue('Male CT')},
  //         { name: 'Female CT', value: getTotalValue('Female CT')},
  //         { name: 'Transgender CT', value: getTotalValue('Transgender CT')},

  //         { name: 'Male CP', value: getTotalValue('Male CP')},
  //         { name: 'Female CP', value: getTotalValue('Female CP')},
  //         { name: 'Transgender CP', value: getTotalValue('Transgender CP')},

  //         { name: 'Male GT', value: getTotalValue('Male GT')},
  //         { name: 'Female GT', value: getTotalValue('Female GT')},
  //         { name: 'Transgender GT', value: getTotalValue('Transgender GT')},
  //       );
  //       break;

  //     //gender & religion
  //     case 'gender-religion':
  //       filteredData2.push(
  //         { name: 'Male Hindu', value: getTotalValue('Male Hindu')},
  //         { name: 'Female Hindu', value: getTotalValue('Female Hindu')},
  //         { name: 'Transgender Hindu', value: getTotalValue('Male Hindu')},

  //         { name: 'Male Muslim', value: getTotalValue('Male Muslim')},
  //         { name: 'Female Muslim', value: getTotalValue('Female Muslim')},
  //         { name: 'Transgender Muslim', value: getTotalValue('Male Muslim')},

  //         { name: 'Male Sikhism', value: getTotalValue('Male Sikhism')},
  //         { name: 'Female Sikhism', value: getTotalValue('Female Sikhism')},
  //         { name: 'Transgender Sikhism', value: getTotalValue('Male Sikhism')},
  //       );
  //       break;

      

  //     //religion & prisonType
  //     case 'religion-prisionType':
  //       filteredData2.push(
  //         { name: 'Hindu UT', value: getTotalValue('Hindu UT')},
  //         { name: 'Muslim UT', value: getTotalValue('Muslim UT')},
  //         { name: 'Christianity UT', value: getTotalValue('Christianity UT')},
  //         { name: 'Sikhism UT', value: getTotalValue('Sikhism UT')},

  //         { name: 'Male CT', value: getTotalValue('Male CT')},
  //         { name: 'Muslim CT', value: getTotalValue('Muslim CT')},
  //         { name: 'Christianity CT', value: getTotalValue('Christianity CT')},
  //         { name: 'Sikhism CT', value: getTotalValue('Sikhism CT')},

  //         { name: 'Male CP', value: getTotalValue('Male CP')},
  //         { name: 'Muslim CP', value: getTotalValue('Muslim CP')},
  //         { name: 'Christianity CP', value: getTotalValue('Christianity CP')},
  //         { name: 'Sikhism CP', value: getTotalValue('Sikhism CP')},

  //         { name: 'Male GT', value: getTotalValue('Male GT')},
  //         { name: 'Muslim GT', value: getTotalValue('Muslim GT')},
  //         { name: 'Christianity GT', value: getTotalValue('Christianity GT')},
  //         { name: 'Sikhism GT', value: getTotalValue('Sikhism GT')},
  //       );
  //       break;


  //     // gender & nationality
  //     case 'gender-nationality':
  //       filteredData2.push(
  //         { name: 'Male India', value: getTotalValue('Male India')},
  //         { name: 'Female India', value: getTotalValue('Female India')},
  //         { name: 'Transgender India', value: getTotalValue('Transgender India')},
          

  //         { name: 'Male Pakistan', value: getTotalValue('Male Pakistan')},
  //         { name: 'Female Pakistan', value: getTotalValue('Female Pakistan')},
  //         { name: 'Transgender Pakistan', value: getTotalValue('Transgender Pakistan')},


  //         { name: 'Male Srilanka', value: getTotalValue('Male Srilanka')},
  //         { name: 'Female Srilanka', value: getTotalValue('Female Srilanka')},
  //         { name: 'Transgender Srilanka', value: getTotalValue('Transgender Srilanka')},
  //       );
  //       break;

  //     // religion & nationality
  //     case 'religion-nationality':
  //       filteredData2.push(
  //         { name: 'Hindu India', value: getTotalValue('Hindu India')},
  //         { name: 'Muslim India', value: getTotalValue('Muslim India')},
  //         { name: 'Christianity India', value: getTotalValue('Christianity India')},
  //         { name: 'Sikhism India', value: getTotalValue('Sikhism India')},

  //         { name: 'Male Pakistan', value: getTotalValue('Male Pakistan')},
  //         { name: 'Muslim Pakistan', value: getTotalValue('Muslim Pakistan')},
  //         { name: 'Christianity Pakistan', value: getTotalValue('Christianity Pakistan')},
  //         { name: 'Sikhism Pakistan', value: getTotalValue('Sikhism Pakistan')},

  //         { name: 'Male Nepal', value: getTotalValue('Male Nepal')},
  //         { name: 'Muslim Nepal', value: getTotalValue('Muslim Nepal')},
  //         { name: 'Christianity Nepal', value: getTotalValue('Christianity Nepal')},
  //         { name: 'Sikhism Nepal', value: getTotalValue('Sikhism Nepal')},
  //       );
  //       break;

  //     // religion & gender
  //     case 'religion-gender':
  //       filteredData2.push(
  //         { name: 'Hindu Male', value: getTotalValue('Hindu Male')},
  //         { name: 'Hindu Female', value: getTotalValue('Hindu Female')},
  //         { name: 'Hindu Transgender', value: getTotalValue('Hindu Transgender')},

  //         { name: 'Muslim Male', value: getTotalValue('Muslim Male')},
  //         { name: 'Muslim Female', value: getTotalValue('Muslim Female')},
  //         { name: 'Muslim Transgender', value: getTotalValue('Muslim Transgender')},

  //         { name: 'Christianity Male', value: getTotalValue('Christianity Male')},
  //         { name: 'Christianity Female', value: getTotalValue('Christianity Female')},
  //         { name: 'Christianity Transgender', value: getTotalValue('Christianity Transgender')},

  //         { name: 'Sikhism Male', value: getTotalValue('Sikhism Male')},
  //         { name: 'Sikhism Female', value: getTotalValue('Sikhism Female')},
  //         { name: 'Sikhism Transgender', value: getTotalValue('Sikhism Transgender')},
          
  //       );
  //       break;

  //     // nationality & prisionType
  //     case 'nationality-prisionType':
  //       filteredData2.push(
  //         { name: 'India UT', value: getTotalValue('India UT')},
  //         { name: 'Pakistan UT', value: getTotalValue('Pakistan UT')},
  //         { name: 'Srilanka UT', value: getTotalValue('Srilanka UT')},
  //         { name: 'Nepal UT', value: getTotalValue('Nepal UT')},

  //         { name: 'India CT', value: getTotalValue('India CT')},
  //         { name: 'Pakistan CT', value: getTotalValue('Pakistan CT')},
  //         { name: 'Srilanka CT', value: getTotalValue('Srilanka CT')},
  //         { name: 'Nepal CT', value: getTotalValue('Nepal CT')},

  //         { name: 'India CP', value: getTotalValue('India CP')},
  //         { name: 'Pakistan CP', value: getTotalValue('Pakistan CP')},
  //         { name: 'Srilanka CP', value: getTotalValue('Srilanka CP')},
  //         { name: 'Nepal CP', value: getTotalValue('Nepal CP')},

  //         { name: 'India GT', value: getTotalValue('India GT')},
  //         { name: 'Pakistan GT', value: getTotalValue('Pakistan GT')},
  //         { name: 'Srilanka GT', value: getTotalValue('Srilanka GT')},
  //         { name: 'Nepal GT', value: getTotalValue('Nepal GT')},
  //       );
  //       break;

  //     // nationality & gender
  //     case 'nationality-gender':
  //       filteredData2.push(
  //         { name: 'India Male', value: getTotalValue('India Male')},
  //         { name: 'India Female', value: getTotalValue('India Female')},
  //         { name: 'India Transgender', value: getTotalValue('India Transgender')},

  //         { name: 'Pakistan Male', value: getTotalValue('Pakistan Male')},
  //         { name: 'Pakistan Female', value: getTotalValue('Pakistan Female')},
  //         { name: 'Pakistan Transgender', value: getTotalValue('Pakistan Transgender')},

  //         { name: 'Nepal Male', value: getTotalValue('Nepal Male')},
  //         { name: 'Nepal Female', value: getTotalValue('Nepal Female')},
  //         { name: 'Nepal Transgender', value: getTotalValue('Nepal Transgender')},
  //       );
  //       break;

  //     // nationality & religion
  //     case 'nationality-religion':
  //       filteredData2.push(
  //         { name: 'India Hindu', value: getTotalValue('India Hindu')},
  //         { name: 'India Muslim', value: getTotalValue('India Muslim')},
  //         { name: 'India Sikhism', value: getTotalValue('India Sikhism')},

  //         { name: 'Pakistan Hindu', value: getTotalValue('Pakistan Hindu')},
  //         { name: 'Pakistan Muslim', value: getTotalValue('Pakistan Muslim')},
  //         { name: 'Pakistan Sikhism', value: getTotalValue('Pakistan Sikhism')},

  //         { name: 'Nepal Hindu', value: getTotalValue('Nepal Hindu')},
  //         { name: 'Nepal Muslim', value: getTotalValue('Nepal Muslim')},
  //         { name: 'Nepal Sikhism', value: getTotalValue('Nepal Sikhism')},
  //       );
  //       break;
  //   }
  // }]
  
    return filteredData2;
  };




  const getTotalValue = (key) => {
    return parseInt(jailData[0]['Jail Current Population'][key], 10) + parseInt(jailData[1]['Jail Current Population'][key], 10);
  };

  // Define colors for the pie chart segments
  const colors1 = ['#40A2D8','#FFBB64','#E6A4B4','#F6D776','#B80000','#0E8388','#B25068','#E9A6A6','#435585','#E95793','#A76F6F','#03C988','#A5C9CA','#8B9A46'];
  const colors = ['#AAD9BB', '#36A2EB', '#FFCE56', '#4CAF50', '#FF9800','#DCBFFF','#FFDD95','#A0E9FF','#B0A4A4','#8ACDD7','#B06161','#FFC5C5'];

  return (
    <div>
      <h2>Combined Jails Population Distribution</h2>
      <div>
        <label>
          Select Filters:
          <div>
            <label>
              <input
                type="checkbox"
                checked={selectedFilters.prisonType}
                onChange={() => handleFilterChange('prisonType')}
              />
              Prison Type
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={selectedFilters.nationality}
                onChange={() => handleFilterChange('nationality')}
              />
              Nationality
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={selectedFilters.gender}
                onChange={() => handleFilterChange('gender')}
              />
              Gender
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={selectedFilters.religion}
                onChange={() => handleFilterChange('religion')}
              />
              Religion
            </label>
          </div>
        </label>
      </div>
      <ResponsiveContainer width="100%" height={600}>
        <PieChart>
          <Pie
            data={getFilteredData()}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {getFilteredData().map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors1[index % colors.length]} />
            ))}
          </Pie>

          <Pie 
            data={getFilteredData2()}
            dataKey="value" 
            cx="50%" 
            cy="50%" 
            innerRadius={140} 
            outerRadius={200} 
            label >
            {getFilteredData2().map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CombinedJailPopulationPieChart;

// **************************************************************************************************************
// const handleFilterChange = (filter) => {
  //   // Check if both filters are selected, and disable others if needed
  //   if (filter1 !== null && filter2 !== null) {
  //     setSelectedFilters({ [filter1]: true, [filter2]: true, [filter]: !selectedFilters[filter] });
  //   } else {
  //     // If filter1 is not set, set it
  //     if (filter1 === null) {
  //       setFilter1(filter);
  //     } else {
  //       // If filter2 is not set, set it
  //       setFilter2(filter);
  //     }

  //     // Update the selected filters
  //     setSelectedFilters({ ...selectedFilters, [filter]: !selectedFilters[filter] });
  //   }
  // };


  // const handleFilterChange = (filter) => {
  //   setSelectedFilters((prevFilters) => ({
  //     ...prevFilters,
  //     [filter]: !prevFilters[filter],
  //   }));
  // };




 // const getFilteredData1 = () => {
  //   const filteredData1 = [];

  //   if (selectedFilters.filter1) {
  //     switch (selectedFilters.filter1) {
  //       case 'prisonType':
  //         filteredData1.push(
  //           { name: 'UT', value: getTotalValue('Male UT') + getTotalValue('Female UT') + getTotalValue('Transgender UT') },
  //           { name: 'CT', value: getTotalValue('Male CT') + getTotalValue('Female CT') + getTotalValue('Transgender CT') },
  //           { name: 'CP', value: getTotalValue('Male CP') + getTotalValue('Female CP') + getTotalValue('Transgender CP') },
  //           { name: 'GT', value: getTotalValue('Male GT') + getTotalValue('Female GT') + getTotalValue('Transgender GT') }
  //         );

  //       case 'nationality':
  //         filteredData1.push(
  //           { name: 'Indian', value: getTotalValue('India Male') + getTotalValue('India Female') + getTotalValue('India Transgender') },
  //           { name: 'Pakistani', value: getTotalValue('Pakistan Male') + getTotalValue('Pakistan Female') + getTotalValue('Pakistan Transgender') },
  //           { name: 'Srilankan', value: getTotalValue('Srilanka Male') + getTotalValue('Srilanka Female') + getTotalValue('Srilanka Transgender') },
  //           { name: 'Nepali', value: getTotalValue('Nepal Male') + getTotalValue('Nepal Female') + getTotalValue('Nepal Transgender') },
  //           { name: 'Bangladeshi', value: getTotalValue('Bangladesh Male') + getTotalValue('Bangladesh Female') + getTotalValue('Bangladesh Transgender') }
  //         );
        

  //       case 'gender':
  //         filteredData1.push(
  //           { name: 'Male', value: getTotalValue('Male') },
  //           { name: 'Female', value: getTotalValue('Female') },
  //           { name: 'Transgender', value: getTotalValue('Transgender') }
  //         );
        

  //       case 'religion':
  //         filteredData1.push(
  //           { name: 'Hindu', value: getTotalValue('Hindu Male') + getTotalValue('Hindu Female') + getTotalValue('Hindu Transgender') },
  //           { name: 'Muslim', value: getTotalValue('Muslim Male') + getTotalValue('Muslim Female') + getTotalValue('Muslim Transgender') },
  //           { name: 'Sikhism', value: getTotalValue('Sikhism Male') + getTotalValue('Sikhism Female') + getTotalValue('Sikhism Transgender') },
  //           { name: 'Christianity', value: getTotalValue('Christianity Male') + getTotalValue('Christianity Female') + getTotalValue('Christianity Transgender') }
  //         );
  //     }
  //   }

  //   return filteredData1;
  // };
// **************************************************************************************************************



// import React, { useState } from 'react';
// import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

// const CombinedJailPopulationPieChart = ({ jailData }) => {
//   const [selectedFilters, setSelectedFilters] = useState({
//     prisonType: true,
//     nationality: true,
//     gender: true,
//     religion: true,
//   });

//   const handleFilterChange = (filter) => {
//     setSelectedFilters((prevFilters) => ({
//       ...prevFilters,
//       [filter]: !prevFilters[filter],
//     }));
//   };

//   // Extract data based on the selected filters
//   const getFilteredData = () => {
//     const filteredData = [];

//     if (selectedFilters.prisonType) {
//       filteredData.push(
//         { name: 'UT', value: getTotalValue('Male UT') + getTotalValue('Female UT') + getTotalValue('Transgender UT') },
//         { name: 'CT', value: getTotalValue('Male CT') + getTotalValue('Female CT') + getTotalValue('Transgender CT') },
//         { name: 'CP', value: getTotalValue('Male CP') + getTotalValue('Female CP') + getTotalValue('Transgender CP') },
//         { name: 'GT', value: getTotalValue('Male GT') + getTotalValue('Female GT') + getTotalValue('Transgender GT') }
//       );
//     }

//     if (selectedFilters.nationality) {
//       filteredData.push(
//         { name: 'Indian', value: getTotalValue('India Male') + getTotalValue('India Female') + getTotalValue('India Transgender') },
//         { name: 'Pakistani', value: getTotalValue('Pakistan Male') + getTotalValue('Pakistan Female') + getTotalValue('Pakistan Transgender') },
//         { name: 'Srilankan', value: getTotalValue('Srilanka Male') + getTotalValue('Srilanka Female') + getTotalValue('Srilanka Transgender') },
//         { name: 'Nepali', value: getTotalValue('Nepal Male') + getTotalValue('Nepal Female') + getTotalValue('Nepal Transgender') },
//         { name: 'Bangladeshi', value: getTotalValue('Bangladesh Male') + getTotalValue('Bangladesh Female') + getTotalValue('Bangladesh Transgender') }
//       );
//     }

//     if (selectedFilters.gender) {
//       filteredData.push(
//         { name: 'Male', value: getTotalValue('Male') },
//         { name: 'Female', value: getTotalValue('Female') },
//         { name: 'Transgender', value: getTotalValue('Transgender') }
//       );
//     }

//     if (selectedFilters.religion) {
//       filteredData.push(
//         { name: 'Hindu', value: getTotalValue('Hindu Male') + getTotalValue('Hindu Female') + getTotalValue('Hindu Transgender') },
//         { name: 'Muslim', value: getTotalValue('Muslim Male') + getTotalValue('Muslim Female') + getTotalValue('Muslim Transgender') },
//         { name: 'Sikhism', value: getTotalValue('Sikhism Male') + getTotalValue('Sikhism Female') + getTotalValue('Sikhism Transgender') },
//         { name: 'Christianity', value: getTotalValue('Christianity Male') + getTotalValue('Christianity Female') + getTotalValue('Christianity Transgender') }
//       );
//     }

//     return filteredData;
//   };

//   const getTotalValue = (key) => {
//     return parseInt(jailData[0]['Jail Current Population'][key], 10) + parseInt(jailData[1]['Jail Current Population'][key], 10);
//   };

//   // Define colors for the pie chart segments
//   const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF9800'];

//   return (
//     <div>
//       <h2>Combined Jails Population Distribution</h2>
//       <div>
//         <label>
//           Select Filters:
//           <div>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={selectedFilters.prisonType}
//                 onChange={() => handleFilterChange('prisonType')}
//               />
//               Prison Type
//             </label>
//           </div>
//           <div>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={selectedFilters.nationality}
//                 onChange={() => handleFilterChange('nationality')}
//               />
//               Nationality
//             </label>
//           </div>
//           <div>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={selectedFilters.gender}
//                 onChange={() => handleFilterChange('gender')}
//               />
//               Gender
//             </label>
//           </div>
//           <div>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={selectedFilters.religion}
//                 onChange={() => handleFilterChange('religion')}
//               />
//               Religion
//             </label>
//           </div>
//         </label>
//       </div>
//       <ResponsiveContainer width="100%" height={300}>
//         <PieChart>
//           <Pie
//             data={getFilteredData()}
//             dataKey="value"
//             nameKey="name"
//             cx="50%"
//             cy="50%"
//             outerRadius={80}
//             fill="#8884d8"
//             label
//           >
//             {getFilteredData().map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
//             ))}
//           </Pie>
//           <Legend />
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default CombinedJailPopulationPieChart;




//working-------------------------
// import React, { useState } from 'react';
// import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

// const CombinedJailPopulationPieChart = ({ jailData }) => {
//   const [selectedFilter, setSelectedFilter] = useState('prisonType');

//   const handleFilterChange = (filter) => {
//     setSelectedFilter(filter);
//   };

//   // Extract data based on the selected filter
//   const getFilteredData = () => {
//     switch (selectedFilter) {
//       case 'prisonType':
//         return [
//           { name: 'UT', value: getTotalValue('Male UT') + getTotalValue('Female UT') + getTotalValue('Transgender UT') },
//           { name: 'CT', value: getTotalValue('Male CT') + getTotalValue('Female CT') + getTotalValue('Transgender CT') },
//           { name: 'CP', value: getTotalValue('Male CP') + getTotalValue('Female CP') + getTotalValue('Transgender CP') },
//           { name: 'GT', value: getTotalValue('Male GT') + getTotalValue('Female GT') + getTotalValue('Transgender GT') },
//         ];
//       case 'nationality':
//         return [
//           { name: 'Indian', value: getTotalValue('India Male') + getTotalValue('India Female') + getTotalValue('India Transgender') },
//           { name: 'Pakistani', value: getTotalValue('Pakistan Male') + getTotalValue('Pakistan Female') + getTotalValue('Pakistan Transgender') },
//           { name: 'Srilankan', value: getTotalValue('Srilanka Male') + getTotalValue('Srilanka Female') + getTotalValue('Srilanka Transgender') },
//           { name: 'Nepali', value: getTotalValue('Nepal Male') + getTotalValue('Nepal Female') + getTotalValue('Nepal Transgender') },
//           { name: 'Bangladeshi', value: getTotalValue('Bangladesh Male') + getTotalValue('Bangladesh Female') + getTotalValue('Bangladesh Transgender') },
//         ];
//       case 'gender':
//         return [
//           { name: 'Male', value: getTotalValue('Male') },
//           { name: 'Female', value: getTotalValue('Female') },
//           { name: 'Transgender', value: getTotalValue('Transgender') },
//         ];
//       case 'religion':
//         return [
//           { name: 'Hindu', value: getTotalValue('Hindu Male') + getTotalValue('Hindu Female') + getTotalValue('Hindu Transgender') },
//           { name: 'Muslim', value: getTotalValue('Muslim Male') + getTotalValue('Muslim Female') + getTotalValue('Muslim Transgender') },
//           { name: 'Sikhism', value: getTotalValue('Sikhism Male') + getTotalValue('Sikhism Female') + getTotalValue('Sikhism Transgender') },
//           { name: 'Christianity', value: getTotalValue('Christianity Male') + getTotalValue('Christianity Female') + getTotalValue('Christianity Transgender') },
//         ];
//       default:
//         return [];
//     }
//   };

//   const getTotalValue = (key) => {
//     return parseInt(jailData[0]['Jail Current Population'][key], 10) + parseInt(jailData[1]['Jail Current Population'][key], 10);
//   };

//   // Define colors for the pie chart segments
//   const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF9800'];

//   return (
//     <div>
//       <h2>Combined Jails Population Distribution</h2>
//       <div>
//         <label>
//           Select Filter:
//           <select onChange={(e) => handleFilterChange(e.target.value)} value={selectedFilter}>
//             <option value="prisonType">Prison Type</option>
//             <option value="nationality">Nationality</option>
//             <option value="gender">Gender</option>
//             <option value="religion">Religion</option>
//           </select>
//         </label>
//       </div>
//       <ResponsiveContainer width="100%" height={300}>
//         <PieChart>
//           <Pie
//             data={getFilteredData()}
//             dataKey="value"
//             nameKey="name"
//             cx="50%"
//             cy="50%"
//             outerRadius={80}
//             fill="#8884d8"
//             label
//           >
//             {getFilteredData().map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
//             ))}
//           </Pie>
//           <Legend />
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default CombinedJailPopulationPieChart;












// import React from 'react';
// import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

// const CombinedJailPopulationPieChart = ({ jailData }) => {
//   // Extract data from the given dataset
//   const data = [
//     { name: 'Male', value: parseInt(jailData[0]['Jail Current Population']['Male'], 10) + parseInt(jailData[1]['Jail Current Population']['Male'], 10) },
//     { name: 'Female', value: parseInt(jailData[0]['Jail Current Population']['Female'], 10) + parseInt(jailData[1]['Jail Current Population']['Female'], 10) },
//     { name: 'Transgender', value: parseInt(jailData[0]['Jail Current Population']['Transgender'], 10) + parseInt(jailData[1]['Jail Current Population']['Transgender'], 10) },
//   ];

//   // Define colors for the pie chart segments
//   const colors = ['#FF6384', '#36A2EB', '#FFCE56'];

//   return (
//     <div>
//       <h2>Combined Jails Population Distribution</h2>
//       <ResponsiveContainer width="100%" height={300}>
//         <PieChart>
//           <Pie
//             data={data}
//             dataKey="value"
//             nameKey="name"
//             cx="50%"
//             cy="50%"
//             outerRadius={80}
//             fill="#8884d8"
//             label
//           >
//             {data.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
//             ))}
//           </Pie>
//           <Legend />
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default CombinedJailPopulationPieChart;
