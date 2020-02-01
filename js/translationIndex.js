//variables
const english = "eng";
const polish = "pl";
const webUrl = "index.html#"


// session variable
var langSession = sessionStorage.getItem('lang');
if (langSession == null) langSession = english;
console.log(langSession);

reloadSession(langSession);

function reloadSession(langSession) {
    location.href = webUrl + langSession;
}

// Language translations
const language = {
    eng: {
        quotation: `“Those who are crazy enough to think they can change the world usually do.” `,
        aboutMe: `START of the ATLANTIS PROJECT`,
        main: `I was born in Poland in the last century. Inventiveness is my life passion. <br>
            I’m lucky that I don’t have to stick to just one scientific discipline. When an idea occurs to me, 
            I don’t think whether I have the sufficient knowledge on the subject.<br>
            I investigate, learn, and discover the problem by myself, and then I refer to the literature. What does it give me?<br> Only
            that
            I won’t learn “beforehand” that it is impossible, and that
            I sometimes manage to find a new solution.`,
        video1: `Voice Prosthetics - Electronic Larynx`,
        sport: `Something about sports`,
        sportMain: `I’m not a spectator, I don’t like watching sport. For this reason,
                    I’m in the minority. Oh, well, I must deal with it. That’s not all, however,
                    I like sport when I do it myself. I’m not going to describe sports
                    disciplines that I find pleasurable. You can see everything in the film.`,
        contactt: `Contact`,
        degree: `M.Sc. Eng. Wojciech Musialik`,
        yt: `Check out my youtube channel`,
        website: `My other website`,

    },
    pl: {
        quotation: `"Tylko ci wystarczająco szaleni, by myśleć, że są w stanie zmienić świat, są tymi, którzy go naprawdę zmieniają." `,
        aboutMe: `Projekt "ATLANTIS" ruszył!`,
        main: `Urodziłem się w Polsce w zeszłym wieku. Moją pasją życiową jest wynalazczość. Mam to szczęście, że nie muszę trzymać się jednej dyscypliny naukowej. Gdy wpada mi do głowy pomysł nie myślę o tym czy mam wystarczającą wiedzę na ten temat. Drążę, poznaję, odkrywam problem sam, potem sięgam do literatury. Co mi to daje? Tylko tyle, że „zawczasu” nie dowiem się, że jest to niemożliwe i czasami udaje mi się znaleźć nowe rozwiązanie.`,
        video1: `Protetyka głosu - Krtań elektronowa`,
        sport: `Coś o sporcie`,
        sportMain: `Nie jestem kibicem, nie lubię oglądać sportu. Z tego powodu jestem
                    w mniejszości. Trudno, muszę się z tym pogodzić. Jednak to nie wszystko,
                    lubię sport, jeżeli sam go uprawiam. Nie będę opisywał dyscyplin
                    sportowych, które sprawiają mi przyjemność. Wszystko przedstawiam w filmie.`,
        contactt: `Kontakt`,
        degree: `mgr inż. Wojciech Musialik`,
        yt: `Sprawdź mój kanał na YouTube`,
        website: `Moja strona internetowa`,

        }
};

// Define language via window hash
if (window.location.hash) {
    if (window.location.hash === "#pl") {
        quotation.textContent = language.pl.quotation;
        aboutMe.textContent = language.pl.aboutMe;
        main.textContent = language.pl.main;
        video1.textContent = language.pl.video1;
        sport.textContent = language.pl.sport;
        sportMain.textContent = language.pl.sportMain;
        contactt.textContent = language.pl.contactt;
        degree.textContent = language.pl.degree;
        yt.textContent = language.pl.yt;
        website.textContent = language.pl.website;
    }
}

// reload page
const pl = document.getElementById('pl');
pl.addEventListener('click', () => {
    location.href = webUrl + polish;
    sessionStorage.setItem('lang', 'pl');
    location.reload()
});
const eng = document.getElementById('eng');
eng.addEventListener('click', () => {
    location.href = webUrl + english;
    sessionStorage.setItem('lang', 'eng');
    location.reload()
});