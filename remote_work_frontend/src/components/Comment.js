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
          let placed_comment = document.createElement('ul')
          placed_comment.innerHTML = ele["statement"] +`(${ele["user_name"]})`
          if (index % 2 == 0) {
          placed_comment.style.color = "blue"
          placed_comment.style.textDecoration = ""
          }
          else {
            placed_comment.style.color = "black"
            placed_comment.style.textDecoration = ""
          }
          columnComments.appendChild(placed_comment)
          columnComments.appendChild(document.createElement("br"))
          }
        }
      })
        .catch(function(error) {
          alert(error.message)
        })
      }

  createComment(event, bigId) {
    let configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({statement: event.target.previousSibling.previousSibling.previousSibling.value, office_id: bigId, user_name: event.target.previousSibling.value})
    };

    fetch(this.base, configObject)
      .then(function(response) {
        return response.json();
      })
      .then(function(object) {
        Office.reload()
       })
      .catch(function(error) {
        alert("error in comment creation")
        console.log(error.message)
      })

  }
}
