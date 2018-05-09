const {app,Browser}= require('electron')
const path =require('path')
const url=require('url')

let pantallaPrincipal;
function mustraPantallaPrincipal(){
	pantallaPrincipal=new BrowserWindow({width:320, heigth:425});
	pantallaPrincipal.loadURL(url.format({
		pathname: path.join(__dirname,'index.html'),
		protocol: 'file',
		slshes: true
	})) 
	//pantallaPrincipal.webContent.openDevTools();
	pantallaPrincipal.show();
}

app.on('ready',mustraPantallaPrincipal)