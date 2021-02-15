class Comment {
  constructor() {
    this.base = "http://127.0.0.1:3000/api/v1/comment"
  }

  officeComments() {
      fetch(this.base)
        .then(function(response) {
          return response.json();
        })
        .then(function(object) {
          object.forEach(myFunct)

    function myFunct(ele, index) {
          let columnComments
          columnComments = document.getElementById((ele["office_id"]) + "office")

          if (columnComments != null) {
          let comment = document.createElement('ul')
          comment.innerHTML = ele["statement"] +`(${ele["user_name"]})`
          if (index % 2 == 0) {
          comment.style.color = "blue"
          }
          else {
            comment.style.color = "black"
          }
          columnComments.appendChild(comment)
          var linebreak = document.createElement("br");
          comment.appendChild(linebreak)
          }
        }
      })
        .catch(function(error) {
          alert(error.message)
        })
      }

  createComment(event, id) {
    console.log(event.target.previousSibling.value)
    console.log(id)

     // POST   /api/v1/comment   fetch comment#create
  }
}
