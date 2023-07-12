GameDetails( 'Testserver', 'http://localhost/index.html', 'cs_office', 16, 76561198051267973, 'prophunt' );

var demofiles = [
    'Майнер NFT',
    'Майнер 1INCH',
    'Майнер BITCOIN',
    'Майнер ETHEREUM',
    'Майнер DOGECOIN',
    'Майнер BNB',
    'Майнер USDT',
    'Вирус Petya',
    'Вирус Уничтожитель3000',
    'ЯндексБраузер',
    'СафариБраузер',
    'WorldOfTanks',
    'Находим номер карты...',
    'Находим CVC код...',
    'Переводим все деньги на другой счет...',
    'ВЗЛОМ ЖОПЫ',
    'ВЗЛОМ МОЗГА',
    'Мучения закончились',
];

SetStatusChanged( 'Downloading some demo files...' );
SetFilesTotal( demofiles.length );
var index = 0;
setInterval(function() {
    if (index > demofiles.length) {return;}
    DownloadingFile( demofiles[index] );
    SetFilesNeeded( demofiles.length - index );
    index++;
}, 200);