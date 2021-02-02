class UserAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/user'
    this.email = email
    this.name = name
    this.password = password
  }

  getOrCreateUser() {
    configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
        body: JSON.stringify({
          email: this.email,
          name: this.name,
          password: this.password
        })
      };
      fetch(this.baseUrl, configObject)
        .then(function(response) {
          return response.json();
        })
        .then(function(object) {
          console.log(object);
        })
  }
}
