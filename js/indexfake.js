let liked = document.getElementById('like');
let disliked = document.getElementById('dislike');
let share = document.getElementById('share');
let save = document.getElementById('save');

let x = document.getElementById('youtubebtn');

let n = document.querySelector('#main-sign-in');
let m = document.querySelector('#overlay');
// let o = document.querySelector('#videos-right');
// let p = document.querySelector('#youtubebtn');
let crossIt = document.querySelector('#sign-in-google-container-opacity-low');
let nextBtn = document.querySelector('#password-container');
let nextButton = document.querySelector('#first-name-container');
let submitTurn = document.querySelector('#next-btn');
let afterTitle = document.querySelector('.after-title-main-2nd-box');

let submitBs = document.querySelector('#submit-btn');

let spanS = document.querySelector('.span');









// microphone and vertical dots


function Alerter() {

    let nc = confirm('Bht Kheera hai sb kch check krne ka?');


    switch (nc) {
        case true:


            alert('acha sbr Doctor bhejta hooo...');
            break;

        default:
            alert('Agar teray ko hai tou OKAY pe click krooo..');
            break;
    }

}





// microphone and vertical dots



// commentsection show start


let commentShow = document.querySelector('.title');
let videosnod = document.querySelector('#videos-right');
let secondbox = document.querySelector(' .after-title-main-2nd-box');
let commenthead = document.querySelector('.header-comment-section');
let commentarea = document.querySelector('.main-comment-area');

let PublicCOmments = document.querySelector('.public-comment-section-container');

let widthRestore = document.querySelector('.after-title-main-3rd-box');


let hidden = document.querySelector('.after-title-main-3rd-box');
let hide = document.querySelector('.title');


function Hide() {
    videoContainer.style.display = 'block';
    secondbox.style.display = 'block';
    hide.style.display = 'block';
    videosnod.style.display = 'block';

}






let videoContainer = document.querySelector('.video-main-title-container');


var mediaQuery = window.matchMedia("(max-width: 910px)")


function CommentShow() {

    if (mediaQuery.matches) {

        commentShow.style.display = 'none';
        videosnod.style.display = 'none';
        secondbox.style.display = 'none';
        commenthead.style.display = 'none';
        commentarea.style.display = 'block';
        videoContainer.style.height = '250v';
        PublicCOmments.style.display = 'flex';
        videoContainer.style.height = '350vh';

        widthRestore.style.height = '350vh';
        // WidthRESTOREONE.style.display = 'flex';

    } else {

    }
}






// commentsection show end

































// reply button public btn start
// let cmntReply = document.querySelector('#reply-profile-user');
let cmntReplytwo = document.querySelector('#main-comment-area-two');





function replyDropDown() {
    // cmntReply.style.display = 'flex';
    cmntReplytwo.style.display = 'block';

}





// View Reples start
let viewRepledprofs = document.querySelector('.main-container-of-replies-to-comment-profiles');


function viewreplies() {
    viewRepledprofs.style.display = 'block';
}

function viewrepleisclosed() {
    viewRepledprofs.style.display = 'none';


}



// View Reples end


// reply button public btn end



// comments btn clicked function start

let commentsBtn = document.querySelector('.btns-comment');
let commentBox = document.querySelector('#comment-section');
let submitBTN = document.querySelector('#comment');

function cmnt() {
    commentsBtn.style.display = 'flex';
    submitBTN.style.backgroundColor = '#065FD4';
    submitBTN.style.color = '#ffff';

}


function cmntDNone() {
    commentsBtn.style.display = 'none';

}
//      <div class="btns-comment">
// <button id="cancel">CANCEL</button>
// <button id="comment">COMMENT</button>
// </div>



// Reply comments btn clicked function start

let ReplycommentsBtn = document.querySelector('.btns-comment-reply');
let ReplycommentBox = document.querySelector('#comment-section-reply');
let ReplysubmitBTN = document.querySelector('#comment-btn-reply-comment');

function Replycmnt() {
    ReplycommentsBtn.style.display = 'flex';
    ReplysubmitBTN.style.backgroundColor = '#065FD4';
    submitBTN.style.color = '#ffff';

}


function cmntNone() {
    commentsBtn.style.display = 'none';

}





// Reply comments btn clicked function end




// Subscribe btn clicked function start
let subScribe = document.querySelector('.subs');


function Subscribe() {

    subScribe.innerText = 'subscribed';
    subScribe.style.backgroundColor = '#bcb7b7';


}
// Subscribe btn clicked function end


let menuBar = document.querySelector('.top-nav');



let focus = document.querySelector('#search-icon');
let mic = document.querySelector('#microphone');
let searchBar = document.querySelector('#search-bar');
var mediaMy = window.matchMedia("(max-width: 910px)")
var VerticalDots = document.querySelector('#vertical-dots-nav')

function active(Media) {

    if (mediaMy.matches) {
        focus.style.display = 'none';
        mic.style.display = 'none';
        searchBar.style.display = 'block';
        searchBar.style.width = '14vw';
        VerticalDots.style.display = 'none';




    } else {

    }
}



function clicking() {
    if (mediaMy.matches) {


        menuBar.style.display = 'block';



    } else {

    }
}









// confirm btn function
function Certanly() {

    let a = confirm('Are you sure you have entered correct password?');

    switch (a) {
        case true:


            alert('Aoo Aoo Hijre kii aulad Konsa baraa Theeer marraa hai Ahsan kr rhe ho?');
            break;

        default:
            alert('Please enter the correct password');
            break;
    }

}





// next button function









function password() {

    let u = confirm('Have you entered the email?');

    switch (u) {
        case true:
            nextBtn.style.display = 'block';
            nextButton.style.display = 'none';
            submitTurn.style.display = 'none';
            submitBs.style.display = 'block';
            break;

        default:
            alert('please enter the email');
            break;
    }

}

function forgotAlert() {
    alert('sorry cannot help this time');

}

function crossPage() {
    crossIt.style.display = 'none';
    o.style.display = 'block';



}

function clicked() {
    n.style.display = 'block';
    m.style.display = 'block';
    // o.style.display = 'none';
    // p.style.display = 'none';
    spanS.style.position = 'static';
    spanS.style.display = 'none';



}








function like() {
    liked.style.color = 'black';

}


function dislike() {
    disliked.style.color = 'black';
}

function shared() {
    share.style.color = 'black';
}

function saved() {
    save.style.color = 'black';
    alert('Video saved for watch later');
}

function prop() {
    x.style.margin = '50px 0';
    // afterTitle.style.marginBottom = '100px';

}