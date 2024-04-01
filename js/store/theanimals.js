document.addEventListener('alpine:init', () => {
    Alpine.store('theanimals', {
        is_editor_visible: false,

        main:{
            title:"Sri Lankan Animals",
            body:"Sri Lanka, the teardrop-shaped island nestled in the Indian Ocean, boasts a remarkable biodiversity. From majestic mammals to colorful birds and elusive reptiles, its indigenous fauna is a source of endless wonder. Here's a peek into some of the gems that grace this land:",
        },
        subbody:{
            subtitle:"EXPLORE THE TWO MOST POPULAR NATIONAL PARKS:",
            linkone:"yala.html",
            linktwo:"wilpattu.html",

        },
        gallery:{
            imageone:"WDoS/images/panther.jpeg",
            imagetwo:"WDoS/images/centralhighlads.jpg",
            imagethree:"WDoS/images/bluewhale.webp",
            imagefour:"WDoS/images/leopardone.jpeg",
            imagefive:"WDoS/images/hortain.jpeg",
            imagesix:"WDoS/images/wilpattu-monkey.jpg",
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

