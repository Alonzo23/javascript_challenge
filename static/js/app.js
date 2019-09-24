  
// Select the button
var button = d3.select("#filter-btn");
// Select input element
var inputField1 = d3.select("#datetime");
// Select tbody
var tbody = d3.select("tbody");
// Columns to include in table
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var populate = (dataInput) => {

  dataInput.forEach(ufo_sightings => {
    var row = tbody.append("tr");
    columns.forEach(column => row.append("td").text(ufo_sightings[column])
    )
  });
}

//Populate table
populate(data);

// Filter by attribute
button.on("click", () => {
  d3.event.preventDefault();
  var inputDate = inputField1.property("value").trim();
  // Filter by field matching input value
  var filterDate = data.filter(data => data.datetime === inputDate);
  console.log(filterDate)
  var filterData = data.filter(data => data.datetime === inputDate);
  console.log(filterData)

  // Add filtered data to table
  tbody.html("");

  let response = {
    filterData
  }

  if (response.filterData.length !== 0) {
    populate(filterData);
  
    }
    else {
      tbody.append("tr").append("td").text("No results found!"); 
    }
})