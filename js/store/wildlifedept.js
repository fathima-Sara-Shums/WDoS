document.addEventListener('alpine:init', () => {
    Alpine.store('wildlifedept', {
        is_editor_visible: false,


        block:{
            title:"About the Department",
            body:"The Department of Wildlife Conservation is dedicated to preserving and protecting the diverse wildlife of our region. Through conservation efforts and sustainable practices, we aim to maintain the delicate balance of ecosystems and ensure the survival of endangered species.",
        },
        gallery:{
            heading:"Protected Areas Gallery",
            imageone:"/WDoS/images/udawalawe.jpeg",
            titleone:"Udawalawe National Park",
            infoone:"This is a popular tourist destination known for its large herds of elephants and its stunning landscapes, including grasslands, forests, and wetlands.",
            imagetwo:"/WDoS/images/minneriya.jpeg",
            titletwo:"Minneriya National Park ",
            infotwo:"This is a popular wildlife destination known for its large herds of elephants, which gather in the park's grasslands during the dry season.",
            imagethree:"/WDoS/images/sri-lanka-horton-plains.webp",
            titlethree:"Horton Plains National Park",
            infothree:"This is a beautiful national park located in the central highlands of Sri Lanka, known for its stunning landscapes, waterfalls, and diverse wildlife, including elephants, leopards, and sambar deer.",
        },
        map:{
            title:"Location",
            link:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1014239.6600704585!2d79.29467374687499!3d6.785224200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3bdf9a5a54941%3A0xc4a5f756de2bc6f5!2sDepartment%20of%20Wildlife%20Conservation%20(Peak%20Wildness%20Range%20Office)!5e0!3m2!1sen!2slk!4v1705405738841!5m2!1sen!2slk",
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
