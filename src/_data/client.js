module.exports = {
    name: "Wicklow Gardening and Landscaping",
    email: "gardenlandscapewicklow@gmail.com",
    phoneForTel: "0852354437",
    phoneFormatted: "(085) 235 4437",
    landlineForTel: "016856137",
    landlineFormatted: "(01) 685 6137",
    address: {
        lineOne: "Dublin 16",
        lineTwo: "",
        city: "Dublin",
        state: "Dublin",
        zip: "D16",
        country: "IE",
        mapLink: "",
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
