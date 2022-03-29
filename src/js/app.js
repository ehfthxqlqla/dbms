let prog = 0

function clearLag() {
    $("#loading").remove()
}

function interval() {
    if (prog >= 100) {
        $("#tutorial").show()
        clearInterval(interval)
        $("#loading-span").text(`Compiling... Complete`)
        setTimeout(clearLag, 350)
        clearTimeout(clearLag)
        return
    }

    $(".loading-prog").val(prog)
    const spantext = document.getElementById("loading-span")
    prog += 2.5
    spantext.innerText = `로딩중... ${Math.ceil(prog)}%`
}

function progress() {
    setInterval(interval, 10)
}

function wifipopup() {
    $("#school-wifi").mouseover(function(){
        $(".wifi-popup").stop().slideDown()
        $(".email-popup").stop().slideUp(100)
        $(".copied").hide()
    })

    $(".wifi-popup").mouseover(function(){
        $(".copied").hide()
        $(".wifi-popup").stop().show()
        $(".copied").hide()
    })

    $(".xbutton").click(function(){
        $(".wifi-popup").stop().slideUp(100)
    })

    $("#copy-img-1").click(function(){
        const input_copy = document.querySelector("#input-pw-copy1")
        input_copy.select()
        input_copy.setSelectionRange(0, 9999)
        document.execCommand("copy")
        $("#copy1").fadeIn()
        setTimeout(() => {
            $("#copy1").fadeOut()
        }, 1000);
    })
    
    $("#copy-img-2").click(function(){
        let input_copy_two = document.querySelector("#input-pw-copy2")
        input_copy_two.select()
        input_copy_two.setSelectionRange(0, 9999)
        document.execCommand("copy")
        $("#copy2").fadeIn()
        setTimeout(() => {
            $("#copy2").fadeOut()
        }, 1000);
    })
}

function emailpopup() {
    $("#emailpop").mouseover(function(){
        $(".wifi-popup").stop().slideUp(100)
        $(".email-popup").stop().slideDown()
    })

    $(".xbutton1").click(function(){
        $(".email-popup").stop().slideUp(100)
    })
}

function assertive() {
    $(".title").mouseover(function(){
        $(".title").text("어쩔티비")
    })

    $(".title").mouseout(function(){
        $(".title").text("동부중학교")
    })
}

$(document).ready(
    function() {
        progress()
        wifipopup()
        assertive()
        emailpopup()
    }
)