class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${username}`);        
    }

    static createId(){
        return `123`
    }
}

const ritwik = new User("ritwik")
// console.log(ritwik.createId())

class Teacher extends User {
    constructor(username, email){
        super(username) 
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe();
