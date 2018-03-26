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
//Question 4

//Question 5
//Question 6

//const images = [
//    "image/cat1.jpg",
//    "image/cat2.jpg",
//    "image/cat3.png",
//    "image/cat4.jpg",
//	"image/dog1.jpg",
//    "image/dog2.jpg",
//    "image/dog3.png",
//    "image/dog4.jpg"
//];

var personality = {
	happy: 0,
	sad: 0,

};
document.getElementById('question1').style.display = "block";
document.getElementById('question2').style.display = "none";
document.getElementById('question3').style.display = "none";
document.getElementById('question4').style.display = "none";
document.getElementById('question5').style.display = "none";




// start
const start = document.getElementById('start').value;
startBtn.onclick = function () {
	document.getElementById('question1').style.display = "block";
	//	document.getElementById('answer').style.display = "none";
	document.getElementById('start').style.display = "none";
}

//question 1 color
YellowBtn.onclick = function () {
	const anwser = document.getElementById('question1').value;
	document.getElementById('question1').style.display = "none";
	//	document.getElementById('answer').style.display = "none";
	document.getElementById('question2').style.display = "block";
};

GreenBtn.onclick = function () {
	const anwser = document.getElementById('question1').value;
	document.getElementById('question1').style.display = "none";
	//	document.getElementById('answer').style.display = "none";
	document.getElementById('question2').style.display = "block";
};
PurpleBtn.onclick = function () {
	const anwser = document.getElementById('question1').value;
	document.getElementById('question1').style.display = "none";
	//	document.getElementById('answer').style.display = "none";
	document.getElementById('question2').style.display = "block";
};
RedBtn.onclick = function () {
	const anwser = document.getElementById('question1').value;
	document.getElementById('question1').style.display = "none";
	//	document.getElementById('answer').style.display = "none";
	document.getElementById('question2').style.display = "block";
};
PurpleBtn.onclick = function () {
	const anwser = document.getElementById('question1').value;
	document.getElementById('question1').style.display = "none";
	//	document.getElementById('answer').style.display = "none";
	document.getElementById('question2').style.display = "block";
};
OrangeBtn.onclick = function () {
	const anwser = document.getElementById('question1').value;
	document.getElementById('question1').style.display = "none";
	//	document.getElementById('answer').style.display = "none";
	document.getElementById('question2').style.display = "block";
};
BlueBtn.onclick = function () {
	const anwser = document.getElementById('question1').value;
	document.getElementById('question1').style.display = "none";
	//	document.getElementById('answer').style.display = "none";
	document.getElementById('question2').style.display = "block";
};

//question 2
AnnoyedBtn.onclick = function () {
	const anwser = document.getElementById('question2').value;
	document.getElementById('question2').style.display = "none";
	//	document.getElementById('answer').style.display = "none";
	document.getElementById('question3').style.display = "block";
};

RejectedBtn.onclick = function () {
	const anwser = document.getElementById('question2').value;
	document.getElementById('question2').style.display = "none";
	//	document.getElementById('answer').style.display = "none";
	document.getElementById('question3').style.display = "block";
};

RelievedBtn.onclick = function () {
	const anwser = document.getElementById('question2').value;
	document.getElementById('question2').style.display = "none";
	//	document.getElementById('answer').style.display = "none";
	document.getElementById('question3').style.display = "block";
};

WhateverBtn.onclick = function () {
	const anwser = document.getElementById('question2').value;
	document.getElementById('question2').style.display = "none";
	//	document.getElementById('answer').style.display = "none";
	document.getElementById('question3').style.display = "block";
};

//question 3
ComedyBtn.onclick = function () {
	const anwser = document.getElementById('question3').value;
	document.getElementById('question3').style.display = "none";
	//	document.getElementById('answer').style.display = "none";
	document.getElementById('question4').style.display = "block";
};
ActionBtn.onclick = function () {
	const anwser = document.getElementById('question3').value;
	document.getElementById('question3').style.display = "none";
	//	document.getElementById('answer').style.display = "none";
	document.getElementById('question4').style.display = "block";
};

HorrorBtn.onclick = function () {
	const anwser = document.getElementById('question3').value;
	document.getElementById('question3').style.display = "none";
	//	document.getElementById('answer').style.display = "none";
	document.getElementById('question4').style.display = "block";
};

DocumentaryBtn.onclick = function () {
	const anwser = document.getElementById('question3').value;
	document.getElementById('question3').style.display = "none";
	//	document.getElementById('answer').style.display = "none";
	document.getElementById('question4').style.display = "block";
};

//question 4
const images = [
	"images/dog1.jpg",
    "images/dog2.jpg",
    "images/dog3.jpg",
    "images/dog4.jpg"
];
const captions = [
    "puppy 1",
    "puppy 2",
    "puppy 3",
    "puppy 4"
];

const anwser = document.getElementById('question4').value;
const container = document.getElementById("question4");
for (let i = 0; i < 4; i++) {

	const imgContainer = document.createElement('div');

	const img = new Image();
	img.src = images[i];
	img.id = "img" + i;
	img.classList.add("slide");
	images[i];

	images[0].onclick = function () {
		personality.dog1++;
		document.getElementById('question4').style.display = "none";
		document.getElementById('question5').style.display = "block";
	};
	images[1].onclick = function () {
		personality.dog2++;
		document.getElementById('question4').style.display = "none";
		document.getElementById('question5').style.display = "block";
	};
	images[2].onclick = function () {
		personality.dog3++;
		document.getElementById('question4').style.display = "none";
		document.getElementById('question5').style.display = "block";
	};
	images[3].onclick = function () {
		personality.dog4++;
		document.getElementById('question4').style.display = "none";
		document.getElementById('question5').style.display = "block";
	};

	imgContainer.appendChild(img);

	const caption = document.createElement('p');
	caption.classList.add("captions");
	caption.textContent = captions[i];
	imgContainer.appendChild(caption);

	container.appendChild(imgContainer);
};

//question 5
//const images = [
//	"images/cat1.jpg",
//    "images/cat2.jpg",
//    "images/cat3.jpg",
//    "images/cat4.jpg"
//];
//const captions = [
//    "kitten 1",
//    "kitten 2",
//    "kitten 3",
//    "kitten 4"
//];
//
//const anwser = document.getElementById('question5').value;
//const container = document.getElementById("question5");
//for (let i = 0; i < 4; i++) {
//
//	const imgContainer = document.createElement('div');
//
//	const img = new Image();
//	img.src = images[i];
//	img.id = "img" + i;
//	img.classList.add("slide");
//	images[i];
//
//	images[0].onclick = function () {
//		personality.cat1++;
//		document.getElementById('question5').style.display = "none";
//		document.getElementById('question5').style.display = "block";
//	};
//	images[1].onclick = function () {
//		personality.cat2++;
//		document.getElementById('question5').style.display = "none";
//		document.getElementById('question5').style.display = "block";
//	};
//	images[2].onclick = function () {
//		personality.cat3++;
//		document.getElementById('question5').style.display = "none";
//		document.getElementById('question5').style.display = "block";
//	};
//	images[3].onclick = function () {
//		personality.cat4++;
//		document.getElementById('question5').style.display = "none";
//		document.getElementById('question5').style.display = "block";
//	};
//
//	imgContainer.appendChild(img);
//
//	const caption = document.createElement('p');
//	caption.classList.add("captions");
//	caption.textContent = captions[i];
//	imgContainer.appendChild(caption);
//
//	container.appendChild(imgContainer);
//};
//
