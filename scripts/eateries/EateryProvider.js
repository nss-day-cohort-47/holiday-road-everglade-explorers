export const getEateries = () => {
    return fetch("http://holidayroad.nss.team/eateries")
    .then(response => response.json())
    .then(function (data) {
        let eateryArray = [];
        data.forEach((item) => {
            if (item.state === "NC" || item.state === "TN" || item.state === "VA"|| item.state === "SC") {
                eateryArray.push(item);
            }
            })
            return eateryArray;
    });
}