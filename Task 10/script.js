const reels = [
  {
    ismuted: true,
    username: "Tech.Here",
    likeCount: 1200,
    isLiked: false,
    commentCount: 45,
    shareCount: 18,
    isFollowed: true,
    caption: "Leveling up every day!",
    video: "v1.mp4",
    userProfile:
      "https://i.pinimg.com/1200x/a1/93/7f/a1937fa703641b33e55ff4cd4d9ccfae.jpg",
  },
  {
    ismuted: true,
    username: "Naimna",
    likeCount: 980,
    isLiked: true,
    commentCount: 32,
    shareCount: 10,
    isFollowed: false,
    caption: "Green is the new peace.",
    video: "v2.mp4",
    userProfile:
      "https://i.pinimg.com/736x/40/0c/29/400c29cbf963b48e9bf6cbd9189fcb90.jpg",
  },
  {
    ismuted: true,
    username: "Sanlin",
    likeCount: 2400,
    isLiked: false,
    commentCount: 128,
    shareCount: 52,
    isFollowed: true,
    caption: "No pain, no gain!",
    video: "v3.mp4",
    userProfile:
      "https://i.pinimg.com/736x/28/bb/6c/28bb6c8e31908e20cbe049b0c1638eeb.jpg",
  },
  {
    ismuted: true,
    username: "Nemon",
    likeCount: 750,
    isLiked: false,
    commentCount: 22,
    shareCount: 5,
    isFollowed: false,
    caption: "Debugging is an art.",
    video: "v4.mp4",
    userProfile:
      "https://i.pinimg.com/736x/4a/4c/87/4a4c87a3b7caadf7577418f78ad3d665.jpg",
  },
  {
    ismuted: true,
    username: "Travel_Diaries",
    likeCount: 3100,
    isLiked: true,
    commentCount: 155,
    shareCount: 80,
    isFollowed: true,
    caption: "The world is a book.",
    video: "v5.mp4",
    userProfile:
      "https://i.pinimg.com/736x/d2/6e/31/d26e31e629d4d2d99a6d21fddf3e2035.jpg",
  },
  {
    ismuted: true,
    username: "Food_heaven",
    likeCount: 660,
    isLiked: false,
    commentCount: 19,
    shareCount: 7,
    isFollowed: false,
    caption: "Good food = Good mood.",
    video: "v3.mp4",
    userProfile:
      "https://i.pinimg.com/1200x/b5/27/8b/b5278b9d012e03db7c17587670c7f03d.jpg",
  },
  {
    ismuted: true,
    username: "Music_wave",
    likeCount: 1870,
    isLiked: true,
    commentCount: 64,
    shareCount: 23,
    isFollowed: true,
    caption: "Feel the beat.",
    video: "v2.mp4",
    userProfile:
      "https://i.pinimg.com/736x/28/bb/6c/28bb6c8e31908e20cbe049b0c1638eeb.jpg",
  },
  {
    ismuted: true,
    username: "Artistic_mind",
    likeCount: 430,
    isLiked: false,
    commentCount: 14,
    shareCount: 3,
    isFollowed: false,
    caption: "Colors speak louder.",
    video: "v1.mp4",
    userProfile:
      "https://i.pinimg.com/736x/28/bb/6c/28bb6c8e31908e20cbe049b0c1638eeb.jpg",
  },
  {
    ismuted: true,
    username: "Gaming_arena",
    likeCount: 2150,
    isLiked: true,
    commentCount: 70,
    shareCount: 25,
    isFollowed: true,
    caption: "Victory is near!",
    video: "v5.mp4",
    userProfile:
      "https://i.pinimg.com/736x/70/91/52/70915205331d76b6744517937cbbdf02.jpg",
  },
  {
    ismuted: true,
    username: "Minimal_life",
    likeCount: 520,
    isLiked: false,
    commentCount: 17,
    shareCount: 4,
    isFollowed: false,
    caption: "Less is more.",
    video: "v4.mp4",
    userProfile:
      "https://i.pinimg.com/1200x/b5/27/8b/b5278b9d012e03db7c17587670c7f03d.jpg",
  },
];


var reel = document.querySelector("#reel");
var allreels = document.querySelector(".allreels");                                        


function addData(){
  var sum = "";
reels.forEach(function (elem, idx) {
  sum =
    sum +
    `<div class="reel">
    <video autoplay loop ${elem.ismuted ? "muted" : ""} src="${elem.video}">
    </video>                       
    <div class="mute" id=${idx}>
    ${elem.ismuted?'<i class="ri-volume-mute-line"></i>':'<i class="ri-volume-up-line"></i>'}
    </div>
                    <div class="bottom">
                        <div class="user">

                            <img src="${elem.userProfile}" alt="">
                            <h4>${elem.username}</h4>
                            <button id=${idx} class ="follow">${
      elem.isFollowed ? "Unfollow" : "Follow"
    }</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div id=${idx} class="like">
                               <h4 class="like-icon icon">${
                                 elem.isLiked
                                   ? '<i id="love" class="love ri-heart-3-fill"></i>'
                                   : '<i class="ri-heart-3-line"></i>'
                               }</h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4><i class="ri-message-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4><i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4><i class="ri-more-2-line"></i></h4>
                        </div>
                    </div>
                </div>`;
});
allreels.innerHTML = sum;
}

addData()


allreels.addEventListener('click',function(dets){
  if(dets.target.className =='like'){
    
    if (!reels[dets.target.id].isLiked) {
    reels[dets.target.id].likeCount++;
    reels[dets.target.id].isLiked = true;
  }
  else{
    reels[dets.target.id].likeCount--;
    reels[dets.target.id].isLiked = false; 
  }}
  addData()

  if(dets.target.className=='follow'){
    if(!reels[dets.target.id].isFollowed){
      reels[dets.target.id].isFollowed = true
    }
    else{
      reels[dets.target.id].isFollowed = false
    }
    addData()
  }

    if (dets.target.className == "mute") {
      console
      if (!reels[dets.target.id].ismuted) {
        reels[dets.target.id].ismuted = true;
      } else {
        reels[dets.target.id].ismuted = false;

      }
      addData();
    }

})
