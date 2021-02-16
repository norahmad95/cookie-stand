"use strict";


const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Location(name, min, max, avg, avgPerCustSales, salesPerHour, totalSeals, totalOfTotal) {

    this.name = name,
        this.min = min,
        this.max = max,
        this.avg = avg,
        this.avgPerCustSales = avgPerCustSales,
        this.salesPerHour = salesPerHour,
        this.totalSeals = totalSeals,
        this.totalOfTotal = totalOfTotal

};

Location.prototype.calc = function() {
    for (let i = 0; i < 14; i++) {

        this.avg.push(getRndInteger(min, max));
    }

    for (let j = 0; j < 14; j++) {
        salesPerHour.push(avgPerCustSales * avg[j]);
        totalSeals += salesPerHour[j];

        totalOfTotal = totalOfTotal + salesPerHour[j];

    }
};

totalCookies = totalCookies + salesPerHour;

const dataEl = document.createElement('td');
tableRow.appendChild(dataEl);
dataEl.textContent = Math.ceil(salesPerHour); {
    footerTotals[14] += Math.ceil(totalCookies);
    const dataEl = document.createElement('td');
    tableRow.appendChild(dataEl);
    dataEl.textContent = Math.ceil(totalCookies);
};


// header for table 
function renderHeader() {
    const container = document.getElementById('seal');
    const tableRow = document.createElement('tr');
    container.appendChild(tableRow);

    const tableHeadingEl = document.createElement('th');
    tableRow.appendChild(tableHeadingEl);
    tableHeadingEl.textContent = 'Location';

    for (let i = 0; i < hours.length; i++) {
        const tableHeadingEl = document.createElement('th');
        tableRow.appendChild(tableHeadingEl);
        tableHeadingEl.textContent = hours[i];
    }

    const lastTableHeadingEl = document.createElement('th');
    tableRow.appendChild(lastTableHeadingEl);
    lastTableHeadingEl.textContent = 'Daily Location Total';
}

// footer total of total 

function renderFooterTotals() {
    const container = document.getElementById('sea');
    const tableRow = document.createElement('tr');
    container.appendChild(tableRow);

    const tableHeadingEl = document.createElement('th');
    tableRow.appendChild(tableHeadingEl);
    tableHeadingEl.setAttribute('scope', 'row');
    tableHeadingEl.textContent = 'Totals';

    for (let i = 0; i < footerTotals.length; i++) {
        const tableHeadingEl = document.createElement('th');
        tableRow.appendChild(tableHeadingEl);
        tableHeadingEl.textContent = (footerTotals[i]);
    }
};




const FiLocation = new Seattel('Seattel', 23, 65, [], 6.3, [], 0);
const SeLocation = new Tokyo('Tokyo', 3, 24, [], 1.2, [], 0);
const ThLocation = new Dubai('Dubai', 11, 38, [], 3.7, [], 0);
const FoLocation = new Paris('Paris', 20, 38, [], 2.3, [], 0);
const FeLocation = new Lima('Lima', 2, 16, [], 4.6, [], 0);

// function call

renderHeader();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
renderFooterTotals();

// lab 06
// const seattle = {
//     name: 'seattle',
//     min: 23,
//     max: 65,
//     avg: [],
//     avgPerCustSales: 6.3,
//     salesPerHour: [],
//     totalSeals: 0,
//     calc: function() {
//         for (let i = 0; i < 14; i++) {

//             this.avg.push(getRndInteger(this.min, this.max));
//         }
//         for (let j = 0; j < 14; j++) {
//             this.salesPerHour.push(this.avgPerCustSales * this.avg[j]);
//             this.totalSeals += this.salesPerHour[j];



//         }
//     },




//     render: function() {
//         const sealDiv = document.getElementById('seal');

//         const name = document.createElement('h2');
//         name.textContent = 'Seattle';
//         sealDiv.append(name);

//         const list = document.createElement('ul');
//         for (let i = 0; i < hours.length; i++) {
//             // creat li 
//             const item = document.createElement('li');

//             // inject hours:sales
//             item.textContent = hours[i] + ':' + this.salesPerHour[i];


//             // append  li to the ul
//             list.append(item);

//         }
//         const totalItem = document.createElement('li');
//         totalItem.textContent = 'Total: ' + this.totalSeals;
//         list.append(totalItem);

//         sealDiv.append(list);

//         console.log('container');

//         /*
//         <main>
//          <h1> Shope Location</h1>
//          <ul>
//           <li> 6am: 16 cookies</li>
//           <li> 7pm: 30 cookies</li>
//           <li> total : 875 cookies </li>
//           </ul>
//         <main>  
//         */


//     },
// }

// seattle.calc() console.log(seattle.avg) seattle.render()

// // Tokyo 


// const tokyo = {
//         name: 'Tokyo',
//         min: 3,
//         max: 24,
//         avg: [],
//         avgPerCustSales: 1.2,
//         salesPerHour: [],
//         totalSeals: 0,
//         calc: function() {
//             for (let i = 0; i < 14; i++) {

//                 this.avg.push(getRndInteger(this.min, this.max));
//             }
//             for (let j = 0; j < 14; j++) {
//                 this.salesPerHour.push(this.avgPerCustSales * this.avg[j]);
//                 this.totalSeals += this.salesPerHour[j];



//             }
//         },




//         render: function() {
//             const sealDiv = document.getElementById('seal');

//             const name = document.createElement('h2');
//             name.textContent = 'Tokyo';
//             sealDiv.append(name);

//             const list = document.createElement('ul');
//             for (let i = 0; i < hours.length; i++) {
//                 // creat li 
//                 const item = document.createElement('li');

//                 // inject hours:sales
//                 item.textContent = hours[i] + ':' + this.salesPerHour[i];


//                 // append  li to the ul
//                 list.append(item);

//             }
//             const totalItem = document.createElement('li');
//             totalItem.textContent = 'Total: ' + this.totalSeals;
//             list.append(totalItem);

//             sealDiv.append(list);

//             console.log('container');

//             /*
//             <main>
//              <h1> Shope Location</h1>
//              <ul>
//               <li> 6am: 16 cookies</li>
//               <li> 7pm: 30 cookies</li>
//               <li> total : 875 cookies </li>
//               </ul>
//             <main>  
//             */


//             // },
//             // }

//             // seattle.calc() console.log(tokyo.avg) this.seattle.render()


//             // Dubai 

//             const dubai = {
//                 name: 'Dubai',
//                 min: 11,
//                 max: 38,
//                 avg: [],
//                 avgPerCustSales: 3.7,
//                 salesPerHour: [],
//                 totalSeals: 0,
//                 calc: function() {
//                     for (let i = 0; i < 14; i++) {

//                         this.avg.push(getRndInteger(this.min, this.max));
//                     }
//                     for (let j = 0; j < 14; j++) {
//                         this.salesPerHour.push(this.avgPerCustSales * this.avg[j]);
//                         this.totalSeals += this.salesPerHour[j];



//                     }
//                 },




//                 render: function() {
//                     const sealDiv = document.getElementById('seal');

//                     const name = document.createElement('h2');
//                     name.textContent = 'Dubai';
//                     sealDiv.append(name);

//                     const list = document.createElement('ul');
//                     for (let i = 0; i < hours.length; i++) {
//                         // creat li 
//                         const item = document.createElement('li');

//                         // inject hours:sales
//                         item.textContent = hours[i] + ':' + this.salesPerHour[i];


//                         // append  li to the ul
//                         list.append(item);

//                     }
//                     const totalItem = document.createElement('li');
//                     totalItem.textContent = 'Total: ' + this.totalSeals;
//                     list.append(totalItem);

//                     sealDiv.append(list);

//                     console.log('container');

//                     /*
//                     <main>
//                      <h1> Shope Location</h1>
//                      <ul>
//                       <li> 6am: 16 cookies</li>
//                       <li> 7pm: 30 cookies</li>
//                       <li> total : 875 cookies </li>
//                       </ul>
//                     <main>  
//                     */


//                 },
//             }
//             dubai.calc() console.log(dubai.avg) dubai.render()

//             // paris

//             const paris = {
//                 name: 'Paris',
//                 min: 20,
//                 max: 38,
//                 avg: [],
//                 avgPerCustSales: 2.3,
//                 salesPerHour: [],
//                 totalSeals: 0,
//                 calc: function() {
//                     for (let i = 0; i < 14; i++) {

//                         this.avg.push(getRndInteger(this.min, this.max));
//                     }
//                     for (let j = 0; j < 14; j++) {
//                         this.salesPerHour.push(this.avgPerCustSales * this.avg[j]);
//                         this.totalSeals += this.salesPerHour[j];



//                     }
//                 },




//                 render: function() {
//                     const sealDiv = document.getElementById('seal');

//                     const name = document.createElement('h2');
//                     name.textContent = 'Paris';
//                     sealDiv.append(name);

//                     const list = document.createElement('ul');
//                     for (let i = 0; i < hours.length; i++) {
//                         // creat li 
//                         const item = document.createElement('li');

//                         // inject hours:sales
//                         item.textContent = hours[i] + ':' + this.salesPerHour[i];


//                         // append  li to the ul
//                         list.append(item);

//                     }
//                     const totalItem = document.createElement('li');
//                     totalItem.textContent = 'Total: ' + this.totalSeals;
//                     list.append(totalItem);

//                     sealDiv.append(list);

//                     console.log('container');

//                     /*
//                     <main>
//                      <h1> Shope Location</h1>
//                      <ul>
//                       <li> 6am: 16 cookies</li>
//                       <li> 7pm: 30 cookies</li>
//                       <li> total : 875 cookies </li>
//                       </ul>
//                     <main>  
//                     */


//                 },
//             }

//             paris.calc() console.log(paris.avg) paris.render()

//             // Lima


//             const lima = {
//                 name: 'Lima',
//                 min: 20,
//                 max: 38,
//                 avg: [],
//                 avgPerCustSales: 2.3,
//                 salesPerHour: [],
//                 totalSeals: 0,
//                 calc: function() {
//                     for (let i = 0; i < 14; i++) {

//                         this.avg.push(getRndInteger(this.min, this.max));
//                     }
//                     for (let j = 0; j < 14; j++) {
//                         this.salesPerHour.push(this.avgPerCustSales * this.avg[j]);
//                         this.totalSeals += this.salesPerHour[j];



//                     }
//                 },




//                 render: function() {
//                     const sealDiv = document.getElementById('seal');

//                     const name = document.createElement('h2');
//                     name.textContent = 'Lima';
//                     sealDiv.append(name);

//                     const list = document.createElement('ul');
//                     for (let i = 0; i < hours.length; i++) {
//                         // creat li 
//                         const item = document.createElement('li');

//                         // inject hours:sales
//                         item.textContent = hours[i] + ':' + this.salesPerHour[i];


//                         // append  li to the ul
//                         list.append(item);

//                     }
//                     const totalItem = document.createElement('li');
//                     totalItem.textContent = 'Total: ' + this.totalSeals;
//                     list.append(totalItem);

//                     sealDiv.append(list);

//                     console.log('container');

//                     /*
//                     <main>
//                      <h1> Shope Location</h1>
//                      <ul>
//                       <li> 6am: 16 cookies</li>
//                       <li> 7pm: 30 cookies</li>
//                       <li> total : 875 cookies </li>
//                       </ul>
//                     <main>  
//                     */


//                 },
//             }

//             lima.calc() console.log(lima.avg) lima.render() ima.avg)
//         lima.render()() console.log(lima.avg) lima.render() ima.avg)
//         lima.render()