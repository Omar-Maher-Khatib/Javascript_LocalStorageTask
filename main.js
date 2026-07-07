const sites = [];
const bookMarkForm = document.forms.BookMarkForm;

bookMarkForm.onsubmit = (e) => {
	e.preventDefault();

	const site = {
		url: bookMarkForm.url.value,
		name: bookMarkForm.name.value,
		email: bookMarkForm.email.value,
		password: bookMarkForm.password.value,
	};

	sites.push(site);
	console.log(sites);

	localStorage.setItem("sites", JSON.stringify(sites));
	bookMarkForm.reset();
};
