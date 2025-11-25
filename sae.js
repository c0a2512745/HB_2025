const kaitou_btn = document.querySelector(".kaitou_btn");
const kaitou = document.querySelectorAll(".kaitou")
const outputs = document.querySelector(".output");

function sousin(){

    if (kaitou_btn.textContent == "こたえる"){

        kaitou_btn.textContent = "こたえた";
        let word = [];

        for (let i = 0; i < kaitou.length; i++){
            if(kaitou[i].value.trim() != ""){
                word.push(kaitou[i].value.trim());
            }
        }
        
        outputs.textContent = word.join(" / ");

    }
}

kaitou_btn.addEventListener("click",sousin);




const seikai_mojidake_btn = document.querySelector(".seikai_mojidake_btn");
const seikai_mojidake = document.querySelector(".seikai_mojidake");

function mojidake(){
    if (seikai_mojidake_btn.textContent == "単語だけみる"){
        seikai_mojidake_btn.textContent = "かくす";

        const word = ["まぬけ","あほう(あほ)","ちび","くそ","ふとやか"];
        seikai_mojidake.innerHTML = word.join("<br>")

    }else{
        seikai_mojidake_btn.textContent = "単語だけみる";

        seikai_mojidake.textContent = "";
    }
}

seikai_mojidake_btn.addEventListener("click",mojidake)





const seikai_btn = document.querySelector(".seikai_btn");
const moji = document.querySelectorAll(".moji");

function miru(){
    if (seikai_btn.textContent == "答えをみる"){
        seikai_btn.textContent = "答えをかくす";
        for (let i = 0; i < moji.length; i++){
            moji[i].style.color = "rgb(200,50,100)";
        }
    }else{
        seikai_btn.textContent = "答えをみる";
        for (let i = 0; i < moji.length; i++){
            moji[i].style.color = "rgb(175,175,175)";
        }
    }
    
}

seikai_btn.addEventListener("click",miru);