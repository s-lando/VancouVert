function writeNewIncentives() {
    var incentivesRef = db.collection("incentives");
    incentivesRef.add({
        desc: "Residents purchasing/leasing new vehicles (that quality) are eligible up to $3000 off final, after-tax price of an electric vehicle",
        org: "CEVforBC",
        random: Math.floor(Math.random() * 1000),
        type: "electric",
        url: "https://www.cevforbc.ca/clean-energy-vehicle-program",
        image: "electric.png"
    });
    incentivesRef.add({
        desc: "Rebates for natural gas and electric energy-efficient upgrades",
        org: "BC Hydro",
        random: Math.floor(Math.random() * 1000),
        type: "energy",
        url: "https://www.bchydro.com/powersmart/residential/savings-and-rebates/current-rebates-buy-backs/home-renovation-rebates.html",
        image: "energy.jpg"
    });
    incentivesRef.add({
        desc: "Free upgrades for non-profit providers and Inidigenous communities",
        org: "BC Hydro",
        random: Math.floor(Math.random() * 1000),
        type: "energy",
        url: "https://www.bchydro.com/powersmart/residential/savings-and-rebates/savings-based-on-income/non-profit-aboriginal-housing-upgrades.html",
        image: "energy.jpg"
    }); 
    incentivesRef.add({
        desc: "Free Energy Savings Kit (includes fluorescent light bulbs, high efficiency showerhead, etc.)",
        org: "BC Hydro",
        random: Math.floor(Math.random() * 1000),
        type: "energy",
        url: "https://www.bchydro.com/powersmart/residential/savings-and-rebates/savings-based-on-income/free-energy-savings-kit.html",
        image: "energy.jpg"
    });
    incentivesRef.add({
        desc: "Various rebates are offered by cities/towns regarding home energy efficiency, heating, etc",
        org: "Clean BC",
        random: Math.floor(Math.random() * 1000),
        type: "home",
        url: "https://betterhomesbc.ca/all-incentives/page/4/",
        image: "home.jpg"
    });
    incentivesRef.add({
        desc: "Federal government rebate up to $5000 off purchase price of a new EV",
        org: "Government of Canada",
        random: Math.floor(Math.random() * 1000),
        type: "electric",
        url: "https://electricvehicles.bchydro.com/incentives/EV-incentives-in-BC",
        image: "electric.png"
    });
    incentivesRef.add({
        desc: "If you are residing in BC, eligible vehicles can be scrapped in exchange for an EV rebate, which you can use towards purchase of a new EV.",
        org: "SCRAP-IT",
        random: Math.floor(Math.random() * 1000),
        type: "electric",
        url: "https://scrapit.ca/",
        image: "electric.png"
    });
    incentivesRef.add({
        desc: "Waste Management BC offers residents green credit for residents who recycle properly",
        org: "Waste Management",
        random: Math.floor(Math.random() * 1000),
        type: "waste",
        url: "https://www.wm.com/ca/en/location/bc/vancouver",
        image: "waste.jpg"
    });
}
//writeNewIncentives();