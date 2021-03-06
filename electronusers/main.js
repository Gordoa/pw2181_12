//Aplicacion General
const app=require('electron').app;
//Uso de las pantallas del sistema
const BrowserWindow=require('electron').BrowserWindow;
//Ruta de carpeta Base
const path=require('path');
//URL de las paginas
const url=require('url');
//ECMASCRIPT 6-JS
let PantallaPrincipal;

function muestraPantallaPrincipal(){
	PantallaPrincipal=new BrowserWindow({width:620,height:825});
	PantallaPrincipal.loadURL(url.format({
		//join: conectar cadenas
		pathname:path.join(__dirname,'index.html'),
		protocol: 'file',
		slashes: true
	}));
	//equivale a hacer click derecho e inspeccionar 
	//PantallaPrincipal.webContents.openDevTools();
	PantallaPrincipal.show();
}

app.on('ready',muestraPantallaPrincipal);