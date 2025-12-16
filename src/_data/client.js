module.exports = {
    name: "Monkstown Paving and Lanscaping",
    email: "monkstownpavingandlandscaping@gmail.com",
    phoneForTel: "44-7851-8894-988",
    phoneFormatted: "(+44) 7851-8894-988",
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
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
