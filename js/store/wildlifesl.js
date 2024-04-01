document.addEventListener('alpine:init', () => {
    Alpine.store('wildlifesl', {
        is_editor_visible: false,

        block:{
            title:"Horton Plains",
            body:"The Horton Plains is a unique grassland ecosystem found in the southern part of Sri Lanka. It is one of the last remaining extensive wet grasslands in the world. Home to numerous species of animals and birds, including the endemic Slender Loris and Blue Magpie, this location is a must-visit for wildlife enthusiasts. ",
            map:"",
        },
        blocktwo:{
            title:"Udawalawa",
            body:"This park is home to several hundred elephants and other rare plants and wildlife.",
            map:"",
        },
        blockthree:{
            title:"Maduru Oya",
            body:"Maduru Oya National Park is one of the National Parks of Sri Lanka. It was designated as a National Park on 9th November 1983.",
            map:"",
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
