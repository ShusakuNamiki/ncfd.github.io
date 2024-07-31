// ... (ゲームのロジックは基本的に同じ)

// 餌を描画する関数
function drawFood() {
    ctx.beginPath();
    ctx.arc(foodX * 10 + 5, foodY * 10 + 5, 4, 0, 2 * Math.PI);
    ctx.fillStyle = "#e9c46a"; // 黄土色
    ctx.fill();
    ctx.closePath();
}

// 蛇を描画する関数
function drawSnake() {
    snake.forEach(segment => {
        ctx.fillStyle = '#e76f51'; // オレンジ色
        ctx.fillRect(segment.x * 10, segment.y * 10, 10, 10);
    });
}
