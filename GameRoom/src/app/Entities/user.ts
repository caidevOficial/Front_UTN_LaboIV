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
        if(username != '') {
            this.username = username;
        }
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
        if(password != '') {
            this.password = password;
        }
    }

    /**
     * Gets the password
     */
    get getPassword(): string {
        return this.password;
    }

    /**
     * Only validates if the both fields are not empty
     * @returns True if the fields are not empty, false otherwise
     */
    validate_user = () : boolean => {
        return (this.getUsername != '' && this.getPassword != '');
    }

    /**
     * Method in charge of login
     * @returns True in case that is a valid user, false otherwise
     */
    login = (): boolean =>{
        let the_user = 'nobody'
        let status = false;
        let message :string = 'You should not pass!, write a valid user';
        if(this.validate_user()){
            sessionStorage.setItem(this.username, JSON.stringify(this));
            the_user = `${this.getUsername} ${this.getPassword}`;
            status = true;
            message = `Hi ${the_user}! we will redirect to Home`;
            alert(`Username: ${this.getUsername}\nPassword: ${this.getPassword}`);
      
        }
        
        alert(message);
        return status;
    }
}
