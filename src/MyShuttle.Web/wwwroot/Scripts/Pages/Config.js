var MyShuttle = MyShuttle || {};

MyShuttle.Config = function(){
    var bingMapsKey = 'AowwaZssHfABfk67j7II30OYz2E4PF2qYsX3kSDLjokOyDLFR3HBozSlZY9gNb6e',
        infobBoxCompanyAddress = 'Spring Studios, 50 Varick St',
        companyLocation = {
            Latitude: 40.72109533886229,
            Longitude: -74.006596745813
        },
        smallScreenMinWidth = 768;

    return {
        bingMapsKey: bingMapsKey,
        infoBoxCompanyAddress: infobBoxCompanyAddress,
        companyLocation: companyLocation,
        smallScreenMinWidth: smallScreenMinWidth
    }
}();