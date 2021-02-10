class Office {
  constructor() {

  }

  newOffice() {
    let h3 = document.getElementById("h3-share")
    let button = document.getElementById("share")
    button.addEventListener('click', function(event) {
      button.style.display = "none"
      h3.style.display = "none"
      document.getElementById("workNew").style.display = "block";

      let form = document.getElementById("workNew")
      form.addEventListener('submit', (event) => {

         new Validate(event)
         event.preventDefault()

      })
    })
  }
}
