class Validate {
  constructor(event) {
    this.event = event
    this.OfficeAdapter = new OfficeAdapter
    this.dataValidation()
  }

   dataValidation() {
    let array = []
    let location = this.event.target.elements['location'].value
    let cell = this.event.target.elements['cell'].value
    let bathrooms = this.event.target.elements['bathrooms'].value
    let peace_index = this.event.target.elements['peace_index'].value
    let description = this.event.target.elements['description'].value
    array.push(location, cell, bathrooms, peace_index, description)
    if (array.every(x => x != "")) {
      this.OfficeAdapter.fetchAndCreate(array)
    }
    else {
      alert("Please fill in all fields")
    }
  }
}
