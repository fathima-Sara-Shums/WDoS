document.addEventListener('alpine:init', () => {
    Alpine.store('wildlifesl', {
        is_editor_visible: false,
        heading:{
            title:"Places to visit:",

        },

        block:{
            title:"Horton Plains",
            image:"/WDoS/images/hortainplains.jpg",
            body:"The Horton Plains is a unique grassland ecosystem found in the southern part of Sri Lanka. It is one of the last remaining extensive wet grasslands in the world. Home to numerous species of animals and birds, including the endemic Slender Loris and Blue Magpie, this location is a must-visit for wildlife enthusiasts. ",
            map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.6739945880977!2d80.79975837404777!3d6.809451319776278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3882edb4b78ef%3A0xcebca89153777249!2sHorton%20Plains%20National%20Park!5e0!3m2!1sen!2slk!4v1705505655350!5m2!1sen!2slk",
        },
        blocktwo:{
            title:"Udawalawa",
            image:"/WDoS/images/udawalaweelephants.jpg",
            body:"This park is home to several hundred elephants and other rare plants and wildlife.",
            map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.370762013656!2d80.87374407404556!3d6.474634123731256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae408ff88887e79%3A0xaf12e79ffbd980d7!2sUdawalawe%20National%20Park!5e0!3m2!1sen!2slk!4v1705544017521!5m2!1sen!2slk",
        },
        blockthree:{
            title:"Maduru Oya",
            image:"/WDoS/images/croc.webp",
            body:"Maduru Oya National Park is one of the National Parks of Sri Lanka. It was designated as a National Park on 9th November 1983.",
            map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.370762013656!2d80.87374407404556!3d6.474634123731256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae408ff88887e79%3A0xaf12e79ffbd980d7!2sUdawalawe%20National%20Park!5e0!3m2!1sen!2slk!4v1705544017521!5m2!1sen!2slk",
        },
        table:{
            headerone:"Name",
            headertwo:"Fun Fact",
            headerthree:"Image",
            animal:"Leopard",
            funfact:"Leopards can climb trees.",
            image:"/WDoS/images/leopardone.jpeg",
            animaltwo:"Elephants",
            funfacttwo:"they are very big,usually.",
            imagetwo:"/WDoS/images/elephant.jpg",
            animalthree:"Mouse deer",
            funfactthree:"Mouse deers arent actually classified deers",
            imagethree:"/WDoS/images/mouse-deer.jpeg",

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
