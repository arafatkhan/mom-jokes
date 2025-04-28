document.getElementById('joke-button').addEventListener('click', fetchJoke);

async function fetchJoke() {
    const jokeContainer = document.getElementById('joke');
    jokeContainer.textContent = 'Loading...';

    try {
        const response = await fetch('https://official-joke-api.appspot.com/jokes/general/random');
        const data = await response.json();
        jokeContainer.textContent = data[0].setup + ' ' + data[0].punchline;
    } catch (error) {
        jokeContainer.textContent = 'Oops! Something went wrong. Please try again.';
    }
}