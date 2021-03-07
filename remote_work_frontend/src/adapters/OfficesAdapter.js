class OfficesAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/office'

  }

  getOffices() {
   fetch(this.baseUrl)
    .then(function(re) {
      return re.json()
    })
    .then(function(json) {
      //Office.iterate(json)
      // loop through the json
      // create a new instance for every loop
      // then call the render method for that instance
      let div = document.getElementById("offices")
      let ul = document.createElement('ul')
      div.appendChild(ul)
      for (let office of json) {
        // console.log("office time")
        // console.log(office)
        const remoteOffice = new Office(office.id, office.cell, office.location, office.bathrooms, office.peace_index, office.description)
        remoteOffice.render()
      }

    })
    let getComment = new Comment
    getComment.officeComments()

  }
}
