const updateGrid = () => {
	let container = document.getElementById("grid-container");
	container.innerHTML = "";

	let image_arr = [
		"https://images.unsplash.com/photo-1619581073186-5b4ae1b0caad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		"https://images.unsplash.com/photo-1561336526-2914f13ceb36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		"https://images.unsplash.com/photo-1583836632332-53825ce55a03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2hhaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		"https://images.unsplash.com/photo-1536514888772-a269c6a8a198?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoYWl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
		"https://images.unsplash.com/photo-1630748662359-40a2105640c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		"https://images.unsplash.com/photo-1583836632332-53825ce55a03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2hhaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
	
		"https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftb3NhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
	];
	for (let i = 0; i < 3; i++) {
		let grid = document.createElement("div");
		grid.classList.add("grid");
		for (let i = 0; i < 3; i++) {
			let gridItem = document.createElement("div");
			let imageDiv = document.createElement("div");
			imageDiv.classList.add("image-div");
			let image = document.createElement("img");
			image.src = `${image_arr[i]}`;

			imageDiv.appendChild(image);

			let titleDiv = document.createElement("div");
			titleDiv.classList.add("title-div");
			let title = document.createElement("h3");
			title.innerHTML = "Title " + i;
			titleDiv.appendChild(title);
			let feedbackDiv = document.createElement("div");
			feedbackDiv.classList.add("feedback-div");
			let feedback = document.createElement("p");
			feedback.innerHTML = "Feedback " + i;
			feedbackDiv.appendChild(feedback);
			gridItem.append(imageDiv, titleDiv, feedbackDiv);
			grid.appendChild(gridItem);
		}
		container.appendChild(grid);
	}
};

updateGrid();
