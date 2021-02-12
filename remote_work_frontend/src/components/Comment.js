class Comment {
  constructor(id) {
    this.id = id
    this.officeComments(id)
  }

  officeComments(id) {
    if (id != undefined && id > 0) {
      return new commentAdapter(id)
    }
  }
}
