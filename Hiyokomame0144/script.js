// ... (ゲームロジック) ...

// イースターエッグ
let originalTitle = "Easter Egg";
document.addEventListener('keydown', function(event) {
    if (event.key === 'E' && event.altKey && event.ctrlKey) { // Ctrl + Alt + E
        document.querySelector('h1').textContent = originalTitle === "Easter Egg" ? "CCCP Snake" : "Easter Egg";
        originalTitle = document.querySelector('h1').textContent;
    }
});

// ... (その他のゲームロジック) ...
