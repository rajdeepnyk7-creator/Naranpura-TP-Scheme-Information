fetch("data/statement.json")
.then(response => response.json())
.then(data => {

console.log(data[0]);

});
