class Landing{
    // property
    database={
        Milan:{username:'Milan',password:'milan123'},
        Manu:{username:'Manu',password:'manu123'},
        Mini:{username:'mini',password:'mini123'}
    }
    // to store data to local storage
    saveData(){
        if(this.database){
            localStorage.setItem("database",JSON.stringify(this.database))
        }
    }
    // to get data from local storage
    getData(){
        
           this.database= JSON.parse(localStorage.getItem("database"))
           // console.log(this.database);
        }

        register(){
            
            let  user=regUser.value
            let  pswd=regPswd.value
            this.getData()
             // console.log(user,pswd);
             if(user=='' || pswd==''){
                alert('please fill the form completely')
             }
             else{
                if(user in this.database){
                    alert("Account already exists")
                }
                else{
                    this.database[user]={username:user,password:pswd}
                    alert("user added successfully")
                    this.saveData()  // adding data

                    // navigate to login data
                    window.location='login.html'
                }
             }
        }

        // method to login a user

        login(){
            let user1=logUser.value
            let pswd1=logPswd.value
            console.log(user1,pswd1);
            this.getData()
            if(user1=='' || pswd1==''){
                alert('please fill the form completely')
            }
            else{
                if(user1 in  this.database){
                    if(this.database[user1].password==pswd1){
                        alert('Login Successful')
                        localStorage.setItem("user",user1)
                        // navigate to home
                        window.location='home.html'
                    }
                    else{
                        alert("invalid username or password")
                    }
                }
                else{
                    alert("Account doesnt exist")
                }
            }

        }
    
    
    }
    
// create object

const obj=new Landing()
//obj.saveData()
obj.getData()
