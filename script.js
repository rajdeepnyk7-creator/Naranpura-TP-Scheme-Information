let originalData = [];

fetch("data/statement.json")
.then(response => response.json())
.then(data => {
    originalData = data;
    displayData(data);
});

function displayData(data) {

    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    data.forEach(item => {

        const row = `
        <tr>
            <td>${item["T.P.S. NO."]}</td>
            <td>${item["F.P. NO."]}</td>
            <td>${item["Ward"]}</td>
            <td>${item["PURPOSE"]}</td>
            <td>${item["AREA IN SQ MT"]}</td>
        </tr>
        `;

        tableBody.innerHTML += row;

    });
}

function filterData() {

const tpValue = document.getElementById("tpSearch").value.toLowerCase();
const fpValue = document.getElementById("fpSearch").value.toLowerCase();

const filtered = originalData.filter(item =>

item["T.P.S. NO."].toString().toLowerCase().includes(tpValue) &&
item["F.P. NO."].toString().toLowerCase().includes(fpValue)

);

displayData(filtered);

}
