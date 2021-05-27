function writeNewIncentives() {
    var incentivesRef = db.collection("incentives");
    incentivesRef.add({
        desc: "$1050 rebate for Electric Bikes",
        org: "ScrapIT BC",
        random: Math.floor(Math.random() * 1000),
        type: "transportation",
        url: "https://scrapit.ca/otherincentivechoices-2-2/",
        image: "electric.png"
    });
    incentivesRef.add({
        desc: "PST Exemption for e-bike purchases.",
        org: "BC Government",
        random: Math.floor(Math.random() * 1000),
        type: "transportation",
        url: "https://www2.gov.bc.ca/assets/gov/taxes/sales-taxes/publications/pst-204-bicycles-tricycles.pdf?fbclid=IwAR2z15CnmoicWWlq63rWYvno3WHbP-sc_8IS_qbfkEVTAPHgFBrKuELJpaI",
        image: "electric.png"
    });
    incentivesRef.add({
        desc: "BC Transit ECOPASS for $880 that can be used for 11 months!",
        org: "ScrapIT BC",
        random: Math.floor(Math.random() * 1000),
        type: "transportation",
        url: "https://scrapit.ca/otherincentivechoices-2-2/",
        image: "electric.png"
    });
    incentivesRef.add({
        desc: "Car share Rebate with following organizations: Modo, Kootenay Carshare Co-op, Coast Car Co-op, Spark Car Share.",
        org: "Clean BC Go Electric",
        random: Math.floor(Math.random() * 1000),
        type: "transportation",
        url: "https://scrapit.ca/otherincentivechoices-2-2/",
        image: "electric.png"
    });
    incentivesRef.add({
        desc: "Workplaces can apply for EV rebate up to $2000 per charger, and $14000 per workplace.",
        org: "BC Hydro",
        random: Math.floor(Math.random() * 1000),
        type: "transportation",
        url: "https://electricvehicles.bchydro.com/incentives/charger-rebates/workplace",
        image: "electric.png"
    });
    incentivesRef.add({
        desc: "EV charger rebate for single-family homes: 50% of costs up to $350.",
        org: "BC Hydro",
        random: Math.floor(Math.random() * 1000),
        type: "transportation",
        url: "https://electricvehicles.bchydro.com/incentives/charger-rebates/home",
        image: "electric.png"
    });
    incentivesRef.add({
        desc: "Heat Pump rebate up to $3350 for switching from fossil fuel space to a heat pump.",
        org: "Clean BC",
        random: Math.floor(Math.random() * 1000),
        type: "home",
        url: "https://betterhomesbc.ca/rebates/central-system-air-source-heat-pump-rebate/",
        image: "home.jpg"
    });
    incentivesRef.add({
        desc: "$1000 rebate for electrical panel upgrades.",
        org: "Clean BC",
        random: Math.floor(Math.random() * 1000),
        type: "home",
        url: "https://betterhomesbc.ca/rebates/electric-service-upgrade-rebate/",
        image: "home.jpg"
    });
    incentivesRef.add({
        desc: "Up to $4300 rebate for installation of combined space and water heat pump system.",
        org: "Clean BC",
        random: Math.floor(Math.random() * 1000),
        type: "home",
        url: "https://betterhomesbc.ca/rebates/combination-space-and-water-heat-pump-rebate/",
        image: "home.jpg"
    });
    incentivesRef.add({
        desc: "Up to $100 per window and/or door that is replaced for better heat insulation.",
        org: "Clean BC",
        random: Math.floor(Math.random() * 1000),
        type: "home",
        url: "https://betterhomesbc.ca/rebates/window-and-door-replacement-rebates/",
        image: "home.jpg"
    });
    incentivesRef.add({
        desc: "If you have recently renovated your home, you might be eligible for GST/HST New Housing Rebate.",
        org: "Clean BC",
        random: Math.floor(Math.random() * 1000),
        type: "home",
        url: "https://betterhomesbc.ca/rebates/federal-provincial-gst-hst-new-housing-rebate/",
        image: "home.jpg"
    });
    incentivesRef.add({
        desc: "Support local food production to improve food security and decrease food waste.",
        org: "District of Saanich",
        random: Math.floor(Math.random() * 1000),
        type: "food",
        url: "https://www.saanich.ca/EN/main/community/agriculture-food-security.html",
        image: "food.jpg"
    });
    incentivesRef.add({
        desc: "You can also grow food in your own garden! Learn more by clicking the link.",
        org: "District of Saanich",
        random: Math.floor(Math.random() * 1000),
        type: "food",
        url: "https://www.saanich.ca/EN/main/community/agriculture-food-security/community-resources.html",
        image: "food.jpg"
    });
    incentivesRef.add({
        desc: "Community gardening is a great way to decrease food waste AND strengthening the community.",
        org: "District of Saanich",
        random: Math.floor(Math.random() * 1000),
        type: "food",
        url: "https://www.saanich.ca/EN/main/community/agriculture-food-security/community-gardens.html",
        image: "food.jpg"
    });
    /* incentivesRef.add({
        desc: "Rebates for natural gas and electric energy-efficient upgrades",
        org: "BC Hydro",
        random: Math.floor(Math.random() * 1000),
        type: "home",
        url: "https://www.bchydro.com/powersmart/residential/savings-and-rebates/current-rebates-buy-backs/home-renovation-rebates.html",
        image: "energy.jpg"
    });
    incentivesRef.add({
        desc: "Free upgrades for non-profit providers and Inidigenous communities",
        org: "BC Hydro",
        random: Math.floor(Math.random() * 1000),
        type: "home",
        url: "https://www.bchydro.com/powersmart/residential/savings-and-rebates/savings-based-on-income/non-profit-aboriginal-housing-upgrades.html",
        image: "energy.jpg"
    }); 
    incentivesRef.add({
        desc: "Free Energy Savings Kit (includes fluorescent light bulbs, high efficiency showerhead, etc.)",
        org: "BC Hydro",
        random: Math.floor(Math.random() * 1000),
        type: "home",
        url: "https://www.bchydro.com/powersmart/residential/savings-and-rebates/savings-based-on-income/free-energy-savings-kit.html",
        image: "home.jpg"
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
        type: "food",
        url: "https://www.wm.com/ca/en/location/bc/vancouver",
        image: "waste.jpg"
    });
    incentivesRef.add({
        desc: "Help maintain a Zero Waste & Circular Economy",
        org: "BC Government",
        random: Math.floor(Math.random() * 1000),
        type: "food",
        url: "https://www2.gov.bc.ca/gov/content/environment/waste-management/zero-waste",
        image: "waste.jpg"
    });
    incentivesRef.add({
        desc: "Every year in Canada, food wastes account for about $31 billion in value. This does not include the energy, water and other resources that were poured into growing the food.",
        org: "Love Food, Hate Waste Canada",
        random: Math.floor(Math.random() * 1000),
        type: "food",
        url: "https://lovefoodhatewaste.ca/",
        image: "food.jpg"
    });
    incentivesRef.add({
        desc: "About a third of all food produced and distributed in Canada NEVER gets eaten.",
        org: "National Zero Waste Council",
        random: Math.floor(Math.random() * 1000),
        type: "food",
        url: "http://www.nzwc.ca/#",
        image: "food.jpg"
    }); */
}
//writeNewIncentives();

