class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.arr = [];
        this.length = max;
        this.min = min;
        
        for (min; min <= max; min++) {
           this.arr.push(min);
        }
    }

    guess() {
        this.mid = Math.round((this.length + this.min) / 2);
        return this.arr[this.mid];
    }

    lower() {
        this.length = this.mid;
    }

    greater() {
        this.min = this.mid;
    }
}

module.exports = GuessingGame;
