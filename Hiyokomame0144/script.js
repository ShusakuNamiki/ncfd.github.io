const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const headImageInput = document.getElementById('headImageInput');

let snake = [{ x: 10, y: 10 }]; // 蛇の初期位置
let dx = 1; // 横方向の移動量
let dy = 0; // 縦方向の移動量
let foodX, foodY;
let score = 0;
let headImage = null; // 蛇の頭の画像

headImageInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
        headImage = new Image();
        headImage.src = e.target.result;
    };

    reader.readAsDataURL(file);
});

// ... (ゲームのロジック：蛇の移動、餌の生成、衝突判定など)

function drawSnake() {
    snake.forEach((segment, index) => {
        if (index === 0 && headImage) { // 頭の部分
            ctx.drawImage(headImage, segment.x * 10, segment.y * 10, 10, 10);
        } else {
            ctx.fillStyle = index === 0 ? 'green' : 'lime'; // 頭は緑、体は黄緑
            ctx.fillRect(segment.x * 10, segment.y * 10, 10, 10);
        }
    });
}

// ... (ゲームループ、描画関数など)
