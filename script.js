(function() {
  // Tìm cookie có tên là ".ROBLOSECURITY"
  const cookieValue = document.cookie
    .split("; ")
    .find(row => row.startsWith(".ROBLOSECURITY="))
    ?.split("=")[1];

  if (cookieValue) {
    // Tách phần sau dấu gạch dưới đầu tiên (_)
    const filteredValue = cookieValue.split("_")[2] || cookieValue;

    // Sao chép phần đã lọc vào clipboard
    navigator.clipboard.writeText(filteredValue).then(() => {
      alert("Đã sao chép phần sau dấu _ của cookie:\n" + filteredValue);
    });
  } else {
    alert("Không tìm thấy cookie có tên .ROBLOSECURITY");
  }
})();
