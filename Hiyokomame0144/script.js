// ... (他のコードは基本的に同じ)

// ゲーム開始時のメッセージ
alert("イースターエッグを探せ！🥚\n卵を食べるとスコアがアップ！")

// ... (ゲームのロジック)

// 餌を描画する関数
function drawFood() {
    ctx.beginPath();
    ctx.arc(foodX * 10 + 5, foodY * 10 + 5, 4, 0, 2 * Math.PI); // 卵の形に調整
    ctx.fillStyle = "yellow"; // 卵の色
    ctx.fill();
    ctx.closePath();
}

// ... (ゲームループ、描画関数など)
