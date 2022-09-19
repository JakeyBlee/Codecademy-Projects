const start = ['Many religions believe that you should ', 'Back in my day, you would ', 'Personally, I would ', 'It is common knowledge to ', 'Ancient teachings advise to ', 'My grandfather once warned me to ', 'In my country, people would ', 'I heard once that you should ', 'My mom says that you should ']
const when = ['never ', 'always ', 'only '];
const verb = ['serenade ', 'humiliate ', 'hunt ', 'lick ', 'aggrivate ', 'befriend ', 'belittle ', 'laugh at ', 'trick ', 'consume ', 'steal ', 'tempt ', 'explode ', 'kick ', 'measure ', 'bathe ', 'seduce ', 'slap '];
const adjective = ['a sweaty ', 'a regal ', 'an adventurous ', 'an elegant ', 'a pompous ', 'a lusty ', 'a plump', 'a spiteful ', 'a neighborly ', 'a sneaky ', 'a handsome ', 'a tiresome ', 'a ruthless ', 'a stinky ', 'a clever ', 'an austere '];
const animal = ['giraffe ', 'pelican ', 'bear ', 'gorilla ', 'lion ', 'ardvark ', 'antelope ', 'lion ', 'cat ', 'dog ', 'alligator ', 'ostrich ', 'penguin ', 'pigeon ', 'seal ', 'whale ', 'spider ', 'cockroach '];
const end = ['at midnight.', 'in the evening.', 'from across the room.', 'at first light.', 'as soon as possible.', 'whilst it sleeps.', 'without warning.', 'on a full moon.', 'when alone.', 'with friends.', 'after alcohol.', 'without backup.', 'whilst driving.'];

const random = arr => arr[Math.floor(Math.random()*arr.length)];
const sentence = () => console.log(random(start)+random(when)+random(verb)+random(adjective)+random(animal)+random(end));

sentence();