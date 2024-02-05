function handleCheckLeapYear() {
    let year1 = +document.getElementById('year1').value;
    if ((year1 % 4 === 0 && year1 % 100 !== 0) || year1 % 400 === 0) {
        document.getElementById('result1').innerHTML = 'Đây là năm Nhuận';
    } else {
        document.getElementById('result1').innerHTML = 'Đây là năm không nhuận';
    }
}

function handleNgayTiepTheo() {
    let day2 = +document.getElementById('day2').value;
    let month2 = +document.getElementById('month2').value;
    let year2 = +document.getElementById('year2').value;
    let nextDay2;
    let nextMonth2;
    let nextYear2;
    if ((month2 === 1 || month2 === 3 || month2 === 5 || month2 === 7 || month2 === 8 || month2 === 10) && day2 < 31) {
        nextDay2 = day2 + 1;
        nextMonth2 = month2;
        nextYear2 = year2;

    } else if ((month2 === 4 || month2 === 6 || month2 === 9 || month2 === 11) && day2 < 30) {
        nextDay2 = day2 + 1;
        nextMonth2 = month2;
        nextYear2 = year2;

    } else if (month2 === 2) {
        if ((year2 % 4 === 0 && year2 % 100 !== 0) || year2 % 400 === 0) {
            if (day2 < 29) {
                nextDay2 = day2 + 1;
                nextMonth2 = month2;
                nextYear2 = year2;
            } else {
                nextDay2 = 1;
                nextMonth2 = month2 + 1;
                nextYear2 = year2;
            }

        } else if ((year2 % 4 !== 0 && year2 % 100 !== 0) || year2 % 400 !== 0) {
            if (day2 < 28) {
                nextDay2 = day2 + 1;
                nextMonth2 = month2;
                nextYear2 = year2;
            } else {
                nextDay2 = 1;
                nextMonth2 = month2 + 1;
                nextYear2 = year2;
            }

        } else {
            nextDay2 = 1;
            nextMonth2 = month2 + 1;
            nextYear2 = year2;
        }

    } else if (month2 === 12) {
        if (day2 < 31) {
            nextDay2 = day2 + 1;
            nextMonth2 = month2;
            nextYear2 = year2;
        } else {
            nextDay2 = 1;
            nextMonth2 = 1;
            nextYear2 = year2 + 1;
        }

    } else {
        nextDay2 = 1;
        nextMonth2 = month2 + 1;
        nextYear2 = year2 + 1;
    }

    document.getElementById('result2').innerHTML = 'Ngày' + ' ' + nextDay2 + 'Tháng ' + nextMonth2 + 'Năm ' + nextYear2;
}

function handleNgayTruocDo() {
    let day2 = +document.getElementById('day2').value;
    let month2 = +document.getElementById('month2').value;
    let year2 = +document.getElementById('year2').value;
    let preDay2;
    let preMonth2;
    let preYear2;
    switch (month2) {
        case 2: case 5: case 7: case 8: case 10: case 12:
            if (day2 > 1) {
                preDay2 = day2 - 1;
                preMonth2 = month2;
                preYear2 = year2;
            } else {
                preDay2 = 30;
                preMonth2 = month2 - 1;
                preYear2 = year2;
            }
            break;
        case 1:
            if (day2 > 1) {
                preDay2 = day2 - 1;
                preMonth2 = month2;
                preYear2 = year2;
            } else {
                preDay2 = 31;
                preMonth2 = 12;
                preYear2 = year2 - 1;
            }
            break;
        case 3:
            if ((year2 % 4 === 0 && year2 % 100 !== 0) || year2 % 400 === 0) {
                if (day2 > 1) {
                    preDay2 = day2 - 1;
                    preMonth2 = month2;
                    preYear2 = year2;
                } else {
                    preDay2 = 29;
                    preMonth2 = 2;
                    preYear2 = year2;
                }
            } else {
                if (day2 > 1) {
                    preDay2 = day2 - 1;
                } else {
                    preDay2 = 28;
                    preMonth2 = 2;
                    preYear2 = year2;
                }
            }
            break;
        case 4: case 6: case 9: case 11:
            if (day2 > 1) {
                preDay2 = day2 - 1;
                preMonth2 = month2;
                preYear2 = year2;
            } else {
                preDay2 = 31;
                preMonth2 = month2 - 1;
                preYear2 = year2;
            }
            break;
        default:
            break;
    }

    document.getElementById('result2').innerHTML = 'Ngày' + ' ' + preDay2 + 'Tháng ' + preMonth2 + 'Năm ' + preYear2;
}

function handleSpellNumber3() {
    let number3 = +document.getElementById('number3').value;
    let soHangTram = Math.floor(number3 / 100);
    let soHangChuc = Math.floor(number3 / 10 % 10);
    let soHangDonVi = number3 % 100 % 10;
    let hangTram = soHangTram + ' trăm ';
    let hangChuc;
    if (soHangChuc === 0 && soHangDonVi !== 0) {
        hangChuc = ' lẻ ';
    } else if (soHangChuc === 0 && soHangDonVi === 0) {
        hangChuc = ' ';
    } else if (soHangChuc === 1) {
        hangChuc = ' mười ';
    } else {
        hangChuc = soHangChuc + ' mươi ';
    }

    let hangDonVi;
    switch (soHangDonVi) {
        case 1:
            hangDonVi = ' mốt ';
            break;
        case 0:
            hangDonVi = ' ';
            break;
        case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9:
            hangDonVi = soHangDonVi;
            console.log(soHangDonVi);
            break;
        default:
            break;
    }

    document.getElementById('result3').innerHTML = hangTram + hangChuc + hangDonVi;
}

function handleDistance() {
    let toaDo1 = +document.getElementById('toaDo1').value;
    let toaDo2 = +document.getElementById('toaDo2').value;
    let toaDo3 = +document.getElementById('toaDo3').value;
    let toaDo4 = +document.getElementById('toaDo4').value;
    if (toaDo1 === toaDo2 && toaDo2 === toaDo3) {
        console.log(toaDo1,toaDo2,toaDo3);
        return document.getElementById('result4').innerHTML = 'Ba bạn đều cách xa trường';
    }
    
    let distance1 = toaDo4 - toaDo1;
    if (distance1 < 0) {
        distance1 = distance1 * (-1);
    }
    let distance2 = toaDo4 - toaDo2;
    if (distance2 < 0) distance2 = distance2 * (-1);
    let distance3 = toaDo4 - toaDo3;
    if (distance3 < 0) distance3 = distance3 * (-1);
    let farDistance = Math.max(distance1, distance2, distance3);
    if (farDistance === distance1) {
        document.getElementById('result4').innerHTML = 'Bạn Hùng ở xa trường nhất';
    }
    if (farDistance === distance2) {
        document.getElementById('result4').innerHTML = 'Bạn Huy ở xa trường nhất';
    }
    if (farDistance === distance3) {
        document.getElementById('result4').innerHTML = 'Bạn Bảo ở xa trường nhất';
    } else {
        if (farDistance === distance1 && farDistance === distance2) {
            document.getElementById('result4').innerHTML = 'Bạn Hùng và bạn Huy ở xa trường nhất';
        }
        if (farDistance === distance1 && farDistance === distance3) {
            document.getElementById('result4').innerHTML = 'Bạn Hùng và bạn Bảo ở xa trường nhất';
        }
        if (farDistance === distance2 && farDistance === distance3) {
            document.getElementById('result4').innerHTML = 'Bạn Huy và bạn Bảo ở xa trường nhất';
        }

    }

}
