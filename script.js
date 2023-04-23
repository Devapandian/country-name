var container=document.createElement("div");
container.className="container";

var row=document.createElement("div");
row.classList.add("row","m-3");

container.append(row);

var res=fetch("https://restcountries.com/v3.1/all")
res.then((data)=>data.json()).then((data1)=>foo(data1));

function foo(data1) {
    for (var i = 0; i < data1.length; i++) {
      var country = data1[i];
      row.innerHTML += `
        <div class="col-md-4">
          <div class="card border-primary mb-4" style="width: 20rem;">
            <img src="${country.flags.svg}" class="card-img-top" alt="country flags">
            <div class="card-body">
              <h5 class="card-title">${country.name.common}</h5>
              <p class="card-text">
                <strong>Region:</strong> ${country.region}<br>
                <strong>Capital:</strong> ${country.capital}<br>
                <strong>Country Code:</strong> ${country.cca2}<br>
              </p>
            </div>
          </div>
        </div>
      `;
      document.body.append(container);
    }
  }
  