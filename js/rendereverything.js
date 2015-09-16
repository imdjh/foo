function rendereverything () {
// dummy contents
objLeft = {"navContent": "<i class=\"glyphicon glyphicon-chevron-left\"></i>"};
objRight = {"navContent": "<i class=\"glyphicon glyphicon-chevron-right\"></i>"};




$('#nav-left').html(render_hbsNav(objLeft));
$('#nav-right').html(render_hbsNav(objRight));
$('#content-quickanswer').html(render_hbsContent(window.jsonCurr));      // TODO: if jsonQA exists
}