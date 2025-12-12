module.exports = {
    name: "Monkstown Paving and Lanscaping",
    email: "help@codestitch.app",
    phoneForTel: "555-779-4407",
    phoneFormatted: "(555) 779-4407",
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
