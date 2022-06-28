import { throwIfEmpty } from "rxjs";
import { IUser } from "../interfaces/iuser";

/**
 * Class user for Login.
 */
export class User implements IUser {
    
    $key: string;
    username: string;
    password: string;
    constructor() { 
        this.username = '';
        this.password = '';
        this.$key = '';
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
     * Checks if the username & password match with an object in the localStorage
     * @param users List of users in the localStorage to be checked
     * @returns True if the actual user matches with an object in the localStorage, false otherwise
     */
    validate_user = (users: any) : boolean => {
        let found = false;
        console.log(`Actual User in Login: ${this.getUsername} - ${this.getPassword}`);
        users.forEach((the_user: any)  => {
            console.log(`User in LS: ${the_user.username} - ${the_user.password}`);
        });
        
        if(users != null) {
            users.forEach((the_user: any)  => {
                if (the_user.username == this.getUsername && 
                    the_user.password == this.getPassword) {
                    found = true;
                    return
                }
            });
        }
        
        return found;
    }

    /**
     * Method in charge of login
     * @returns True in case that is a valid user, false otherwise
     */
    login = (): boolean =>{
        let message :string;
        let local_users = JSON.parse(localStorage.getItem('users') || '[]');
        if(this.validate_user(local_users)){
            message = `Hi [${this.getUsername}]! we will redirect to Home`;
            alert(`${message}`);
            return true;
        }
        return false;
    }

    /**
     * Checks if the actual username exist in the database
     * @param users Array with all the users to be compared
     * @returns True if the username exist in the database, false otherwise
     */
    check_username = (users: any) : boolean => {
        let found = false;
        users.forEach((the_user: any)  => {
            if (the_user.username == this.getUsername) {
                found = true;
                return
            }
        });
        return found;
    }

    /**
     * Method in charge of create account into the localStorage.
     * @returns True if the user is created, false otherwise
     */
    create_account = (users: any): boolean => {
        if(users != null && !this.check_username(users)) {
            users.push(this);
            localStorage.setItem('users', JSON.stringify(users));
            return true;
        }
        return false;
    }
}
