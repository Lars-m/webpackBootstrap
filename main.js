require("./main.css");
import 'bootstrap/dist/css/bootstrap.css';

import _ from 'lodash';

function Person(fn,ln,s){
  this.firstName = fn;
  this.lastName = ln;
  this.favoriteSport = s;
}
const persons = [
  new Person("Kurt", "Wonnegut","Socker"),
  new Person("Jan", "Peterson","Hockey"),
  new Person("Jane", "Peterson","Skating"),
  new Person("John", "Hansen","Socker"),
]

function getTable(data,sport){
  const filtered = sport ? data.filter(p => p.favoriteSport === sport) : data;
  const headers = _.keys(filtered[0]);
  const headerHTML = headers.map(h=>`<th>${_.startCase(h)}</th>`).join(" ");
  const bodyHTML = filtered.map((p)=> `<tr>
  <td>${p.firstName}</td>
  <td>${p.lastName}</td>
  <td>${p.favoriteSport}</td>
  </tr>`).join(" ");
  return  `<table class="table">
  <thead><tr>${headerHTML}</tr></thead>
  <tbody>${bodyHTML}</tbody>
  </table>`
}

const table = getTable(persons);
document.getElementById('content').innerHTML = table;