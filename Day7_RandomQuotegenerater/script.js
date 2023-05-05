const quoteText = document.getElementById("qoute");
const quoteAuthor = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");
const tweetQuoteButton = document.getElementById("tweet-qoute");

//Array of the quote

const quote =[
    {
        text:"It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent.",
        author: "Madeleine Albright"
    },
    
    {
        text:"It’s worth remembering that it is often the small steps, not the giant leaps, that bring about the most lasting change.",
        author:"Queen Elizabeth II "
    },
    {
        text:"Amateurs sit and wait for inspiration, the rest of us just get up and go to work.",
        author:"Stephen King"
    },
    {
        text:"Self-awareness and self-love matter. Who we are is how we lead.",
        author:"Brene Brown"
    },
    {
        text:"Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.",
        author:"Voltaire"
    },
    {
        text:"Don't let your happiness depend on something you may lose.",
        author:"C.S. Lewis"
    },
    {
        text:"Pain is inevitable. Suffering is optional.",
        author:" Haruki Murakami"
    },
    {
        text:"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author:"Ralph Waldo Emerson"
    },
    {
        text:"Focus more on your desire than on your doubt, and the dream will take care of itself.",
        author:"Mark Twain"
    },
    {
        text:"Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.",
        author:"Mark Twain"
    },
    {
        text:"Trust our heart if the seas catch fire, live by love though the stars walk backwards.",
        author:"E. E. Cummings"
    },
    {
        text:"How wonderful it is that nobody need wait a single moment before starting to improve the world.",
        author:"Anne Frank"
    },
    {
        text:"We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        author:"Aristotle"
    },
    {
        text:"A good writer possesses not only his own spirit but also the spirit of his friends.",
        author:"Friedrich Nietzsche"
    },
    {
        text:"I am not at all in a humour for writing; I must write on until I am.",
        author:" Jane Austen"
    },
    {
        text:"The Six Golden Rules of Writing: Read, read, read, and write, write, write.",
        author:"Ernest Gaines"
    },
    {
        text:"Tell the readers a story! Because without a story, you are merely using words to prove you can string them together in logical sentences.",
        author:"Anne McCaffrey"
    },
    {
        text:"Living is the art of getting used to what we didn’t expect.",
        author:"Eleanor C. Wood"
    },
    {
        text:"Great opportunities to help others seldom come, but small ones surround us every day.",
        author:"Sally Koch"
    },
];

//generate the quote
function getRandomQuote(){
    return quote[Math.floor(Math.random()*quote.length)]
}

//update and display quote and authur
function displayQuote(){
    const {text, author} = getRandomQuote();
    quoteText.textContent = text;
    quoteAuthor.textContent = author;
}

//Tweet the current quote
function tweetQuote(){
    const tweetText = `${quoteText.textContent} - ${quoteAuthor.textContent}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(tweetUrl);
}

//Event Listener
newQuoteButton.addEventListener("click",displayQuote);
tweetQuoteButton.addEventListener("click", tweetQuote);

//Initial Quote Display
displayQuote();