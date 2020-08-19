function pmatrix(row, column, symbol) {
    let array = [];
    if (symbol === '' || symbol === undefined) {
        for (let i = 0; i < row; i++) {
            array[i] = [];
            for (let j = 0; j < column; j++) {
                if (j < column - 1) {
                    array[i][j] = ` & `;
                }
                else {
                    array[i][j] = ` \\\\ \n`;     
                }
            }
            array[i] = array[i].join('');
        }
    let string = '\\begin{pmatrix} \n' + array.join('') + '\\end{pmatrix} \n';
    return string;
    }
    for (let i = 0; i < row; i++) {
        array[i] = [];
        for (let j = 0; j < column; j++) {
            if (j < column - 1) {
                array[i][j] = `${symbol}_{${i+1},${j+1}} & `;
            }
            else {
                array[i][j] = `${symbol}_{${i+1},${j+1}} \\\\ \n`;     
            }
        }
        array[i] = array[i].join('');
    }
    let string = '\\begin{pmatrix} \n' + array.join('') + '\\end{pmatrix} \n';
    return string;
}

// console.log(pmatrix(8, 5, 'A'));
