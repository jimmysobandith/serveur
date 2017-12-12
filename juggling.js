var net = require('net');

function zero(i)
{
	if(i<10)
	{
		return('0'+i);
	}
	else
	{
		return i;
	}
}

function uneDate()
	  {
		var date = new Date();
	  
		var dateFinal = zero(date.getFullYear())+'-'+zero(date.getMonth())+'-'+zero(date.getDate())+' '+zero(date.getHours())+':'+zero(date.getMinutes())+'\n';
		
		return dateFinal;
	  }
	  
    var server = net.createServer(function (socket) {
      socket.end(uneDate());
    });
server.listen(process.argv[2]);


