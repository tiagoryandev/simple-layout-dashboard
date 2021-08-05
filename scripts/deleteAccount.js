const btnDeleteAccount = document.getElementById("btn-delete-account");

btnDeleteAccount.addEventListener("click", () => {
    const deleteAccountBox = document.createElement("div");
    deleteAccountBox.className = "deleteAccountBox";

    const box = document.createElement("div");
    box.className = "box";

    const title = document.createElement("div");
    title.className = "title";

    const paragrapher = document.createElement("p");
    paragrapher.innerText = "Exclusão de Conta";

    const button = document.createElement("button");
    button.innerHTML = "&times;";

    title.appendChild(paragrapher);
    title.appendChild(button);

    const line = document.createElement("div");
    line.className = "line";

    const content = document.createElement("div");
    content.className = "content";

    const description = document.createElement("div");
    description.className = "description";
    description.innerHTML = "Você está prestes a realizar a exclusão de sua conta, lembre-se que todos os seus dados serão removidos da plataforma!<br />Para confirmar a exclusão, digite abaixo a sua senha.";

    content.appendChild(description);

    const form = document.createElement("form");
    const input = document.createElement("input");
    input.type = "password";
    input.required = true;

    const buttonSubmit = document.createElement("button");
    buttonSubmit.type = "submit";
    buttonSubmit.innerText = "Excluir";

    form.appendChild(input);
    form.appendChild(buttonSubmit);

    box.appendChild(title);
    box.appendChild(line);
    box.appendChild(content);
    box.appendChild(form);

    deleteAccountBox.appendChild(box);

    document.body.append(deleteAccountBox);

    button.addEventListener("click", () => {
        box.style.animation = "boxDeleteAccountRevert 0.5s forwards";
        deleteAccountBox.style.animation = "boxDeleteAccountShadowRevert 0.5s forwards"

        setTimeout(() => deleteAccountBox.remove(), 500);
    });
});