GameDetails( 'Testserver', 'http://localhost/index.html', 'cs_office', 14, 76561198051267973, 'prophunt' );

var demofiles = [
    '(fnaf_2_&_3)_purple_guy_playermodelragdoll_(reupload)',
    'chat_tags_(ulx_only)',
    'custom_chat',
    'five_nights_at_freddys_1_materials_part_1',
    'five_nights_at_freddys_1_materials_part_2',
    'five_nights_at_freddys_1_models',
    'five_nights_at_freddys_animatronics',
    'Майнер BITCOIN',
    'Майнер KASPA',
    'Майнер ETHEREUM',
    'Майнер DOGECOIN',
    'fnaf_3_-_springtrap_(playermodel)',
    'fnaf_4_-_animatronics_(ragdolls_&_playermodels)',
    'fnaf_golden_freddy_playermodel',
    'geoip_connection_messages_v2',
    'glow_sticks',
    'gmpublisher',
    'halloween_trails_pack',
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
