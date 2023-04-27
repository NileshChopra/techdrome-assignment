const BASE_URL = 'https://api.spaceXdata.com/v3/launches'

const getSpacexData = async (searchParams) => {
    const url = new URL(BASE_URL);
    url.search = new URLSearchParams({ ...searchParams });
    const data = await fetch(url).then((res) => res.json());
    return data;
};
const formatCurrentData = (data) => {
    const finalData = [];
    data.forEach((currObj) => {
        const {
            mission_name,
            flight_number,
            mission_id,
            launch_year,
            launch_success,
            links,
            rocket,
        } = currObj;
        finalData.push({ mission_name, flight_number, mission_id, launch_year, launch_success, mission_patch: links.mission_patch, land_success: rocket.first_stage.cores.land_success });
    })
    return finalData;
};
const formattedSpacexData = async (searchParams) => {
    const formattedData = await getSpacexData({ limit: 100, land_success: true, ...searchParams }).then(formatCurrentData);
    return formattedData;
}
export { getSpacexData, formattedSpacexData, formatCurrentData };