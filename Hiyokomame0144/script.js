const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let snake = [{ x: 10, y: 10 }];
let dx = 1;
let dy = 0;
let foodX, foodY;
let score = 0;
let headImage = new Image(); // 蛇の頭の画像
headImage.src = 'snake_head.png'; // 画像ファイル名を指定

// ... (ゲーム開始時のメッセージ、ゲームのロジック、餌の描画など)

function drawSnake() {
    snake.forEach((segment, index) => {
        if (index === 0) { // 頭の部分
            ctx.drawImage(headImage, segment.x * 10, segment.y * 10, 10, 10);
        } else {
            ctx.fillStyle = index === 0 ? 'green' : 'lime';
            ctx.fillRect(segment.x * 10, segment.y * 10, 10, 10);
        }
    });
}

// ... (ゲームループ、描画関数など)
