const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");
let lastInputIsOperator = false;

result.textContent = "0"

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {

        if (buttons[i].textContent === "=") {
            if (lastInputIsOperator) return;

            result.textContent = eval(result.textContent);
            lastInputIsOperator = false;

        } else if (buttons[i].textContent === "AC") {
            result.textContent = "0";
            lastInputIsOperator = false;

        } else {
            if (lastInputIsOperator && isNaN(Number(buttons[i].textContent))) {
                result.textContent = result.textContent.slice(0, -1);
            }

            if (result.textContent === "0" && !isNaN(Number(buttons[i].textContent))) {
                result.textContent = buttons[i].textContent;
            }

            else {
                result.textContent += buttons[i].textContent;
            }
            lastInputIsOperator = isNaN(Number(buttons[i].textContent));

        }
    });
}
