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
        $(".wifi-popup").slideDown()
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
        input_copy.setSelectionRange(0, 0)
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
        input_copy_two.setSelectionRange(0, 0)
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

    $(".copy-img-email").click(function(){
        let input_email_copy = document.querySelector("#email-copy1")
        input_email_copy.select()
        input_email_copy.setSelectionRange(0, 9999)
        document.execCommand("copy")
        input_email_copy.setSelectionRange(0, 0)
        $("#copy-email1").fadeIn()
        setTimeout(() => {
            $("#copy-email1").fadeOut()
        }, 1000);
    })
}

function assertive() {
    let assertive = 0

    $(".title").mouseover(function(){
        if (assertive > 20) {
            $(".title").text("고마해라")
            $(".title").addClass("assertive-title")
            $(".title").removeClass("title")
        } else {
            $(".title").text("어쩔티비")
            assertive += 1
        }
    })

    $(".title").mouseout(function(){
        if (assertive <= 20) {
            $(".title").text("동부중학교")
        }
    })

    $(".assertive-title").click(function(){
        var confirm_assertive = confirm("그러게 적당히 하지 그랬어 안그래?")

        if (confirm_assertive) {
            alert("음 맞지맞지")
        } else {
            $("body").css("backgroundImage", "")
            $("body").css("backgroundColor", "red")
        }
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