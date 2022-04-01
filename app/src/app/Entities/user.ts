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
        this.status = true;
        sessionStorage.setItem(this.login.toString(), JSON.stringify(this));
        let the_user = this.username + ' ' + this.password;
        
        alert(the_user + ' logged in');
    }

    /**
     * Sums the ages of the user.
     */
    sum_user_ages(){
        this.sum_ages = +this.age_1 + +this.age_2;
    }

    /**
     * Obtains the average of the ages of the user.
     */
    mean_user_ages(){
        this.mean_ages = +this.sum_ages / 2;
    }
}
