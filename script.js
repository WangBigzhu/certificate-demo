const nameInput = document.getElementById("nameInput");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");

const formBox = document.getElementById("formBox");
const certificateWrapper = document.getElementById("certificateWrapper");

const donorName = document.getElementById("donorName");
const dateText = document.getElementById("dateText");
const certificate = document.getElementById("certificate");

// 生成证书
generateBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();

  if (!name) {
    alert("请输入姓名");
    return;
  }

  const now = new Date();
  donorName.textContent = name;
  dateText.textContent = `${now.getFullYear()}年 ${now.getMonth() + 1}月 ${now.getDate()}日`;

  formBox.classList.add("hidden");
  certificateWrapper.classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// 下载证书
downloadBtn.addEventListener("click", async () => {
  try {
    downloadBtn.disabled = true;
    downloadBtn.textContent = "生成中...";

    const canvas = await html2canvas(certificate, {
      scale: 2,
      useCORS: true,
      backgroundColor: null
    });

    const link = document.createElement("a");
    link.download = "公益证书.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  } catch (error) {
    alert("下载失败，请稍后重试");
    console.error(error);
  } finally {
    downloadBtn.disabled = false;
    downloadBtn.textContent = "下载证书";
  }
});