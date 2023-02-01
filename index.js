
var x = 0;
var y = 0;
var z = 0

var t1=setInterval(function(){
    const now = new Date();
    x = 6 * now.getSeconds();
    y = (6 * now.getMinutes()) + (now.getSeconds() * 0.1);
    z = (30 * now.getHours()) + (now.getMinutes() * 0.5);
    $('.second-hand').css('transform', 'translate(-50%, -50%) rotate('+x+'deg)')
    $('.minute-hand').css('transform', 'translate(-50%, -50%) rotate('+y+'deg)')
    $('.hour-hand').css('transform', 'translate(-50%, -50%) rotate('+z+'deg)')
},100);

for(let i = 0; i < 30; i++)
{
    $('.clock').prepend('<div class="mini-mark-'+(i+1)+'"></div>');
    $('.mini-mark-'+(i+1)).css(
        {
            'position': 'absolute',
            'background-color': 'black',
            'margin': '0',
            'height': '540px',
            'width': '3px',
            'top': '50%',
            'left': '50%',
            'margin-right': '-50%',
            'transform': 'translate(-50%, -50%) rotate('+(6*(i+1))+'deg)',
            'z-index': '-1'
        }
    
    );

};
for(let i = 0; i < 6; i++)
{
    $('.clock').prepend('<div class="big-mark-'+(i+1)+'"></div>');
    $('.big-mark-'+(i+1)).css(
        {
            'position': 'absolute',
            'background-color': 'black',
            'margin': '0',
            'height': '550px',
            'width': '5px',
            'top': '50%',
            'left': '50%',
            'margin-right': '-50%',
            'transform': 'translate(-50%, -50%) rotate('+(i*30)+'deg)',
            'z-index': '-2'
        }
    
    );
}