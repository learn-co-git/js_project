class Office {
  constructor(id, cell, location, bathrooms, peace, description) {
    this.id = id
    this.cell = cell
    this.location = location
    this.bathrooms = bathrooms
    this.peaceIndex = peace
    this.decsription = description

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


 render() {
    let ul = document.querySelector('ul')

      let column = document.createElement('column')
      column.id = this.id
      column.className = "column"
      ul.appendChild(column)
      let div = document.createElement('div')
      div.classList.add('card')
      let id = document.createElement('p')
      id.className = "office-id"
      div.appendChild(id)
      id.value = this.id
      let h1 = document.createElement('h1')
      h1.className = "title"
      div.appendChild(h1)
      h1.innerHTML = this.location
      let h31 = document.createElement('h3')
      h31.className = "details"
      div.appendChild(h31)
      h31.innerHTML = "Cell Signal Strength Score  " + this.cell
      let h32 = document.createElement('h3')
      h32.className = "details"
      div.appendChild(h32)
      h32.innerHTML = "Restroom Quality Score  " + this.bathrooms
      let h33 = document.createElement('h3')
      h33.className = "details"
      div.appendChild(h33)
      h33.innerHTML = "Working Environment Quality Score  " + this.peaceIndex
      let p = document.createElement('p')
      div.appendChild(p)
      p.innerHTML = "   " + this.decsription + "   "
      let commentButton = document.createElement('BUTTON')
      commentButton.id = this.id
      commentButton.innerHTML = "Add Comment"
      div.appendChild(commentButton)

      commentButton.addEventListener('click', (event) => {
        let submitComment = new Comment

        let p = document.createElement('p')
        p.style.textDecoration = "underline"
        p.innerHTML = "Add Comment Below"
        div.appendChild(p)
        let input = document.createElement("input")
          input.setAttribute('type','text')
          input.setAttribute('name', 'comment')
        let user_name = document.createElement('p')
        user_name.innerHTML = "Please enter a User-Name"
        let input2 = document.createElement("input")
          input.setAttribute('type','text')
          input.setAttribute('name', 'user_name')
        let submit = document.createElement("Button")
          submit.innerHTML = "Submit Comment"
          submit.addEventListener('click', (event) => {
            p.style.display = "none"
            input.style.display = "none"
            user_name.style.display = "none"
            input2.style.display = "none"
            submit.style.display = "none"
            submitComment.createComment(event, this.id)
          })
          div.appendChild(input)
          div.appendChild(user_name)
          div.appendChild(input2)
          div.appendChild(submit)
      })

      let comments = document.createElement('h3')
      comments.style.textDecoration = "underline"
      comments.id = this.id + "office"
      comments.innerHTML = "Comments"
      comments.style.color = "red";
      div.appendChild(comments)

      column.appendChild(div)


    ul.appendChild(document.createElement("br"))
  }
}
