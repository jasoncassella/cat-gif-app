const img = document.querySelector('img');
const button = document.querySelector('button');
const input = document.querySelector('input');

button.addEventListener('click', runFetch);

async function runFetch() {
	const searchTerm = input.value;
	try {
		const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=0804rL4eo40Vb9eRvq1EDWJZ3S0sfahL&s=${searchTerm}`,
			{
				mode: 'cors',
			}
		);
		const data = await response.json();
		img.src = data.data.images.original.url;
	} catch (error) {
		alert(`there were no gifs of ${searchTerm}`);
	}

}