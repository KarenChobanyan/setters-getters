"use strict"

function MyDate() {
    return {
        year: 1970,
        month: 0,
        date: 1,
        hours: 0,
        minutes: 0,
        seconds: 0,
        miliseconds: 0,
        day: 0,
        reviseMonth() {
            while (this.month > 11) {
                this.month -= 11;
                this.year += 1
            }
        },
        reviseDate() {
            let montDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            while (this.date > montDays[this.month]) {
                this.date -= montDays[this.month]
                this.month += 1;
            }
        },
        reviseDay() {
            while (this.day > 6) {
                this.day -= 6
            }
        },
        reviseHours() {
            while (this.hours >= 24) {
                this.day += 1
                this.date += 1;
                this.hours -= 24
            }
        },
        reviseMinutes() {
            while (this.minutes >= 60) {
                this.hours += 1;
                this.minutes -= 60
            }
        },
        reviseSeconds() {
            while (this.seconds >= 60) {
                this.minutes += 1;
                this.seconds -= 60
            }
        },

        reviseMiliseconds() {
            while (this.miliseconds >= 1000) {
                this.seconds += 1;
                this.miliseconds -= 1000
            }
        },

        set thisMonth(value) {
            while (value > 11) {
                value -= 11,
                    this.year += 1
            }
            return this.month = value
        },

        set thisDate(value) {
            let montDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            while (value > montDays[this.month]) {
                value -= montDays[this.month],
                    this.month += 1
            }
            this.date = value
            this.day = value
        },
        set thisHours(value) {
            while (value >= 24) {
                value -= 24,
                    this.date += 1
                this.day += 1
            };
            this.reviseDate()
            this.reviseMonth()
            return this.hours = value
        },
        set thisMinutes(value) {
            while (value >= 60) {
                value -= 60;
                this.hours += 1
            }
            this.reviseHours();
            this.reviseDate();
            this.reviseDay();
            this.reviseMonth()
            return this.minutes = value
        },
        set thisSeconds(value) {
            while (value >= 60) {
                this.minutes += 1;
                value -= 60
            };
            this.reviseMinutes();
            this.reviseHours();
            this.reviseDate();
            this.reviseDay();
            this.reviseMonth();
            return this.seconds = value
        },

        set thisMiliseconds(value) {
            while (value >= 1000) {
                this.seconds += 1;
                value -= 1000
            };
            this.reviseSeconds();
            this.reviseMinutes();
            this.reviseHours();
            this.reviseDate();
            this.reviseDay();
            this.reviseMonth();
            return this.miliseconds = value
        },
        set thisFullDate(value) {
            let array = value.split(",")
            this.year = +array[0];
            this.month = +array[1];
            this.reviseMonth();
            this.date = +array[2];
            this.day = +array[2];
            if (!array[2]) {
                this.date = 1;
                this.day = 1;
                array[3] = 0;
                array[4] = 0
            };
            this.reviseDay()
            this.reviseDate();
            if (!array[3]) {
                array[3] = 0;
                array[4] = 0
            };
            this.hours = +array[3];
            this.reviseHours();
            if(!array[4]){
             array[4]= 0
            };
            this.minutes = +array[4];
            this.reviseMinutes();

        },
        get thisMiliseconds() {
            return this.miliseconds
        },
        get thisSeconds() {
            return this.seconds
        },
        get thisHours() {

            return this.hours
        },
        get thisDate() {

            return this.date
        },
        get thisMinutes() {
            return this.minutes
        },
        get thisMonth() {
            switch (this.month) {
                case 0:
                    this.month = "Jan.";
                    break;
                case 1:
                    this.month = "Feb";
                    break;
                case 2:
                    this.month = "March";
                    break;
                case 3:
                    this.month = "April";
                    break;
                case 4:
                    this.month = "May";
                    break;
                case 5:
                    this.month = "June";
                    break;
                case 6:
                    this.month = "July";
                    break;
                case 7:
                    this.month = "August";
                    break;
                case 8:
                    this.month = "September";
                    break;
                case 9:
                    this.month = "October";
                    break;
                case 10:
                    this.month = "November";
                    break;
                case 11:
                    this.month = "Dectember"
            }
            return this.month
        },


        get thisYear() {
            return this.year
        },
        get thisDay() {
            this.reviseDay();
            switch (this.day) {
                case 0:
                    this.day = "Monday";
                    break;
                case 1:
                    this.day = "Tuesday";
                    break;
                case 2:
                    this.day = "Wednesday";
                    break;
                case 3:
                    this.day = "Thursday";
                    break;
                case 4:
                    this.day = "Friday";
                    break;
                case 5:
                    this.day = "Suturday";
                    break;
                case 6:
                    this.day = "Sunday";
                    break;

            }return this.day
        },

        get thisFullDate() {
            return `${this.thisDay}  ${this.thisYear}  ${this.thisMonth} ${this.thisDate}  ${this.thisHours}:${this.thisMinutes}:${this.thisSeconds}  ${this.thisMiliseconds}ms `
        }

    }
};
let x = new MyDate();
x.thisMinutes = 60 * 24 * 59
x.thisFullDate = "2023,15,100"
console.log(x.thisFullDate);



