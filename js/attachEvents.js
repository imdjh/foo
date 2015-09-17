function attachEvents() {
    $('.doit-answer').each(function () {
        // eyecandy on mouse events
        $(this).mouseover(function () {
            $(this).addClass('doit-onmouse');
        });
        $(this).mouseout(function () {
            $(this).removeClass('doit-onmouse');
        });


        $(this).click(function () {
            // eyecandy, click response
            $('.doit-answer').each(function () {
                $(this).removeClass('doit-answer-selected');
            });
            $(this).addClass('doit-answer-selected');

            // Popout box of answer hint
            // TODO: multi answer question implement
            var stringID = $(this).attr('id');
            var currID = Number(stringID.substr(stringID.length - 1));
            var stringAnswer = '';      // Answer of current selection
            if (!isNaN(currID)) {
                switch (currID) {
                    case 1:
                        stringAnswer = 'A';
                        break;
                    case 2:
                        stringAnswer = 'B';
                        break;
                    case 3:
                        stringAnswer = 'C';
                        break;
                    case 4:
                        stringAnswer = 'D';
                        break;
                }
                alert(stringAnswer);
                if (stringAnswer != jsonCurr.a) {
                    $('#doit-hint-popout').css('display', 'block');
                    $('#doit-hint-popout').text("WRONG");
                } else {
                    $('#doit-hint-popout').css('display', 'block');
                    $('#doit-hint-popout').text("YES!!");
                }
            } else {
                alert("Wrong doit-answer elementID")
            }

        });
    });
    $('#doit-goleft').click(function () {
        window.curr -= 1;
        rendereverything();
        attachEvents();
    });
    $('#doit-goright').click(function () {
        window.curr += 1;
        rendereverything();
        attachEvents();
    });
}