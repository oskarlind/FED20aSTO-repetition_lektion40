export const fetchSMHI = (stationId) => {
    return fetch("https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/1/station/"+stationId+"/period/latest-hour/data.json")
    .then((res) => res.json())
}