// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

tableData.forEach((SpookyVisit) => {
    var row = tbody.append("tr");
    Object.entries(SpookyVisit).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");


var form = d3.select("form");

form.on("submit", runEnter);

function buildTable(data){
            tbody.html("");
            data.forEach((item) => {
                var newRow=tbody.append('tr');
                Object.values(item).forEach((val)=> {
                    newRow.append('td').text(val)
                });
            });
        };


function runEnter() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter((data) => data.datetime === inputValue);
    filteredData.forEach((SpookyVisit) => {
        var row = tbody.append("tr");
        Object.entries(SpookyVisit).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
      console.log(filteredData);
      buildTable(filteredData);     
};

