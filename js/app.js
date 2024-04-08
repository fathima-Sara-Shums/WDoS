document.addEventListener('alpine:init', () => {
    Alpine.store('auth', {
        user : null,
        flag:false,
        //nameoflogger:"admin"    ,
        users : [
            {
                username : 'admin',
                password : 'admin',
                role : 'admin',
                email: 'admin@admin.com'
            },
            {
                username : 'user',
                password : 'user',
                role : 'site_user',
                email: 'user@user.com'
            }
        ],
        authenticate(username, password){

            let user = this.users.find(function(user){
                return user.username === username && user.password === password;
            });

            if(user){

                localStorage.setItem('user', JSON.stringify(user));

                this.user = user;
                /*this.flag = user.role === 'admin'; // Set flag to true if user is admin
                localStorage.setItem('flag',JSON.stringify(flag));

                */
                 return user;
            }

            else {return false;}
        },
        //authenticate_admin(username,password){

        //}
        logout(){
            localStorage.removeItem('user');
            this.user = null;
            location.href = 'index.html';
        },
        init(){
            let user = localStorage.getItem('user');
            

            if(user){
                this.user = JSON.parse(user);
            }
            
        },
        
        

    

      
      
    
         
        }); 
        Alpine.store('common', {
            imageSrc(src){    
                return 'http://127.0.0.1:5500' + src;
            }
        });
    
    
});
