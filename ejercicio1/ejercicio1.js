/**
 * 1: Make a program which with 2 numbers and tell us 
 * which is the largest, the smallest or if they are equal. 
 */

function is_larger_smaller_equal(number_1, number_2) {
    let message = ''
    switch(true) {
        case (number_1 > number_2): 
            message = 'The first number is larger than the second number'
            break;
        case (number_1 < number_2): 
            message = 'The first number smaller than the second number'
            break;
        case (number_1 == number_2): 
            message = 'Both numbers are equal'
            break;
        default: 
            message = 'Insert validate values'
    }
    
    return message

}

function main() {
    const number_1 = document.getElementById('one').value
    const number_2 = document.getElementById('two').value

    alert(is_larger_smaller_equal(number_1,number_2))
}



