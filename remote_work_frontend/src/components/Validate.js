class Validate {
  constructor(event) {
    this.event = event
    this.OfficeAdapter = new OfficeAdapter
    this.dataValidation()
  }

   dataValidation() {
    let statement = ""
    let message1 = document.getElementById("message-Error1")
    let array = []

    let location = this.event.target.elements['location'].value
    try {
      if (location == "") throw "location cannot be blank  ,"
    }

    catch(err) {
      statement += err + " "
    }

    let cell = this.event.target.elements['cell'].value
    try {
      if (typeof parseInt(cell) != "number") throw "cell feild can only be a number  ,"
      if (parseInt(cell) > 10) throw "cell value cannot be larger then 10  ,"
      if (parseInt(cell) < 0) throw "cell value cannot be less then 0  ,"
    }

    catch(err) {
      statement += err + " "
    }

    let bathrooms = this.event.target.elements['bathrooms'].value
    try {
      if (typeof parseInt(bathrooms) != "number") throw "bathrooms feild can only be a number  ,"
      if (parseInt(bathrooms) > 10) throw "bathrooms value cannot be larger then 10  ,"
      if (parseInt(bathrooms) < 0) throw "bathrooms value cannot be less then 0  ,"
    }

    catch(err) {
      statement += err + " "
    }

    let peace_index = this.event.target.elements['peace_index'].value
    try {
      if (typeof parseInt(peace_index) != "number") throw "quality of working environment feild can only be a number  ,"
      if (parseInt(peace_index) > 10) throw "quality of working environment value cannot be larger then 10  ,"
      if (parseInt(peace_index) < 0) throw "quality of working environment value cannot be less then 0  ,"
    }

    catch(err) {
      statement += err + " "
    }

    let description = this.event.target.elements['description'].value
    try {
      if (description == "") throw "description field cannot be blank"
    }

    catch(err) {
      statement += err + " "
    }

    if (statement === "") {
      array.push(location, cell, bathrooms, peace_index, description)
      this.OfficeAdapter.fetchAndCreate(array)
      document.getElementById("workNew").reset()
    }
    else {
      message1.innerHTML = statement
      alert("see errors above")
    }
  }
}
