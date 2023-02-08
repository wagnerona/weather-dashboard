# Week 8 challenge: Server-Side APIs: Weather Dashboard

Server APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

## Deployed site

https://wagnerona.github.io/weather-dashboard/

## Source code

https://github.com/wagnerona/weather-dashboard

## User Story

```text
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

Create a weather dashboard with form inputs.

- When a user searches for a city they are presented with current and future conditions for that city and that city is added to the search history
- When a user views the current weather conditions for that city they are presented with:
  - The city name
  - The date
  - An icon representation of weather conditions
  - The temperature
  - The humidity
  - The wind speed
- When a user view future weather conditions for that city they are presented with a 5-day forecast that displays:
  - The date
  - An icon representation of weather conditions
  - The temperature
  - The humidity
- When a user click on a city in the search history they are again presented with current and future conditions for that city

## Mockup

<img src = "assets/Images/Usage.png">

## Usage

1.  Type a city in the search bar and click search or press enter
2. Current weather is displayed and a 5 day forecast as well
3. Check previously searched places or clear the history with the section on the left

## Bugs and improvements
 1. Icons that show the weather type change from day and night, for some reason the loop is not targeting the day ones or due to the i starting point it might switch from day to day 

 2. Weather is not displayed as soon as page is reloaded, this might have to be because im not running the display function as soon as the page loads up


## Important notes

The base URL for API call needs Latitude and Longitude, in order to convert a city name to geo coordinates a Geocoding API would have been needed. This would need passing this into a function and getting back the coordinates from the city name. In order to make my code more efficient I just used the built-in geoCoder and im making a API request by city name instead.

<img src = "assets/Images/built-in-geo-coder.png">

## License

MIT License

Copyright (c) 2023 wagnerona

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

_The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software._

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
