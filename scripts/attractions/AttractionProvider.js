export let attractionArray = [];

export const getAttractions = () => {
    return fetch("http://holidayroad.nss.team/bizarreries")
    .then(response => response.json())
    .then(parsedResponse => { 
        parsedResponse.forEach((item) => {
            if (item.state === "NC" || item.state === "TN" || item.state === "VA"|| item.state === "SC") {
                attractionArray.push(item);
            }
            })
            return attractionArray;
    });
    }

