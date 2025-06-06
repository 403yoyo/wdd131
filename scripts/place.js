document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('currentyear');
  const modifiedSpan = document.getElementById('lastmodified');
  const today = new Date();
  yearSpan.textContent = today.getFullYear();
  modifiedSpan.textContent = document.lastModified;


  const temperature = 8;
  const windSpeed = 5;

  function calculateWindChill(temp, speed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1) + " °C";
  }

  const windChillSpan = document.getElementById('windchill');
  if (temperature <= 10 && windSpeed > 4.8) {
    windChillSpan.textContent = calculateWindChill(temperature, windSpeed);
  } else {
    windChillSpan.textContent = "N/A";
  }
});
