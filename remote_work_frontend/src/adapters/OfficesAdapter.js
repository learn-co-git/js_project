class OfficesAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/office'
  }

  getOffices() {
    return fetch(this.baseUrl).then(res => res.json()).then(x => return x)
  }
}
