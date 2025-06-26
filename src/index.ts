const buttonCopy = document.querySelector("#buttonCopy")! as HTMLButtonElement;

export async function copyCard() {
	await navigator.clipboard.writeText("6219-8610-7399-7024");
	buttonCopy.style.width = buttonCopy.clientWidth + "px";
	buttonCopy.textContent = "کپی شد";
	buttonCopy.classList.add("copied");
	setTimeout(() => {
		buttonCopy.textContent = "کپی شماره کارت";
		buttonCopy.style.width = "auto";
		buttonCopy.classList.remove("copied");
	}, 1000);
}

buttonCopy.onclick = copyCard;
