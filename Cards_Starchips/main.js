const ul = document.getElementById('ships')


const url = 'https://swapi.dev/api/starships/'


fetch(url) // o fetch para requisicoes http atraves de promises

    .then((Response) => { //  o response eh uma interface da fetch que representa uma resposta a requisicao. Eu uso then para pegar o resultado da promessa quando ela for terminada
        return Response.json() // aqui e quis pegar os dados que estao no body, que eh uma string json
    })
    .then(function (data) { // aqui vai me retornar os dados do json

        return data.results.forEach(function (el) { // retorna para cada aquivo json

            li = document.createElement('li') // cria um li
           p = document.createElement('p') // cria um spam

            li.innerHTML = el.name // coloca o nome da nave no li
           p.innerHTML = el.model // coloca o modelo da nave no spam

            ul.appendChild(li) // junta isso no meu html
            li.appendChild(p) // same do de cima


        });
    })




