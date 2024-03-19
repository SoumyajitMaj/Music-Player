console.log('Hello')

let songIndex=1;
let audioElement = new Audio();
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songInfo=document.getElementById('songInfo');
let gif =document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songItemPlay=document.getElementById('songItemPlay')
let info=document.getElementById('info');
let na1=document.getElementById('na1');
let na2=document.getElementById('na2');
let na3=document.getElementById('na3');
let na4=document.getElementById('na4');
let na5=document.getElementById('na5');
let na6=document.getElementById('na6');
let na7=document.getElementById('na7');
let na8=document.getElementById('na8');
let na9=document.getElementById('na9');
let na10=document.getElementById('na10');


let songs = [
    {songName:'Beliver - Imagine Dragons', filePath:'songs/song1.mp3', coverPath:'covers/cover1.jpg' },
    {songName:'Friends - Anne Marie', filePath:'songs/song2.mp3', coverPath:'covers/cover2.jpeg'},
    {songName:'Mockingbird - Eminem', filePath:'songs/song3.mp3', coverPath:'covers/cover3.jpg'},
    {songName:'Despacito - Daddy Yankee-ft.Justin Bieber', filePath:'songs/song4.mp3', coverPath:'covers/cover4.jpeg' },
    {songName:'Gasolina - Daddy Yankee', filePath:'songs/song5.mp3', coverPath:'covers/cover5.jpg' },
    {songName:'On My Way - Alen Walker', filePath:'songs/song6.mp3', coverPath:'covers/cover6.jpg' },
    {songName:'Shape Of You - Ed Sheeran', filePath:'songs/song7.mp3', coverPath:'covers/cover7.jpg' },
    {songName:'Safari - Serena', filePath:'songs/song8.mp3', coverPath:'covers/cover8.jpg' },
    {songName:'Let Me Love You - DJ Snake', filePath:'songs/song9.mp3', coverPath:'covers/cover9.jpg' },
    {songName:'High School - Nicki Minaj', filePath:'songs/song10.mp3', coverPath:'covers/cover10.jpg' }
]



songItems.forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src= songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText= songs[i].songName;
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        
        songInfo.style.opacity=1;
        gif.style.opacity=1;
        na1.style.opacity=0;
        na2.style.opacity=0;
        na3.style.opacity=0;
        na4.style.opacity=0;
        na5.style.opacity=0;
        na6.style.opacity=0;
        na7.style.opacity=0;
        na8.style.opacity=0;
        na9.style.opacity=0;
        na10.style.opacity=0;
        if(songIndex==1)
        {
            audioElement.src='songs/song1.mp3';
            audioElement.play();
            songInfo.style.opacity=1;
            gif.style.opacity=1;
            na1.style.opacity=1;
            na2.style.opacity=0;
            na3.style.opacity=0;
            na4.style.opacity=0;
            na5.style.opacity=0;
            na6.style.opacity=0;
            na7.style.opacity=0;
            na8.style.opacity=0;
            na9.style.opacity=0;
            na10.style.opacity=0;
            document.getElementById('1').classList.remove('fa-circle-play');
            document.getElementById('1').classList.add('fa-circle-pause');
        }
        else if(songIndex==2)
        {
            audioElement.src='songs/song2.mp3';
            audioElement.play();
            songInfo.style.opacity=1;
            gif.style.opacity=1;
            na2.style.opacity=1;
            na1.style.opacity=0;
            na3.style.opacity=0;
            na4.style.opacity=0;
            na5.style.opacity=0;
            na6.style.opacity=0;
            na7.style.opacity=0;
            na8.style.opacity=0;
            na9.style.opacity=0;
            na10.style.opacity=0;
            document.getElementById('2').classList.remove('fa-circle-play');
            document.getElementById('2').classList.add('fa-circle-pause');
        }
        else if(songIndex==3)
        {
            audioElement.src='songs/song3.mp3';
            audioElement.play();
            gif.style.opacity=1;
            na3.style.opacity=1;
            na1.style.opacity=0;
            na2.style.opacity=0;
            na4.style.opacity=0;
            na5.style.opacity=0;
            na6.style.opacity=0;
            na7.style.opacity=0;
            na8.style.opacity=0;
            na9.style.opacity=0;
            na10.style.opacity=0;
            document.getElementById('3').classList.remove('fa-circle-play');
            document.getElementById('3').classList.add('fa-circle-pause');
        }
        else if(songIndex==4)
        {
            audioElement.src='songs/song4.mp3';
            audioElement.play();
            gif.style.opacity=1;
            na4.style.opacity=1;
            na1.style.opacity=0;
            na2.style.opacity=0;
            na3.style.opacity=0;
            na5.style.opacity=0;
            na6.style.opacity=0;
            na7.style.opacity=0;
            na8.style.opacity=0;
            na9.style.opacity=0;
            na10.style.opacity=0;
            document.getElementById('4').classList.remove('fa-circle-play');
            document.getElementById('4').classList.add('fa-circle-pause');
        }
        else if(songIndex==5)
        {
            audioElement.src='songs/song5.mp3';
            audioElement.play();
            gif.style.opacity=1;
            na5.style.opacity=1;
            na1.style.opacity=0;
            na2.style.opacity=0;
            na4.style.opacity=0;
            na3.style.opacity=0;
            na6.style.opacity=0;
            na7.style.opacity=0;
            na8.style.opacity=0;
            na9.style.opacity=0;
            na10.style.opacity=0;
            document.getElementById('5').classList.remove('fa-circle-play');
            document.getElementById('5').classList.add('fa-circle-pause');
        }
        else if(songIndex==6)
        {
            audioElement.src='songs/song6.mp3';
            audioElement.play();
            gif.style.opacity=1;
            na6.style.opacity=1;
            na1.style.opacity=0;
            na2.style.opacity=0;
            na4.style.opacity=0;
            na5.style.opacity=0;
            na3.style.opacity=0;
            na7.style.opacity=0;
            na8.style.opacity=0;
            na9.style.opacity=0;
            na10.style.opacity=0;
            document.getElementById('6').classList.remove('fa-circle-play');
            document.getElementById('6').classList.add('fa-circle-pause');
        }
        else if(songIndex==7)
        {
            audioElement.src='songs/song7.mp3';
            audioElement.play();
            gif.style.opacity=1;
            na7.style.opacity=1;
            na1.style.opacity=0;
            na2.style.opacity=0;
            na4.style.opacity=0;
            na5.style.opacity=0;
            na6.style.opacity=0;
            na3.style.opacity=0;
            na8.style.opacity=0;
            na9.style.opacity=0;
            na10.style.opacity=0;
            document.getElementById('7').classList.remove('fa-circle-play');
            document.getElementById('7').classList.add('fa-circle-pause');
        }
        else if(songIndex==8)
        {
            audioElement.src='songs/song8.mp3';
            audioElement.play();
            gif.style.opacity=1;
            na8.style.opacity=1;
            na1.style.opacity=0;
            na2.style.opacity=0;
            na4.style.opacity=0;
            na5.style.opacity=0;
            na6.style.opacity=0;
            na7.style.opacity=0;
            na3.style.opacity=0;
            na9.style.opacity=0;
            na10.style.opacity=0;
            document.getElementById('8').classList.remove('fa-circle-play');
            document.getElementById('8').classList.add('fa-circle-pause');
        }
        else if(songIndex==9)
        {
            audioElement.src='songs/song9.mp3';
            audioElement.play();
            gif.style.opacity=1;
            na9.style.opacity=1;
            na1.style.opacity=0;
            na2.style.opacity=0;
            na4.style.opacity=0;
            na5.style.opacity=0;
            na6.style.opacity=0;
            na7.style.opacity=0;
            na8.style.opacity=0;
            na3.style.opacity=0;
            na10.style.opacity=0;
            document.getElementById('9').classList.remove('fa-circle-play');
            document.getElementById('9').classList.add('fa-circle-pause');
        }
        else if(songIndex==10)
        {
            audioElement.src='songs/song10.mp3';
            audioElement.play();
            gif.style.opacity=1;
            na10.style.opacity=1;
            na1.style.opacity=0;
            na2.style.opacity=0;
            na4.style.opacity=0;
            na5.style.opacity=0;
            na6.style.opacity=0;
            na7.style.opacity=0;
            na8.style.opacity=0;
            na9.style.opacity=0;
            na3.style.opacity=0;
            document.getElementById('10').classList.remove('fa-circle-play');
            document.getElementById('10').classList.add('fa-circle-pause');
        }
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
        });
        songInfo.style.opacity=0;
        gif.style.opacity=0;
        na1.style.opacity=0;
        na2.style.opacity=0;
        na3.style.opacity=0;
        na4.style.opacity=0;
        na5.style.opacity=0;
        na6.style.opacity=0;
        na7.style.opacity=0;
        na8.style.opacity=0;
        na9.style.opacity=0;
        na10.style.opacity=0;
    }
        
});


audioElement.addEventListener('timeupdate', ()=>{

    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
});

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime= myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
           
    })    
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        x=e.target.id;
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
            if(x==1) {
                audioElement.currentTime=0;
                audioElement.src='songs/song1.mp3'
                audioElement.play();
                songIndex=1;
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-circle-pause');
                songInfo.style.opacity=1;
                gif.style.opacity=1;
                na1.style.opacity=1;
                na2.style.opacity=0;
                na3.style.opacity=0;
                na4.style.opacity=0;
                na5.style.opacity=0;
                na6.style.opacity=0;
                na7.style.opacity=0;
                na8.style.opacity=0;
                na9.style.opacity=0;
                na10.style.opacity=0;
                
            }
            else if(x==2){
                audioElement.currentTime=0;
                audioElement.src='songs/song2.mp3'
                audioElement.play();
                songIndex=2;
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-circle-pause');
                songInfo.style.opacity=1;
                gif.style.opacity=1;
                na2.style.opacity=1;
                na1.style.opacity=0;
                na3.style.opacity=0;
                na4.style.opacity=0;
                na5.style.opacity=0;
                na6.style.opacity=0;
                na7.style.opacity=0;
                na8.style.opacity=0;
                na9.style.opacity=0;
                na10.style.opacity=0;
                
                
            }
            else if(x==3){
                audioElement.currentTime=0;
                audioElement.src='songs/song3.mp3'
                audioElement.play();
                songIndex=3;
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-circle-pause');
                songInfo.style.opacity=1;
                gif.style.opacity=1;
                na3.style.opacity=1;
                na1.style.opacity=0;
                na2.style.opacity=0;
                na4.style.opacity=0;
                na5.style.opacity=0;
                na6.style.opacity=0;
                na7.style.opacity=0;
                na8.style.opacity=0;
                na9.style.opacity=0;
                na10.style.opacity=0;
    
            }
            else if(x==4){
                audioElement.currentTime=0;
                audioElement.src='songs/song4.mp3'
                audioElement.play();
                songIndex=4;
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-circle-pause');
                songInfo.style.opacity=1;
                gif.style.opacity=1;
                na4.style.opacity=1;
                na1.style.opacity=0;
                na2.style.opacity=0;
                na3.style.opacity=0;
                na5.style.opacity=0;
                na6.style.opacity=0;
                na7.style.opacity=0;
                na8.style.opacity=0;
                na9.style.opacity=0;
                na10.style.opacity=0;
            }
            else if(x==5){
                audioElement.currentTime=0;
                audioElement.src='songs/song5.mp3'
                audioElement.play();
                songIndex=5;
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-circle-pause');
                songInfo.style.opacity=1;
                gif.style.opacity=1;
                na5.style.opacity=1;
                na1.style.opacity=0;
                na2.style.opacity=0;
                na3.style.opacity=0;
                na4.style.opacity=0;
                na6.style.opacity=0;
                na7.style.opacity=0;
                na8.style.opacity=0;
                na9.style.opacity=0;
                na10.style.opacity=0;

            }
            else if(x==6){
                audioElement.currentTime=0;
                audioElement.src='songs/song6.mp3'
                audioElement.play();
                songIndex=6;
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-circle-pause');
                songInfo.style.opacity=1;
                gif.style.opacity=1;
                na6.style.opacity=1;
                na1.style.opacity=0;
                na2.style.opacity=0;
                na3.style.opacity=0;
                na4.style.opacity=0;
                na5.style.opacity=0;
                na7.style.opacity=0;
                na8.style.opacity=0;
                na9.style.opacity=0;
                na10.style.opacity=0;
            }
            else if(x==7){
                audioElement.currentTime=0;
                audioElement.src='songs/song7.mp3'
                audioElement.play();
                songIndex=7;
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-circle-pause');
                songInfo.style.opacity=1;
                gif.style.opacity=1;
                na7.style.opacity=1;
                na1.style.opacity=0;
                na2.style.opacity=0;
                na3.style.opacity=0;
                na4.style.opacity=0;
                na5.style.opacity=0;
                na6.style.opacity=0;
                na8.style.opacity=0;
                na9.style.opacity=0;
                na10.style.opacity=0;
            }
            else if(x==8){
                audioElement.currentTime=0;
                audioElement.src='songs/song8.mp3'
                audioElement.play();
                songIndex=8;
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-circle-pause');
                songInfo.style.opacity=1;
                gif.style.opacity=1;
                na8.style.opacity=1;
                na1.style.opacity=0;
                na2.style.opacity=0;
                na3.style.opacity=0;
                na4.style.opacity=0;
                na5.style.opacity=0;
                na6.style.opacity=0;
                na7.style.opacity=0;
                na9.style.opacity=0;
                na10.style.opacity=0;
            }
            else if(x==9){
                audioElement.currentTime=0;
                audioElement.src='songs/song9.mp3'
                audioElement.play();
                songIndex=9;
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-circle-pause');
                songInfo.style.opacity=1;
                gif.style.opacity=1;
                na9.style.opacity=1;
                na1.style.opacity=0;
                na2.style.opacity=0;
                na3.style.opacity=0;
                na4.style.opacity=0;
                na5.style.opacity=0;
                na6.style.opacity=0;
                na7.style.opacity=0;
                na8.style.opacity=0;
                na10.style.opacity=0;
            }
            else if(x==10){
                audioElement.currentTime=0;
                audioElement.src='songs/song10.mp3'
                audioElement.play();
                songIndex=10;
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-circle-pause');
                songInfo.style.opacity=1;
                gif.style.opacity=1;
                na10.style.opacity=1;
                na1.style.opacity=0;
                na2.style.opacity=0;
                na3.style.opacity=0;
                na4.style.opacity=0;
                na5.style.opacity=0;
                na6.style.opacity=0;
                na7.style.opacity=0;
                na8.style.opacity=0;
                na9.style.opacity=0;
            }
    
    
    } )
});

document.getElementById('previous').addEventListener('click', ()=>{
            
    if(songIndex==1){
        audioElement.currentTime=0;
        audioElement.src='songs/song1.mp3';
        audioElement.play();
        songInfo.style.opacity=1;
        gif.style.opacity=1;
        na1.style.opacity=1;
        na2.style.opacity=0;
        na3.style.opacity=0;
        na4.style.opacity=0;
        na5.style.opacity=0;
        na6.style.opacity=0;
        na7.style.opacity=0;
        na8.style.opacity=0;
        na9.style.opacity=0;
        na10.style.opacity=0;
        
    }
    else if(songIndex==2){
        audioElement.currentTime=0;
        audioElement.src='songs/song1.mp3';
        audioElement.play();
        songIndex-=1;
        songInfo.style.opacity=1;
        gif.style.opacity=1;
        na1.style.opacity=1;
        na2.style.opacity=0;
        na3.style.opacity=0;
        na4.style.opacity=0;
        na5.style.opacity=0;
        na6.style.opacity=0;
        na7.style.opacity=0;
        na8.style.opacity=0;
        na9.style.opacity=0;
        na10.style.opacity=0;
        document.getElementById('1').classList.add('fa-circle-pause');
        document.getElementById('2').classList.remove('fa-circle-pause');
        document.getElementById('2').classList.add('fa-circle-play');
    }
    else if(songIndex==3){
        audioElement.currentTime=0;
        audioElement.src='songs/song2.mp3';
        audioElement.play();
        songIndex-=1;
        songInfo.style.opacity=1;
        gif.style.opacity=1;
        na2.style.opacity=1;
        na1.style.opacity=0;
        na3.style.opacity=0;
        na4.style.opacity=0;
        na5.style.opacity=0;
        na6.style.opacity=0;
        na7.style.opacity=0;
        na8.style.opacity=0;
        na9.style.opacity=0;
        na10.style.opacity=0;
        document.getElementById('2').classList.add('fa-circle-pause');
        document.getElementById('3').classList.remove('fa-circle-pause');
        document.getElementById('3').classList.add('fa-circle-play');
        
    }
    else if(songIndex==4){
        audioElement.currentTime=0;
        audioElement.src='songs/song3.mp3';
        audioElement.play();
        songIndex-=1;
        songInfo.style.opacity=1;
        gif.style.opacity=1;
        na3.style.opacity=1;
        na1.style.opacity=0;
        na2.style.opacity=0;
        na4.style.opacity=0;
        na5.style.opacity=0;
        na6.style.opacity=0;
        na7.style.opacity=0;
        na8.style.opacity=0;
        na9.style.opacity=0;
        na10.style.opacity=0;
        document.getElementById('3').classList.add('fa-circle-pause');
        document.getElementById('4').classList.remove('fa-circle-pause');
        document.getElementById('4').classList.add('fa-circle-play');
        
    }
    else if(songIndex==5){
        audioElement.currentTime=0;
        audioElement.src='songs/song4.mp3';
        audioElement.play();
        songIndex-=1;
        songInfo.style.opacity=1;
        gif.style.opacity=1;
        na4.style.opacity=1;
        na1.style.opacity=0;
        na2.style.opacity=0;
        na3.style.opacity=0;
        na5.style.opacity=0;
        na6.style.opacity=0;
        na7.style.opacity=0;
        na8.style.opacity=0;
        na9.style.opacity=0;
        na10.style.opacity=0;
        document.getElementById('4').classList.add('fa-circle-pause');
        document.getElementById('5').classList.remove('fa-circle-pause');
        document.getElementById('5').classList.add('fa-circle-play');
        
    }
    else if(songIndex==6){
        audioElement.currentTime=0;
        audioElement.src='songs/song5.mp3';
        audioElement.play();
        songIndex-=1;
        songInfo.style.opacity=1;
        gif.style.opacity=1;
        na5.style.opacity=1;
        na1.style.opacity=0;
        na2.style.opacity=0;
        na3.style.opacity=0;
        na4.style.opacity=0;
        na6.style.opacity=0;
        na7.style.opacity=0;
        na8.style.opacity=0;
        na9.style.opacity=0;
        na10.style.opacity=0;
        document.getElementById('5').classList.add('fa-circle-pause');
        document.getElementById('6').classList.remove('fa-circle-pause');
        document.getElementById('6').classList.add('fa-circle-play');
        
    }
    else if(songIndex==7){
        audioElement.currentTime=0;
        audioElement.src='songs/song6.mp3';
        audioElement.play();
        songIndex-=1;
        songInfo.style.opacity=1;
        gif.style.opacity=1;
        na6.style.opacity=1;
        na1.style.opacity=0;
        na2.style.opacity=0;
        na3.style.opacity=0;
        na4.style.opacity=0;
        na5.style.opacity=0;
        na7.style.opacity=0;
        na8.style.opacity=0;
        na9.style.opacity=0;
        na10.style.opacity=0;
        document.getElementById('6').classList.add('fa-circle-pause');
        document.getElementById('7').classList.remove('fa-circle-pause');
        document.getElementById('7').classList.add('fa-circle-play');
        
    }
    else if(songIndex==8){
        audioElement.currentTime=0;
        audioElement.src='songs/song7.mp3';
        audioElement.play();
        songIndex-=1;
        songInfo.style.opacity=1;
        gif.style.opacity=1;
        na7.style.opacity=1;
        na1.style.opacity=0;
        na2.style.opacity=0;
        na3.style.opacity=0;
        na4.style.opacity=0;
        na5.style.opacity=0;
        na6.style.opacity=0;
        na8.style.opacity=0;
        na9.style.opacity=0;
        na10.style.opacity=0;
        document.getElementById('7').classList.add('fa-circle-pause');
        document.getElementById('8').classList.remove('fa-circle-pause');
        document.getElementById('8').classList.add('fa-circle-play');
        
    }
    else if(songIndex==9){
        audioElement.currentTime=0;
        audioElement.src='songs/song8.mp3';
        audioElement.play();
        songIndex-=1;
        songInfo.style.opacity=1;
        gif.style.opacity=1;
        na8.style.opacity=1;
        na1.style.opacity=0;
        na2.style.opacity=0;
        na3.style.opacity=0;
        na4.style.opacity=0;
        na5.style.opacity=0;
        na6.style.opacity=0;
        na7.style.opacity=0;
        na9.style.opacity=0;
        na10.style.opacity=0;
        document.getElementById('8').classList.add('fa-circle-pause');
        document.getElementById('9').classList.remove('fa-circle-pause');
        document.getElementById('9').classList.add('fa-circle-play');
        
    }
    else if(songIndex==10){
        audioElement.currentTime=0;
        audioElement.src='songs/song9.mp3';
        audioElement.play();
        songIndex-=1;
        songInfo.style.opacity=1;
        gif.style.opacity=1;
        na9.style.opacity=1;
        na1.style.opacity=0;
        na2.style.opacity=0;
        na3.style.opacity=0;
        na4.style.opacity=0;
        na5.style.opacity=0;
        na6.style.opacity=0;
        na7.style.opacity=0;
        na8.style.opacity=0;
        na10.style.opacity=0;
        document.getElementById('9').classList.add('fa-circle-pause');
        document.getElementById('10').classList.remove('fa-circle-pause');
        document.getElementById('10').classList.add('fa-circle-play');
        
    }

    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('next').addEventListener('click', ()=>{
            
    if(songIndex==1){
        audioElement.currentTime=0;
        audioElement.src='songs/song2.mp3';
        audioElement.play();
        songIndex+=1;
        songInfo.style.opacity=1;
        gif.style.opacity=1;
        na2.style.opacity=1;
        na1.style.opacity=0;
        na3.style.opacity=0;
        na4.style.opacity=0;
        na5.style.opacity=0;
        na6.style.opacity=0;
        na7.style.opacity=0;
        na8.style.opacity=0;
        na9.style.opacity=0;
        na10.style.opacity=0;
        document.getElementById('1').classList.remove('fa-circle-pause');
        document.getElementById('1').classList.add('fa-circle-play');
        document.getElementById('2').classList.add('fa-circle-pause');
    }
    else if(songIndex==2){
        audioElement.currentTime=0;
        audioElement.src='songs/song3.mp3'
        audioElement.play();
        songIndex+=1;
        songInfo.style.opacity=1;
        gif.style.opacity=1;
        na3.style.opacity=1;
        na1.style.opacity=0;
        na2.style.opacity=0;
        na4.style.opacity=0;
        na5.style.opacity=0;
        na6.style.opacity=0;
        na7.style.opacity=0;
        na8.style.opacity=0;
        na9.style.opacity=0;
        na10.style.opacity=0;
        document.getElementById('2').classList.remove('fa-circle-pause');
        document.getElementById('2').classList.add('fa-circle-play');
        document.getElementById('3').classList.add('fa-circle-pause');
    }
    else if(songIndex==3){
        audioElement.currentTime=0;
        audioElement.src='songs/song4.mp3'
        audioElement.play();
        songIndex+=1;
        songInfo.style.opacity=1;
        gif.style.opacity=1;
        na4.style.opacity=1;
        na1.style.opacity=0;
        na2.style.opacity=0;
        na3.style.opacity=0;
        na5.style.opacity=0;
        na6.style.opacity=0;
        na7.style.opacity=0;
        na8.style.opacity=0;
        na9.style.opacity=0;
        na10.style.opacity=0;
        document.getElementById('3').classList.remove('fa-circle-pause');
        document.getElementById('3').classList.add('fa-circle-play');
        document.getElementById('4').classList.add('fa-circle-pause');
        
    }
    else if(songIndex==4){
        audioElement.currentTime=0;
        audioElement.src='songs/song5.mp3'
        audioElement.play();
        songIndex+=1;
        songInfo.style.opacity=1;
        gif.style.opacity=1;
        na5.style.opacity=1;
        na1.style.opacity=0;
        na2.style.opacity=0;
        na3.style.opacity=0;
        na4.style.opacity=0;
        na6.style.opacity=0;
        na7.style.opacity=0;
        na8.style.opacity=0;
        na9.style.opacity=0;
        na10.style.opacity=0;
        document.getElementById('4').classList.remove('fa-circle-pause');
        document.getElementById('4').classList.add('fa-circle-play');
        document.getElementById('5').classList.add('fa-circle-pause');
        
    }
    else if(songIndex==5){
        audioElement.currentTime=0;
        audioElement.src='songs/song6.mp3'
        audioElement.play();
        songIndex+=1;
        songInfo.style.opacity=1;
        gif.style.opacity=1;
        na6.style.opacity=1;
        na1.style.opacity=0;
        na2.style.opacity=0;
        na3.style.opacity=0;
        na4.style.opacity=0;
        na5.style.opacity=0;
        na7.style.opacity=0;
        na8.style.opacity=0;
        na9.style.opacity=0;
        na10.style.opacity=0;
        document.getElementById('5').classList.remove('fa-circle-pause');
        document.getElementById('5').classList.add('fa-circle-play');
        document.getElementById('6').classList.add('fa-circle-pause');
        
    }
    else if(songIndex==6){
        audioElement.currentTime=0;
        audioElement.src='songs/song7.mp3'
        audioElement.play();
        songIndex+=1;
        songInfo.style.opacity=1;
        gif.style.opacity=1;
        na7.style.opacity=1;
        na1.style.opacity=0;
        na2.style.opacity=0;
        na3.style.opacity=0;
        na4.style.opacity=0;
        na5.style.opacity=0;
        na6.style.opacity=0;
        na8.style.opacity=0;
        na9.style.opacity=0;
        na10.style.opacity=0;
        document.getElementById('6').classList.remove('fa-circle-pause');
        document.getElementById('6').classList.add('fa-circle-play');
        document.getElementById('7').classList.add('fa-circle-pause');
        
    }
    else if(songIndex==7){
        audioElement.currentTime=0;
        audioElement.src='songs/song8.mp3'
        audioElement.play();
        songIndex+=1;
        songInfo.style.opacity=1;
        gif.style.opacity=1;
        na8.style.opacity=1;
        na1.style.opacity=0;
        na2.style.opacity=0;
        na3.style.opacity=0;
        na4.style.opacity=0;
        na5.style.opacity=0;
        na6.style.opacity=0;
        na7.style.opacity=0;
        na9.style.opacity=0;
        na10.style.opacity=0;
        document.getElementById('7').classList.remove('fa-circle-pause');
        document.getElementById('7').classList.add('fa-circle-play');
        document.getElementById('8').classList.add('fa-circle-pause');
        
    }
    else if(songIndex==8){
        audioElement.currentTime=0;
        audioElement.src='songs/song9.mp3'
        audioElement.play();
        songIndex+=1;
        songInfo.style.opacity=1;
        gif.style.opacity=1;
        na9.style.opacity=1;
        na1.style.opacity=0;
        na2.style.opacity=0;
        na3.style.opacity=0;
        na4.style.opacity=0;
        na5.style.opacity=0;
        na6.style.opacity=0;
        na7.style.opacity=0;
        na8.style.opacity=0;
        na10.style.opacity=0;
        document.getElementById('8').classList.remove('fa-circle-pause');
        document.getElementById('8').classList.add('fa-circle-play');
        document.getElementById('9').classList.add('fa-circle-pause');
        
    }
    else if(songIndex==9){
        audioElement.currentTime=0;
        audioElement.src='songs/song10.mp3'
        audioElement.play();
        songIndex+=1;
        songInfo.style.opacity=1;
        gif.style.opacity=1;
        na10.style.opacity=1;
        na1.style.opacity=0;
        na2.style.opacity=0;
        na3.style.opacity=0;
        na4.style.opacity=0;
        na5.style.opacity=0;
        na6.style.opacity=0;
        na7.style.opacity=0;
        na8.style.opacity=0;
        na9.style.opacity=0;
        document.getElementById('9').classList.remove('fa-circle-pause');
        document.getElementById('9').classList.add('fa-circle-play');
        document.getElementById('10').classList.add('fa-circle-pause');
        
    }
    else if(songIndex==10){
        audioElement.currentTime=0;
        audioElement.src='songs/song1.mp3'
        audioElement.play();
        songIndex=1;
        songInfo.style.opacity=1;
        gif.style.opacity=1;
        na1.style.opacity=1;
        na10.style.opacity=0;
        na2.style.opacity=0;
        na3.style.opacity=0;
        na4.style.opacity=0;
        na5.style.opacity=0;
        na6.style.opacity=0;
        na7.style.opacity=0;
        na8.style.opacity=0;
        na9.style.opacity=0;   
        document.getElementById('10').classList.remove('fa-circle-pause');
        document.getElementById('10').classList.add('fa-circle-play');
        document.getElementById('1').classList.add('fa-circle-pause');
    }
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})