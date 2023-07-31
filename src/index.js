module.exports = function toReadable (number) {
	let res = '';
	if (number === 0) {
		return 'zero';
	}
	if (number > 99 ) {
		switch (Number.parseInt(number.toString()[0])) {
			case 1:
				res += 'one hundred ';
				break;
			case 2:
				res += 'two hundred ';
				break;
			case 3:
				res += 'three hundred ';
				break;
			case 4:
				res += 'four hundred ';
				break;
			case 5:
				res += 'five hundred ';
				break;
			case 6:
				res += 'six hundred ';
				break;
			case 7:
				res += 'seven hundred ';
				break;
			case 8:
				res += 'eight hundred ';
				break;
			case 9:
				res += 'nine hundred ';
				break;
			default: break;
		}
	}
	if (number > 9 ) {
		if (Number.parseInt(number.toString().slice(-2,-1)) === 1) {
			switch (Number.parseInt(number.toString().slice(-2))) {
				case 10:
					res+= 'ten';
					break;
				case 11:
					res+= 'eleven';
					break;
				case 12:
					res+= 'twelve';
					break;
				case 13:
					res+= 'thirteen';
					break;
				case 14:
					res+= 'fourteen';
					break;
				case 15:
					res+= 'fifteen';
					break;
				case 16:
					res+= 'sixteen';
					break;
				case 17:
					res+= 'seventeen';
					break;
				case 18:
					res+= 'eighteen';
					break;
				case 19:
					res+= 'nineteen';
					break;
				default: break;
			}
			return res.trim();
		}
		switch (Number.parseInt(number.toString().slice(-2,-1))) {
			case 2:
				res += 'twenty ';
				break;
			case 3:
				res += 'thirty ';
				break;
			case 4:
				res += 'forty ';
				break;
			case 5:
				res += 'fifty ';
				break;
			case 6:
				res += 'sixty ';
				break;
			case 7:
				res += 'seventy ';
				break;
			case 8:
				res += 'eighty ';
				break;
			case 9:
				res += 'ninety ';
				break;
			default: break;
		}
	}
	switch (Number.parseInt(number.toString().slice(-1))) {
		case 1:
			res += 'one';
			break;
		case 2:
			res += 'two';
			break;
		case 3:
			res += 'three';
			break;
		case 4:			
			res += 'four';
			break;
		case 5:
			res += 'five';
			break;
		case 6:
			res += 'six';
			break;
		case 7:
			res += 'seven';
			break;
		case 8:
			res += 'eight';
			break;
		case 9:
			res += 'nine';
			break;
		default: break;
	}
	return res.trim();
}
