// キャンバスの設定
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const canvasWidth = 600;
const canvasHeight = 400;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

// ボール
const ballRadius = 10;
let ballX = canvasWidth / 2;
let ballY = canvasHeight - 30;
let dx = 2;
let dy = -2;
const ballImage = new Image();
ballImage.src = "ball.png"; // ボール画像のパス

ballImage.onerror = function() {
    console.error("ボール画像の読み込みに失敗しました。");
    // 代替画像を表示する場合はここにコードを追加
};

// パドル
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvasWidth - paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;

// ブロック
const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;
const bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

// スコア
let score = 0;

// イベントリスナー
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight" || e.key == "d") {
        rightPressed = true
