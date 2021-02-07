class Office {
  constructor(){
    this.createOffice = new OfficeAdapter
    newOffice()
  }

  newOffice() {
    let button = document.getElementById("share")
    button.addEventListener('click', function(event) {
      console.log(event)
    })
  }
}
