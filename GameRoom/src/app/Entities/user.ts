/**
 * Class user for Login.
 */
export class User {

    username: string;
    password: string;

    constructor() { 
        this.username = '';
        this.password = '';
    }

    /**
     * Sets the username only if it is not empty
     */
    set setUsername(username: string) {
        this.username = username;
    }

    /**
     * Gets the username
     */
    get getUsername(): string {
        return this.username;
    }

    /**
     * Sets the password only if it is not empty
     */
    set setPassword(password: string) {
        this.password = password;
    }

    /**
     * Gets the password
     */
    get getPassword(): string {
        return this.password;
    }

    /**
     * Only validates if the user exist in the database
     * @returns True if the user exist in the database, false otherwise
     */
    validate_user = () : boolean => {
        let found = false;
        console.log(`Actual User in Login: ${this.username} - ${this.password}`);
        let local_users = JSON.parse(localStorage.getItem('users') || '[]');
        local_users.forEach((the_user: any)  => {
            console.log(`User in LS: ${the_user.username} - ${the_user.password}`);
        });
        
        if(local_users != null) {
            local_users.forEach((the_user: any)  => {
                if (the_user.username == this.username && 
                    the_user.password == this.password) {
                    //console.log('Entra a la validacion');
                    found = true;
                    return
                }
                //console.log('nada coincide en el foreach');
            });
        }
        //console.log('No hay usuarios en LS');
        return found;
    }

    /**
     * Method in charge of login
     * @returns True in case that is a valid user, false otherwise
     */
    login = (): boolean =>{
        let the_user = 'nobody'
        let message :string;
        if(this.validate_user()){
            the_user = `[${this.getUsername} | ${this.getPassword}]`;
            message = `Hi ${the_user}! we will redirect to Home`;
            alert(`${message}`);
            return true;
        }
        return false;
    }

    /**
     * Method in charge of create account into the localStorage.
     * @returns True if the user is created, false otherwise
     */
    create_account = (): boolean => {
        let local_users = JSON.parse(localStorage.getItem('users') || '[]');
        if(local_users != null) {
            local_users.push(this);
            localStorage.setItem('users', JSON.stringify(local_users));
            return true;
        }
        return false;
    }
}
