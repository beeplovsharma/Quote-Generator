let quote = document.querySelector(".q-text");
let button = document.querySelector("button");
let authorName = document.querySelector(".authorName");
let sound = document.querySelector(".sound");
let copy = document.querySelector(".copy");
let twitter = document.querySelector(".twitter");

function changeQuote(){
    button.innerHTML = "Loading quote...";
    fetch("https://api.quotable.io/random")
    .then(function(text){
        return text.json();
    })
    .then(function(res){
        console.log(res.author);
        quote.innerHTML = res.content;
        authorName.innerHTML = `- ${res.author}`;
        button.innerHTML = "New Quote";
    })
}
button.addEventListener("click",changeQuote)


sound.addEventListener("click",()=>{
    let utter = new SpeechSynthesisUtterance(`${quote.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utter);
})

copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(quote.innerText);
    alert("Copied to Clipboard")
})

twitter.addEventListener("click",()=>{
    let tweetUrl = `https://twitter.com/intent/?url=${quote.innerText}`;
    window.open(tweetUrl,"_blank");
})