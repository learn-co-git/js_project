class Office {
  constructor(){
    this.createOffice = new OfficeAdapter
    this.newOffice()
  }

  newOffice() {
    let h3 = document.getElementById("h3-share")
    let button = document.getElementById("share")
    button.addEventListener('click', function(event) {
      button.style.display = "none"
      h3.style.display = "none"

    var form = document.createElement("form");

    form.className = "remoteOffice"
    form.classList.add("createRemoteOffice")
    var br = document.createElement("br");

    var loc = document.createElement("input");
    loc.className = "link"
    loc.setAttribute("type", "text");
    loc.setAttribute("name", "location");
    loc.setAttribute("placeholder", "Location");


    var cell = document.createElement("input");
    cell.className = "link"
    cell.setAttribute("type", "text");
    cell.setAttribute("name", "cell");
    cell.setAttribute("placeholder", "Cell Signal Strength (1poor - 10excel)");


    var bath = document.createElement("input");
    bath.className = "link"
    bath.setAttribute("type", "text");
    bath.setAttribute("name", "bathrooms");
    bath.setAttribute("placeholder", "Bathrooms (1none - 10great)");


    var peace = document.createElement("input");
    peace.className = "link"
    peace.setAttribute("type", "text");
    peace.setAttribute("name", "peace_index");
    peace.setAttribute("placeholder", "Quality of Working Environment (1poor - 10awesome)");


     var descrip = document.createElement("input");
     descrip.className = "link"
     descrip.classList.add("textarea")
     descrip.setAttribute("type", "textarea");
     descrip.setAttribute("name", "description");
     descrip.setAttribute("placeholder", "Description");


              var s = document.createElement("input");
              s..className = "link"
              s.setAttribute("type", "submit");
              s.setAttribute("value", "Submit");


              form.appendChild(loc);

              form.appendChild(br.cloneNode());

              form.appendChild(cell);
              form.appendChild(br.cloneNode());

              form.appendChild(bath);
              form.appendChild(br.cloneNode());

              form.appendChild(peace);
              form.appendChild(br.cloneNode());

              form.appendChild(descrip);
              form.appendChild(br.cloneNode());
              form.appendChild(br.cloneNode());
              form.appendChild(br.cloneNode());

              form.appendChild(s);

              document.getElementsByClassName("create-office")[0].appendChild(form);


          })
            let xy = document.getElementsByClassName("createRemoteOffice")[0]
            document.addEventListener("submit", xy, function (e) {
              let nm = document.getElementsByClassName("link")
              var bla = nm
              console.log(bla);
              e.preventDefault();
            });
        }
}
