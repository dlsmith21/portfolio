const quotes = {
    posQuote: ['Failure is simply the opportunity to begin again, this time more intelligently.', 'Our greatest glory is not in never falling, but in rising every time we fall.', 'If you change the way you look at things, the things you look at change.', 'We must reach out our hand in friendship and dignity both to those who would befriend us and those who would be our enemy.', 'It is fine to celebrate success but it is more important to heed the lessons of failure.'],
    encQuote: ['I cannot tell you how many times I have been given a no. Only to find that a better, brighter, bigger yes was right around the corner.', 'We need to accept that we will not always make the right decisions, that we will screw up royally sometimes; understanding that failure is not the opposite of success, it is part of success.', 'When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.', 'You cannot always control what goes on outside. But you can always control what goes on inside.', 'We are what we repeatedly do. Excellence, then, is not an act, but a habit.'],
    motQuote: ['Everything you have ever wanted is sitting on the other side of fear.', 'The question is nott who is going to let me; it is who is going to stop me.', 'Every strike brings me closer to the next home run.', 'I have not failed. I have just found 10,000 ways that will not work.', 'Do not worry about failure; you only have to be right once.']
};

function quoteResult() {
    let a = Math.floor(Math.random() * 2);
    let q = Math.floor(Math.random() * 4);
    if (a === 0) {
        return `Positive Quote: ${quotes.posQuote[q]}`;
    } else if (a === 1) {
        return `Encouraging Quote: ${quotes.encQuote[q]}`;
    } else {
        return `Motivational Quote: ${quotes.motQuote[q]}`;
    };
}

console.log(quoteResult());

