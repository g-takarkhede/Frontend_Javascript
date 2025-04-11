// method -> object

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this, tag)
        }, this);
    },
    play(){
        console.log(this)
    }
}
video.stop = function(){
    console.log(this)
}

video.play()
video.stop()



// function -> global (window, global)


function playVideo(){
    console.log(this)
}
playVideo();

function Video(title){
    this.title = title
    console.log(this)
}

const v = new Video("b")

video.showTags();