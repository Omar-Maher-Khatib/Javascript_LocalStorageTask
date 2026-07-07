const bookMarkForm = document.forms['BookMarkForm'];
let sites = [];

if(localStorage.getItem("sites") != null) {
    sites = JSON.parse(localStorage.getItem("sites"));
}
bookMarkForm.onsubmit = (e) => {
	e.preventDefault();

	const site = {
		url: bookMarkForm.url.value,
		name: bookMarkForm.name.value,
		email: bookMarkForm.email.value,
		password: bookMarkForm.password.value,
	};

	sites.push(site);
	localStorage.setItem("sites", JSON.stringify(sites));
    displaySites();
	bookMarkForm.reset();
};

const displaySites = () => {

    const result= sites.map( (site) => {
        return `<tr>
                <td>${site.url}</td>
                <td>${site.name}</td>
                <td>${site.email}</td>
                <td>${site.password}</td>
                </tr>
                `
    })
    document.querySelector(".data").innerHTML = result;
}
displaySites();

