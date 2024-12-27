let score = 0;
let currentStep = 0;

const textElement = document.getElementById('text');
const imageElement = document.getElementById('image');
const nextButton = document.getElementById('nextButton');

// 定义每一项的选项内容
const steps = [
    { text: "你進到了房間，發現大家開心的在吃壽喜燒，", image: "https://img.36krcdn.com/hsossms/20240421/v2_cabb50f61a464a69a335cecdbca67150@000000_img_000?x-oss-process=image/format,jpg/interlace,1/format,jpg/interlace,1" },
    { text: "吃完之後，大家邀請你一起去外面採小花玩", image: "https://cdn.store-assets.com/s/734801/f/14184711.jpg?width=1200" },
    { text: "突然間，有一個巨大的身影出現了", image: "https://i0.wp.com/chiikawahk.com/wp-content/uploads/2023/12/image-42.png?w=465&ssl=1", options: ["馬上撤退", "先攻擊看看"] },
    { text: "吉伊跟小八前往網咖，調查剛剛遇到的大寶寶。", image: "https://today-obs.line-scdn.net/0hRoE3aWG3DUB4Sh2Nni9yF0AcATFLLBdJWi0QdVVOWnBdZkIXQiheI18YUmxceEoWWHhFcghLVSMAeUIQQQ/w1200" },
    { text: "找到弱點了！但是要怎麼記住呢", image: "https://pbs.twimg.com/media/GAQy3sibQAALVQK.png:small", options: ["叫他們用筆記下來", "叫他們記在腦子裡"] },
    { text: "找到了剛剛走散的兔兔了！", image: "https://i.ytimg.com/vi/RKaC2CtO_uc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC-HIgukynEjvmVg9p_MN4HYk1j6g" },
    { text: "行動之前，大家還是很緊張", image: "https://scontent.ftpe7-2.fna.fbcdn.net/v/t39.30808-6/433263284_815949383906976_2339086421185516309_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HLTiMCCr9g4Q7kNvgGFoz2S&_nc_zt=23&_nc_ht=scontent.ftpe7-2.fna&_nc_gid=A9c9sCljBRVmN8B6ixiPOe-&oh=00_AYBsIHPFpNG0d6l9JI56kYuArXfyxRWwWu60HfcI6iZTxQ&oe=67740575", options: ["信心喊話", "大聲斥責"] },
    { text: "還讓大家先做個體操暖身！", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrs6iVYYKpo8FazX_MY51vW6rvsFo3GLTDICqs-zZXKffqwyix-Yglr5j-p-3WYRKP9WA&usqp=CAU" },
    { text: "大家圍著大寶寶，一陣窮追猛打", image: "https://treehole.hk/wp-content/uploads/image-19.png" },
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
        ? "結局 10-1：竟然是江！「好久不見，兄弟，我早就聽說你在加拿大的抬「頭」挺胸的事蹟囉，快跟我說吧。」"
        : score >= 1
        ? "結局 10-2：你搞砸了一切! 但好險有呂，他不發一聲的知道你回程班機時間跑來等你，你真的很感謝他，並且發誓之後每個月要飯也要給他五千。"
        : "結局 10-3：是Maggie！你認真對待感情，她決定提早跟你一起回來共同生活。";
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
