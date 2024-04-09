document.addEventListener('alpine:init', () => {
    Alpine.store('yalanp', {
        is_editor_visible: false,
        
        main:{
            title:"Yala National Park",
            body:"Yala (යාල/யாலா தேசிய பூங்கா) National Park is a mesmerizing haven for wildlife enthusiasts, situated in the southeastern region of Sri Lanka, bordering the Indian Ocean. Covering an expansive 979 square kilometers, Yala is the most visited and second-largest national park in the country.The park comprises five distinct blocks, with three open to the public. Notable among these are Palatupana (Block 1), Kumana National Park, also known as 'Yala East,' and Lunugamvehera National Park. Its strategic location, approximately 300 kilometers from Colombo, makes it easily accessible for nature lovers. Designated as a wildlife sanctuary in 1900, alongside Wilpattu, Yala has been a pioneer in wildlife conservation in Sri Lanka. Renowned for its incredible biodiversity, the park is a crucial habitat for Sri Lankan elephants, Sri Lankan leopards, and a plethora of aquatic bird species ,Explore the diverse landscapes within Yala National Park, from lush forests to arid plains, and witness the coexistence of a wide array of flora and fauna. The park's significance extends beyond its scenic beauty, as it plays a pivotal role in the conservation of endangered species and the preservation of Sri Lanka's rich natural heritage map:",
            map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2390598342618!2d81.4235964740457!3d6.491384923537665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae683b969aec5c7%3A0x7e3aa2da875d927e!2sYala%20National%20Park%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1705477185395!5m2!1sen!2slk",
        },
       
        gallery:{
            topic:"",
            image:"/WDoS/images/yala-deer.jpeg",
            imagetwo:"",
            
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
