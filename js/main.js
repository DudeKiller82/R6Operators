'use strict';


var loadUnits = function loadUnits(document) {
    var units = getUnitsData();
    document.getElementById("bookmarks").innerHTML = getBookmarksHtml(units);
    document.getElementById("units").innerHTML = getUnitsHtml(units);
}

var getBookmarksHtml = function getBookmarksHtml(units) {
    var html = '';

    units.forEach(function(unit) {
        html += '<a href="#' + unit.id + '" style="background-image:linear-gradient(to right, #272727, ' + unit.color + ')">' + unit.short + '</a>';
    });
    return html;
};

var getUnitsHtml = function getUnitsHtml(units) {
    var html = '';

    units.forEach(function(unit) {
        html += '<div id="' + unit.id + '" class="unit info" style="color:' + unit.color + '">';
        html += '<div class="column">';
        html += '    <img id="img' + unit.id + '" class="badge" src="img/units/' + unit.id + '/badge.webp" alt="' + units.id + '">';
        html += '</div>';
        html += '<div class="column">';
        html += '    <h1>' + unit.short + '</h1>';
        html += '    <h2>' + unit.name + '</h2>';
        unit.flags.forEach(function(flag) {
            html += '    <img src="img/flag/' + flag + '.png" class="flag">';
        });
        html += '</div>';
        html += '<p class="info">' + unit.doc + '</p>';
        html += '</div>';
        html += '<div style="background-image:linear-gradient(to right, #272727, ' + unit.color + ')">';
        unit.ops.forEach(function(op) {
            html += '<div class="operator operator' +  unit.ops.length + ' info">';
            html += '    <img class="fullBody" src="img/units/' + unit.id + '/' + op.nick + '/fullBody.webp" alt="' + op.nick + '">';
            html += '    <br>';
            html += '    <img class="avatar" src="img/units/' + unit.id + '/' + op.nick + '/avatar.webp" alt="' + op.nick + '">';
            html += '    <img src="img/' + op.side + '.webp" class="side">';
            html += '   <h3>' + op.first + ' "' + op.nick + '" ' + op.last + '</h3>';
            html += '    <p class="info">' + op.doc + '</p>';
            html += '</div>';
        });
        html += '</div>';
    });
    return html;
};

var getUnitsData = function getUnitsData() {
    return [
        {
            id: 'SAS',
            color: 'rgb(144, 111, 121)',
            short: 'SAS',
            name: 'Special Air Service',
            flags: [ 'gb' ],
            doc: '',
            ops: [
                { nick: 'Sledge', first: 'Seamus', last: 'Cowden', side: 'attacker', doc: '' },
                { nick: 'Thatcher', first: 'Mike', last: 'Baker', side: 'attacker', doc: '' },
                { nick: 'Smoke', first: 'James', last: 'Porter', side: 'defender', doc: '' },
                { nick: 'Mute', first: 'Mark R.', last: 'Chandar', side: 'defender', doc: '' }
            ]
        },
        {
            id: 'FBISWAT',
            color: 'rgb(215, 91, 43)',
            short: 'FBI SWAT',
            name: 'FBI Special Weapons and Tactics Teams',
            flags: [ 'us' ],
            doc: '',
            ops: [
                { nick: 'Ash', first: 'Eliza', last: 'Cohen', side: 'attacker', doc: '' },
                { nick: 'Thermite', first: 'Jordan', last: 'Trace', side: 'attacker', doc: '' },
                { nick: 'Castle', first: 'Miles', last: 'Campbell', side: 'defender', doc: '' },
                { nick: 'Pulse', first: 'Jack', last: 'Estrada', side: 'defender', doc: '' }
            ]
        },
        {
            id: 'GIGN',
            color: 'rgb(27, 54, 82)',
            short: 'GIGN',
            name: 'Groupe d\'intervention de la Gendarmerie nationale',
            flags: [ 'fr' ],
            doc: 'toto',
            ops: [
                { nick: 'Twitch', first: 'Emmanuelle', last: 'Pichon', side: 'attacker', doc: '' },
                { nick: 'Montagne', first: 'Gilles', last: 'Touré', side: 'attacker', doc: '' },
                { nick: 'Doc', first: 'Gustave', last: 'Kateb', side: 'defender', doc: '' },
                { nick: 'Rook', first: 'Julien', last: 'Nizan', side: 'defender', doc: '' }
            ]
        },
        {
            id: 'SPETSNAZ',
            color: 'rgb(170, 21, 18)',
            short: 'SPETSNAZ',
            name: 'Spetsial\'noïe Naznatchéniyé',
            flags: [ 'ru' ],
            doc: 'toto',
            ops: [
                { nick: 'Glaz', first: 'Timur', last: 'Glazkov', side: 'attacker', doc: '' },
                { nick: 'Fuze', first: 'Shuhrat', last: 'Kessikbayev', side: 'attacker', doc: '' },
                { nick: 'Kapkan', first: 'Maxim', last: 'Basuda', side: 'defender', doc: '' },
                { nick: 'Tachanka', first: 'Alexsandr', last: 'Senaviev', side: 'defender', doc: '' }
            ]
        },
        {
            id: 'GSG9',
            color: 'rgb(248, 168, 40)',
            short: 'GSG 9',
            name: 'Grenzschutzgruppe 9',
            flags: [ 'de' ],
            doc: 'toto',
            ops: [
                { nick: 'Blitz', first: 'Elias', last: 'Kötz', side: 'attacker', doc: '' },
                { nick: 'IQ', first: 'Monika', last: 'Weiss', side: 'attacker', doc: '' },
                { nick: 'Jäger', first: 'Marius', last: 'Streicher', side: 'defender', doc: '' },
                { nick: 'Bandit', first: 'Dominic', last: 'Brunsmeier', side: 'defender', doc: '' }
            ]
        },
        {
            id: 'JTF2',
            color: 'rgb(17, 126, 163)',
            short: 'JTF2',
            name: 'Joint Task Force 2',
            flags: [ 'ca' ],
            doc: 'toto',
            ops: [
                { nick: 'Buck', first: 'Sébastien', last: 'Côté', side: 'attacker', doc: '' },
                { nick: 'Frost', first: 'Tina', last: 'Lin Tsang', side: 'defender', doc: '' }
            ]
        },
        {
            id: 'NAVYSEALS',
            color: 'rgb(206, 160, 36)',
            short: 'NAVY SEALS',
            name: 'Sea, Air and Land',
            flags: [ 'us' ],
            doc: 'toto',
            ops: [
                { nick: 'Blackbeard', first: 'Craig', last: 'Jenson', side: 'attacker', doc: '' },
                { nick: 'Valkyrie', first: 'Meghan J.', last: 'Castellano', side: 'defender', doc: '' }
            ]
        },
        {
            id: 'BOPE',
            color: 'rgb(76, 141, 64)',
            short: 'BOPE',
            name: 'Batalhão de Operações Policiais Especiais',
            flags: [ 'br' ],
            doc: 'toto',
            ops: [
                { nick: 'Capitão', first: 'Vicente', last: 'Souza', side: 'attacker', doc: '' },
                { nick: 'Caveira', first: 'Taina', last: 'Pereira', side: 'defender', doc: '' },
            ]
        },
        {
            id: 'SAT',
            color: 'rgb(154, 39, 62)',
            short: 'SAT',
            name: 'Special Assault Teams',
            flags: [ 'jp' ],
            doc: 'toto',
            ops: [
                { nick: 'Hibana', first: 'Yumiko', last: 'Imagawa', side: 'attacker', doc: '' },
                { nick: 'Echo', first: 'Masaru', last: 'Enatsu', side: 'defender', doc: '' }
            ]
        },
        {
            id: 'GEO',
            color: 'rgb(111, 46, 140)',
            short: 'GEO',
            name: 'Grupo Especial de Operaciones',
            flags: [ 'es' ],
            doc: 'toto',
            ops: [
                { nick: 'Jackal', first: 'Ryad', last: 'Ramírez Al-Hassar', side: 'attacker', doc: '' },
                { nick: 'Mira', first: 'Elena María', last: 'Álvarez', side: 'defender', doc: '' }
            ]
        },
        {
            id: 'SDU',
            color: 'rgb(174, 83, 50)',
            short: 'SDU',
            name: 'Special Duties Unit',
            flags: [ 'cn' ],
            doc: 'toto',
            ops: [
                { nick: 'Ying', first: 'Siu', last: 'Mei Lin', side: 'attacker', doc: '' },
                { nick: 'Lesion', first: 'Liu', last: 'Tze Long', side: 'defender', doc: '' }
            ]
        },
        {
            id: 'GROM',
            color: 'rgb(84, 157, 155)',
            short: 'GROM',
            name: 'Grupa Reagowania Operacyjno-Manewrowego',
            flags: [ 'pl' ],
            doc: 'toto',
            ops: [
                { nick: 'Zofia', first: 'Zofia', last: 'Bosak', side: 'attacker', doc: '' },
                { nick: 'Ela', first: 'Elżbieta', last: 'Bosak', side: 'defender', doc: '' }
            ]
        },
        {
            id: 'SMB',
            color: 'rgb(196, 206, 207)',
            short: '707th SMB',
            name: '707th Special Mission Battalion',
            flags: [ 'kr' ],
            doc: 'toto',
            ops: [
                { nick: 'Dokkaebi', first: 'Grace', last: 'Nam', side: 'attacker', doc: '' },
                { nick: 'Vigil', first: 'Chul Kyung', last: 'Hwa', side: 'defender', doc: '' }
            ]
        },
        {
            id: 'CBRN',
            color: 'rgb(250, 174, 27)',
            short: 'CBRN',
            name: 'Chemical, Biological, Radiological, Nuclear Threat Unit',
            flags: [ 'ru', 'fr' ],
            doc: 'toto',
            ops: [
                { nick: 'Finka', first: 'Lera', last: 'Melnikova', side: 'attacker', doc: '' },
                { nick: 'Lion', first: 'Olivier', last: 'Flament', side: 'attacker', doc: '' }
            ]
        },
        {
            id: 'GIS',
            color: 'rgb(102, 109, 35)',
            short: 'GIS',
            name: 'Gruppo di Intervento Speciale',
            flags: [ 'it' ],
            doc: 'toto',
            ops: [
                { nick: 'Alibi', first: 'Aria', last: 'de Luca', side: 'defender', doc: '' },
                { nick: 'Maestro', first: 'Adriano', last: 'Martello', side: 'defender', doc: '' }
            ]
        },
        {
            id: 'GSUTR',
            color: 'rgb(111, 128, 143)',
            short: 'GSUTR',
            name: 'Grim Sky Urban Tactical Response Team',
            flags: [ 'us', 'gb' ],
            doc: 'toto',
            ops: [
                { nick: 'Maverick', first: 'Erik', last: 'Thorn', side: 'attacker', doc: '' },
                { nick: 'Clash', first: 'Morowa', last: 'Evans', side: 'defender', doc: '' }
            ]
        },
        {
            id: 'GIGR',
            color: 'rgb(168, 131, 79)',
            short: 'GIGR',
            name: 'Groupe d\'Intervention de La Gendarmerie Royale',
            flags: [ 'ma' ],
            doc: 'toto',
            ops: [
                { nick: 'Nomad', first: 'Sanaa', last: 'El Maktoub', side: 'attacker', doc: '' },
                { nick: 'Kaid', first: 'Jalal', last: 'El Fassi', side: 'defender', doc: '' }
            ]
        },
        {
            id: 'SASR',
            color: 'rgb(207, 1, 88)',
            short: 'SASR',
            name: 'toto',
            flags: [ 'au' ],
            doc: 'toto',
            ops: [
                { nick: 'Mozzie', first: 'Max', last: 'Goose', side: 'attacker', doc: '' },
                { nick: 'Gridlock', first: 'Tori', last: 'Tallyo Fairous', side: 'attacker', doc: '' }
            ]
        },
        {
            id: 'JaegerCorps',
            color: 'rgb(46, 62, 134)',
            short: 'JAEGER CORPS',
            name: 'Jægerkorpset',
            flags: [ 'dk' ],
            doc: 'toto',
            ops: [
                { nick: 'Nøkk', first: '', last: '', side: 'attacker', doc: '' }
            ]
        },
        {
            id: 'SECRETSERVICE',
            color: 'rgb(46, 62, 134)',
            short: 'SECRET SERVICE',
            name: 'U.S. Secret Service',
            flags: [ 'us' ],
            doc: 'toto',
            ops: [
                { nick: 'Warden', first: 'Collinn', last: 'McKinley', side: 'defender', doc: 'Collinn McKinley enrolled in the United States Marine Corps at 18 and earned several commendations in his service jacket for his aggressive quick-thinking, achieving Master Sergeant despite a few minor infractions on his record. After his third tour, he left the Marines and entered the Secret Service in close-protection detail. McKinley\'s agility was instrumental in saving United States Secretary of State Baldwin\'s life when insurgents attacked the U.S. diplomatic junket. Baldwin later went on to become President and requested McKinley be assigned to the Presidential Protective Division. McKinley has spent over a decade in Washington, protecting important political figures. He is the foremost expert in close protection detail, and with President Baldwin finishing his second term, McKinley has received high endorsements for his transition into Rainbow.' }
            ]
        },
        {
            id: 'RAINBOW',
            color: 'white',
            short: 'Recruits',
            name: 'Team Rainbow',
            flags: [ 'gb','us','fr','ru','de' ],
            doc: 'toto',
            ops: [
                { nick: 'Recruit', first: '', last: '', side: 'attacker', doc: '' }
            ]
        }
    ]
}
