class Offices {
  constructor() {
    this.recoveredOffices = new OfficesAdapter
    this.goGetOffices()
  }

  goGetOffices() {
    this.recoveredOffices.getOffices()
  }

  static displayOffices(json) {

    let div = document.getElementById("offices")
    let ul = document.createElement('ul')
    div.appendChild(ul)

    for (let x of json) {
      let column = document.createElement('column')
      column.className = "column"
      ul.appendChild(column)
      let div = document.createElement('div')
      div.classList.add('card')
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
      column.appendChild(div)
    }
  }
}
