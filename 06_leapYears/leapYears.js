const leapYears = function(year) {
    if (year % 4 == 0) {
        if (year % 400 == 0 && year % 100 == 0) {
            return true
        } else if (year % 100 == 0) {
            return false
        }
        return true
    } else {
        return false
    }


//create a series of if checks to determine whether or not it is a leap year.
//year CAN be devided 4
//year can NOT be divided by 100!!!<---bait, check if it is divisible by 100 and then return false
//year CAN be devided by 400
};

// Do not edit below this line
module.exports = leapYears;
