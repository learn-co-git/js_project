class App {
  constructor () {
    this.offices = new OfficesAdapter
    this.office = new Office
    this.office.newOffice()
    this.offices.getOffices()
  }
}
