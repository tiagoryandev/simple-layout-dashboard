const boxChannelMessage = document.querySelector("div.box");
const buttonSendMessage = document.getElementById("btn-send-message");
const TextAreaMessageChannel = document.getElementById("textarea-content-msg");

buttonSendMessage.addEventListener("click", () => {
    if (TextAreaMessageChannel.value.length == 0 || TextAreaMessageChannel.value.length > 140) {
        TextAreaMessageChannel.value = "";
        boxChannelMessage.scrollTop = boxChannelMessage.scrollHeight;
        newNotify("Você precisa escrever uma mensagem!", "red");
    } else {
        let arguments = TextAreaMessageChannel.value.replaceAll("\n", "");

        if (arguments.length == 0 || TextAreaMessageChannel.value.length > 140) {
            TextAreaMessageChannel.value = "";
            boxChannelMessage.scrollTop = boxChannelMessage.scrollHeight;
            return newNotify("Você precisa escrever uma mensagem!", "red");
        };

        const message = document.createElement("div");
        message.className = "message-client";

        const avatar = document.createElement("div");
        avatar.className = "avatar";

        const context = document.createElement("div");
        context.className = "context";

        const username = document.createElement("div");
        username.className = "username";
        username.innerHTML = "Você";

        const msg = document.createElement("div");
        msg.className = "msg";
        msg.innerText = TextAreaMessageChannel.value;

        console.log(arguments)

        context.appendChild(username);
        context.appendChild(msg);

        message.appendChild(avatar);
        message.appendChild(context);

        boxChannelMessage.appendChild(message);
        TextAreaMessageChannel.value = "";
        boxChannelMessage.scrollTop = boxChannelMessage.scrollHeight;
    };
});