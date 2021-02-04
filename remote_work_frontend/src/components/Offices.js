class Offices {
  constructor() {
    this.recoveredOffices = new OfficesAdapter
    this goGetOffices()
  }

  goGetOffices() {
    console.log(this.recoveredOffices.getOffices())
  }
}
