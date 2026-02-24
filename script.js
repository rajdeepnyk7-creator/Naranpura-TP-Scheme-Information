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
                <td>${item.tp_no}</td>
                <td>${item.fp_no}</td>
                <td>${item.ward}</td>
                <td>${item.purpose}</td>
                <td>${item.area}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function filterData() {
    const tpValue = document.getElementById("tpSearch").value.toLowerCase();
    const fpValue = document.getElementById("fpSearch").value.toLowerCase();

    const filtered = originalData.filter(item =>
        item.tp_no.toString().toLowerCase().includes(tpValue) &&
        item.fp_no.toString().toLowerCase().includes(fpValue)
    );

    displayData(filtered);
}
