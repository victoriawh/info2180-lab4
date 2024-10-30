document.addEventListener("DOMContentLoaded",()=>{
	const searchButton = document.getElementById('searchButton');
	const searchField = document.getElementById('searchField');
	const resultDiv = document.getElementById('result');

	searchButton.addEventListener('click', ()=> {
		const query = encodeURIComponent(searchField.value.trim());

		let url = `superheroes.php`;
		if (query){
			url += `?query=${query}`;
		}
		fetch(url)
			.then(response=>{
				if(!response.ok){
					throw new Error('Network response was not ok');
				}
				return response.text();
			})
			.then(data =>{
				resultDiv.innerHTML = data;
			})
			.catch(error =>{
				console.error('there was a problem with the fetch operation:', error);
				resultDiv.innerHTML = "<p>There was an error processing your request.</p>";
			});
	});
});