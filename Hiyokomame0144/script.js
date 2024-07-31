// ... (ゲームロジック) ...

// スネークの描画
function drawSnake() {
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i === 0) ? "red" : "green"; // 頭は赤、体は緑
        ctx.fillRect(snake[i].x, snake[i].y, tileSize, tileSize);
        ctx.strokeStyle = "white"; // 白枠
        ctx.strokeRect(snake[i].x, snake[i].y, tileSize, tileSize);
    }
}

// ... (その他のゲームロジック) ...
