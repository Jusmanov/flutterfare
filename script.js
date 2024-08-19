const slider = document.getElementById('myRange');
const numberInput = document.getElementById('myNumber');


slider.oninput = function() {
  numberInput.value = this.value;
}

numberInput.oninput = function() {
	slider.value = this.value;
}

slider.addEventListener('input', function() {
	numberInput.value = this.value;
	distance = this.value;
	console.log(calculateCost());
	console.log(displayCost(calculateCost()));
	console.log(calculateBikeCost());
	console.log(displayBikeCost(calculateBikeCost()));
})

let distance = parseFloat(slider.value); // Make user distance input usable in calculation

const overnightCheckbox = document.getElementById('overnight-surcharge');
let overnight = overnightCheckbox.checked;

function calculateBikeCost() {
	const bikeBaseRate = 4.79;
	const mileRate = 2.47;
	const overpayCost = 0;
	const overpayDistance = 0;
	if (distance > 4.375) {
		const overpayDistance = distance - 4.375;
		const overpayCost = overpayDistance * mileRate;
		console.log(overpayDistance);
		return bikeBaseRate + overpayCost;
	}
	return bikeBaseRate + overpayCost;
}

function displayBikeCost(cost) {
	const costElement = document.getElementById('citibike-cost');
	costElement.textContent = `$${cost.toFixed(2)}`;
}

function calculateCost() {
	const baseFare = 3.0;
	const perMileRate = 3.50;
	const overnightSurcharge = 1.0;
	const improvementSurcharge = 1.0;
	const mtaSurcharge = 0.50;
	const rushHourSurcharge = 2.50;
	const congestionSurcharge = 2.50
	const jfkCost = 70.0;
	let totalCost = baseFare + (distance * perMileRate) + mtaSurcharge + improvementSurcharge;
	if (overnight) {
		totalCost += overnightSurcharge;
	}
	if (rushHour) {
		totalCost += rushHourSurcharge;
	}
	if (congestion) {
		totalCost += congestionSurcharge;
	}
	if (jfk) {
		totalCost = 70.0;
	}
	return totalCost
}


console.log(overnight);
overnightCheckbox.addEventListener('change', () => {overnight = overnightCheckbox.checked;
																									 console.log(overnight);
																										console.log(calculateCost())
console.log(displayCost(calculateCost()))});

const rushHourCheckbox = document.getElementById('rush-hour');
let rushHour = rushHourCheckbox.checked;
console.log(rushHour);
rushHourCheckbox.addEventListener('change', () => {rushHour = rushHourCheckbox.checked;
																									 console.log(rushHour);
																									 console.log(calculateCost())
																										console.log(displayCost(calculateCost()))});

const congestionCheckbox = document.getElementById('congestion-surcharge');
let congestion = congestionCheckbox.checked;
console.log(congestion);
congestionCheckbox.addEventListener('change', () => {congestion = congestionCheckbox.checked;
																										 console.log(congestion);
																										 console.log(calculateCost())
																											console.log(displayCost(calculateCost()))});

const jfkCheckbox = document.getElementById('jfk-surcharge');
let jfk = jfkCheckbox.checked;
console.log(jfk);
jfkCheckbox.addEventListener('change', () => {jfk = jfkCheckbox.checked;
																									 console.log(jfk);
																						 			 console.log(calculateCost())
																						 			 console.log(displayCost(calculateCost()))});


function displayCost(cost) {
	const costElement = document.getElementById('yellow-cab-cost');
	costElement.textContent = `$${cost.toFixed(2)}`;
}
