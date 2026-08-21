/* ================================
   PART 1 — SETUP + REASONS 1–170
================================ */

const reasons = [
  
  "Because you guys make ordinary days memorable.",
  "Because our section is never boring.",
  "Because there is always someone making everyone laugh.",
  "Because we can be ourselves around each other.",
  "Because even simple moments become funny memories.",
  "Because we have our own inside jokes.",
  "Because we understand each other's humor.",
  "Because someone is always ready to help.",
  "Because we celebrate each other's small wins.",
  "Because you make school feel less stressful.",
  "Because everyone has their own personality.",
  "Because our differences make us interesting.",
  "Because somehow, we still manage to get along.",
  "Because we have survived so many school activities together.",
  "Because we make boring classes more entertaining.",
  "Because there is always a story to tell after class.",
  "Because our group chats are never truly quiet.",
  "Because someone always sends something random.",
  "Because our jokes become unforgettable memories.",
  "Because we know how to have fun together.",
  "Because we can laugh at the smallest things.",
  "Because everyone brings something different to the section.",
  "Because we have each other's backs.",
  "Because we know how to cheer each other up.",
  "Because sometimes we understand each other without words.",
  "Because our friendship grew naturally.",
  "Because we have experienced stressful deadlines together.",
  "Because we have complained about school together.",
  "Because we have celebrated together.",
  "Because we have learned together.",
  "Because we have grown together.",
  "Because we have made memories together.",
  "Because we have survived awkward moments together.",
  "Because someone always knows how to lighten the mood.",
  "Because our section has its own personality.",
  "Because our classroom feels different when everyone is there.",
  "Because missing one person somehow feels noticeable.",
  "Because everyone has a role in our little community.",
  "Because even the quiet ones have their moments.",
  "Because the loud ones keep the room alive.",
  "Because our differences make us interesting.",
  "Because our similarities bring us together.",
  "Because we don't need everything to be perfect.",
  "Because imperfect moments become the best memories.",
  "Because we can turn problems into jokes.",
  "Because we know how to enjoy the little things.",
  "Because we have memories no other section can copy.",
  "Because our stories are uniquely ours.",
  "Because we have grown closer without realizing it.",
  "Because this section became more than just a class.",
  
  "Because someone always has snacks.",
  "Because someone always asks what the homework is.",
  "Because someone always forgets the homework.",
  "Because someone is always asking, 'May quiz ba?'",
  "Because we somehow survive surprise quizzes.",
  "Because we celebrate when a teacher is absent.",
  "Because we panic when the teacher suddenly arrives.",
  "Because someone always says, 'Wait lang!'",
  "Because group activities become unforgettable.",
  "Because choosing group members can become a whole event.",
  "Because there is always one person who does everything.",
  "Because there is always one person who says, 'Ano gagawin?'",
  "Because we somehow finish things at the last minute.",
  "Because cramming became part of our lifestyle.",
  "Because our classroom reactions are priceless.",
  "Because everyone has a funny reaction.",
  "Because someone always laughs at the wrong time.",
  "Because someone always makes the teacher laugh.",
  "Because someone always gets called by the teacher.",
  "Because we all know who is most likely to be late.",
  "Because we know who always asks for answers.",
  "Because we know who is always prepared.",
  "Because we know who is always sleepy.",
  "Because we know who is always hungry.",
  "Because we know who is always noisy.",
  "Because we know who is secretly funny.",
  "Because we know each other's little habits.",
  "Because those habits make us feel familiar.",
  "Because we can predict each other's reactions.",
  "Because our jokes sometimes make no sense.",
  "Because somehow, we still laugh at them.",
  "Because one word can make the whole section laugh.",
  "Because one look can communicate everything.",
  "Because we have developed our own language.",
  "Because our inside jokes are impossible to explain.",
  "Because random pictures become memories.",
  "Because random videos become priceless.",
  "Because school days pass faster when we're together.",
  "Because waiting for dismissal is more fun together.",
  "Because breaks are never really boring.",
  "Because lunch conversations are unforgettable.",
  "Because random conversations become deep conversations.",
  "Because deep conversations eventually become jokes.",
  "Because we can switch from serious to chaotic instantly.",
  "Because our humor is unpredictable.",
  "Because our friendship doesn't always need planning.",
  "Because spontaneous moments are the best.",
  "Because random pictures become memories.",
  "Because random videos become priceless.",
  "Because we have our own collection of memories.",
  
  "Because you make me laugh when I need it.",
  "Because you make difficult days easier.",
  "Because you remind me that school isn't only about grades.",
  "Because you taught me the value of friendship.",
  "Because you taught me patience.",
  "Because you taught me teamwork.",
  "Because you taught me understanding.",
  "Because you taught me how to appreciate people.",
  "Because you made me more comfortable being myself.",
  "Because you accepted my weird side.",
  "Because you never made every moment feel serious.",
  "Because you gave me reasons to look forward to school.",
  "Because you made ordinary school days special.",
  "Because you gave me memories I will carry forward.",
  "Because you became part of my story.",
  "Because I became part of yours.",
  "Because we shared moments that cannot be repeated.",
  "Because time with you never feels completely wasted.",
  "Because even our mistakes became lessons.",
  "Because our embarrassing moments became funny stories.",
  "Because we know how to forgive small mistakes.",
  "Because we know how to move forward.",
  "Because we don't let one bad day define us.",
  "Because we can start again the next day.",
  "Because we support each other's progress.",
  "Because we notice when someone needs help.",
  "Because someone always offers assistance.",
  "Because kindness still exists in our classroom.",
  "Because people care more than they sometimes show.",
  "Because we celebrate birthdays together.",
  "Because birthday greetings become special memories.",
  "Because simple celebrations can make someone happy.",
  "Because we remember important moments.",
  "Because we appreciate each other's efforts.",
  "Because we know how hard everyone works.",
  "Because everyone has their own struggles.",
  "Because everyone still shows up.",
  "Because showing up matters.",
  "Because we encourage each other.",
  "Because we remind each other not to give up.",
  "Because someone always says, 'Kaya mo yan.'",
  "Because someone always helps when things get difficult.",
  "Because we know how to motivate each other.",
  "Because we make achievements feel more meaningful.",
  "Because success feels better when shared.",
  "Because losing doesn't feel as bad when we're together.",
  "Because we learn from our failures.",
  "Because we don't always take ourselves too seriously.",
  "Because we know how to laugh after stressful moments.",
  "Because we keep going.",
  
  "Because every person adds color to the section.",
  "Because every personality makes us different.",
  "Because everyone has something worth knowing.",
  "Because everyone has a story.",
  "Because everyone has something they are good at.",
  "Because we get to witness each other's growth.",
  "Because we have changed since the beginning.",
  "Because we have become more mature together.",
  "Because we have learned from one another.",
  "Because we influence each other in little ways.",
  "Because we have different talents.",
  "Because we have different interests.",
  "Because we have different dreams.",
  "Because we still share the same classroom.",
  "Because we share the same memories.",
  "Because we share the same struggles.",
  "Because we share the same deadlines.",
  "Because we share the same victories.",
  "Because we share the same laughter.",
  "Because we share countless ordinary moments."
  
];
/* ================================
   PART 2 — REASONS 171–340
================================ */

/*
   Continue adding these to the SAME
   reasons array from script1.js.
*/

reasons.push(

"Because those ordinary moments became extraordinary memories.",
"Because our section has its own identity.",
"Because no other section can recreate our dynamic.",
"Because nobody can copy our inside jokes.",
"Because nobody can recreate our exact memories.",
"Because our chaos is uniquely ours.",
"Because our friendships are uniquely ours.",
"Because our story is uniquely ours.",
"Because every person matters.",
"Because even the smallest contribution matters.",
"Because someone always makes a difference.",
"Because someone always makes the room brighter.",
"Because someone always makes the room louder.",
"Because both are needed.",
"Because silence and chaos somehow balance each other.",
"Because we have learned to coexist.",
"Because we have learned to compromise.",
"Because we have learned to cooperate.",
"Because we have learned to communicate.",
"Because we have learned to understand differences.",
"Because we aren't perfect.",
"Because our imperfections make us real.",
"Because our mistakes make our story human.",
"Because we don't need to be perfect to be memorable.",
"Because we simply need to be together.",
"Because being together is already enough.",
"Because our presence matters.",
"Because our laughter matters.",
"Because our memories matter.",
"Because this chapter matters.",

"Because someone always has a funny nickname.",
"Because nicknames somehow become permanent.",
"Because teasing becomes a form of friendship.",
"Because everyone has someone they always joke with.",
"Because classroom banter is unmatched.",
"Because we know exactly what makes each other laugh.",
"Because random noises can start a laughing session.",
"Because one person laughing can make everyone laugh.",
"Because contagious laughter is real.",
"Because sometimes we laugh without knowing why.",
"Because sometimes the joke isn't even funny.",
"Because the reaction makes it funny.",
"Because our facial expressions tell entire stories.",
"Because our reactions during presentations are hilarious.",
"Because our reactions during recitations are unforgettable.",
"Because someone always avoids eye contact with the teacher.",
"Because someone suddenly becomes invisible during recitation.",
"Because everyone suddenly becomes quiet when attendance starts.",
"Because attendance somehow feels like a suspense movie.",
"Because group reporting brings out everyone's personalities.",
"Because presentations can become comedy shows.",
"Because rehearsals can be more chaotic than the actual performance.",
"Because mistakes sometimes make performances better.",
"Because we clap for each other.",
"Because we cheer for each other.",
"Because we celebrate every successful performance.",
"Because we encourage nervous classmates.",
"Because we make people feel less alone.",
"Because we remind each other that mistakes are okay.",
"Because nobody has everything figured out.",
"Because we are all learning.",
"Because we are all growing.",
"Because we are all trying.",
"Because we are all becoming different versions of ourselves.",
"Because we get to witness that transformation.",
"Because one day, these moments will be memories.",
"Because we are making those memories right now.",
"Because we don't know how special these days are until they're gone.",
"Because someday we'll miss the noise.",
"Because someday we'll miss the jokes.",
"Because someday we'll miss the random conversations.",
"Because someday we'll miss the classroom.",
"Because someday we'll miss seeing everyone every day.",
"Because someday we'll wish we could return to these moments.",
"Because today is tomorrow's memory.",
"Because every school day adds another story.",
"Because every story makes our section special.",
"Because every laugh adds another memory.",
"Because every challenge brings us closer.",
"Because we are creating a chapter worth remembering.",

"Because we have survived stressful deadlines.",
"Because we have survived difficult activities.",
"Because we have survived presentations.",
"Because we have survived exams.",
"Because we have survived group projects.",
"Because we have survived early mornings.",
"Because we have survived long classes.",
"Because we have survived tiring school days.",
"Because we survived together.",
"Because surviving together makes memories stronger.",
"Because we know what it feels like to struggle together.",
"Because we know what it feels like to succeed together.",
"Because we know what it feels like to wait for results together.",
"Because we know how to celebrate good news.",
"Because we know how to comfort each other after bad news.",
"Because we don't leave people behind easily.",
"Because we try to include everyone.",
"Because inclusion makes a classroom feel like a community.",
"Because our section feels like a small family sometimes.",
"Because we look after one another.",
"Because we notice when someone is missing.",
"Because we ask where someone is.",
"Because we notice when someone seems quiet.",
"Because we check on our friends.",
"Because small acts of care matter.",
"Because kindness doesn't have to be loud.",
"Because sometimes a simple 'okay ka lang?' is enough.",
"Because sometimes listening is enough.",
"Because sometimes laughter is the best comfort.",
"Because sometimes just being there matters.",
"Because we have been there for each other.",
"Because we have shared happy moments.",
"Because we have shared stressful moments.",
"Because we have shared awkward moments.",
"Because we have shared serious moments.",
"Because we have shared random moments.",
"Because all of them became part of our story.",
"Because memories aren't always planned.",
"Because our best memories were often unexpected.",
"Because unexpected moments make the best stories.",
"Because our stories will someday make us laugh again.",
"Because old pictures will bring back old feelings.",
"Because old videos will bring back old voices.",
"Because old messages will remind us how we used to talk.",
"Because old jokes will still be funny.",
"Because some memories never really disappear.",
"Because people leave pieces of themselves in our memories.",
"Because everyone has left a mark on this section.",
"Because I have changed because of the people around me.",
"Because I am grateful that you are part of my journey.",

"Because you made school feel like a place I belonged.",
"Because you gave me people to talk to.",
"Because you gave me people to laugh with.",
"Because you gave me people to learn with.",
"Because you gave me people to celebrate with.",
"Because you gave me people to struggle with.",
"Because you gave me people to remember.",
"Because friendship can grow from simple conversations.",
"Because some classmates became close friends.",
"Because some strangers became familiar faces.",
"Because familiar faces became important people.",
"Because important people became memories.",
"Because memories become part of who we are.",
"Because this section became part of who I am.",
"Because I learned more than lessons from you.",
"Because I learned how people can be different and still connect.",
"Because I learned how to appreciate differences.",
"Because I learned that everyone has their own perspective.",
"Because I learned that teamwork isn't always easy.",
"Because I learned that teamwork is still worth it.",
"Because I learned to communicate better.",
"Because I learned to listen.",
"Because I learned to understand.",
"Because I learned to forgive.",
"Because I learned to appreciate.",
"Because I learned to be grateful.",
"Because I learned to enjoy the present.",
"Because you made me realize how fast time moves.",
"Because every school year passes too quickly.",
"Because every chapter eventually ends.",
"Because endings make memories more valuable.",
"Because knowing things won't last forever makes them precious.",
"Because I want to appreciate these moments while they last.",
"Because I don't want to take this section for granted.",
"Because these people won't always be beside me.",
"Because our paths may eventually change.",
"Because our classrooms may change.",
"Because our schedules may change.",
"Because our priorities may change.",
"Because we may meet new people.",
"Because we may go different directions.",
"Because that makes our current time even more special.",
"Because right now, we are together.",
"Because right now, we are creating memories.",
"Because right now, we are still a section.",
"Because right now, we have each other.",
"Because right now, this is our chapter.",
"Because this chapter deserves to be remembered.",
"Because these people deserve to be appreciated.",
"Because I am thankful for every moment."

);
/* ================================
   PART 3 — REASONS 351–500
   + WEBSITE FUNCTIONS
================================ */

reasons.push(

"Because you made me laugh unexpectedly.",
"Because you made me smile on difficult days.",
"Because you made boring moments enjoyable.",
"Because you made stressful moments lighter.",
"Because you made ordinary days meaningful.",
"Because you gave me reasons to enjoy coming to school.",
"Because you made school feel less like a routine.",
"Because you made classrooms feel alive.",
"Because you made memories without even trying.",
"Because you showed me that friendship can happen anywhere.",
"Because you reminded me to enjoy my youth.",
"Because you reminded me not to take everything too seriously.",
"Because you taught me to laugh at myself.",
"Because you made mistakes less embarrassing.",
"Because you made failures easier to accept.",
"Because you made achievements more exciting.",
"Because you made challenges easier to face.",
"Because you made school life more colorful.",
"Because you made every week different.",
"Because you made every month memorable.",
"Because you made this school year special.",
"Because you made this chapter worth remembering.",
"Because every person has a different kind of energy.",
"Because some people bring peace.",
"Because some people bring chaos.",
"Because some people bring laughter.",
"Because some people bring wisdom.",
"Because some people bring encouragement.",
"Because some people bring creativity.",
"Because some people bring confidence.",
"Because some people bring kindness.",
"Because some people bring motivation.",
"Because every kind of person is valuable.",
"Because our differences complete the section.",
"Because we don't need to be the same.",
"Because being different makes us interesting.",
"Because our personalities fit together somehow.",
"Because our friendship is unpredictable.",
"Because our memories are unforgettable.",
"Because our bond grew through time.",
"Because time gave us countless stories.",
"Because our stories gave us countless laughs.",
"Because our laughs became unforgettable moments.",
"Because unforgettable moments became memories.",
"Because memories are something nobody can take away.",
"Because our memories will stay with us.",
"Because our section will always be part of our school story.",
"Because our school story is part of our lives.",
"Because this time in our lives will never happen exactly the same way again.",
"Because that makes it special.",

"Because you are part of my school memories.",
"Because you are part of my everyday life.",
"Because you became familiar faces I looked forward to seeing.",
"Because your presence made a difference.",
"Because your absence was noticeable.",
"Because your laughter became familiar.",
"Because your voices became familiar.",
"Because your personalities became familiar.",
"Because your jokes became familiar.",
"Because familiarity eventually became comfort.",
"Because our classroom became a place of memories.",
"Because every seat has a story.",
"Because every corner has a memory.",
"Because every activity has a story.",
"Because every picture captures a moment.",
"Because every moment becomes part of our timeline.",
"Because our timeline is filled with chaos.",
"Because our chaos is part of what makes us us.",
"Because nobody else has our exact memories.",
"Because nobody else has lived our exact school days.",
"Because nobody else knows all our inside jokes.",
"Because nobody else can fully understand our bond.",
"Because only we know how it feels to be this section.",
"Because only we know our funniest moments.",
"Because only we know our struggles.",
"Because only we know how much we've grown.",
"Because only we know how far we've come.",
"Because we started as classmates.",
"Because we slowly became something more.",
"Because some of us became friends.",
"Because some became close friends.",
"Because some became people we will never forget.",
"Because some friendships may last beyond school.",
"Because some memories definitely will.",
"Because even temporary moments can have permanent meaning.",
"Because even small friendships can leave big impacts.",
"Because even simple conversations can be remembered for years.",
"Because even ordinary days can become precious.",
"Because we don't realize the value of moments until they become memories.",
"Because I want to appreciate them now.",
"Because I want to remember the laughter.",
"Because I want to remember the chaos.",
"Because I want to remember the friendship.",
"Because I want to remember the lessons.",
"Because I want to remember the people.",
"Because I want to remember the little things.",
"Because the little things often become the biggest memories.",
"Because our story isn't only about schoolwork.",
"Because our story is about people.",
"Because our story is about growing up together.",

"Because one day we'll look back and realize how young we were.",
"Because one day we'll realize how much we changed.",
"Because one day we'll miss these ordinary days.",
"Because one day we'll miss the noise.",
"Because one day we'll miss the jokes.",
"Because one day we'll miss the random conversations.",
"Because one day we'll miss the familiar faces.",
"Because one day we'll miss having everyone together.",
"Because one day we'll wish for one more normal school day.",
"Because one day these moments will become stories.",
"Because I hope we tell those stories with a smile.",
"Because I hope we remember each other kindly.",
"Because I hope we remember how much we laughed.",
"Because I hope we remember how we helped each other.",
"Because I hope we remember how we grew.",
"Because I hope we remember the good times.",
"Because even the bad times taught us something.",
"Because every challenge became part of our growth.",
"Because every mistake became part of our story.",
"Because every achievement became something to celebrate.",
"Because every day gave us another memory.",
"Because every person gave the section another reason to exist.",
"Because without each person, the section wouldn't be the same.",
"Because every person is irreplaceable in their own way.",
"Because our differences make the section complete.",
"Because our friendship makes the section special.",
"Because our memories make the section unforgettable.",
"Because our laughter makes the section alive.",
"Because our struggles make the section stronger.",
"Because our growth makes the section meaningful.",
"Because our story is still being written.",
"Because there are still memories waiting to happen.",
"Because there are still jokes we haven't made.",
"Because there are still pictures we haven't taken.",
"Because there are still achievements to celebrate.",
"Because there are still challenges to overcome.",
"Because there are still days to enjoy.",
"Because there are still moments to appreciate.",
"Because there is still time to make memories.",
"Because I want to enjoy every remaining moment with you.",
"Because this section became a chapter I never expected to love this much.",
"Because you made my school life more meaningful.",
"Because you made this journey less lonely.",
"Because you made me feel like I belonged somewhere.",
"Because you gave me memories worth keeping.",
"Because you gave me people worth remembering.",
"Because you made this chapter worth living.",
"Because someday, I will look back and be grateful that we were together.",
"Because out of all the sections I could have been part of, I got to be part of ours.",

/* ================================
   REASON #500
================================ */

"Because no matter where life takes us, this section will always be one of the chapters I'll be grateful I got to live."

);


/* =====================================================
   ELEMENTS
===================================================== */

const intro = document.getElementById("intro");
const main = document.getElementById("main");
const finalScreen = document.getElementById("finalScreen");

const enterBtn = document.getElementById("enterBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

const reasonNumber = document.getElementById("reasonNumber");
const reasonText = document.getElementById("reasonText");
const counter = document.getElementById("counter");

let currentReason = 1;


/* =====================================================
   CREATE STARS
===================================================== */

function createStars(container, amount) {

    for (let i = 0; i < amount; i++) {

        const star = document.createElement("div");

        star.classList.add("star");

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 70 + "%";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        container.appendChild(star);
    }
}

createStars(
    document.getElementById("stars"),
    120
);


/* =====================================================
   ENTER
===================================================== */

enterBtn.addEventListener("click", () => {

    intro.classList.add("hide");

    setTimeout(() => {

        main.classList.add("show");

    }, 700);

});


/* =====================================================
   SHOW REASON
===================================================== */

function displayReason(number) {

    reasonText.classList.add("fade");

    setTimeout(() => {

        reasonNumber.textContent =
            "#" + number;

        reasonText.textContent =
            reasons[number - 1];

        counter.textContent =
            number + " / 500";

        reasonText.classList.remove("fade");

    }, 300);
}


/* =====================================================
   NEXT
===================================================== */

nextBtn.addEventListener("click", () => {

    if (currentReason < 499) {

        currentReason++;

        displayReason(currentReason);

    }

    else if (currentReason === 499) {

        currentReason = 500;

        showFinal();

    }

});


/* =====================================================
   FINAL SCREEN
===================================================== */

function showFinal() {

    finalScreen.classList.add("show");

    createStars(
        document.querySelector(".final-stars"),
        120
    );

}


/* =====================================================
   RESTART
===================================================== */

restartBtn.addEventListener("click", () => {

    location.reload();

});


/* =====================================================
   KEYBOARD
===================================================== */

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Enter" ||
        event.key === "ArrowRight"
    ) {

        if (!intro.classList.contains("hide")) {

            enterBtn.click();

        }

        else if (
            !finalScreen.classList.contains("show")
        ) {

            nextBtn.click();

        }

    }

});