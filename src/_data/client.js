module.exports = {
    name: "Wicklow Gardening and Landscaping",
    email: "gardenlandscapewicklow@gmail.com",
    phoneForTel: "0858111125",
    phoneFormatted: "(085) 811 1125",
    address: {
        lineOne: "First Address Line",
        lineTwo: "Second Address Line",
        city: "Wicklow",
        state: "CO",
        zip: "D6W PV40",
        country: "IE",
        mapLink: "https://maps.app.goo.gl/TEdS5KoLC9ZcULuQ6",
    },
    socials: {
        facebook: "https://www.facebook.com/profile.php?id=61585363864929",
        instagram: "https://www.instagram.com/monkstownpavingandlandscaping/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://wicklowgardeningandlandscaping.netlify.app",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
