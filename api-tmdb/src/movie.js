async function reqId(id) {
    try {
        const req = await fetch(`http://localhost:3005/${id}`);
        const json = await req.json();
        console.log(json);

        document.querySelector("#titleMovie").innerHTML = json.title;
        document.querySelector("#sinopseMovie").innerHTML = json.overview;
        document.querySelector(
            "#imageMovie"
        ).innerHTML = `<img src=https://image.tmdb.org/${json.backdrop_path} />`;

        const modal = new next.Modal(
            document.getElementById("modal")
        );
        modal.show();
    } catch (error) {
        console.log(error.message);
    }
}

async function name() {
    try {
        const req = await fetch("http://localhost:3005");
        const json = await req.json();

        let lista = "";
        for (let movie of json)
            lista += `
        <div class="movie-list" >
        <div class="movie-container">
            <div class="movie">
            <img src=https://image.tmdb.org/t/p/w500${_path} id =${movie.id} onclick = "redId(${movie.id})" />
                <p class="movie-title">${movie.title}</p>
            </div>
        </div>
    </div> 
        `;

        document.querySelector("#imagem").innerHTML = lista;
    } catch (error) {
        console.log(error.message);
    }
}
name();