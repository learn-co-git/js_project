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
      Offices.displayOffices(json)

    })
    let getComment = new Comment
    getComment.officeComments()
  }
}
