class OfficeAdapter {
  constructor() {
    this.base = "http://127.0.0.1:3000/api/v1/office"
  }

  fetchAndCreate(event) {
    let configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({location: event[0], cell: event[1], bathrooms: event[2], peace_index: event[3], description: event[4]})
    };
    fetch(this.base, configurationObject)
      .then(function(response) {
        return response.json();
      })
      .then(function(response){
        Offices.solo(response)
      })
      .catch(function(error) {
        alert("error");
        console.log(error.message);
      });
    }
}
