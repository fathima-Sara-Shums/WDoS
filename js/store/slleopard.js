document.addEventListener('alpine:init', () => {
    Alpine.store('slleopard', {
        is_editor_visible: false,
        details:{
            heading:"Sri Lankan Leopard",
            title:"WHERE LEOPARDS ARE FOUND?",
            futher:"The Sri Lankan Leopard is found in the following venues:",
            locationone:"Yala National Park",
            locationtwo:"Wilpattu National Park",
            locationthree:"Horton Plains National Park",

        },

        threat_one:{
            title:"Threat 1: Habitat Loss",
            body:"Habitat loss is a significant threat to the Sri Lankan Leopard. This occurs due to various reasons, including deforestation, human settlement, and infrastructure development.",
            more:"To address this issue, several conservation initiatives are in place. One such institution is the Sri Lanka Wildlife Conservation Society",
            image:"./WDoS/images/habitatloss.jpg",
            link:"https://www.slwcs.org/",
        },
        threat_two:{
            title:"Threat 2: Poaching",
            body:"Poaching is another severe threat to the Sri Lankan Leopard. The animal is hunted for its fur, claws, and other body parts, which are highly valued in the illegal wildlife trade.",
            image:"./WDoS/images/poached.jpg",
            more:"To combat this threat, organizations like Leopcon srilanka are working tirelessly to protect the Sri Lankan Leopard and its habitat.",
            link:"https://www.leopocon.org/",
        },







        toggleEditor(block_id){
            this.is_editor_visible = block_id;
        },
        saveBlock(block_id){
 //  send the data to the server

            this.toggleEditor(false);
        }
    });
});

