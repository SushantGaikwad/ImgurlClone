const client_id = "Y7pKIMKs4x48WZ6qUcDpluSfjqr12Fnjh7sEIUYP-0g";
// const client_id = "6o4W2NGe0d1CNDWSTfieOIFcZ5OFcx2SQ_Mrm9KcBiU";
// const client_id = "6o4W2NGe0d1CNDWSTfieOIFcZ5OFcx2SQ_Mrm9KcBiU";

// Change no of columns and rows
let columns = 5;

const changeColumn = (tab) => {
	if (tab.matches) {
		columns = 3;
	} else {
		columns = 5;
	}
};

const tab = window.matchMedia("(max-width: 700px)");
changeColumn(tab);
tab.addListener(changeColumn);

const fetchData = async () => {
	const response = await fetch(
		`https://api.unsplash.com/photos/random?client_id=${client_id}&count=25`
	);
	const data = await response.json();
	let array1 = [];
	let array2 = [];
	let array3 = [];
	let array4 = [];
	let array5 = [];

	array1 = data.slice(0, 5);
	array2 = data.slice(5, 10);
	array3 = data.slice(10, 15);
	array4 = data.slice(15, 20);
	array5 = data.slice(20, 25);
	let array = [array1, array2, array3, array4, array5];
	console.log(array1);
	updateGrid(array);
};

const updateGrid = (data) => {
	let container = document.getElementById("grid-container");
	container.innerHTML = "";

	for (let i = 0; i < columns; i++) {
		let grid = document.createElement("div");
		grid.classList.add("grid");
		for (let j = 0; j < 5; j++) {
			// console.log(data[i][j].alt_description);
			let gridItem = document.createElement("div");
			let imageDiv = document.createElement("div");
			imageDiv.classList.add("image-div");
			let image = document.createElement("img");
			image.src = `${data[i][j].urls.small}`;

			imageDiv.appendChild(image);

			let titleDiv = document.createElement("div");
			titleDiv.classList.add("title-div");
			let title = document.createElement("h3");
			title.innerHTML = `Hi`;
			titleDiv.appendChild(title);
			let metaDataDiv = document.createElement("div");
			metaDataDiv.classList.add("metadata-div");
			let vote = document.createElement("div");
			vote.classList.add("vote");
			let upvote = document.createElement("div");
			upvote.classList.add("upvote");
			upvote.innerHTML = `
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					class="vote-up"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>Upvote</title>
					<path
						fill="currentColor"
						stroke="#ffffff"
						stroke-width="0"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M7.197 2.524a1.2 1.2 0 011.606 0c.521.46 1.302 1.182 2.363 2.243a29.617 29.617 0 012.423 2.722c.339.435.025 1.028-.526 1.028h-2.397v4.147c0 .524-.306.982-.823 1.064-.417.066-1.014.122-1.843.122s-1.427-.056-1.843-.122c-.517-.082-.824-.54-.824-1.064V8.517H2.937c-.552 0-.865-.593-.527-1.028.52-.669 1.32-1.62 2.423-2.722a52.996 52.996 0 012.364-2.243z"
					></path>
				</svg>
			`;

			let voteCount = document.createElement("div");
			voteCount.innerHTML = `${data[i][j].likes}`;
			voteCount.classList.add("vote-count");
			let downvote = document.createElement("div");
			downvote.innerHTML = `
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					class="vote-down"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>Downvote</title>
					<path
						fill="currentColor"
						stroke="#ffffff"
						stroke-width="0"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M8.803 13.476a1.2 1.2 0 01-1.606 0 53.03 53.03 0 01-2.364-2.243 29.613 29.613 0 01-2.422-2.722c-.339-.435-.025-1.028.526-1.028h2.397V3.336c0-.524.306-.982.823-1.064A11.874 11.874 0 018 2.15c.829 0 1.427.056 1.843.122.517.082.824.54.824 1.064v4.147h2.396c.552 0 .865.593.527 1.028-.52.669-1.32 1.62-2.423 2.722a53.038 53.038 0 01-2.364 2.243z"
					></path>
				</svg>
			`;
			downvote.classList.add("downvote");

			vote.append(upvote, voteCount, downvote);

			let comment = document.createElement("div");
			comment.classList.add("comment");
			let commentSvg = document.createElement("div");
			commentSvg.innerHTML = `
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					class="comment-svg"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>Comments</title>
					<path
						fill="currentColor"
						stroke="#ffffff"
						stroke-width="0"
						d="M4.455 12.195l.367 1.105 1.037-.53c.266-.135.637-.412 1.039-.74.39-.319.872-.737 1.422-1.245h2.291a3.306 3.306 0 003.306-3.306V5.306A3.306 3.306 0 0010.611 2H5.306A3.306 3.306 0 002 5.306v2.656c0 1.34.933 2.461 2.185 2.75.008.172.025.335.046.479a6.622 6.622 0 00.168.803c.016.07.035.137.056.2z"
					></path>
				</svg>
			`;
			let commentCount = document.createElement("div");
			commentCount.innerHTML = "0";

			comment.append(commentSvg, commentCount);

			let postView = document.createElement("div");
			postView.classList.add("post-view");
			let postViewSvg = document.createElement("div");
			postViewSvg.innerHTML = `
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					class="post-view-svg"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>Post views</title>
					<path
						d="M8 2.5C4.74998 2.5 2.30142 5.50267 1.27514 6.77517C0.925337 7.20917 0.908553 7.76483 1.2278 8.16583C2.22527 9.41833 4.6991 12.5 8 12.5C11.3686 12.5 13.8396 9.31133 14.796 8.0905C15.0769 7.732 15.0674 7.2535 14.7692 6.8755C13.7938 5.6395 11.3376 2.5 8 2.5ZM7.98224 9.33333C6.90897 9.33333 6.03887 8.51233 6.03887 7.5C6.03887 6.4875 6.90897 5.66667 7.98224 5.66667C9.05551 5.66667 9.92561 6.4875 9.92561 7.5C9.92561 8.51233 9.05551 9.33333 7.98224 9.33333Z"
						fill="currentColor"
					></path>
				</svg>
			`;
			let postViewCount = document.createElement("div");
			postViewCount.innerHTML = "0";
			postView.append(postViewSvg, postViewCount);

			metaDataDiv.append(vote, comment, postView);

			gridItem.append(imageDiv, titleDiv, metaDataDiv);
			grid.appendChild(gridItem);
		}
		container.appendChild(grid);
	}
};

fetchData();
