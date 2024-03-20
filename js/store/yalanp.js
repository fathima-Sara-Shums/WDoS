document.addEventListener('alpine:init', () => {
    Alpine.store('yalanp', {
        is_editor_visible: false,
        
        main:{
            title:"",
            body:"",
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
