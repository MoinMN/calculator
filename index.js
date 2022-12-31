//Sound effect
let errorSound = new Audio('error.mp3');
let likeButton = new Audio('glass breaking.mp3');

let result = document.getElementById('calculation');

let calculate=(number)=>{
    result.value += number;
}

let calculator=()=>{
    try {
        result.value = eval(result.value);
    } catch (error) {
        errorSound.play();
        alert("Enter Valid Expression");
    }
}

let clr=()=>{
    result.value = "";
}

let del=()=>{
    if(result.value == "undefined" || result.value == "Infinity" || result.value == "NaN")
        result.value = "";
    else
        result.value = result.value.slice(0, -1);
}

let openBracket=()=>{
    result.value += '(';
}

let closeBracket=()=>{
    result.value += ')';
}

//Like button
let likes = document.getElementById('likes');
let count = 0;

let hitLike=()=>{
    likes.value = ++count;
    likeButton.play();
}
