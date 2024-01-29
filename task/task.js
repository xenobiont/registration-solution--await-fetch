// Your code here
const form = document.querySelector('#register-form');

form.addEventListener('submit', async function(event) {
	event.preventDefault();

	try {
		const response = await fetch('https://danit.com.ua/register', {
			method: 'POST',
			body: JSON.stringify({
				email: this.querySelector('[name="email"]').value,
				password: this.querySelector('[name="password"]').value,
			}),
		});
		if (!response.ok) throw new Error('что-то поломалось');
		const result = await response.json();
		console.log(result);
	} catch (e) {
		console.log(e);
	}
});
