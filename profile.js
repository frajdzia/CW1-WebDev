var step1_question = 1;
var step2_question = 1;
var step3_question = 1;

var step1_questions = ["What is your firstname?", "What is your lastname?", "How old are you?", "What is your gender?"];
var step2_questions = ["What is your call number?", "What is your Whatsapp number?", "Can you tell our Email Id:"];
var step3_questions = ["Plz write your H.no.:", "Plz tell your street number:" , "Plz enter the Postcode:" , "Plz enter the country:"];

var step1_answers = [];
var step2_answers = [];
var step3_answers = [];

for(var i=0; i<step1_questions.length; i++) {
    step1_answers.push("");
}

for(var i=0; i<step2_questions.length; i++) {
    step2_answers.push("");
}

for(var i=0; i<step3_questions.length; i++) {
    step3_answers.push("");
}

var step1_max_question = step1_questions.length;
var step2_max_question = step2_questions.length;
var step3_max_question = step3_questions.length;

var step1_locked = true;
var step2_locked = true;
var step3_locked = true;

var answers1_locked = true;
var answers2_locked = true;
var answers3_locked = true;

var progress = 0;

function parse_answers() {
    for(var step=1; step<=3; step++)
    {
        switch(step) {
            case 1:
                for(var i=0; i<step1_answers.length; i++) {
                    var answer_id = step+"-"+(i+1);
                    console.log("answer-box-"+answer_id);
                    if(step1_answers[i] != "") {
                        document.getElementById("answer-"+answer_id).innerHTML = step1_answers[i];
                        document.getElementById("answer-box-"+answer_id).classList.remove("empty");
                    }
                    else if(!document.getElementById("answer-box-"+answer_id).classList.contains("empty")) {
                        document.getElementById("answer-box-"+answer_id).classList.add("empty");
                    }
                }
            break;

            case 2:
                for(var i=0; i<step2_answers.length; i++) {
                    var answer_id = step+"-"+(i+1);
                    console.log("answer-box-"+answer_id);
                    if(step2_answers[i] != "") {
                        document.getElementById("answer-"+answer_id).innerHTML = step2_answers[i];
                        document.getElementById("answer-box-"+answer_id).classList.remove("empty");
                    }
                    else if(!document.getElementById("answer-box-"+answer_id).classList.contains("empty")) {
                        document.getElementById("answer-box-"+answer_id).classList.add("empty");
                    }
                }
            break;
            
            case 3:
                for(var i=0; i<step3_answers.length; i++) {
                    var answer_id = step+"-"+(i+1);
                    console.log("answer-box-"+answer_id);
                    if(step3_answers[i] != "") {
                        document.getElementById("answer-"+answer_id).innerHTML = step3_answers[i];
                        document.getElementById("answer-box-"+answer_id).classList.remove("empty");
                    }
                    else if(!document.getElementById("answer-box-"+answer_id).classList.contains("empty")) {
                        document.getElementById("answer-box-"+answer_id).classList.add("empty");
                    }
                }
            break;
        }
    }
}

function check_progress() {
    var question_amount = step1_questions.length + step2_questions.length + step3_questions.length;
    var answers_amount = 0;

    var step1_answer_amount = 0;
    var step2_answer_amount = 0;
    var step3_answer_amount = 0;

    for(var i=0; i<step1_answers.length; i++) {
        if(step1_answers[i] != "") {
            answers_amount += 1;
            step1_answer_amount += 1;
        }
    }
    
    for(var i=0; i<step2_answers.length; i++) {
        if(step2_answers[i] != "") {
            answers_amount += 1;
            step2_answer_amount += 1;
        }
    }
    
    for(var i=0; i<step3_answers.length; i++) {
        if(step3_answers[i] != "") {
            answers_amount += 1;
            step3_answer_amount += 1;
        }
    }

    if(step1_answer_amount <= 0) {
        answers1_locked = true;
    } else {
        answers1_locked = false;
    }

    if(step2_answer_amount <= 0) {
        answers2_locked = true;
    } else {
        answers2_locked = false;
    }

    if(step3_answer_amount <= 0) {
        answers3_locked = true;
    } else {
        answers3_locked = false;
    }

    progress = answers_amount / question_amount;

    document.getElementById("profile-progress").innerHTML = Math.round(progress*100);
    document.getElementById("progress-bar-value").style.width = Math.round(progress*100)+"%";
}

function update_content() {
    document.getElementById("prompt-step1-counter").innerHTML = step1_question;
    document.getElementById("prompt-step2-counter").innerHTML = step2_question;
    document.getElementById("prompt-step3-counter").innerHTML = step3_question;

    document.getElementById("prompt-step1-counter-max").innerHTML = step1_max_question;
    document.getElementById("prompt-step2-counter-max").innerHTML = step2_max_question;
    document.getElementById("prompt-step3-counter-max").innerHTML = step3_max_question;

    document.getElementById("question-step1").innerHTML = step1_questions[step1_question-1];
    document.getElementById("question-step2").innerHTML = step2_questions[step2_question-1];
    document.getElementById("question-step3").innerHTML = step3_questions[step3_question-1];

    if(step1_locked == false) {
        document.getElementById("prompt-step1").classList.remove("hidden");
    }

    if(step2_locked == false) {
        document.getElementById("prompt-step2").classList.remove("hidden");
    }

    if(step3_locked == false) {
        document.getElementById("prompt-step3").classList.remove("hidden");
    }

    if(answers1_locked == false) {
        document.getElementById("step-1-answers").classList.remove("hidden");
    } else if(!document.getElementById("step-1-answers").classList.contains("hidden")) {
            document.getElementById("step-1-answers").classList.add("hidden");
    }

    if(answers2_locked == false) {
        document.getElementById("step-2-answers").classList.remove("hidden");
    } else if(!document.getElementById("step-2-answers").classList.contains("hidden")) {
        document.getElementById("step-2-answers").classList.add("hidden");
    }

    if(answers3_locked == false) {
        document.getElementById("step-3-answers").classList.remove("hidden");
    } else if(!document.getElementById("step-3-answers").classList.contains("hidden")) {
        document.getElementById("step-3-answers").classList.add("hidden");
    }

    check_progress();
    parse_answers();
}

function start_questionnaire() {
    step1_locked = false;
    update_content();
}

function question_prev(step) {
    switch(step) {
        case 1:
            step1_question -= 1;
            if(step1_question >= 1)
                document.getElementById("prompt-question-step1-input").value = step1_answers[step1_question-1];
            document.getElementById("question-box-step1").style.border = "1px solid black";
            break;
        case 2:
            step2_question -= 1;
            if(step2_question >= 1)
                document.getElementById("prompt-question-step2-input").value = step2_answers[step2_question-1];
            document.getElementById("question-box-step2").style.border = "1px solid black";
            break;
        case 3:
            step3_question -= 1;
            if(step3_question >= 1)
                document.getElementById("prompt-question-step3-input").value = step3_answers[step3_question-1];
            document.getElementById("question-box-step3").style.border = "1px solid black";
            break;
    }

    if(step1_question < 1)
    step1_question = 1;
    if(step2_question < 1)
    step2_question = 1;
    if(step3_question < 1)
    step3_question = 1;

    update_content();
}

function question_next(step) {
    var is_answer = false;

    switch(step) {
        case 1:
        step1_answers[step1_question-1] = document.getElementById("prompt-question-step1-input").value;
        if(document.getElementById("prompt-question-step1-input").value != "") {
            is_answer = true;
            document.getElementById("question-box-step1").style.border = "1px solid black";
        } else {
            document.getElementById("question-box-step1").style.border = "1px solid red";
            alert("Please answer the question or press \"Skip\" to skip it.");
        }
        break;

        case 2:
        step2_answers[step2_question-1] = document.getElementById("prompt-question-step2-input").value;
        if(document.getElementById("prompt-question-step2-input").value != "") {
            is_answer = true;
            document.getElementById("question-box-step2").style.border = "1px solid black";
        } else {
            document.getElementById("question-box-step2").style.border = "1px solid red";
            alert("Please answer the question or press \"Skip\" to skip it.");
        }
        break;

        case 3:
        step3_answers[step3_question-1] = document.getElementById("prompt-question-step3-input").value;
        if(document.getElementById("prompt-question-step3-input").value != "") {
            is_answer = true;
            document.getElementById("question-box-step3").style.border = "1px solid black";
        } else {
            document.getElementById("question-box-step3").style.border = "1px solid red";
            alert("Please answer the question or press \"Skip\" to skip it.");
        }
        break;
    }

    if(is_answer) {
        question_skip(step);
    }
    update_content();
}

function question_skip(step) {
    switch(step) {
        case 1:
            step1_question += 1;
            if(step1_question <= step1_max_question)
                document.getElementById("prompt-question-step1-input").value = step1_answers[step1_question-1];
            document.getElementById("question-box-step1").style.border = "1px solid black";
            break;
        case 2:
            step2_question += 1;
            if(step2_question <= step2_max_question)
                document.getElementById("prompt-question-step2-input").value = step2_answers[step2_question-1];
            document.getElementById("question-box-step2").style.border = "1px solid black";
            break;
        case 3:
            step3_question += 1;
            if(step3_question <= step3_max_question)
                document.getElementById("prompt-question-step3-input").value = step3_answers[step3_question-1];
            document.getElementById("question-box-step3").style.border = "1px solid black";
            break;
    }

    if(step1_question > step1_max_question) {
        step2_locked = false;
    }

    if(step2_question > step2_max_question) {
        step3_locked = false;
    }

    if(step1_question > step1_max_question)
    step1_question = step1_max_question;
    if(step2_question > step2_max_question)
    step2_question = step2_max_question;
    if(step3_question > step3_max_question)
    step3_question = step3_max_question;

    update_content();
}

function begin() {
    document.getElementById("prompt-question-step1-input").value = step1_answers[step1_question-1];
    document.getElementById("prompt-question-step2-input").value = step2_answers[step2_question-1];
    document.getElementById("prompt-question-step3-input").value = step3_answers[step3_question-1]; 

    check_progress();    
}

begin();