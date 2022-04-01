export class MySum {
    first_number: number;
    second_number: number;
    result: number;

    /**
     *
     */
    constructor() {
        this.first_number = 0;
        this.second_number = 0;
        this.result = 0;
    }

    mySum() {
        if (this.first_number && this.second_number) {
            // u should cast the numeric values with a '+' operator
            this.result = +this.first_number + +this.second_number;
        } else {
            this.result = 0;
        }
    }
}
