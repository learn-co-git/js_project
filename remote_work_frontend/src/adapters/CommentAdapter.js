class commentAdapter {
  constructor(id=null) {
    this.id = id
    this.base = "http://127.0.0.1:3000/api/v1/comment/office"
    if (id != null) {
      this.getOfficeComments(id)
    }
  }

   getOfficeComments(id) {
    let configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({office_id: id})
    };
    fetch(this.base, configurationObject)
      .then(function(response) {
        return response.json();
      })
      .then(function(object) {
        console.log(object)
      })
      .catch(function(error) {
        alert(error.message)
      })
  }
}
