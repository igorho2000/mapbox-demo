mapboxgl.accessToken =
	"pk.eyJ1IjoidGFpcGVpLXR1aWMiLCJhIjoiY2xlaHc4c3R4MGprdTNwbXdpeGRhMG5yYSJ9.m8yqoWgfGxHGyq6RapgngA";

const map = new mapboxgl.Map({
	container: "map",
	style: "mapbox://styles/taipei-tuic/cljs07tbh006e01ra3m1a475u",
	center: [121.541, 25.042], // starting position [lng, lat]
	zoom: 12,
});

const locations = [
	[[121.56719891052944, 25.036536501522235], 15.5, 67.5, 45],
	[[121.55676686461811, 25.038745980403505], 14.5, 67, 35],
	[[121.5228860863223, 25.068515771454074], 15.75, 60, 130],
	[[121.51013649269608, 25.055775323336594], 16, 60, 50],
	[[121.55180953513364, 25.12898719167495], 13.25, 60, 0],
];

function moveMap(location) {
	console.log("move");
	map.easeTo({
		center: location[0],
		zoom: location[1],
		duration: 4000,
		pitch: location[2],
		bearing: location[3],
	});
}

const buttons = document.getElementsByClassName("button");

for (let i = 0; i < 5; i++) {
	buttons[i].addEventListener("click", function () {
		moveMap(locations[i]);
	});
}
