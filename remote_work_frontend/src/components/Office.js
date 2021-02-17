class Office {
  constructor() {

  }

  static reload() {
    window.location.reload(false);
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
        form.style.display = "none"
        event.preventDefault()
         new Validate(event)
      })
    })
  }
}
