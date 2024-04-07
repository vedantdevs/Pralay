const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning");
    }

    else if(hr == 12) {
        speak("Good noon");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon");
    }

    else {
        speak("Good Evening");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating Pralay");
    speak("Going online");
    wishMe();
})



const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})


function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('name')) {
        const finalText = "My name is Pralay";
        speech.text = finalText;
    }

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }

    else if(message.includes('open facebook')) {
        window.open("https://facebook.com", "_blank");
        const finalText = "Opening facebook";
        speech.text = finalText;
    }

    else if(message.includes('open amazon')) {
        window.open("https://amazon.in", "_blank");
        const finalText = "Opening amazon";
        speech.text = finalText;
    }
    
    else if(message.includes('open flipkart')) {
        window.open("https://flipkart.com","_blank");
        const finalText = "Opening flipkart";
        speech.text = finalText;
    }

    else if(message.includes('open youtube')) {
        window.open("https://youtube.com", "_blank");
        const finalText = "Opening youtube";
        speech.text = finalText;
    }

    else if(message.includes('your owner')){
        window.open("https://vedantdevs.github.io/Ava/about-us.html","_blank")
        const finalText = "Opening My Owner's Page";
        speech.text = finalText;
    }

    else if(message.includes('open gmail')) {
        window.open("https://gmail.com", "_blank");
        const finalText = "Opening gmail";
        speech.text = finalText;
    }

    else if(message.includes('open drive')) {
        window.open("https://drive.google.com", "_blank");
        const finalText = "Opening drive";
        speech.text = finalText;
    }

    else if(message.includes('open mtg')){
        window.open("https://mtg.in", "_blank")
        const finalText = ("Opening Mtg")
        speech.text = finalText;

    }

    else if(message.includes('open translater')) {
        window.open("https://translate.google.co.in/", "_blank");
        const finalText = "Opening translate";
        speech.text = finalText;
    }

    else if(message.includes('open calendar')) {
        window.open("https://calendar.google.com/calendar/u/0/r?tab=wc&pli=1", "_blank");
        const finalText = "Opening calendar";
        speech.text = finalText;
    }

    else if(message.includes('open spotify')) {
        window.open('https://spotify.com',"_blank")
        const finalText = "Open Spotify";
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('open calculator')) {
        window.open('https://www.calculatorsoup.com/calculators/math/basic.php', "_blank");
        const finalText = "Opening calculator";
        speech.text = finalText
    }

    else if(message.includes('open wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia of ", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('open mcb')){
        window.open('hhtps://meridian.myclasboard.com',"_blank");
        const finalText = "Opening MCB Of Meridian School";
        speech.text = finalText
    }

    else if(message.includes('udemy')){
        window.open('https://udemy.com',"_blank")
        const finalText = "Opening Udemy"
        speech.text = finalText
    }

    else if(message.includes('make my trip')) {
        window.open('https://makemytrip.com',"_blank")
        const finalText = "Opening Make My Trip"
        speech.text = finalText
    }

    else if(message.includes('book my show')) {
         window.open('https://bookmyshow.com',"_blank")
         const finalText = "Opening Book my show";
         speech.text = finalText;
    }

    else if(message.includes('open uncademy')){
        window.open('https://unacademy.com',"_blank")
        const finalText = "Opening Unacademy"
        speech.text = finalText;
    }

    else if(message.includes('simpl pay')) {
        window.open('https://https://getsimpl.com/')
        const finalText = "Opening Simpl Pay";
        speech.text = finalText;
    }

    else if(message.includes('open swiggy')) {
        windiow.open('https://swiggy.com',"_blank")
        const finalText = "Opening Swiggy";
        speech.text= finalText;
    }
    
    else if(message.includes('aajtak')) {
        window.open('https://aajtak.in/',"_blank");
        const finalText = "Opening Aajtak";
        speech.text = finalText;
    }

    else if(message.includes('Republic Bharat')) {
        window.open('https://',"_blank");
        const finalText = "Opening Republic Bharat";
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }


    else if(message.includes('search')){
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}
