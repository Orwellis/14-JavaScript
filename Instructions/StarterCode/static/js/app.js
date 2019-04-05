// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function populateTable(data) {

    tbody.html("")

    data.forEach((row) => {
        var tableRow = tbody.append("tr");

        Object.values(row).forEach((value) => {
            var cell = tableRow.append("td");
            cell.text(value);
        });
    });
}

function filterData() {

    d3.event.preventDefault();

    var datetime = d3.select("#datetime").property("value");
    var city = d3.select("#city").property("value");
    var state = d3.select("#state").property("value");
    var country = d3.select("#country").property("value");
    var shape =  d3.select("#shape").property("value");

 

    var searches = {"datetime": datetime,
                    "city": city,
                    "state": state,
                    "country": country,
                    "shape": shape}

    console.log(searches);

    var newData = tableData;

    var searchKeys = Object.keys(searches);

    console.log(searchKeys);

    console.log("starting loop:");

    var keyNumber = searchKeys.length;
    for (var i = 0; i < keyNumber; i++) {

        var key = searchKeys[i];
        var value = String(searches[key]);
        console.log("key:", key, "value:", value);

        if ((value !== null) && (value !== "")) {

            newData = newData.filter(function(row) {
                console.log(row)
                var rowData = row[key];
                console.log(rowData)
                return (rowData === value);
            });

        }

    }

    populateTable(newData);

}


d3.selectAll("#filter-btn").on("click", filterData);

populateTable(tableData);