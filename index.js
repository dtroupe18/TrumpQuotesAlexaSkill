// This is a simple Alexa skill that reads a trump quote to the user

'use strict';
const Alexa = require('alexa-sdk');
const appID = undefined;
const skillName = 'Trump Quotes';
const helpMessage = 'You can say tell me a quote, or, you can say exit... What can I help you with?';
const helpPrompt = 'What can I help you with?';
const stopMessage = 'Goodbye, the best goodbye, the very best';
const imageURL = 'https://s3.amazonaws.com/trumpquotes/trumpUgly.jpg';


const data = [
    'All of the women on The Apprentice flirted with me — consciously or unconsciously. That\'s to be expected. A sexual dynamic is always present between people, unless you are asexual.',
    'I will build a great, great wall on our southern border, and I will have Mexico pay for that wall. Mark my words.',
    'I will be phenomenal to the women. I mean, I want to help women',
    'I have a great relationship with African Americans, as you possibly have heard. I just have great respect for them. And they like me. I like them',
    'The U.S. cannot allow EBOLA-infected people back. People that go to far away places to help out are great - but must suffer the consequences',
    'Its really cold outside, they are calling it a major freeze, weeks ahead of normal. Man, we could use a big fat dose of global warming',
    'They are sending people that have lots of problems, and they are bringing those problems with us. They are bringing drugs. They are bringing crime. They are rapists. And some, I assume, are good people',
    'When you see the other side chopping off heads, waterboarding doesn\'t sound very severe',
    'The concept of global warming was created by and for the Chinese in order to make U.S. manufacturing non-competitive.',
    'Well, if I ever ran for office, Id do better as a Democrat than as a Republican - and thats not because Id be more liberal, because I\'m conservative. But the working guy would elect me. He likes me. When I walk down the street, those cabbies start yelling out their windows',
    'To be blunt, people would vote for me. They just would. Why? Maybe because I\'m so good looking',
    'If Hillary Clinton cant satisfy her husband what makes her think she can satisfy America',
    'John McCain is not a war hero. He\'s a war hero - he\'s a war hero cause he was captured. I Like people that weren\'t captured, OK, I hate to tell you.',
    'I look very much forward to showing my financials, because they are huge',
    'Sorry losers and haters, but my IQ is one of the highest - and you all know it! Please don\'t feel so stupid or insecure, it\'s not your fault',
    'I think Viagra is wonderful if you need it, if you have medical issues, if you\'ve had surgery. Ive just never needed it. Frankly, I wouldn\'t mind if there were an anti-Viagra, something with the opposite effect. I\'m not bragging. I\'m just lucky. I don\'t need it.',
    'She does have a very nice figure... If Ivanka weren\'t my daughter, perhaps Id be dating her',
    'I have never seen a thin person drinking Diet Coke',
    'My fingers are long and beautiful, as, it has been well documented, are various other parts of my body',
    'I think Id get along very well with Vladimir Putin. I just think so. People say What do you mean I think I would get along well with him',
    'Heidi Klum. Sadly shes no longer a 10',
    'Everything I have done virtually has been a tremendous success',
    'Actually throughout my life my two greatest assets have been mental stability and being like really smart. Crooked Hillary Clinton also played these cards very hard and as everyone knows went down in flames. I went from VERY successful businessman to top TV Star to President of the United States on my first try. I think that would qualify as not smart but genius and a very stable genius at that',
    'You know it really doesn\'t matter what they write as long as you\'ve got a young and beautiful piece of ass. But shes got to be young and beautiful.',
    'An extremely credible source has called my office and told me that Barack Obamas birth certificate is a fraud',
    'You know I\'m automatically attracted to beautiful I just start kissing them. Its like a magnet. Just kiss. I don’t even wait. And when you are a star, they let you do it. You can do anything. Grab them by the pussy. You can do anything.',
    'That makes me smart',
    'The response and recovery effort probably has never been seen for something like this. This is an island, surrounded by water. Big water. Ocean water',
    'Before a show I will go backstage and everyone\'s getting dressed, and everything else, and you know, no men are anywhere, and I am allowed to go in because I am the owner of the pageant and therefore I am inspecting it. You know I\'m inspecting because I want to make sure that everything is good You know they are standing there with no clothes. Is everybody okay.... And you see these incredible looking women and so I sort of get away with things like that.',
    'I would rarely leave the White House because there’s so much work to be done. I would not be a president who took vacations. I would not be a president that takes time off. You don’t have time to take time off. ',
    'Can you believe that, with all of the problems and difficulties facing the US, President Obama spent the day playing golf',
    'I would work. And I would make the country great again. That’s what you have to do',
    'We will have so much winning if I get elected that you may get bored with winning',
    'Am I morally obligated to defend the president every time somebody says something bad or controversial about him? I don\'t think so! ...If someone made a nasty or controversial statement about me to the president, do you really think he would come to my rescue? No chance!',
    'If Obama resigns from office NOW, thereby doing a great service to the country — I will give him free lifetime golf at any one of my courses!',
    'Russia, if you’re listening, I hope you’re able to find the 30,000 emails that are missing. I think you will probably be rewarded mightily by our press',
    'My wife says I\'m the biggest star in the world. But she might just be saying that because she\'s intelligent',
    '26,000 unreported sexual assults in the military-only 238 convictions. What did these geniuses expect when they put men & women together?',
    'Part of the beauty of me is that I\'m very rich',
    'It\'s certainly not groundbreaking news that the early victories by the women on \'The Apprentice\' were, to a very large extent, dependent on their sex appeal.',
    'I have black guys counting my money. … I hate it. The only guys I want counting my money are short guys that wear yarmulkes all day.',
    'Nobody has better respect for intelligence than Donald Trump.',
    'Despite the constant negative press covfefe.',
    'Why would Kim Jong-un insult me by calling me \'old,\' when I would NEVER call him \'short and fat?\' Oh well, I try so hard to be his friend - and maybe someday that will happen!',
    'Well, again John, there has been no collusion between the Trump campaign and Russians or Trump and Russians. No collusion. When I watch you interviewing all the people leaving their committees, I mean, the Democrats are all running for office, trying to say this that -- but bottom line, they all say there\'s no collusion. And there is no collusion',
    'There was tremendous collusion on behalf of the Russians and the Democrats',
    'I watched Alan Dershowitz the other day, he said, No. 1, there is no collusion, No. 2, collusion is not a crime, but even if it was a crime, there was no collusion. And he said that very strongly. He said there was no collusion. And he has studied this thing very closely. I’ve seen him a number of times. There is no collusion, and even if there was, it’s not a crime. But there’s no collusion. I don’t even say. I don’t even go that far.'

];

exports.handler = function(event, context, callback) {
    let alexa = Alexa.handler(event, context);
    alexa.appId = appID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetQuote');
    },
    'GetQuote': function () {
        const quotes = data;
        const index = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[index];
        const shouldEndSession = false;

        const speechOutput = randomQuote;
        // this.response.cardRenderer(skillName, randomQuote);
        this.response.cardRenderer(skillName, randomQuote, {smallImageUrl: imageURL, largeImageUrl: imageURL});

        this.response.speak(speechOutput);
        this.response.shouldEndSession(false);

        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        this.response.speak(helpMessage).listen(helpPrompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(stopMessage);
        this.response.shouldEndSession(true);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(stopMessage);
        this.response.shouldEndSession(true);
        this.emit(':responseReady');
    },
    'SessionEndedRequest': function () {
        console.log(`Session ended: ${this.event.request.reason}`);
    },
    'Unhandled': function () {
        this.attributes.speechOutput = this.t(helpMessage);
        this.attributes.repromptSpeech = this.t(helpPrompt);
        this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
        this.emit(':responseReady');
    },

};