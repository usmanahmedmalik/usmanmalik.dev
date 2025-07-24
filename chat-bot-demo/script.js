/*
    script - V 0.1. This code works for adding the options
*/

const categoryOptions = {
    context_company: ["Alleen", "Met vrienden" ,"Met familie","Met mijn partner", "Met medestudenten", "Met collega's", "Met kennissen", "Met vreemden/anderen"],
    context_location:["Thuis","Onderweg","School/universiteit","Openbare locatie","Werk","Bij vriend(en)/familie thuis"],
    context_activity: ["Alleen studeren","Met anderen studeren", "Een les volgen", "Onderweg", "Werken", "In een gesprek", "Ontspannen, e.g., zitten/liggen, gamen, lezen", "Sporten", "Aan het eten", "Huishoudelijk klusje", "Anders"],

    context_onoff: ["Online", "Offline"],
    context_physical: [" 1 (e.g., rusten)","2 (e.g., zitten)", "3 (e.g., lopen)",  "4 (e.g., huishoudelijke taak zoals stofzuigen)", "5 (e.g., fietsen)", "6 (e.g., tennissen)", "7 (e.g., rennen)"],

    affect_PA1: ["helemaal niet", "een beetje", "enigszins", "matig", "redelijk", "erg", "zeer"],
    affect_PA2: ["helemaal niet", "een beetje", "enigszins", "matig", "redelijk", "erg", "zeer"],
    affect_NA1: ["helemaal niet", "een beetje", "enigszins", "matig", "redelijk", "erg", "zeer"],
    affect_NA2: ["helemaal niet", "een beetje", "enigszins", "matig", "redelijk", "erg", "zeer"],

    stress: ["helemaal niet", "een beetje", "enigszins", "matig", "redelijk", "erg", "zeer"],

    vitality_VL1: ["helemaal niet", "een beetje", "enigszins", "matig", "redelijk", "erg", "zeer"],
    vitality_VL2: ["helemaal niet", "een beetje", "enigszins", "matig", "redelijk", "erg", "zeer"],

    social_wellbeing_SO1: ["helemaal niet", "een beetje", "enigszins", "matig", "redelijk", "erg", "zeer"],
    social_wellbeing_SO2: ["helemaal niet", "een beetje", "enigszins", "matig", "redelijk", "erg", "zeer"],
    social_wellbeing_SO3: ["helemaal niet", "een beetje", "enigszins", "matig", "redelijk", "erg", "zeer"],

    engagement_burden: ["helemaal niet", "een beetje", "enigszins", "matig", "redelijk", "erg", "zeer"],
    engagement_disclosure: ["helemaal niet", "een beetje", "enigszins", "matig", "redelijk", "erg", "zeer"],
    perception_SP: ["helemaal niet", "een beetje", "enigszins", "matig", "redelijk", "erg", "zeer"],

    perception_AN: null, //No options handled by slider
    welcome: null, // No options for welcome
    submit: ["Tot ziens"],
    end: null
    };
const questionBank = {
        welcome: [
            "Hey hallo student, goed je weer te zien!",
            "Hey hallo student, goed je weer te zien 😊",
            "Hey hallo student, dank voor je reactie 😊",
            "Hey hallo student, dank voor je reactie!",
            "Hallo student, de onderzoekers zullen het zeker waarderen dat je weer reageert!",
            "Hoi student, de onderzoekers zullen het zeker waarderen dat je weer reageert!",
            "Hallo student, de onderzoekers zullen het zeker waarderen dat je weer reageert 😊",
            "Hoi student, de onderzoekers zullen het zeker waarderen dat je weer reageert 😊",
            "Hey hallo! Na ons gesprekje weer zullen de onderzoekers een nog beter beeld hebben van jullie welbevinden. Top 😊",
            "Hey hallo! Na ons gesprekje weer zullen de onderzoekers een nog beter beeld hebben van jullie welbevinden. Top!",
            "Ha student, na ons gesprekje weer zullen de onderzoekers een nog beter beeld hebben van jullie welbevinden. Top 😊",
            "Ha student, na ons gesprekje zullen de onderzoekers een nog beter beeld hebben van jullie welbevinden. Top!",
            "Hey hallo je bent er weer, wat fijn 😊",
            "Hey hallo je bent er weer, wat fijn!",
            "Hey, je bent weer terug! Fijn dat je er bent 😊",
            "Ha! Dankjewel voor je reactie 😊",
-           "Hey hallo, bedankt voor je snelle reactie!",
            "Hey hallo, bedankt voor je snelle reactie 😊",
            "Hoi, je reactie zal de onderzoekers zeker goed doen 😊",
            "Hallo daar, de onderzoekers zullen heel blij zijn dat je reageert 😊",
            "Hallo daar, de onderzoekers zullen heel blij zijn dat je reageert!",
            "Hallo daar, goed je weer te zien!",
            "Hallo daar, goed je weer te zien 😊",
            "Hallo daar, de onderzoekers zullen je reactie fijn vinden!",
            "Hallo daar, de onderzoekers zullen je reactie fijn vinden 😊",
            "Hallo daar, fijn dat je weer met mij de vragen wilt doornemen 😊",
            "Hallo daar, fijn dat je weer met mij de vragen wilt doornemen!",
            "Hey hallo, daar ben je weer! Na ons gesprekje zullen de onderzoekers een duidelijker beeld van jullie situatie hebben. Top 😊",
            "Hey, daar ben je weer 😊 Na ons gesprekje zullen de onderzoekers een duidelijker beeld van jullie situatie hebben. Dat is mooi!",
            "Hoi student, wat goed dat je weer reageert 😊",
            "Hoi student, wat goed dat je weer reageert!",
            "Hey student, goed je weer te zien! Samen komen we door al die belangrijke vragen heen 😊",
            "Hey student, goed je weer te zien 😊 Samen komen we door al die belangrijke vragen heen!",
            "Hey hallo, dank voor je reactie! Samen zullen we de vragen doorlopen, gaat goed komen toch ;)",
            "Hoi student, dank voor je reactie! Samen zullen we de vragen doorlopen, gaat wel lukken toch ;)"
        ],
        instructions: [
            "Ik zal je mijn vragen over je welbevinden nu sturen. Denk terug aan het moment vlak voordat je de notificatie zag.",
            "Ik zal je nu de vragen over je welbevinden sturen. Denk hierbij even goed terug aan het moment vlak voordat je de notificatie zag.",
            "Hier komen de vragen over je welbevinden! Denk eerst nog goed terug aan het moment vlak voordat je de notificatie zag.",
            "De vragen over je welbevinden komen er nu aan! Denk eerst nog wel goed terug aan het moment vlak voordat je de notificatie zag.",
            "Ik ga je nu de vragen over je welbevinden sturen. Probeer terug te denken aan hoe je je voelde vlak voordat je de notificatie zag.",
            "Ik stuur je nu de vragen over je welbevinden. Haal weer even terug in je gedachten het moment vlak voordat je de notificatie zag. ",
            "De vragen over je welbevinden komen eraan! Probeer even het moment terug te halen vlak voordat je de notificatie zag. ",
            "Laat ik je de vragen over je welbevinden sturen! Denk even terug aan het moment vlak voordat je de notificatie zag. ",
            "Hier komen de vragen over je welbevinden! Probeer aan het moment vlak voor de notificatie na te denken. ",
            "Hier gaan we, de vragen over je welbevinden komen eraan! Denk eerst nog goed terug aan het moment vlak voordat je de notificatie zag. ",
            "Hier komen de vragen over je welbevinden. Probeer je het moment vlak voor de notificatie te herinneren. ",
            "De vragen over je welbevinden zijn onderweg! Sta eerst goed stil bij het moment vlak voordat je de notificatie zag.",
            "We gaan door met de vragen over je welbevinden. Probeer je het moment vlak voor je notificatie zag goed te herinneren. ",
            "Hier komen de vragen over je welbevinden! Haal het moment vlak voordat de melding verscheen nog even terug in gedachten.",
            "Hier komen de vragen over je welbevinden! Probeer het moment vlak voordat je de notificatie zag nog even terug te halen.",
            "Tijd voor de vragen over je welbevinden! Neem een moment om terug te denken aan het moment vlak voordat je de melding zag.",
            "De vragen over je welbevinden komen eraan! Breng het moment vlak voordat de notificatie verscheen nog even in gedachten.",
            "De vragen over je welbevinden zijn er bijna! Denk nog even goed terug aan het moment vlak voordat je de notificatie zag.",
            "Ik stuur je zo de vragen over je welbevinden. Neem een moment om terug te denken aan het moment vlak voordat je de notificatie zag.",
            "Hier gaan we! De vragen over je welbevinden komen eraan. Denk nog even terug aan het moment vlak voordat je de notificatie zag."
        ],
        context_company: [
            "Met wie was je?"
        ],
        context_location: [
            "Waar was je?"
        ],
        context_activity: [
            "Wat was het belangrijkste dat je deed?"
        ],
        context_onoff: [
            "Was je online of offline?"
        ],
        context_physical: [
            "Hoe fysiek actief was je?"
        ],

        affect_PA1: ["Hoe opgewekt voel je je?"],
        affect_PA2: ["Hoe ontspannen voel je je?"],
        affect_NA1: ["Hoe gespannen voel je je?"],
        affect_NA2: ["Hoe somber voel je je?"],

        stress: ["Hoe gestrest voel je je?"],

        vitality_VL1: ["Hoe moe voel je je?"],
        vitality_VL2: ["Hoe energiek voel je je?"],

        social_wellbeing_SO1: ["Hoe eenzaam voel je je?"],
        social_wellbeing_SO2: ["Hoe tevreden met je persoonlijke relaties voel je je?"],
        social_wellbeing_SO3: ["Hoe sterk voel je dat je tot een groep behoort?"],

        experience: ["De volgende vragen gaan over je ervaringen met het invullen van de huidige vragenlijst.",
                    "De vragen die ik zo stuur gaan over je ervaringen met het invullen van de huidige vragenlijst.",
                    "De vragen die ik je nu nog stuur gaan over hoe je het invullen van de huidige vragenlijst hebt ervaren.",
                    "De volgende vragen richten zich op jouw ervaringen met het invullen van de huidige vragenlijst.",
                    "De aankomende vragen gaan over jouw ervaring met het invullen van de huidige vragenlijst.",
                    "De vragen die ik je nu nog zal sturen, gaan over jouw ervaringen met het invullen van de huidige vragenlijst.",
                    "De aankomende vragen hebben betrekking op jouw ervaring met het invullen van de huidige vragenlijst.",
                    "De volgende vragen gaan over hoe je het invullen van de huidige vragenlijst hebt ervaren.",
                    "De vragen die ik je zo stuur richten zich op hoe jij het invullen van de huidige vragenlijst hebt ervaren.",
                    "De komende vragen gaan in op jouw ervaringen met het invullen van de huidige vragenlijst."],

        engagement_burden1: ["Kostte het invullen van deze vragenlijst moeite?"],
        engagement_burden2: ["Stoorde deze notificatie jou?"],

        engagement_disclosure1:["Voelde je dat je persoonlijk kon zijn in dit vragenlijstsysteem?"],
        engagement_disclosure2: ["Voelde je je op je gemak om persoonlijke informatie te deIen in  dit vragenlijstsysteem?"],
        engagement_disclosure3: ["Was het gemakkelijk om persoonlijke informatie te delen in dit vragenlijstsysteem?"],
        engagement_disclosure4: ["Voelde je dat je open kon zijn in dit vragenlijstsysteem?"],

        perception_SP1: ["Voelde het contact met het vragenlijstsysteem als menselijk contact?"],
        perception_SP2: ["Voelde het contact met het vragenlijstsysteem persoonlijk?"],
        perception_SP3: ["Voelde het contact met het vragenlijstsysteem sociaal?"],
        perception_SP4: ["Voelde het contact met het vragenlijstsysteem warm?"],

        perception_AN1: ["Geef je indruk weer van het vragenlijstsysteem:"],
        perception_AN2: ["Geef je indruk weer van het vragenlijstsysteem:"],
        perception_AN3: ["Geef je indruk weer van het vragenlijstsysteem:"],
        perception_AN4: ["Geef je indruk weer van het vragenlijstsysteem:"],

        thankyou: ["Dit waren alle vragen voor nu. Dankjewel voor het invullen 😊",
                    "Dit waren alle vragen voor nu. Dankjewel voor het invullen!",
                    "Dat was de laatste vraag voor nu, top gedaan!",
                    "Dat was de laatste vraag voor nu, top gedaan 😊",
                    "Dat was de vragenlijst alweer! Dankjewel voor het invullen 😊",
                    "Dat was de vragenlijst alweer! Fijn dat je zo je best doet 😊",
                    "Dat was het voor nu, we zijn klaar 😊 Dankjewel weer!",
                    "Dat was het voor nu, we zijn klaar! Dankjewel weer 😊",
                    "We zijn er doorheen, fijn dat je weer even van je hebt laten horen 😊",
                    "We zijn er doorheen, fijn dat je weer even van je hebt laten horen!",
                    "Alle vragen zijn weer beantwoord, dankjewel voor je tijd!",
                    "Alle vragen zijn weer beantwoord, dankjewel voor je tijd 😊",
                    "We hebben alle vragen beantwoord, bedankt voor je hulp weer!",
                    "We hebben alle vragen beantwoord, bedankt voor je hulp weer 😊",
                    "En daarmee zijn we klaar, dankjewel voor je input!",
                    "En daarmee zijn we klaar, dankjewel voor je input 😊",
                    "Dat was 'm voor nu, fijn dat je weer zo open was!",
                    "Dat was 'm voor nu, fijn dat je weer zo open was 😊",
                    "We hebben alles weer gehad 😊 top dat je ze hebt ingevuld!",
                    "We hebben alles weer gehad, top dat je ze hebt ingevuld 😊",
                    "En daarmee zijn we klaar 😊 Goed dat je je zo inzet voor dit onderzoek, ga zo door!",
                    "En daarmee zijn we klaar! Goed dat je je zo inzet voor dit onderzoek, ga zo door 😊",
                    "Dat was het weer voor nu, bedankt voor je tijd en input!",
                    "Dat was het weer voor nu, bedankt voor je tijd en input 😊",
                    "Alles is weer ingevuld, dankjewel voor je openheid!",
                    "Alles is weer ingevuld, dankjewel voor je openheid 😊",
                    "En dat was het! Dankjewel voor je tijd en moeite, zo kan je input goed gebruikt worden 😊",
                    "En dat was het 😊 dankjewel voor je tijd en moeite, zo kan je input goed gebruikt worden!",
                    "Zo dat was 'm alweer 😊 Fijn dat je zo hebt meegwerkt!",
                    "Zo dat was 'm alweer! Fijn dat je zo hebt meegwerkt 😊",
                    "Zo dat was 'm alweer, goed gedaan! Bedankt voor je tijd 😊",
                    "Goed bezig, we zijn klaar! Dankjewel voor je input weer 😊",
                    "Goed bezig, we zijn klaar 😊 Dankjewel voor je input weer!",
                    "En we zijn weer aan het eind gekomen van de vragenlijst! Mooi gedaan, dankjewel 😊",
                    "En we zijn weer aan het eind gekomen van de vragenlijst 😊 Mooi gedaan, dankjewel!"
        ],
        submit: ["Klik 'Tot ziens' als je je antwoorden wilt versturen."],
        end: ["Je antwoorden zijn opgeslagen. Tot de volgende keer."]
    };

const conversationFlow = [
        { category: "welcome" },
        { category: "instructions" },
        { category: "context_company" },
        { category: "context_location" },
        { category: "context_activity" },
        { category: "context_onoff" },
        { category: "context_physical" },

        { category: "affect_PA1" },   //PA1>PA2>NA1>NA2
        { category: "affect_PA2" },
        { category: "affect_NA1" },
        { category: "affect_NA2" },

        { category: "stress" },
        { category: "vitality_VL1" },
        { category: "vitality_VL2" },
        { category: "social_wellbeing_SO1" },
        { category: "social_wellbeing_SO2" },
        { category: "social_wellbeing_SO3" },


        { category: "experience" },

        { category: "engagement_burden" },
        { category: "engagement_disclosure" },
        { category: "perception_SP"},
        { category: "perception_AN"},
        { category:  "thankyou"},
        { category: "submit" },
        { category: "end"}
    ];

document.addEventListener("DOMContentLoaded", () => {
    const messageList = document.getElementById("chat-box");
    const inputField = document.getElementById("messageInput");
    const endButton = document.getElementById("terminate-btn");
    const sendButton = document.querySelector(".chat-input button");

    let conversationStep = 0;   // Track step in conversation
    let welcomeSent = false; // Track if the welcome message has been sent
    let isFirstUserInput = true;    // Track if first user input has been sent
    let isSecondUserInput = true;    // Track if second user input has been sent

    //Storing notification_time
    now   = new Date(); // → a Date instance

    const year = String(now.getFullYear()).slice(-2); // last 2 digits
    const month = String(now.getMonth() + 1).padStart(2, '0'); // 0-indexed
    const day = String(now.getDate()).padStart(2, '0');
    const hours = now.getHours(); // do not pad, as per example
    const minutes = String(now.getMinutes()).padStart(2, '0');

        // Format the date string
    const notification_time = `${year}-${month}-${day} ${hours}:${minutes}`;




    function getRandomQuestion(category) {
        const questions = questionBank[category];
        let index = Math.floor(Math.random() * questions.length);
        if (index >= questions.length || index < 0)
            index = 0;
        return questions[index];
    }

    function askNextQuestion() {
        //chooses the category
        let [main_category,category] = chooseCategory();
        //displays the question
        displayQuestion(main_category, category)
    }
    function chooseCategory(){
        let category;
        let main_category;
         // Ensure the first message is always from "welcome"
        if (!welcomeSent) {
                category = "welcome";
                welcomeSent = true; // Mark welcome message as sent
                conversationStep= conversationStep + 1; // Move to the next step
            }
            else
            {
                // After the first message, continue normal conversation
                if (conversationStep >= conversationFlow.length)
                {
                    return; // Stop if at the end
                }
                //Here choose the random category for burden1 burden2 or so on....
                main_category = ""
                // Randomly select either 'burden1' or 'burden2' for engagement
                if (conversationFlow[conversationStep].category === "engagement_burden") {
                const sub_categories = [
                    "engagement_burden1",
                    "engagement_burden2"
                    ];
                    main_category = "engagement_burden"
                    category = sub_categories[Math.floor(Math.random() * sub_categories.length)];
                    conversationStep= conversationStep + 1; // Move to the next step
                }
                else if(conversationFlow[conversationStep].category === "engagement_disclosure"){
                    const sub_categories = [
                    "engagement_disclosure1",
                    "engagement_disclosure2",
                    "engagement_disclosure3",
                    "engagement_disclosure4"
                    ];
                    main_category = "engagement_disclosure"
                    category = sub_categories[Math.floor(Math.random() * sub_categories.length)];
                    conversationStep= conversationStep + 1; // Move to the next step
                }
                else if(conversationFlow[conversationStep].category === "perception_SP"){
                const sub_categories = [
                    "perception_SP1",
                    "perception_SP2",
                    "perception_SP3",
                    "perception_SP4"
                    ];
                    main_category = "perception_SP"
                    category = sub_categories[Math.floor(Math.random() * sub_categories.length)];
                    conversationStep= conversationStep + 1; // Move to the next step
                }
                else if(conversationFlow[conversationStep].category === "perception_AN"){
                const sub_categories = [
                    "perception_AN1",
                    "perception_AN2",
                    "perception_AN3",
                    "perception_AN4"
                    ];
                    main_category = "perception_AN"
                    category = sub_categories[Math.floor(Math.random() * sub_categories.length)];
                    conversationStep= conversationStep + 1; // Move to the next step
                }

                else {
                    category = conversationFlow[conversationStep].category;
                    main_category = category
                    conversationStep= conversationStep + 1; // Move to the next step
                }

            }
            return [main_category,category];
    }
    function chooseSliderValue(category){
        //this funtion chooses the values to be placed in the slider -
        //e.g. if AN1 is shown, on the left it should be ‘onecht’, on the right ‘natuurlijk’, if AN2, on the left ‘lijkend op een machine’, on the right ‘lijkend op een mens’, etc.
        let min = -3
        let max = 3
        if (category == 'perception_AN1')
        {
            min = 'onecht'
            max = 'natuurlijk'
        }
        else if (category ==  'perception_AN2')
        {
            min = 'lijkend op een machine'
            max = 'lijkend op een mens'
        }
        else if (category ==  'perception_AN3')
        {
            min = 'onbewust'
            max = ' heeft een bewustzijn'
        }
        else if (category == 'perception_AN4')
        {
            min = 'kunstmatig'
            max = 'levensecht'
        }

        return  [min,max]
    }
    function updateTooltip(slider, tooltip, firsttime){
          const min = parseFloat(slider.min);
          const max = parseFloat(slider.max);
          const val = parseFloat(slider.value);
          const percent = (val - min) / (max - min);

          // 2. Get actual slider width in pixels
          const sliderWidth = slider.offsetWidth;

          // 3. Calculate pixel position
          const positionPx = percent * sliderWidth;
          //Set tooltiip values
          let tooltipLeft = percent * sliderWidth;

          tooltip.textContent = val;

          //tooltip.style.left = `${positionPx}px`;
          tooltip.style.left = (positionPx - 55) + "px";
          //tooltip.style.left = `${tooltipLeft}px`;

    }
    function displayQuestion(main_category, category){
    // Get random questions from the category
        const questions = questionBank[category];
        if (!questions || questions.length === 0) return; // Safety check

        const selectedQuestions = [];
        while (selectedQuestions.length < 2 && selectedQuestions.length < questions.length) {
            const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
            if (!selectedQuestions.includes(randomQuestion)) {
                selectedQuestions.push(randomQuestion);
            }
        }

        showTypingIndicator(() => { //this would use ... to be displayed
            let questionText = getRandomQuestion(category);
            const botMessage = document.createElement("div");
            botMessage.classList.add("chat-message", "bot-message");
            //modifying category to make bot message unique
            id = 'b_'+ category

            //appending question and image in html
            botMessage.innerHTML = `<div class="chat-message-text">
                                <div>
                                <img src= "images/avatar.png"> </div>
                                <div id = ${id}> ${questionText} </div>
                                </div>`;

            messageList.appendChild(botMessage);

            // Check if the category has options
            const options = categoryOptions[main_category];
            if (options)
            {

                //If there are available options then dont allow the users for the open input

                inputField.disabled = true

                const optionsContainer = document.createElement("div");
                optionsContainer.classList.add("chat-options");
                options.forEach(option => {
                    const optionButton = document.createElement("button");
                    optionButton.classList.add("option-button");
                    optionButton.innerText = option;
                    optionButton.id = options.indexOf(option) + 1    //starting options index from 1
                    optionButton.value = option
                    optionButton.addEventListener("click", () => handleUserOption(option, optionButton, main_category));
                    optionsContainer.appendChild(optionButton);
                });

                messageList.appendChild(optionsContainer);

                //inputField.disabled = false
            }
            else if (main_category === "perception_AN")
            {

                // Disable text input
                inputField.disabled = true;
                //choose the slider value
                let [min,max] = chooseSliderValue(category)

                // Create container for slider
                const sliderContainer = document.createElement("div");
                sliderContainer.classList.add("chat-options"); // to stay consistent with option buttons

                // Set slider HTML content
                sliderContainer.innerHTML = `
                  <label for="responseSlider"></label>
                  <div class="slider-wrapper">
                    <span id="sliderValue1">${min}</span>
                    <div class="slider-inner-wrapper">
                      <input type="range" min="-3" max="3" value="3" class="slider" id="responseSlider">
                      <div class="slider-tooltip" id="sliderTooltip">3</div>
                    </div>
                    <span id="sliderValue2">${max}</span>
                  </div>
                `;

                // Append container to message list
                messageList.appendChild(sliderContainer);

                // Get slider and value span elements
                const slider = sliderContainer.querySelector("#responseSlider");
                const valueSpan1 = sliderContainer.querySelector("#sliderValue1");
                const valueSpan2 = sliderContainer.querySelector("#sliderValue2");
                const tooltip = document.getElementById('sliderTooltip');

                // Update value span on slider input
                slider.addEventListener("input", (e) => {
                  //change tooltip here
                  tooltip.style.display = 'block';  // show tooltip
                  updateTooltip(slider,tooltip,false);  //false executed on update
                });
                 // Initial tooltip position
                updateTooltip(slider,tooltip,true); //true => executed for the first time

                // On slider (submission)
                slider.addEventListener("mouseup", () => handleSlider(sliderContainer));
                slider.addEventListener("touchend", () => handleSlider(sliderContainer));

                /*slider.onmouseup = function() {
                    handleSlider(sliderContainer)
                }

                slider.touchend = function() {
                    handleSlider(sliderContainer)
                }*/
            }

            //todo: do not take the input when..
            if(category == "welcome" || category == "instructions" || category == "thankyou" || category == "experience")
            {
                askNextQuestion();
            }
            else if(category == "end")
            {
                handleResponse()
            }
            else
            {
                // Auto-scroll to latest message
                messageList.scrollTop = messageList.scrollHeight;
            }
        }); // showTypingIndicator(()
    }
    function handleSlider(sliderContainer){
        // Get slider and value span elements
        const slider = sliderContainer.querySelector("#responseSlider");
        const valueSpan1 = sliderContainer.querySelector("#sliderValue1");
        const valueSpan2 = sliderContainer.querySelector("#sliderValue2");
        const tooltip = document.getElementById('sliderTooltip');
        //handle the (display of) slider
        const responseValue = slider.value;
        handleSliderInput(responseValue, slider)
        // Remove the slider container and related contents from the chat once the user finalizes the value

        if (sliderContainer){
            slider.remove();
            valueSpan1.remove();
            valueSpan2.remove();
            tooltip.style.display = 'none'  //hide tooltip
        }
        // Proceed to the next step
        handleResponse();
    }
    function handleSliderInput(responseValue, slider){
        //it updates the slider response
        const answerID = getAnswerID();
        const questionID = getQuestionID();
        const id = questionID.substring(2);
        const existingQuestionId = id.includes("perception_AN");
        if (existingQuestionId) {
            if(answerID)
            {
                let existingUserMessage = document.getElementById(answerID);
                if (existingUserMessage && existingUserMessage.id.includes("perception_AN")) {
                 // Update existing message
                       existingUserMessage.innerHTML = responseValue;
                 } else {
                            // Create new message element
                       const userMessage = document.createElement("div");
                       userMessage.classList.add("chat-message", "user-message");
                       userMessage.innerHTML = `<div class="chat-message-text" id="${id}">${responseValue}</div>`;
                       messageList.appendChild(userMessage);
                 }
            }
            else
            {
                  // Create new message element
                  const userMessage = document.createElement("div");
                  userMessage.classList.add("chat-message", "user-message");
                  userMessage.innerHTML = `<div class="chat-message-text" id="${id}">${responseValue}</div>`;
                  messageList.appendChild(userMessage);
            }
        }
    }

    function handleUserOption(selectedOption,optionButton, category) {
        // Create a user message bubble with the selected option
        lastQuestionid = getQuestionID()
        //Extract the id from b_
        id = lastQuestionid.substring(2,lastQuestionid.length)


        const userMessage = document.createElement("div");
        userMessage.classList.add("chat-message", "user-message");
        userMessage.innerHTML = `<div class="chat-message-text" id =  ${id}>${optionButton.value}</div>`;
        messageList.appendChild(userMessage);

        // Remove all option buttons after selection
        document.querySelectorAll(".chat-options").forEach(element => element.remove());

        // Proceed to the next step
        handleResponse();
    }

    function handleResponse() {
        if (conversationStep < conversationFlow.length) {
            setTimeout(() => {
                inputField.disabled == true
                askNextQuestion(); // Continue the flow without skipping
                if(inputField.disabled == true)
                    inputField.disabled = false
            }, 1500);
        } else {
            endChat();
        }
    }

    function getAnswerID(){
        //this function call returns the last answer from user
        const userMessages = document.querySelectorAll("#chat-box .user-message");
        const lastUserMessage = userMessages[userMessages.length - 1]; // Get the last user message
        if(lastUserMessage)
        {    const lastUserMessagesTextElement = lastUserMessage.querySelector(".chat-message div:last-child"); // Last child div with text
            const lastuserMessagesText = lastUserMessagesTextElement ? lastUserMessagesTextElement.innerText : "";
            const lastMessageId = lastUserMessagesTextElement ? lastUserMessagesTextElement.id : null;
            return lastMessageId
        }
        return null
    }
    function getQuestionID(){
    // this function call is used to get the question id
        //get last bot message element
        const botMessages = document.querySelectorAll("#chat-box .bot-message");
        const lastBotMessage = botMessages[botMessages.length - 1]; // Get the last bot message
        const lastBotMessageTextElement = lastBotMessage.querySelector(".chat-message-text div:last-child"); // Last child div with text
        const lastBotMessageText = lastBotMessageTextElement ? lastBotMessageTextElement.innerText : "";
        const lastMessageId = lastBotMessageTextElement ? lastBotMessageTextElement.id : null;
        //get last bot message element
        return lastMessageId

    }

    sendButton.addEventListener("click", () => {
        if (!inputField.value.trim()) return;  // Prevent sending empty messages

        //changing id of user message.
        lastMessageId = getQuestionID()
        //Extract the id from b_
        id = lastMessageId.substring(2,lastMessageId.length)

        const userMessage = document.createElement("div");
        userMessage.classList.add("chat-message", "user-message");
        userMessage.innerHTML = `<div class="chat-message-text" id = ${id}>${inputField.value}</div>`;
        messageList.appendChild(userMessage);
        inputField.value = "";

        handleResponse();
    });

    function showTypingIndicator(callback) {
        const typingIndicator = document.createElement("div");
        typingIndicator.classList.add("chat-message", "bot-message", "typing");
        typingIndicator.innerHTML = `<div class="chat-message-text">...</div>`;
        messageList.appendChild(typingIndicator);

        // Auto-scroll to latest message
        messageList.scrollTop = messageList.scrollHeight;

        // Wait for 2 seconds, then replace "..." with actual message
        setTimeout(() => {
            messageList.removeChild(typingIndicator); // Remove typing dots
            callback(); // Call function to show the actual bot message
        }, 2000);
    }



    function endChat() {
        inputField.disabled = true;
        sendButton.disabled = true;
        endButton.click();
    }

    inputField.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            sendButton.click();
        }
    });
    function saveUserData(){
        // Check if a user response exists for each perception_AN key
       // Build JSON array of message data from user message
       messagesSTR = '';
       messagesJSON = [];
       for (const key in questionBank) {
            if (!(key.includes("welcome") || key.includes("instructions"))) {
                const userResponseElement = document.getElementById(key);
                if (userResponseElement)
                {
                    value = userResponseElement.textContent
                    messagesJSON.push({
                       id: key,
                        value: userResponseElement.textContent
                    });

                }
                else
                {
                    value = 'NA'
                    messagesJSON.push({
                       id: key,
                       value: 'NA'
                    });
                }

                if(messagesSTR == '')
                {
                    messagesSTR = value
                }
                else
                    messagesSTR = messagesSTR + ','+  value

            }
       }    //for (const key in questionBank) {
       //Storing Timestamp
       now   = new Date(); // → a Date instance

       // Extract components
       const year = String(now.getFullYear()).slice(-2); // last 2 digits
       const month = String(now.getMonth() + 1).padStart(2, '0'); // 0-indexed
       const day = String(now.getDate()).padStart(2, '0');
       const hours = now.getHours(); // do not pad, as per example
       const minutes = String(now.getMinutes()).padStart(2, '0');

        // Format the date string
       const completedTimestamp = `${year}-${month}-${day} ${hours}:${minutes}`;

       //JSON object
       const stringFormatData = {
            action: "end",
            notification_time: notification_time,
            notification_complete: completedTimestamp,
            summary: "Chat session ended by the user.",
            messages: messagesSTR,
            JSONmessages: messagesJSON
       };

       const endStrData = JSON.stringify(stringFormatData);
       console.log("Is Valid JSON", isValidJSON(endStrData), endStrData);

       window.parent.postMessage(endStrData, "*");
       inputField.value = "";

       return
    }
    endButton.addEventListener("click", () => {

        saveUserData();
        inputField.value = "";
    });

    function isValidJSON(str) {
        try {
            JSON.parse(str);
            return true;
        } catch (e) {
            return false;
        }
    }

    // **Start chat with the first question**
    askNextQuestion();
});
