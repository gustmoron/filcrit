let paginaAtual = 0;

async function listarRecentes() {

	try {
		
		const opcoes = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Host': 'unogsng.p.rapidapi.com',
				'X-RapidAPI-Key': '623b7d7739msh19988e0e30c4554p1f796ejsn26cd5a7a3812'
			}
		};
		
		const resposta = await fetch('https://unogsng.p.rapidapi.com/search?orderby=dateDesc&limit=12&countrylist=29&offset=' + (paginaAtual * 12), opcoes);
		const resultado = await resposta.json();
		const lista = resultado.results;
		
		let html = `<div class="row">`;
		
		for (let i = 0; i < lista.length; i++) {
			
			let filme = lista[i];
			
			html += `
				<div class="col-sm-3 coluna-filme">
					<div class="card-filme">
						<img src="${filme.img}" />
					</div>
				</div>
			`;
			
		}
		
		html += `</div>`;
		
		const div = document.getElementById("filmes");
		div.innerHTML = html;
		
	} catch (ex) {
		
		alert("Erro: " + ex.message);
		
	}

}
