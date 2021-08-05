const bioTextButton = document.querySelector("button.btn-change-bio");
const bioTextarea = document.querySelector("div.edit-bio");
const bioTextareaBox = document.querySelector("textarea.bio-textarea");
const bioSaveButton = document.getElementById("btn-save-bio");
const description = document.querySelector("div.description");
const password = document.getElementById("account-box-password");

let bioType = false;
let passType = false;

async function formatterDescription() {
    if (description.innerHTML.length > 140) {
        description.innerHTML = `${description.innerHTML.slice(0, 140)}...`;
    };
};

async function formatterPassword() {
    const numberPass = password.attributes["value"].nodeValue;
    let content = "";

    for (let i = 0; i < parseInt(numberPass); i++) {
        content += "*";
    };

    password.innerHTML = content;
};

async function newNotify(content, color) {
    const box = document.createElement("div");
    box.className = "notify";

    const contentBox = document.createElement("div");
    contentBox.className = `content ${color}`;

    const Paragrapher = document.createElement("p");
    Paragrapher.innerText = content;
    const buttonClose = document.createElement("button");
    buttonClose.innerHTML = "&times;";

    contentBox.appendChild(Paragrapher);
    contentBox.appendChild(buttonClose);

    box.appendChild(contentBox);
    document.body.appendChild(box);

    buttonClose.addEventListener("click", () => {
        contentBox.style.animation = "closeNotify 0.5s forwards";
        setTimeout(() => box.remove(), 500);
    });

    setInterval(() => {
        if (box) {
            contentBox.style.animation = "closeNotify 0.5s forwards";
            setTimeout(() => box.remove(), 500);
        };
    }, 7000);
};

bioTextButton.addEventListener("click", () => {
    if (!bioType) {
        bioTextarea.style.maxHeight = `${bioTextarea.scrollHeight}px`;
        bioType = true;
    } else {
        bioTextarea.style.maxHeight = `0px`;
        bioType = false;
    };
});

bioSaveButton.addEventListener("click", () => {
    if (bioTextareaBox.value.length == 0) {
        bioTextareaBox.value = "";
        bioTextarea.style.maxHeight = `0px`;
        bioType = false;
        newNotify("Você deve escrever uma descrição para alterar sua biografia!", "red");
    } else {
        const newBio = bioTextareaBox.value;
        description.innerHTML = newBio;
        bioTextareaBox.value = "";
        formatterDescription()
        bioTextarea.style.maxHeight = `0px`;
        bioType = false;

        newNotify("Sua biografia foi alterada com Sucesso!", "green");
    }
});

formatterPassword();
formatterDescription();