document.addEventListener("DOMContentLoaded",()=>{
	const searchButton = document.getElementById('searchButton');

	searchButton.addEventListener('click', ()=> {
		fetch('superheroes.php')
			.then(response=>{
				if(!response.ok){
					throw new Error('Network response was not ok');
				}
				return response.text();
			})
			.then(data =>{
				alert(data);
			})
			.catch(error =>{
				console.error('there was a problem with the fetch operation:', error);
			});
	});
});