var devdata = [
    {
        "Name": "Austin Nevins",
        "Age": "27",
        "Picture": "./images/austin.jpg",
        "Website": "www.amnevins.com",
        "LinkedIn": "https://www.linkedin.com/in/austin-nevins-2906948a",
        "Codepen": "http://codepen.io/amnevins/",
        "Github": "https://github.com/amnevins",
        "Occupation": "Web Development Engineer.",
        "DevDay": "All",
        "Languages": ["JavaScript", "MongoDB"],
        "Frameworks": ["Meteor", "Node", "Express", "Angular", "React", "React-Native", "And more..."],
        "Bio": "Self taught, self driven.  I benefited greatly from code day as a new developer years ago with Brandon and Saman.  Since then I've kept the event running and growing. I enjoy learning something new around the industry every week and encourage newer devs."
    },
    {
        "Name": "Hailey Skelcher",
        "Age": "27",
        "Picture": "https://scontent.fsnc1-1.fna.fbcdn.net/v/t31.0-8/14524993_10157542794230593_8940475491958740022_o.jpg?oh=d9021ee280bb415103113014a184770f&oe=5909D272",
        "Website": "www.haileyskelcher.com",
        "LinkedIn": "https://www.linkedin.com/in/haileyskelcher",
        "Codepen": "http://codepen.io/hdskelcher/",
        "Github": "https://github.com/hdskelcher",
        "Occupation": "UX Designer",
        "DevDay": "100+",
        "Languages": ["JavaScript", "HTML", "CSS"],
        "Frameworks": ["Meteor", "jQuery", "Bootstrap", "Semantic UI", "LESS"],
        "Bio": "Hailey received her BA in Film & Video Studies from Central Washington University with a specialization in production. She continues her education everyday through the use of Lynda.com and Freecodecamp.com."
    },
    {
        "Name": "Saman Maftoun",
        "Age": "28",
        "Picture": "./images/saman.JPG",
        "Website": "WEBSITE_URL",
        "LinkedIn": "https://www.linkedin.com/in/saman-maftoun-a43b51132/",
        "Codepen": "YOUR_CODEPEN_URL",
        "Github": "https://github.com/maftoun95",
        "Occupation": "Web Development Engineer. Vice President of team morale",
        "DevDay": "100+",
        "Languages": ["JavaScript", "Python", "C#", "HTML/CSS."],
        "Frameworks": ["Meteor", "Node", "Angular", "Express", "jQuery", "Bootstrap", "Semantic UI", ".NET Core", "Flask", "Django"],
        "Bio": "I am a tinkerer with the mindset of a persistent student. Always eager to play with new technology && software, I\'ve made myself comfortable with picking up and toying with new languages/hardware frequently. I\'m very enthusiastic about web/software development and I\'m very happy to know that over a year since begining to learn programming, that enthusiasm hasn\'t waned. On the side I go rock climbing, play Street Fighter, and support Arsenal FC."
    },
    {
        "Name": "Collin Kee",
        "Age": "39",
        "Picture": "./images/transformer.jpeg",
        "Website": "WEBSITE_URL",
        "LinkedIn": "https://www.linkedin.com/in/collinkee/",
        "Codepen": "YOUR_CODEPEN_URL",
        "Github": "YOUR_GITHUB_URL",
        "Occupation": "House Spouse/Web Dev",
        "DevDay": "1",
        "Languages": ["HTML","CSS"],
        "Frameworks": ["bootstrap"],
        "Bio": "10 + years retail management currently making a career change."
    },
    {
        "Name": "Kennon Houck",
        "Age": "42",
        "Picture": "./images/kennon.jpg",
        "Website": "www.kennonhouck.com",
        "LinkedIn": "https://www.linkedin.com/in/kennon-houck-11bb8b3a",
        "Codepen": "https://codepen.io/kennon317/",
        "Github": "https://github.com/kennh",
        "Occupation": "web developer",
        "DevDay": "25",
        "Languages": ["python", "c#", "javascript", "node.js"],
        "Frameworks": ["django", "flask", "meteor", "asp.net", "core"],
        "Bio": "I have a mulitple degrees in Exercise Science. I love learning and nature.  I have been working on web development for just over a year.  I am currently attending Coding Dojo to further my web devolopment skills."
    }
];

// This is our IIFE immediately invoked function expression, it's a common pattern to modularize your code, create private contexts, and runs immediately.
(function() {

    // Target the element in html that has class original-clone, e.g., this element contains an entire html layout for each dev's info card.
    var blueprint = document.querySelector('.original-clone');

    /* IMPORTANT !!!
            Our dev data exists in an array hard coded above.  In each array position is a dev object (JSON).  We will use forEach to loop
            through each position of our dev array, and inside the forEach function( we have 'dev') this represents the entire JSON object
            in that position.  We can then refer to each piece of data in our json by using 'dev.NAME_OF_JSON_KEY' e.g. 'dev.Picture', each loop
            will target elements in the HTML and set their text or properties equal to that current iteration dev attributes.
     */
    devdata.forEach(function(dev) {

    // Create a copy of the layout blueprint
        var newDevCard = blueprint.cloneNode(true);

    // Find element with class js-picture that exists in our copy and set it's src attribute to the dev's Picture value.
        var pictureNode = newDevCard.querySelector('.js-picture');
        pictureNode.setAttribute('src', dev.Picture);

    // Find an element with class js-occupation that exists in our copy and set it's text value to the dev's Occupation value.
        var occupationNode = newDevCard.querySelector('.js-occupation');
        occupationNode.innerText = dev.Occupation;

    // Find an element with class js-website that exists in our copy and set it's text value to the dev's Website value.
        var websiteNode = newDevCard.querySelector('.js-website');
        websiteNode.setAttribute('href', dev.Website);

    // Find an element with class js-github that exists in our copy and set it's text value to the dev's Website value.
        var githubNode = newDevCard.querySelector('.js-github');
        githubNode.setAttribute('href', dev.Github);

    // Find an element with class js-linkedin that exists in our copy and set it's text value to the dev's Website value.
        var linkedInNode = newDevCard.querySelector('.js-linkedin');
        linkedInNode.setAttribute('href', dev.LinkedIn);

    // Find an element with class js-age that exists in our copy and set it's text value to the dev's Age value.
        var ageNode = newDevCard.querySelector('.js-age');
        ageNode.innerText = dev.Age;

    // Find an element with class js-name that exists in our copy and set it's text value to the dev's Name value.
        var nameNode = newDevCard.querySelector('.js-name');
        nameNode.innerText = dev.Name;

    // Find an element with class js-bio that exists in our copy and set it's text value to the dev's Bio value.
        var bioNode = newDevCard.querySelector('.js-bio');
        bioNode.innerText = dev.Bio;

    // Find an element with class js-devday that exists in our copy and set it's text value to the dev's DevDay value.
        var devDayNode = newDevCard.querySelector('.js-devday');
        devDayNode.innerText = dev.DevDay;

    // Find an element with class js-languages that exists in our copy and append <li> elements to it for EACH Languages value (it's an array).
        var languagesContainerElement = newDevCard.querySelector('.js-languages');
        var languagesArray = dev.Languages;
        languagesArray.forEach(function (language) {

            // create an li element for the current language in the array and set it's text to that language
            var languageListItem = document.createElement('li');
            languageListItem.innerText = language;

            // append the li to the element with class of js-languages
            languagesContainerElement.appendChild(languageListItem);

        });

    // Find an element with class js-frameworks that exists in our copy and append <li> elements to it for EACH Framework value (it's an array).
    var frameworksContainerElement = newDevCard.querySelector('.js-frameworks');
    var frameworkArray = dev.Frameworks;
        frameworkArray.forEach(function (framework) {

        // create an li element for the current framework in the array and set it's text to that language
        var frameworkListItem = document.createElement('li');
        frameworkListItem.innerText = framework;

        // append the li to the element with class of js-languages
            frameworksContainerElement.appendChild(frameworkListItem);

        });

    /*
        ATTACH: attach newDevCard to the 'dev-holder' element ( we have to query the document now to get this because its outside scope of newDevCard ) it's
        a container for all the dev cards, and we need to set our display to '' because our blueprint starts hidden and stays hidden but we need to show the copy.
    */
    var devHolderContainer = document.querySelector('.js-dev-holder');
    newDevCard.removeAttribute('style');
    devHolderContainer.appendChild(newDevCard);


    });



    // you have to call an IIFE with '()' at the end to invoke it e.g. (function() { code })();
})();


