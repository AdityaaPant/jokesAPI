const nextJoke = document.getElementById("btn");
const jokeDisplay = document.getElementById("joke");
const api =
	"https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
let getJoke = () => {
	jokeDisplay.classList.remove("fade");
	fetch(api)
		.then((data) => data.json())
		.then((item) => {
			jokeDisplay.textContent = `${item.joke}`;
			jokeDisplay.classList.add("fade");
		});
};
nextJoke.addEventListener("click", getJoke);
getJoke();

// let getJoke = () => {
// 	jokeDisplay.classList.remove("fade");
// 	fetch(api)
// 		.then((response) => response.json())
// 		.then((data) => {
// 			if (data.type === "single") {
// 				jokeDisplay.textContent = data.joke;
// 			} else if (data.type === "twopart") {
// 				jokeDisplay.textContent = `${data.setup} - ${data.delivery}`;
// 			}
// 			jokeDisplay.classList.add("fade");
// 		})
// 		.catch((error) => {
// 			jokeDisplay.textContent = "Oops! Something went wrong.";
// 			console.error(error);
// 		});
// };
