document.addEventListener('alpine:init', () => {
    Alpine.store('wilpattunp', {
        is_editor_visible: false,


        main:{
            title:"Wilpattu National Park",
            body:"Nestled in the northwestern part of Sri Lanka, Wilpattu(විල්පත්තු/வில்பத்து) National Park stands as a testament to the country's rich biodiversity and pristine natural beauty. This expansive sanctuary, spanning over 1,317 square kilometers, is the largest national park in Sri Lanka, known for its untamed landscapes and diverse ecosystems.Wilpattu, derived from the Sinhalese words Willu (meaning natural lakes) and Pattu(meaning ten), refers to the numerous natural lakes scattered throughout the park. These water bodies play a vital role in sustaining the park's diverse flora and fauna, creating a unique environment that attracts wildlife enthusiasts and conservationists alike.Established in 1938, Wilpattu holds the distinction of being one of the oldest national parks in Sri Lanka. Its rich history and cultural significance add layers of intrigue to the lush wilderness it protects. The park's landscape is characterized by dense scrublands, open grassy plains, and pristine villus (natural lakes), creating a mosaic of habitats that harbor a wide array of wildlife",
            map:"",
        },
        tips:{
            tip:"",
            tiptwo:"",
            tipthree:"",
            tipfour:"",
            tipfive:"",
            tipsix:"",
            tipseven:"",
            tipeight:"",
            tipnine:"",
        },
        gallery:{
            topic:"",
            image:"/WDoS/images/wilpattu-monkey.jpg",
            imagetwo:"",
            imagethree:"",
        },

        toggleEditor(block_id){
            this.is_editor_visible = block_id;
        },
        saveBlock(block_id){
 // this is where you send the data to the server

            this.toggleEditor(false);
        }
    });
});
