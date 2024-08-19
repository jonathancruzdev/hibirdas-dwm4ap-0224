class UserManager {
    constructor( list ){
        this.list = list;
    }

    addUser( user ){
        this.list.push( user );
    }
    getUsers(){
        return this.list;
    }
    
    getUserById( id ){
        const user =  this.list.find( item  => item.id == id );
        return user ? user : {};
    }
}

module.exports =  UserManager;