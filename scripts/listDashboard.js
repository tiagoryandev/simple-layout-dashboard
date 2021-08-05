const listDashboard = document.querySelectorAll("div.dashboard");
const listSidebar = document.querySelectorAll("li.sidebar-button");

async function disableActiveButtonSidebar(list, className) {
    listDashboard.forEach(item => {
        item.style.display = "none";
    });

    list.forEach(item => {
        if (item.className !== className) {
            item.className = className;
        }
    });
}

for (item of listSidebar) {
    item.addEventListener("click", target => {
        disableActiveButtonSidebar(listSidebar, "sidebar-button");

        const dashButton = document.getElementById(`box-${target.srcElement.attributes["data-box"].nodeValue}`);

        dashButton.style.display = "block";

        target.srcElement.classList.toggle("active");
    });
};