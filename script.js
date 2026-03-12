const nameInput = document.getElementById("nameInput");
const generateBtn = document.getElementById("generateBtn");
const backBtn = document.getElementById("backBtn");

const formBox = document.getElementById("formBox");
const certificateWrapper = document.getElementById("certificateWrapper");

const donorName = document.getElementById("donorName");
const yearText = document.getElementById("yearText");
const monthText = document.getElementById("monthText");
const dayText = document.getElementById("dayText");

generateBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (!name) {
    alert("请输入姓名");
    return;
  }

  const now = new Date();
  donorName.textContent = name;
  yearText.textContent = now.getFullYear();
  monthText.textContent = now.getMonth() + 1;
  dayText.textContent = now.getDate();

  formBox.classList.add("hidden");
  certificateWrapper.classList.remove("hidden");
});

backBtn.addEventListener("click", () => {
  certificateWrapper.classList.add("hidden");
  formBox.classList.remove("hidden");
});