const img = document.querySelector('img');
const button = document.querySelector('button');
const input = document.querySelector('input');

button.addEventListener('click', runFetch);

function runFetch() {
	const searchTerm = input.value;
	fetch(
		`https://api.giphy.com/v1/gifs/translate?api_key=0804rL4eo40Vb9eRvq1EDWJZ3S0sfahL&s=${searchTerm}`,
		{
			mode: 'cors',
		}
	)
		.then(response => {
			return response.json();
		})
		.then(response => {
			img.src = response.data.images.original.url;
		})
		.catch(response => {
			alert(`there were no gifs of ${searchTerm}`);
		});
}
