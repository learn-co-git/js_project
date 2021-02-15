class Offices {
  constructor() {
  }

  static displayOffices(json) {


    let div = document.getElementById("offices")
    let ul = document.createElement('ul')
    div.appendChild(ul)

    for (let x of json) {
      let column = document.createElement('column')
      column.id = x["id"]
      column.className = "column"
      ul.appendChild(column)
      let div = document.createElement('div')
      div.classList.add('card')
      let id = document.createElement('p')
      id.className = "office-id"
      div.appendChild(id)
      id.value = x["id"]
      let h1 = document.createElement('h1')
      h1.className = "title"
      div.appendChild(h1)
      h1.innerHTML = x["location"]
      let h31 = document.createElement('h3')
      h31.className = "details"
      div.appendChild(h31)
      h31.innerHTML = "Cell Signal Strength Score  " + `${x["cell"]}`
      let h32 = document.createElement('h3')
      h32.className = "details"
      div.appendChild(h32)
      h32.innerHTML = "Restroom Quality Score  " + `${x["bathrooms"]}`
      let h33 = document.createElement('h3')
      h33.className = "details"
      div.appendChild(h33)
      h33.innerHTML = "Working Environment Quality Score  " + `${x["peace_index"]}`
      let p = document.createElement('p')
      div.appendChild(p)
      p.innerHTML = "   " + x["description"] + "   "
      let commentButton = document.createElement('BUTTON')
      commentButton.id = x["id"]
      commentButton.innerHTML = "Add Comment"
      div.appendChild(commentButton)

      commentButton.addEventListener('click', (event) => {
        let submitComment = new Comment

        let p = document.createElement('p')
        p.innerHTML = "Add Comment Below"
        div.appendChild(p)
        let input = document.createElement("input")
          input.setAttribute('type','text')
          input.setAttribute('name', 'comment')
        let submit = document.createElement("Button")
          submit.innerHTML = "Submit Comment"
          submit.addEventListener('click', (event) => {
            submitComment.createComment(event, x["id"])
          })
          div.appendChild(input)
          div.appendChild(submit)
      })

      let comments = document.createElement('h3')
      var linebreak = document.createElement("br");
      comments.id = x["id"] + "office"
      comments.innerHTML = "Comments"
      comments.style.color = "red";
      div.appendChild(comments).appendChild(linebreak)

      column.appendChild(div)
    }
  }
}
