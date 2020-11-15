const question = document.querySelector('.question');
const result = document.querySelector('.result');
const table = document.querySelector('.table');

function convertToRoman(num) {

    question.innerText = `Unet broj: ${num}`;

    let romanToNum = {
        M̅: 1000000,
        D̅: 500000,
        C̅: 100000,
        L̅: 50000,
        X̅: 10000,
        V̅: 5000,
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    var count = '';

    for (let key in romanToNum) {
        // console.log(key);
        while (num >= romanToNum[key]) {
            count += key;
            //         console.log(count);
            //         console.log(`num is decreased to :`, num);
            num -= romanToNum[key]

        }
    }


    result.innerText = `Rimski način pisanja broja je: 
    ${count} `;
    table.innerHTML = `<br>Roman number table: <br>
    M̅: 1,000,000,<br>
    D̅: 500,000,<br>
    C̅: 100,000,<br>
    L̅: 50,000,<br>
    X̅: 10000,<br>
    V̅: 5000,<br>
    M: 1000,<br>
                CM: 900,<br>
                    D: 500,<br>
                        CD: 400,<br>
                            C: 100,<br>
                                XC: 90,<br>
                                    L: 50,<br>
                                        XL: 40,<br>
                                            X: 10,<br>
                                                IX: 9,<br>
                                                    V: 5,<br>
                                                        IV: 4,<br>
                                                            I: 1`;

    return count;
}

convertToRoman(prompt('Unesite broj koji zelite da se prikaze kao Rimski, maksimalno 8 brojeva!'));
