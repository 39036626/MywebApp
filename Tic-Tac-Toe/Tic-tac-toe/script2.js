// 獲取按鈕和文本元素
const button = document.getElementById("myButton");
const div = document.getElementById("myDiv");

// 添加點擊事件監聽器
button.addEventListener("click", function() {
    // 在按鈕點擊時更改文本內容
    div.textContent = "按鈕被點擊了!";
    // 修改文本的樣式
    div.style.color = "red";
});
