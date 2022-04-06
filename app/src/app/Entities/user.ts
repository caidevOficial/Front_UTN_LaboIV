import { isNull } from "@angular/compiler/src/output/output_ast";

export class User {
    username: string;
    password: string | undefined;
    status: boolean | undefined;
    age_1: number;
    age_2: number;
    sum_ages: number;
    mean_ages: number;

    /**
     * Builder of the class.
     */
    constructor() {
        this.username = '';
        this.password = '';
        this.status = false;
        this.age_1 = 0;
        this.age_2 = 0;
        this.sum_ages = 0;
        this.mean_ages = 0;
    }

    /**
     * Function used to simulate a login.
     */
    login(){
        let the_user = 'nobody'
        if(this.username !== '' && this.password !== ''){
            this.status = true;
            sessionStorage.setItem(this.username, JSON.stringify(this));
            the_user = `${this.username} ${this.password}`;
        }
        
        alert(`${the_user} has logged in`);
    }

    /**
     * Validates if the ages are numbers.
     * @returns true if the ages are valid, false otherwise.
     */
    private validate_ages(){
        if(isNaN(this.age_1) || isNaN(this.age_2)){
            alert('At least one field is not a number');
            return false;
        }
        return true;
    }

    /**
     * Sums the ages of the user.
     */
    private sum_user_ages(){
        if(typeof(+this.age_1) === 'number' && typeof(+this.age_2) === 'number'){
            this.sum_ages = +this.age_1 + +this.age_2;
        }
    }

    /**
     * Obtains the average of the ages of the user.
     */
    private mean_user_ages(){
        this.validate_ages()?this.mean_ages = this.sum_ages / 2: this.mean_ages = 0;
    }

    /**
     * Calculates the sum of ages and the average of ages.
     */
    calculate(){
        this.sum_user_ages();
        this.mean_user_ages();
    }
}
