function calculate() {
 fetch('24_items.json')
 .then(res => res.json())
 .then(data => document.body.innerHTML = data[2].text);
}
calculate();