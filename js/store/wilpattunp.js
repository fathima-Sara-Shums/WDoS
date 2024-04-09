document.addEventListener('alpine:init', () => {
    Alpine.store('wilpattunp', {
        is_editor_visible: false,


        main:{
            title:"Wilpattu National Park",
            body:"Nestled in the northwestern part of Sri Lanka, Wilpattu(විල්පත්තු/வில்பத்து) National Park stands as a testament to the country's rich biodiversity and pristine natural beauty. This expansive sanctuary, spanning over 1,317 square kilometers, is the largest national park in Sri Lanka, known for its untamed landscapes and diverse ecosystems.Wilpattu, derived from the Sinhalese words Willu (meaning natural lakes) and Pattu(meaning ten), refers to the numerous natural lakes scattered throughout the park. These water bodies play a vital role in sustaining the park's diverse flora and fauna, creating a unique environment that attracts wildlife enthusiasts and conservationists alike.Established in 1938, Wilpattu holds the distinction of being one of the oldest national parks in Sri Lanka. Its rich history and cultural significance add layers of intrigue to the lush wilderness it protects. The park's landscape is characterized by dense scrublands, open grassy plains, and pristine villus (natural lakes), creating a mosaic of habitats that harbor a wide array of wildlife",
            map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d505152.31178254884!2d79.7070678901881!3d8.450421309126373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afdac7787e4bc27%3A0xcdd9a0715dad187c!2sWilpattu%20National%20Park!5e0!3m2!1sen!2slk!4v1705476379038!5m2!1sen!2slk",
        },
        gallery:{
            topic:"Animals there:",
            image:"/WDoS/images/wilpattu-monkey.jpg",
            imagetwo:"",
            imagethree:"",

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
