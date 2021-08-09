[![wakatime](https://wakatime.com/badge/github/raunak96/airbnb-clone.svg)](https://wakatime.com/badge/github/raunak96/airbnb-clone)
# Airbnb Clone with NextJS + Map (with react-map-gl - Mapbox) + Date Picker + Tailwind CSS + Contentful CMS

![App Demo](/assets/app-demo.png)
### [View Demo](https://rawn-airbnb.vercel.app/).

### Selecting Date Range in Calender
- For selecting a range of dates, we use [react-date-range](https://github.com/hypeserver/react-date-range) pkg.

### Displaying Coordinates of a number of places together in Map
- For displaying map, we use [react-map-gl](https://github.com/visgl/react-map-gl) pkg which is a react friendly API wrapper around **MapboxGL JS**.
- Since, this Map component, can take in only 1 lat and lng but we had an array of lat and lng, to solve this problem, we use [geolib](https://github.com/manuelbieh/geolib) pkg's `getCenter` function, which takes an array of lat and lng and returns a single lat and lng representing the center of the given array of lat and lng.
- Finally we pass, this centered coordinate, which ensures our map is centered around all the coordinates.
