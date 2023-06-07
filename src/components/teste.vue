


<body>

    <div>
        <form>
            <label for="cidade">cidade:</label>
            <input type="text" id="cidadeInput" name="cidade">
            <button class="btn btn-primary" id="botaozinho" type="button"> clica </button>
        </form>
  
        <div class="container">
            <h1>API IPMA</h1>
            <table class="table"> card-body
                <thead>
                    <tr>
                        <th scope="col">precipitaProb</th>
                        <th scope="col">tMin</th>
                        <th scope="col">tMax</th>
                    </tr>
                </thead>
                <tbody id="tabela">
                </tbody>
            </table>
        </div>
  
  
    </div>
  
    <script>
        let botaozinho = document.getElementById("botaozinho");
        botaozinho.addEventListener("click", function () {
            let cidadeInput = document.getElementById("cidadeInput").value;
  
  
            fetch("https://api.ipma.pt/open-data/distrits-islands.json")
                .then(
                    response => response.json()
                )
                .then(data => {
                    let idcidade = null;
                    data.data.forEach(element => {
                        if (element.local === cidadeInput) {
                            idcidade = element.globalIdLocal;
                        }
                    });
  
  
                    url = "https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/" + idcidade + ".json";
  
                    fetch(url)
                        .then(
                            response => response.json()
                        )
                        .then(data => {
                            let tabela = document.getElementById("tabela");
  
                            data.data.forEach(element => {
                                html = `
                                        <tr>
                                        <td>${element.precipitaProb}</td>
                                        <td>${element.tMin}</td>
                                        <td>${element.tMax}</td>
                                    </tr>           
                                    `   ;
                                tabela.innerHTML += html;
                            });
  
                        }
                        )
  
  
                })
  
        })
    </script>
  </body>