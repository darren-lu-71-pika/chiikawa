let score = 0;
let currentStep = 0;

const textElement = document.getElementById('text');
const imageElement = document.getElementById('image');
const nextButton = document.getElementById('nextButton');

// 定义每一项的选项内容
const steps = [
    { text: "當你在路上悠哉走著時，突然聽見了熟悉的歡樂歌聲，原來是大家邊唱邊跳，開心地拿著壽喜燒，準備回家一起開心地大快朵頤！每個人臉上都洋溢著燦爛的笑容，看著大家興奮的模樣，你也忍不住跟著他們輕輕哼唱，心情瞬間愉快起來。", image: "https://img.36krcdn.com/hsossms/20240421/v2_cabb50f61a464a69a335cecdbca67150@000000_img_000?x-oss-process=image/format,jpg/interlace,1/format,jpg/interlace,1" },
    { text: "吃完美味的壽喜燒後，大家更加興奮了。他們笑著邀請你一起去外面採小花玩耍，陽光灑在大地上，空氣也清新得讓人忍不住深呼吸，這樣的日子真是太美好了！你當然不會拒絕這樣的邀請，跟著他們一起跑向那片五彩繽紛的花田。", image: "https://cdn.store-assets.com/s/734801/f/14184711.jpg?width=1200" },
    { text: "然而，就在大家正沉浸在快樂的氣氛中時，突然間，一個巨大的身影出現在眼前！是什麼東西那麼大，讓大家都停下來瞪大了眼睛，驚訝不已。大家的小心臟都快跳出來了", image: "https://i0.wp.com/chiikawahk.com/wp-content/uploads/2023/12/image-42.png?w=465&ssl=1", options: ["馬上撤退", "先攻擊看看"] },
    { text: "大家迅速反應，成功地逃脫了，吉伊和小八決定前往網咖，準備調查剛剛遇到的大寶寶，到底是怎麼回事呢？", image: "https://today-obs.line-scdn.net/0hRoE3aWG3DUB4Sh2Nni9yF0AcATFLLBdJWi0QdVVOWnBdZkIXQiheI18YUmxceEoWWHhFcghLVSMAeUIQQQ/w1200" },
    { text: "經過一番努力，終於找到了弱點！不過，要怎麼記住這些情報呢？大家圍在一起，陷入了沉思", image: "https://pbs.twimg.com/media/GAQy3sibQAALVQK.png:small", options: ["叫他們用筆記下來", "叫他們記在腦子裡"] },
    { text: "你們成功找到了剛才走散的兔兔！它依然在遠處蹦蹦跳跳，看起來開心極了，大家的心情一下子又變得輕鬆愉快", image: "https://i.ytimg.com/vi/RKaC2CtO_uc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC-HIgukynEjvmVg9p_MN4HYk1j6g" },
    { text: "大家準備行動，不過每個人還是有點緊張，尤其是對未來的冒險感到有點擔憂餒", image: "https://scontent.ftpe7-2.fna.fbcdn.net/v/t39.30808-6/433263284_815949383906976_2339086421185516309_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HLTiMCCr9g4Q7kNvgGFoz2S&_nc_zt=23&_nc_ht=scontent.ftpe7-2.fna&_nc_gid=A9c9sCljBRVmN8B6ixiPOe-&oh=00_AYBsIHPFpNG0d6l9JI56kYuArXfyxRWwWu60HfcI6iZTxQ&oe=67740575", options: ["信心喊話", "大聲斥責"] },
    { text: "你提議大家先做個體操暖身，像是要準備迎接一場大挑戰一樣。每個人都努力伸展著身體，互相打氣，笑聲充斥著整個空間，讓人忍不住也想一起跟著動起來！", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrs6iVYYKpo8FazX_MY51vW6rvsFo3GLTDICqs-zZXKffqwyix-Yglr5j-p-3WYRKP9WA&usqp=CAU" },
    { text: "終於，大家準備好了，圍成一圈圍住那隻大寶寶。隨著一聲令下，大家像是勇敢的小戰士一樣，齊心協力地窮追猛打", image: "https://treehole.hk/wp-content/uploads/image-19.png" },
    { text: "討伐成功了嗎？", image: "https://treehole.hk/wp-content/uploads/Untitled.png" }
];

function displayStep() {
    const step = steps[currentStep];
    textElement.innerText = step.text;
    imageElement.src = step.image || "";

    if (step.options) {
        showOptions(step.options);
    } else {
        hideOptions();
    }
}

function chooseOption(choice) {
    if (choice === "B") score++;
    currentStep++;
    displayStep();
}

function showOptions(options) {
    const buttons = document.querySelectorAll('.options button');
    buttons[0].innerText = options[0];
    buttons[1].innerText = options[1];
    document.querySelector('.options').style.display = 'flex';
    nextButton.style.display = 'none';
}

function hideOptions() {
    document.querySelector('.options').style.display = 'none';
    nextButton.style.display = 'block';
}

function displayEnding() {
    const endingText = score === 3
        ? "結局 10-1：不小心殺死他了！大家嚇死了！重來一次逼"
        : score >= 1
        ? "結局 10-2：小八被抓走了！你只好按下重新整理，再重來一次試試看"
        : "結局 10-3：你們和平的把它趕走了！這是最好的結局！你撿到了一張它身上掉下來的紙條，上面寫著「200202」，可以輸入在哪裡呢？。";
    textElement.innerText = endingText;
    imageElement.style.display = "none";
    nextButton.style.display = "none";
}

nextButton.addEventListener('click', () => {
    currentStep++;
    if (currentStep < steps.length) {
        displayStep();
    } else {
        displayEnding();
    }
});

window.onload = displayStep;
