import { isNull } from "@angular/compiler/src/output/output_ast";

export class User {
    username: string | undefined;
    password: string | undefined;
    status: boolean | undefined;
    age_1: Number;
    age_2: Number;
    sum_ages: Number;
    mean_ages: Number;

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
            sessionStorage.setItem(this.login.toString(), JSON.stringify(this));
            the_user = this.username + ' ' + this.password;
        }
        
        alert(the_user + ' has logged in');
    }

    /**
     * Sums the ages of the user.
     */
    private sum_user_ages(){
        this.sum_ages = +this.age_1 + +this.age_2;
    }

    /**
     * Obtains the average of the ages of the user.
     */
    private mean_user_ages(){
        this.mean_ages = +this.sum_ages / 2;
    }

    /**
     * Calculates the sum of ages and the average of ages.
     */
    calculate(){
        this.sum_user_ages();
        this.mean_user_ages();
    }
}
