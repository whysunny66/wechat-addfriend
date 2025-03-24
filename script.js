document.addEventListener('DOMContentLoaded', function() {
  const signatureElement = document.getElementById('signature');
  const signatureInput = document.getElementById('signatureInput');
  const updateButton = document.getElementById('updateSignature');
  let scale = 1;

  // 每次点击签名，放大效果
  signatureElement.addEventListener('click', function() {
    scale += 0.2;
    signatureElement.style.transform = 'scale(' + scale + ')';
  });

  // 通过输入框更新签名内容
  updateButton.addEventListener('click', function() {
    const newText = signatureInput.value.trim();
    if(newText !== "") {
      signatureElement.textContent = newText;
      // 重置放大比例
      scale = 1;
      signatureElement.style.transform = 'scale(1)';
    }
  });

  // 生成当前 URL 的二维码
  new QRCode(document.getElementById("qrCode"), {
    text: window.location.href,
    width: 128,
    height: 128
  });
});
