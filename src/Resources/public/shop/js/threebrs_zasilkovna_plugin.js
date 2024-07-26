function showSelectedPickupPoint(inputId, labelId, point) {

	var zasilkovnaRadioButton = document.querySelector('[value="zasilkovna"]');
	if (zasilkovnaRadioButton) {
		zasilkovnaRadioButton.checked = true;
	}


	if (!!point) {
		document.getElementById(inputId).value = JSON.stringify(point);

		let zasilkovnaName = [];
		if ('place' in point) {
			zasilkovnaName.push(point.place);
		}
		if ('nameStreet' in point) {
			zasilkovnaName.push(point.nameStreet);
		} else if ('name' in point) {
			zasilkovnaName.push(point.name);
		}
		document.getElementById(labelId).innerHTML = zasilkovnaName.join(', ');
	}
}
