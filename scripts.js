document.addEventListener("DOMContentLoaded", function () {
	fetch("books-list.csv")
		.then((response) => response.text())
		.then((data) => {
			const libros = data.split("\n");

			libros.forEach((libro) => {
				const [titulo, autor, tapa, contratapa, isbn, precio] =
					libro.split(",");

				const card = document.createElement("div");
				card.classList.add("card");

				const coverContainer = document.createElement("div");
				coverContainer.classList.add("cover-images");

				const imagenTapa = document.createElement("img");
				imagenTapa.src = tapa;
				imagenTapa.alt = titulo;
				imagenTapa.addEventListener("click", function () {
					window.location.href = tapa;
				});
				coverContainer.appendChild(imagenTapa);

				const imagenContratapa = document.createElement("img");
				imagenContratapa.src = contratapa;
				imagenContratapa.alt = `${titulo} - Contratapa`;
				imagenContratapa.addEventListener("click", function () {
					window.location.href = contratapa;
				});
				coverContainer.appendChild(imagenContratapa);

				card.appendChild(coverContainer);

				const detalleLibro = document.createElement("div");
				detalleLibro.classList.add("detalleLibro");
				detalleLibro.innerHTML = `
        <h3>${titulo}</h3>
        <p>Autor: ${autor}</p>
        <p>ISBN: ${isbn}</p>
        <p>Precio: $${precio}</p>
      `;

				const container = document.getElementById("books-container");
				container.appendChild(card);
				card.appendChild(detalleLibro);

				container.appendChild(card);
			});
		})
		.catch((error) => {
			console.error("There was the following error loading CSV file:", error);
		});
});
