import ymaps from "ymaps";

const mapContainer = document.getElementById("map-container");

try {
  const map = await ymaps.load();
  const adress = await ymaps.load();

  const myMap = new map.Map(mapContainer, {
    center: [55.76358, 37.626758],
    zoom: 14,
    controls: [],
  });

  const myAdress = new adress.Placemark(
    [55.769624, 37.638921],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "./images/icons/icons.svg#adress_point",
      iconImageOffset: [-7, -17],
    }
  );

  myMap.geoObjects.add(myAdress);
} catch (error) {
  console.error("Something went wrong", error);
}
