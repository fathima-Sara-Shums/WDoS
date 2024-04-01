document.addEventListener('alpine:init', () => {
    Alpine.store('home', {
        is_editor_visible: false,
        block_one : {
            
            title: "Let the adventure begin",
            body: "Unleash your inner explorer! Witness majestic Asian elephants roam verdant plains, leopards stalk through emerald jungles, and playful dolphins frolic in turquoise waters. From graceful spotted deer to soaring eagles, every turn reveals a new wonder.Come,experience the wild of Sri Lanka!",
            image: './WDoS/images/bird.jpg',
           
        },
        summary_view:{
            imageone:"/WDoS/images/yala-suduwelimulla.webp",
            titleone:"Leopards",
            sloganone:"Sri Lanka's stealthy royalty: Spot the elusive leopard, king of the island's jungles.",
            imagetwo:"/WDoS/images/wilpattu-national-park.jpeg",
            titletwo:"wilpattu",
            slogantwo:"Trade cityscapes for safariscapes in Wilpattu National Park.",
            imagethree:"WDoS/images/yala-animal.jpg",
            titlethree:"Yala",
            sloganthree:"Dive into the heart of Sri Lanka's wildlife wonderland - Yala",
            


        },
        block_two:{
            title:" Department of Wildlife Sri Lanka",
            subtitle:"Why trust us",
            body:"The Department of Wildlife Conservation has been entrusted with the responsibility of preserving eco system endowed with various plants and animal species which has inherited the country with enormous bio-diversity. The main function of the Department of Wildlife Conservation established in 1949 is the conservation of wildlife resources in Sri Lanka.",
            image:"WDoS/images/srilankan-elephant.jpeg",
            link:"/wildlife-department.html",

        },
        block_three:{
            title:"Yala",
            subtitle:" Explore",
            body:"Without question Sri Lanka's most popular national park, Yala is situated about 260 km southeast of Colombo. Officially designated as a national park on 1st March 1938, Yala spans an impressive 978.807 km2. It's located along Sri Lanka's southern coast, overlapping Uva and the Southern Province.",
            image:"/WDoS/images/peacock.jpeg",
            link:"/yala.html",

        },
        block_four:{
            title:"Wilpattu",
            subtitle:"Pay a visit",
            body:"wilpattu has a lot of animals",
            image:"/WDoS/images/wilpattus.jpg",
            link:"/wilpattu.html",

        },
        block_five:{
           point_one:"30",
           point_two:"210",
           point_three:"20,000+",

        },

        

        toggleEditor(block_id){
            this.is_editor_visible = block_id;
        },
        saveBlock(block_id){
 // send the data to the server

            this.toggleEditor(false);
        },
    });
});

