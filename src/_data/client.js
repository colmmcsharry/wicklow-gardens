module.exports = {
    name: "Wicklow Gardening and Landscaping",
    email: "wicklowgardeningandlandscaping@gmail.com",
    phoneForTel: "+353858111125",
    phoneFormatted: "+353 85 811 1125",
    address: {
        lineOne: "First Address Line",
        lineTwo: "Second Address Line",
        city: "Dublin",
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
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
