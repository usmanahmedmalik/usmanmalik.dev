/*
    script - V 0.1. This code works for adding the options
*/

const categoryOptions = {
    practice: ["nee","ja"],
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
    no_practice:["Tot ziens"],
    final: ["Tot ziens"]
    };
const questionBank = {
        welcome: [
            "Hallo student, ik ben chatbot Whaby!"
        ],
        welcome2:["Ik zal de komende week, vanaf morgen, 10 keer per dag vragen hoe het met je welbevinden is, om te kijken hoe het met je gaat en zodat de onderzoekers weten hoe ze studenten verder kunnen helpen 😊 Ik zal je deze op willekeurige momenten tussen 07:30 en 22:30 sturen via een SMS bericht. Om dit bericht niet te missen, lijkt het mij verstandig om het geluid van je meldingen aan te zetten. Reageer op deze vragen zo eerlijk mogelijk, passend bij het moment, en denk niet te lang na. Er bestaan geen foute antwoorden! Reageren op de vragen duurt ongeveer 2 minuten, en na 15 minuten moet ik weer weg."],
        welcome3:["Reageer op deze vragen zo eerlijk mogelijk, passend bij het moment, en denk niet te lang na. Er bestaan geen foute antwoorden! Reageren op de vragen duurt ongeveer 2 minuten, en na 15 minuten moet ik weer weg."],
        welcome4:[" Voor je omgeving kan het soms vervelend zijn wanneer je midden in een gesprek een notificatie krijgt waar je op moet reageren. Je kunt dat uitleggen dat je aan een onderzoek meedoet en het belangrijk is dat je binnen 15 minuten op mij reageert. Zorg er wel voor dat het invullen anoniem blijft en de ander geen invloed heeft op jouw antwoorden. Ik zou dan vragen of het goed is als je even 2 minuutjes even ergens anders gaat zitten."],
        welcome5:["Alleen wanneer je echt niet gestoord kunt worden (je bent bijvoorbeeld in het verkeer of maakt een tentamen), kun je het geluid van binnenkomende meldingen uitzetten. Zet deze wel weer aan direct zodra het weer kan 😅"],
        welcome6:[" De dag na deze 7 dagen, krijg je een SMS bericht voor de evaluatie. Deze duurt 10 minuten om in te vullen. Wees hierbij ook zo eerlijk mogelijk; met jouw input kunnen we onderzoek naar welbevinden verbeteren."],
        welcome7:["Al je antwoorden worden op dezelfde, beveiligde manier en op dezelfde beveiligde plek opgeslagen als de andere vragenlijsten op de Open Universiteit. De vragen die ik je zal stellen zullen gesloten vragen zijn waarbij je een antwoordoptie kunt selecteren om naar mij te sturen, en deze zullen elke keer hetzelfde zijn. Om je huidige welbevinden zo objectief mogelijk te meten, kan ik niet reageren op je antwoorden binnen deze vragenlijsten 😞"],
        practice: [
        "Om je vertrouwd te maken met de dagboekvragenlijst, kun je de oefenvragenlijst hieronder in te vullen. Vul deze net zo eerlijk en zorgvuldig in als de dagboekvragenlijstjes die je vanaf morgen zult ontvangen. Klik op 'Start' om te beginnen."
        ],

        instructions: [
            "Mooi. Ik zal je mijn vragen over je welbevinden nu sturen. Denk terug aan het moment vlak voordat je de notificatie zag."
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
            "Was deze activiteit online of offline?"
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

        experience: ["Ik zou je nu nog wat vragen willen stellen over je ervaringen tijdens deze vragenlijst:"],

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

        final: ["We zijn door de oefen dagboekvragenlijst heen. Mocht je toch nog vragen hebben, kun je contact opnemen met jb9@ou.nl. Klik op 'Tot ziens' als je morgen graag wilt starten."
        ],
        no_practice:["Geen probleem 😌 Mocht je toch nog vragen hebben, kun je altijd contact opnemen met [e-mailaddress]. Klik op 'Tot ziens' als je morgen graag wilt starten."
        ],
        no_practice_end: ["Je antwoorden zijn opgeslagen. Vanaf morgen zul je regelmatig notificaties krijgen om een vragenlijstje in te vullen. Tot dan!"
        ],
        practice_end: ["Bedankt voor je antwoorden. Vanaf morgen zul je regelmatig notificaties krijgen om een vragenlijstje in te vullen. Tot dan!"
        ]
    };

let conversationFlow = [
        { category: "welcome" },
        { category: "welcome2"},
        { category: "welcome3"},
        { category: "welcome4"},
        { category: "welcome5"},
        { category: "welcome6"},
        { category: "welcome7"},
        { category: "practice" },

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

        {category: "experience"},

        { category: "engagement_burden" },
        { category: "engagement_disclosure" },
        { category: "perception_SP"},
        { category: "perception_AN"},
        { category: "final" }//,
        //{ category: "practice_end" }
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

    function askNextQuestion(msg_delay = 2000) {
        //chooses the category
        let [main_category,category] = chooseCategory();
        //displays the question
        displayQuestion(main_category, category, msg_delay)
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
            min = 'heeft geen bewustzijn'
            max = 'heeft wel een bewustzijn'
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

          let tooltipLeft = percent * sliderWidth;

          tooltip.textContent = val;

          //tooltip.style.left = `${positionPx}px`;
          tooltip.style.left = (positionPx - 55) + "px";
          //tooltip.style.left = `${tooltipLeft}px`;

    }
    function displayQuestion(main_category, category, delay = 2000){
    /*
        main category = perception_AN
        then category = perception_AN1 and so on
        delay controls the number of seconds to display the next question
    */
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

        //setting custom delay for specific messages
        if (category == "welcome")
            delay = 2000
        else if (category == "welcome2")
            delay = 4000
        else if (category == "welcome3")
            delay = 18000
        else if (category == "welcome4")
            delay = 13000
        else if (category == "welcome5")
            delay = 20000
        else if (category == "welcome6")
            delay = 16000
        else if (category == "welcome7")
            delay = 14000
        else if (category == "practice")
            delay = 25000

        showTypingIndicator(() => { //this would use ... to be displayed
            let questionText = getRandomQuestion(category);
            //make the div for question
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

                // On slider change (submission)
                // On slider (submission)
                slider.addEventListener("mouseup", () => handleSlider(sliderContainer));
                slider.addEventListener("touchend", () => handleSlider(sliderContainer));

                /*slider.onmouseup = function() {
                    handleSlider(sliderContainer)
                }*/
            }
            //TODO - as per desired: do not take the input when..
            if(category == "no_practice_end" || category == "practice_end")
            {
                endChat();
            }
            else if (category == "instructions" || category == "experience"
                        || category == "welcome" || category == "welcome2"
                        || category == "welcome3" || category == "welcome4"
                        || category == "welcome5" || category == "welcome6" || category == "welcome7")
            {
                askNextQuestion();
            }
            else
            {
                // Auto-scroll to latest message
                messageList.scrollTop = messageList.scrollHeight;
            }

        }, delay); // showTypingIndicator(()
    }

    function handleSlider(sliderContainer){
        // Get slider and value span elements
        const slider = sliderContainer.querySelector("#responseSlider");

        //handle the value of slider
        const responseValue = slider.value;
        handleSliderInput(responseValue, slider)

        // Remove the slider container and related contents from the chat once the user finalizes the value
        const chatOptions = document.querySelector(".chat-options");
        if (chatOptions) {
            chatOptions.remove();
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
        //here category is equal to the questionID received below, so maybe optimization needed
        lastQuestionid = getQuestionID()
        //Extract the id from b_
        optionid = lastQuestionid.substring(2,lastQuestionid.length)


        const userMessage = document.createElement("div");
        userMessage.classList.add("chat-message", "user-message");
        userMessage.innerHTML = `<div class="chat-message-text" id =  ${optionid}>${optionButton.value}</div>`;

        messageList.appendChild(userMessage);
        // Remove all option buttons after selection
        document.querySelectorAll(".chat-options").forEach(element => element.remove());

        // Proceed to the next step
        if(category == "practice" && optionButton.value == "nee" )
        {
            flow = [
                { category: "welcome" },
                { category: "practice" },
                { category: "no_practice" },
                {category: "no_practice_end"}
            ]
            conversationFlow = flow
            conversationStep = 2
        }
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

        return lastMessageId
        //get last bot message element
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


    function showTypingIndicator(callback,nsecs = 2000) {
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
        }, nsecs);
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
            if (!key.includes("welcome")) {
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
        //return
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
