document.addEventListener('alpine:init', () => {
    Alpine.store('wildlifesl', {
        is_editor_visible: false,

        block:{
            title:"",
            body:"",
            map:"",
        },
        blocktwo:{
            title:"",
            body:"",
            map:"",
        },
        blockthree:{
            title:"",
            body:"",
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
