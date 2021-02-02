class User {
  constructor() {
    this.adapter = new UserAdapter()
    this.listener()
    this.goFetchUser()
  }

  goFetchUser() {
    this.adapter.getOrCreateUser()
  }
}
