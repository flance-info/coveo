const triggers = Array.from(
	document.querySelectorAll('[data-toggle="collapse"]')
);

window.addEventListener(
	"click",
	(event) => {
		const element = event.target;
		if (triggers.includes(element)) {
			const selector = element.getAttribute("data-target");
			const targets = Array.from(document.querySelectorAll(selector));
			targets.forEach((target) => {
				target.classList.toggle("active");
				console.log("target", target, selector);
			});
		}
	},
	false
);