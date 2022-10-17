/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let thousands = parseInt(num / 1000)
    let hundreds = parseInt(num % 1000 / 100)
    let tens = parseInt(num % 100 / 10)
    let ones = num % 10

    let res = ''

    while (thousands > 0) {
        res += 'M'
        thousands--
    }

    while (hundreds > 0) {
        if (hundreds === 9) {
            res += 'CM'
            break
        } else if (hundreds >= 5) {
            res += 'D'
            hundreds -= 5
            continue
        }else if (hundreds === 4) {
            res += 'CD'
            break
        } else {
            res += 'C'
        }

        hundreds--
    }

    while (tens > 0) {
        if (tens === 9) {
            res += 'XC'
            break
        } else if (tens >= 5) {
            res += 'L'
            tens -= 5
            continue
        }else if (tens === 4) {
            res += 'XL'
            break
        } else {
            res += 'X'
        }

        tens--
    }
    
    while (ones > 0) {
        if (ones === 9) {
            res += 'IX'
            break
        } else if (ones >= 5) {
            res += 'V'
            ones -= 5
            continue
        } else if (ones === 4) {
            res += 'IV'
            break
        } else {
            res += 'I'
        }

        ones--
    }

    return res

};