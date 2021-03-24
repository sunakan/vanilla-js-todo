const onClickAdd = () => {
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";
    const div = document.createElement("div");
    div.className = "list-row";

    const li = document.createElement("li");
    li.innerText = inputText;

    const completeButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    completeButton.innerText = "完了";
    deleteButton.innerText = "削除";

    completeButton.addEventListener("click", () => {
        document.getElementById("incomplete-list").removeChild(div);
        div.removeChild(completeButton);
        div.removeChild(deleteButton);
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        backButton.addEventListener("click", () => {
            div.removeChild(backButton);
            div.appendChild(completeButton);
            div.appendChild(deleteButton);
            document.getElementById("incomplete-list").appendChild(div);
        });
        div.appendChild(backButton);
        document.getElementById("complete-list").appendChild(div);
    });

    deleteButton.addEventListener("click", () => {
        document.getElementById("incomplete-list").removeChild(div);
    });

    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    document.getElementById("incomplete-list").appendChild(div);
}

document.getElementById("add-button").addEventListener("click", () => onClickAdd());
