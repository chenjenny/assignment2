//
const startBtn = document.getElementById('start');
//Question 1
const YellowBtn = document.getElementById('yellow');
const GreenBtn = document.getElementById('green');
const PurpleBtn = document.getElementById('purple');
const RedBtn = document.getElementById('red');
const OrangeBtn = document.getElementById('orange');
const BlueBtn = document.getElementById('blue');
//Question 2
const AnnoyedBtn = document.getElementById('annoyed');
const RejectedBtn = document.getElementById('rejected');
const RelievedBtn = document.getElementById('relieved');
const WhateverBtn = document.getElementById('whatever');
//Question 3
const ComedyBtn = document.getElementById('comedy');
const ActionBtn = document.getElementById('action');
const HorrorBtn = document.getElementById('horror');
const DocumentaryBtn = document.getElementById('documentary');
//Question 4 dog

//Question 5 cat


var personality = {
	Introvert: 0,
	Extrovert: 0,
};

document.getElementById('question1').style.display = "none";
document.getElementById('question2').style.display = "none";
document.getElementById('question3').style.display = "none";
document.getElementById('question4').style.display = "none";
document.getElementById('question5').style.display = "none";
document.getElementById('results').style.display = "none";



// start
const start = document.getElementById('start').value;
startBtn.onclick = function () {
	document.getElementById('question1').style.display = "block";
	document.getElementById('start').style.display = "none";
	document.getElementById("banner").remove();
}
//question 1 color
function getColor(event) {
	const question1Container = document.getElementById('question1');
	const color = event.target.value;

	if (color === 'yellow') {
		personality.Introvert += 1;

	} else if (color === 'blue') {
		personality.Extrovert += 1;

	} else if (color === 'green') {
		personality.Introvert += 1;

	} else if (color === 'purple') {
		personality.Extrovert += 1;

	} else if (color === 'red') {
		personality.Introvert += 1;

	} else if (color === 'orange') {
		personality.Extrovert += 1;

	}

	//	START

	document.getElementById('question1').style.display = "none";
	document.getElementById('question2').style.display = "block";
}

YellowBtn.addEventListener('click', getColor);
GreenBtn.addEventListener('click', getColor);
PurpleBtn.addEventListener('click', getColor);
RedBtn.addEventListener('click', getColor);
PurpleBtn.addEventListener('click', getColor);
OrangeBtn.addEventListener('click', getColor);
BlueBtn.addEventListener('click', getColor);

//question 2 mood
function getMood(event) {
	const mood = event.target.value;

	if (mood === 'annoyed') {
		personality.Introvert += 1;
		console.log('mood');
	} else if (mood === 'rejected') {
		personality.Extrovert += 1;

	} else if (mood === 'relieved') {
		personality.Introvert += 1;

	} else if (mood === 'whatever') {
		personality.Extrovert += 1;

	}

	document.getElementById('question2').style.display = "none";
	document.getElementById('question3').style.display = "block";
}

AnnoyedBtn.addEventListener('click', getMood);
RejectedBtn.addEventListener('click', getMood);
RelievedBtn.addEventListener('click', getMood);
WhateverBtn.addEventListener('click', getMood);


//question 3
function getMovie(event) {
	const movie = event.target.value;

	if (movie === 'comedy') {
		personality.Introvert += 1;
//		console.log('movie');
	} else if (movie === 'action') {
		personality.Extrovert += 1;

	} else if (movie === 'horror') {
		personality.Introvert += 1;

	} else if (movie === 'documentary') {
		personality.Extrovert += 1;

	}

	document.getElementById('question3').style.display = "none";
	document.getElementById('question4').style.display = "block";
}

ComedyBtn.addEventListener('click', getMovie);
ActionBtn.addEventListener('click', getMovie);
HorrorBtn.addEventListener('click', getMovie);
DocumentaryBtn.addEventListener('click', getMovie);


//question 4
const images = [
	"images/dog1.jpg",
    "images/dog2.jpg",
    "images/dog3.jpg",
    "images/dog4.jpg"
];
<<<<<<< HEAD
=======
const captions = [
    "",
    "",
    "",
    ""
];
>>>>>>> 5f22baba147c89b4fcf61aeba9e34455c26db6d9

//const captions = [
//    "puppy 1",
//    "puppy 2",
//    "puppy 3",
//    "puppy 4",
//	"kitten 1",
//    "kitten 2",
//    "kitten 3",
//    "kitten 4"
//];

//question 4 dog

const answser = document.getElementById('question4').value;
const container = document.querySelector(".dogImgContainer");
for (let i = 0; i < 4; i++) {

	const imgContainer = document.createElement('div');
	imgContainer.classList.add("dogs");
	const img = new Image();
	img.src = images[i];
	img.id = "img" + i;
	img.classList.add("slide");

	img.onclick = function () {
		personality.dogs = i;

		document.getElementById('question4').style.display = "none";
		document.getElementById('question5').style.display = "block";
	};

	imgContainer.appendChild(img);

//	const caption = document.createElement('p');
//	caption.classList.add("captions");
//	caption.textContent = captions[i];
//	imgContainer.appendChild(caption);
<<<<<<< HEAD

	container.appendChild(imgContainer);
	
};


const catImages = [
	"images/cat1.jpg",
    "images/cat2.jpg",
    "images/cat3.jpg",
    "images/cat4.jpg"
];

//question 5 cat
const container5 = document.querySelector(".catImgContainer");
for (let i = 0; i < catImages.length; i++) {

	const imgContainer = document.createElement('div');
	imgContainer.classList.add("cats");

	const img = document.createElement("img");
	img.setAttribute("src", catImages[i]);
	img.id = "catImage" + i;
	imgContainer.appendChild(img);
	container5.appendChild(imgContainer);
	img.addEventListener('click', function (event) {
		const imgId = event.target.id;
		if (imgId === 'catImage0') {
			personality.Introvert += 1;
			console.log('You clicked a cute cat!');
		} else if (imgId === 'catImage1') {
			personality.Extrovert += 1;

		} else if (imgId === 'catImage2') {
			personality.Extrovert += 1;

		} else if (imgId === 'catImage3') {
			personality.Introvert += 1;
		} else if (imgId === 'catImage4') {
			personality.Extrovert += 1;
		}
		document.getElementById('question5').style.display = 'none';
		document.getElementById('results').style.display = 'none';
		
	});
	
}
=======
//
//	container.appendChild(imgContainer);
//};
//

// -----------------------------------------------------------------------
// FINAL RESULT 

//var score = 0;

//if (question1 == "Blue" "Green" "Purple") {
//	score++;
//}

//if (question2 == "RELIEVED" "WHATEVER" ) {
//	score++;
//}

//if (question3 == "THRILLER/HORROR" "DOCUMENTARY" ) {
//	score++;
//}

//document.getElementById("after_submit").style.visibility = "visible";
//document.getElementById("score").innerHTML = "You Got " + score + " score.";

















>>>>>>> 5f22baba147c89b4fcf61aeba9e34455c26db6d9

