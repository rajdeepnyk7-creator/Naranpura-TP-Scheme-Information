let originalData = [];

fetch("data/statement.json")
.then(response => response.json())
.then(data => {

originalData = data;

console.log("Column Names:");
console.log(Object.keys(data[0]));

displayData(data);

});

function displayData(data) {

const tableBody = document.getElementById("tableBody");

tableBody.innerHTML = "";

data.forEach(item => {

const keys = Object.keys(item);

const row = `
<tr>
<td>${item[keys[3]]}</td>
<td>${item[keys[6]]}</td>
<td>${item[keys[2]]}</td>
<td>${item[keys[7]]}</td>
<td>${item[keys[8]]}</td>
</tr>
`;

tableBody.innerHTML += row;

});
}


function filterData() {

const tpValue = document.getElementById("tpSearch").value.toLowerCase();

const fpValue = document.getElementById("fpSearch").value.toLowerCase();

const filtered = originalData.filter(item => {

const keys = Object.keys(item);

return item[keys[3]].toString().toLowerCase().includes(tpValue) &&
item[keys[6]].toString().toLowerCase().includes(fpValue);

});

displayData(filtered);

}
]
