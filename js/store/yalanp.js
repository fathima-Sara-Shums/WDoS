document.addEventListener('alpine:init', () => {
    Alpine.store('yalanp', {
        is_editor_visible: false,
        
        main:{
            title:"Yala National Park",
            body:"Yala (යාල/யாலா தேசிய பூங்கா) National Park is a mesmerizing haven for wildlife enthusiasts, situated in the southeastern region of Sri Lanka, bordering the Indian Ocean. Covering an expansive 979 square kilometers, Yala is the most visited and second-largest national park in the country.The park comprises five distinct blocks, with three open to the public. Notable among these are Palatupana (Block 1), Kumana National Park, also known as 'Yala East,' and Lunugamvehera National Park. Its strategic location, approximately 300 kilometers from Colombo, makes it easily accessible for nature lovers. Designated as a wildlife sanctuary in 1900, alongside Wilpattu, Yala has been a pioneer in wildlife conservation in Sri Lanka. Renowned for its incredible biodiversity, the park is a crucial habitat for Sri Lankan elephants, Sri Lankan leopards, and a plethora of aquatic bird species ,Explore the diverse landscapes within Yala National Park, from lush forests to arid plains, and witness the coexistence of a wide array of flora and fauna. The park's significance extends beyond its scenic beauty, as it plays a pivotal role in the conservation of endangered species and the preservation of Sri Lanka's rich natural heritage map:"
        },
        tips:{
            tip:"Book Safaris in Advance:",
            tiptwo:"Visit During the Dry Season:",
            tipthree:"Choose the Right Safari Duration:",
            tipfour:"Follow Park Regulations",
            tipfive:"Follow Park Regulations",
            tipsix:"Wear Appropriate Clothing:",
            tipseven:"Stay Hydrated and Carry Snacks",
            tipeight:"Pack Binoculars and a Camera",
            tipnine:"Arrive Early for Better Wildlife Sightings",
        },
        gallery:{
            topic:"",
            image:"",
            imagetwo:"",
            imagethree:"",
        },

        toggleEditor(block_id){
            this.is_editor_visible = block_id;
        },
        saveBlock(block_id){
 // send the data to the server

            this.toggleEditor(false);
        }
    });
});
