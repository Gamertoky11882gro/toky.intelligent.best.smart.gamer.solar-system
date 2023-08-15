const planets = [
  { id: "mercury", radius: 10, distance: 40 },
  { id: "venus", radius: 18, distance: 70 },
  { id: "earth", radius: 20, distance: 100 },
  { id: "mars", radius: 16, distance: 140 },
  { id: "jupiter", radius: 50, distance: 200 },
  { id: "saturn", radius: 45, distance: 260 },
  { id: "uranus", radius: 40, distance: 320 },
  { id: "neptune", radius: 38, distance: 380 }
];

const sun = document.getElementById("sun");

planets.forEach((planet) => {
  const planetElement = document.getElementById(planet.id);
  planetElement.style.width = planet.radius * 2 + "px";
  planetElement.style.height = planet.radius * 2 + "px";
  planetElement.style.transform = `translateX(-50%) translateY(-50%) translateX(${planet.distance}px)`;
});

let angle = 0;
function animatePlanets() {
  planets.forEach((planet) => {
    const planetElement = document.getElementById(planet.id);
    planetElement.style.transform = `translateX(-50%) translateY(-50%) translateX(${planet.distance}px) rotate(${angle}deg)`;
  });
  angle += 0.5;
  requestAnimationFrame(animatePlanets);
}

animatePlanets();
