(function(j, i, g, m, k, n, o) {
    function q(b) {
        var e, f, a = this,
            c = b.length,
            d = 0,
            h = a.i = a.j = a.m = 0;
        a.S = [];
        a.c = [];
        for (c || (b = [c++]); d < g;) a.S[d] = d++;
        for (d = 0; d < g; d++) e = a.S[d], h = h + e + b[d % c] & g - 1, f = a.S[h], a.S[d] = f, a.S[h] = e;
        a.g = function(b) {
            var c = a.S,
                d = a.i + 1 & g - 1,
                e = c[d],
                f = a.j + e & g - 1,
                h = c[f];
            c[d] = h;
            c[f] = e;
            for (var i = c[e + h & g - 1]; --b;) d = d + 1 & g - 1, e = c[d], f = f + e & g - 1, h = c[f], c[d] = h, c[f] = e, i = i * g + c[e + h & g - 1];
            a.i = d;
            a.j = f;
            return i
        };
        a.g(g)
    }

    function p(b, e, f, a, c) {
        f = [];
        c = typeof b;
        if (e && c == "object")
            for (a in b)
                if (a.indexOf("S") < 5) try {
                    f.push(p(b[a], e - 1))
                } catch (d) {}
                return f.length ? f : b + (c != "string" ? "\0" : "")
    }

    function l(b, e, f, a) {
        b += "";
        for (a = f = 0; a < b.length; a++) {
            var c = e,
                d = a & g - 1,
                h = (f ^= e[a & g - 1] * 19) + b.charCodeAt(a);
            c[d] = h & g - 1
        }
        b = "";
        for (a in e) b += String.fromCharCode(e[a]);
        return b
    }
    i.seedrandom = function(b, e) {
        var f = [],
            a;
        b = l(p(e ? [b, j] : arguments.length ? b : [(new Date).getTime(), j, window], 3), f);
        a = new q(f);
        l(a.S, j);
        i.random = function() {
            for (var c = a.g(m), d = o, b = 0; c < k;) c = (c + b) * g, d *= g, b = a.g(1);
            for (; c >= n;) c /= 2, d /= 2, b >>>= 1;
            return (c + b) / d
        };
        return b
    };
    o = i.pow(g, m);
    k = i.pow(2, k);
    n = k * 2;
    l(i.random(), j)
})([], Math, 256, 6, 52);

bingoGenerator = function(bingoList, opts) {
    var LANG = opts.lang || 'name';
    var MODE = opts.mode || "normal";
    var cardType = "Normal";
    var SEED = opts.seed || Math.ceil(999999 * Math.random()).toString();
    var size = 5;
    if (true) {
        Math.seedrandom(SEED);
        var MAX_SEED = 999999;

        var lineCheckList = [];
        if (size == 5) {
            lineCheckList[1] = [1, 2, 3, 4, 5, 10, 15, 20, 6, 12, 18, 24];
            lineCheckList[2] = [0, 2, 3, 4, 6, 11, 16, 21];
            lineCheckList[3] = [0, 1, 3, 4, 7, 12, 17, 22];
            lineCheckList[4] = [0, 1, 2, 4, 8, 13, 18, 23];
            lineCheckList[5] = [0, 1, 2, 3, 8, 12, 16, 20, 9, 14, 19, 24];
            lineCheckList[6] = [0, 10, 15, 20, 6, 7, 8, 9];
            lineCheckList[7] = [0, 12, 18, 24, 5, 7, 8, 9, 1, 11, 16, 21];
            lineCheckList[8] = [5, 6, 8, 9, 2, 12, 17, 22];
            lineCheckList[9] = [4, 12, 16, 20, 9, 7, 6, 5, 3, 13, 18, 23];
            lineCheckList[10] = [4, 14, 19, 24, 8, 7, 6, 5];
            lineCheckList[11] = [0, 5, 15, 20, 11, 12, 13, 14];
            lineCheckList[12] = [1, 6, 16, 21, 10, 12, 13, 14];
            lineCheckList[13] = [0, 6, 12, 18, 24, 20, 16, 8, 4, 2, 7, 17, 22, 10, 11, 13, 14];
            lineCheckList[14] = [3, 8, 18, 23, 10, 11, 12, 14];
            lineCheckList[15] = [4, 9, 19, 24, 10, 11, 12, 13];
            lineCheckList[16] = [0, 5, 10, 20, 16, 17, 18, 19];
            lineCheckList[17] = [15, 17, 18, 19, 1, 6, 11, 21, 20, 12, 8, 4];
            lineCheckList[18] = [15, 16, 18, 19, 2, 7, 12, 22];
            lineCheckList[19] = [15, 16, 17, 19, 23, 13, 8, 3, 24, 12, 6, 0];
            lineCheckList[20] = [4, 9, 14, 24, 15, 16, 17, 18];
            lineCheckList[21] = [0, 5, 10, 15, 16, 12, 8, 4, 21, 22, 23, 24];
            lineCheckList[22] = [20, 22, 23, 24, 1, 6, 11, 16];
            lineCheckList[23] = [2, 7, 12, 17, 20, 21, 23, 24];
            lineCheckList[24] = [20, 21, 22, 24, 3, 8, 13, 18];
            lineCheckList[25] = [0, 6, 12, 18, 20, 21, 22, 23, 19, 14, 9, 4];
        }

        function mirror(i) {
            if (i == 0) {
                i = 4;
            } else if (i == 1) {
                i = 3;
            } else if (i == 3) {
                i = 1;
            } else if (i == 4) {
                i = 0;
            }
            return i;
        }

        function difficulty(i) {
            var Num3 = SEED % 1000;
            var Rem8 = Num3 % 8;
            var Rem4 = Math.floor(Rem8 / 2);
            var Rem2 = Rem8 % 2;
            var Rem5 = Num3 % 5;
            var Rem3 = Num3 % 3;
            var RemT = Math.floor(Num3 / 120);
            var Table5 = [0];
            Table5.splice(Rem2, 0, 1);
            Table5.splice(Rem3, 0, 2);
            Table5.splice(Rem4, 0, 3);
            Table5.splice(Rem5, 0, 4);
            Num3 = Math.floor(SEED / 1000);
            Num3 = Num3 % 1000;
            Rem8 = Num3 % 8;
            Rem4 = Math.floor(Rem8 / 2);
            Rem2 = Rem8 % 2;
            Rem5 = Num3 % 5;
            Rem3 = Num3 % 3;
            RemT = RemT * 8 + Math.floor(Num3 / 120);
            var Table1 = [0];
            Table1.splice(Rem2, 0, 1);
            Table1.splice(Rem3, 0, 2);
            Table1.splice(Rem4, 0, 3);
            Table1.splice(Rem5, 0, 4);
            i--;
            RemT = RemT % 5;
            x = (i + RemT) % 5;
            y = Math.floor(i / 5);
            var e5 = Table5[(x + 3 * y) % 5];
            var e1 = Table1[(3 * x + y) % 5];
            value = 5 * e5 + e1;
            if (MODE == "short") {
                value = Math.floor(value / 2);
            } else if (MODE == "long") {
                value = Math.floor((value + 25) / 2);
            }
            value++;
            return value;
        }

        function checkLine(i, typesA) {
            var synergy = 0;
            for (var j = 0; j < lineCheckList[i].length; j++) {
                var typesB = bingoBoard[lineCheckList[i][j] + 1].types;
                if (typeof typesB != 'undefined') {
                    for (var k = 0; k < typesA.length; k++) {
                        for (var l = 0; l < typesB.length; l++) {
                            if (typesA[k] == typesB[l]) {
                                synergy++;
                                if (k == 0) {
                                    synergy++
                                };
                                if (l == 0) {
                                    synergy++
                                };
                            }
                        }
                    }
                }
            }
            return synergy;
        }
        var bingoBoard = [];
        for (var i = 1; i <= 25; i++) {
            bingoBoard[i] = {
                difficulty: difficulty(i)
            };
        }
        for (var i = 1; i <= 25; i++) {
            var getDifficulty = bingoBoard[i].difficulty;
            var RNG = Math.floor(bingoList[getDifficulty].length * Math.random());
            if (RNG == bingoList[getDifficulty].length) {
                RNG--;
            };
            var j = 0,
                synergy = 0,
                currentObj = null,
                minSynObj = null;
            do {
                currentObj = bingoList[getDifficulty][(j + RNG) % bingoList[getDifficulty].length];
                synergy = checkLine(i, currentObj.types);
                if (minSynObj == null || synergy < minSynObj.synergy) {
                    minSynObj = {
                        synergy: synergy,
                        value: currentObj
                    };
                }
                j++;
            } while ((synergy != 0) && (j < bingoList[getDifficulty].length));
            bingoBoard[i].types = minSynObj.value.types;
            bingoBoard[i].name = minSynObj.value[LANG] || minSynObj.value.name;
            bingoBoard[i].synergy = minSynObj.synergy;
        }
        return bingoBoard;
    }
};

var bingoList = [];
bingoList[1] = [
 { name: "No saving", types: ["save"] },
 { name: "Buy 3 items from a shop", types: ["money"] },
 { name: "Defeat an enemy using only punches", types: ["fighting"] },
 { name: "Obtain 3 extra lives", types: ["life"] }
];
bingoList[2] = [
 { name: "Kill a knight", types: ["future"] },
 { name: "Defeat an enemy using only kicks", types: ["fighting"] },
 { name: "Obtain a potion", types: ["money","heal"] }
];
bingoList[3] = [
 { name: "Touch a cloud", types: ["air"] },
 { name: "Kill a zombie/mummy", types: ["ghost"] },
 { name: "Complete an autoscroll section", types: ["level"] },
 { name: "Complete a prologue/tutorial", types: ["cutscene"] }
];
bingoList[4] = [
 { name: "Collect 100 yellow/golden items", types: ["money"] },
 { name: "Obtain a card", types: ["obtain"] },
 { name: "Drain an enemy bar", types: ["boss"] },
 { name: "Complete a bonus/special stage", types: ["level"] }
];
bingoList[5] = [
 { name: "Kill a spider", types: ["bug"] },
 { name: "Obtain a fruit", types: ["shop"] },
 { name: "Level up to 4", types: ["hp"] },
 { name: "Enter a forest/jungle", types: ["weapon","area"] }
];
bingoList[6] = [
 { name: "Enter a castle", types: ["castle","area"] },
 { name: "Enter a desert", types: ["fire","area"] },
 { name: "Talk to a King or Princess", types: ["castle"] },
 { name: "Talk to a scientist", types: ["sci"] },
 { name: "New character/partner", types: ["char"] }
];
bingoList[7] = [
 { name: "Enter a snowy/icy area", types: ["snow", "ice","area"] },
 { name: "Ride an animal", types: ["vehicle"] },
 { name: "New vehicle", types: ["vehicle"] },
 { name: "Heal an ally", types: ["heal"] }
];
bingoList[8] = [
 { name: "Restore air with a bubble", types: ["water"] },
 { name: "Weapon upgrade", types: ["weapon"] },
 { name: "Win a race", types: ["race"] },
 { name: "Enter an inn/hotel", types: ["castle","area"] }
];
bingoList[9] = [
 { name: "Use a key", types: ["boss"] },
 { name: "Escape from prison", types: ["guard"] },
 { name: "Destroy an enemy vehicle", types: ["vehicle"] },
 { name: "Enter strong wind currents", types: ["wind"] }
];
bingoList[10] = [
 { name: "Obtain an explosive", types: ["weapon"] },
 { name: "Enter a volcano", types: ["fire","area"] },
 { name: "Don't shoot", types: ["save","ability","weapon"] },
 { name: "Armor/Defense upgrade", types: ["hp"] }
];
bingoList[11] = [
 { name: "Learn an ability involving magic", types: ["ability"] },
 { name: "Obtain a hammer", types: ["weapon"] },
 { name: "Beat a boss", types: ["boss"] },
 { name: "Play an instrument/song", types: ["ability"] }
];
bingoList[12] = [
 { name: "Boots/shoes upgrade", types: ["clothes"] },
 { name: "Enter outer space", types: ["area"] },
 { name: "Ride an electric elevator", types: ["vehicle"] }
];
bingoList[13] = [
 { name: "Catch a thief/criminal", types: ["guard"] },
 { name: "Read a book", types: ["lerning"] },
 { name: "Learn an ability involving water", types: ["ability","water"] }
];
bingoList[14] = [
 { name: "Ammo upgrade", types: ["weapon"] },
 { name: "100k points", types: ["level"] },
 { name: "Learn a password", types: ["guard"] }
];
bingoList[15] = [
 { name: "Increase max health", types: ["hp"] },
 { name: "Kill a floating hand", types: ["ghost"] },
 { name: "Obtain an area map", types: ["boss"] },
 { name: "Complete a stealth section", types: ["guard"] }
 ];
bingoList[16] = [
 { name: "Learn an ability involving fire", types: ["ability"] },
 { name: "Ride a snowboard", types: ["ice"] },
 { name: "Complete a rollercoaster/minecart ride", types: ["area"] },
 { name: "Rescue an NPC", types: ["save"] }
];
bingoList[17] = [
 { name: "Ride a boat/raft", types: ["vehicle"] },
 { name: "Defeat an insect boss", types: ["boss","bug"] },
 { name: "Kill a ghost", types: ["ghost"] },
 { name: "Kill a King", types: ["castle"] }
];
bingoList[18] = [
 { name: "Complete a world", types: ["boss"] },
 { name: "Learn how to shrink", types: ["ability"] },
 { name: "Stun an enemy", types: ["ability"] }
];
bingoList[19] = [
 { name: "Put on a disguise", types: ["guard"] },
 { name: "Kill a shapeshifter", types: ["ghost"] },
 { name: "Defeat your rival/dark-side", types: ["cutscene"] },
 { name: "Glitch out of bounds", types: ["glitch"] }
];
bingoList[20] = [
 { name: "Ride a train", types: ["vehicle"] },
 { name: "Obtain ability to warp", types: ["ability"] },
 { name: "Learn how to dig", types: ["ability"] },
 { name: "Transform into an animal", types: ["ability"] }
];
bingoList[21] = [
 { name: "Manipulate time", types: ["puzzle"] },
 { name: "Change the water level", types: ["water"] },
 { name: "Turn invisible", types: ["ability"] }
];
bingoList[22] = [
 { name: "Flip gravity", types: ["puzzle"] },
 { name: "Kill a vampire", types: ["ghost","boss"] },
 { name: "Defeat three bosses", types: ["boss"] }
];
bingoList[23] = [
 { name: "Obtain the ability to walk underwater", types: ["ability"] },
 { name: "Turn the lights on", types: ["puzzle"] }
];
bingoList[24] = [
 { name: "Defeat an enemy dragon", types: ["boss"] },
 { name: "Pass through a fake wall/floor", types: ["ghost"] },
 { name: "No jumping", types: ["boss","save","air","ability"] }
];
bingoList[25] = [
  { name: "Win a tournament", types: ["water"] },
  { name: "Beat a game", types: ["boss"] }
];