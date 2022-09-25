const start = ['Many religions believe that you should ', 'I read on the internet that you should ', 'My sources tell me to ', 'I have it on good authority that you should ', 'Back in my day, people said to ', 'Personally, I think you should ', 'It is common knowledge to ', 'Ancient teachings advise to ', 'My grandfather once warned me to ', 'In my country, people say to ', 'I heard once that you should ', 'My mom says that you should ']
const verb = ['serenade ', 'tickle ', 'humiliate ', 'catfish ', 'lick ', 'aggrivate ', 'force-feed ', 'belittle ', 'laugh at ', 'trick ', 'consume ', 'steal ', 'tempt ', 'explode ', 'kick ', 'adopt ', 'massage ', 'seduce ', 'slap ', 'become emotionally involved with '];
const adjective = ['a sweaty ', 'a regal ', 'an adventurous ', 'an elegant ', 'a pompous ', 'a lusty ', 'a plump ', 'a spiteful ', 'a neighborly ', 'a sneaky ', 'a handsome ', 'a tiresome ', 'a ruthless ', 'a stinky ', 'a clever ', 'an offensive ', 'a cute '];
const animal = ['giraffe ', 'pelican ', 'bear ', 'gorilla ', 'lion ', 'ardvark ', 'antelope ', 'lion ', 'cat ', 'dog ', 'alligator ', 'ostrich ', 'penguin ', 'pigeon ', 'seal ', 'whale ', 'spider ', 'cockroach '];
const endNever = ['unless you wish to die a most painful death.', 'when alone.', 'after alcohol.', 'in low visibility.', 'on a full moon.', 'without a very elaborate plan.', 'whilst it sleeps.', 'and expect to get away with it.']
const endOnly = ['if you really, really have to.', 'after securing an exit route.', 'after double-checking the instructions.', 'at midnight.', 'whilst wearing a disguise.', 'at first light.', "after first asking it's father's permission.", 'after first googling the right technique.']
const endAlways = ['from a safe distance.', 'as soon as you get the chance.', 'whenever you get the opportunity.', "because it feels really good."]
const button = ['That goes without saying!', "I don't think thats right...", 'Of course!', 'Wow. Such wisdom.', 'Yes that sounds plausible.', 'If you say so!', "If only I'd known sooner!", 'No ones told me that before!', 'Are you certain..?', 'Hmm...', "I'm not sure I believe you."]

const random = arr => arr[Math.floor(Math.random()*arr.length)];
const sentence = () => {
    let when = Math.floor(Math.random()*3);
    if (when === 0){
        return random(start)+"never "+random(verb)+random(adjective)+random(animal)+random(endNever);
    } else if (when === 1){
        return random(start)+"only "+random(verb)+random(adjective)+random(animal)+random(endOnly);
    } else {
        return random(start)+"always "+random(verb)+random(adjective)+random(animal)+random(endAlways);
    }
};

document.querySelector("button").onclick = () => {
    document.querySelector("p").innerHTML = sentence();
    document.querySelector("button").innerHTML = random(button);
};