let levels = [];

class Level {
    constructor (totalPoints, playerPos, func) {
        this.totalPoints = totalPoints;
        this.playerPos = playerPos;
        this.func = func;

        levels.push(this);
    }
    init() {
        this.func();
        restartPlayer();
    }
}

new Level (
    2,
    {
        x: 0,
        y: 0,
    },
    () => {
        currentPoints = 0;
        
        currentCheckPoint = 
        new CheckPoint( 650,  965, 20, 40);
        new CheckPoint(-230,  615, 20, 40);
        new CheckPoint( 570,  270, 20, 40);
        new CheckPoint( 590, -125, 20, 40);
        new CheckPoint(-325, -305, 20, 40);
        new CheckPoint(-625, -960, 20, 40);
        new CheckPoint(-340,  965, 20, 40);
        new CheckPoint(-540,  965, 20, 40);
        new CheckPoint( 470,-2135, 20, 40);
        new CheckPoint(-600,-2310, 20, 40);
        new CheckPoint(-550,-2180, 20, 40);
        new CheckPoint(-410,-1380, 20, 40);
        new CheckPoint(-400,-1550, 20, 40);
        new CheckPoint( 360,-1745, 20, 40);
        new CheckPoint( 580,-1380, 20, 40);
        
        currentCheckPoint.selected = true;

        // Walls
        new Block(   0,  1000, 1400,   30);
        new Block( 710, - 735,   20, 3500);
        new Block(-710, - 735,   20, 3500);
        new Block(   0, -2475, 1400,   20);
        // Jump
        new Block(  25,   -1365,    10,  10, "jump");
        new Block(-690,   -1175,    20,  20, "jump");
        new Block(-690,   -1395,    20,  20, "jump");
        new Block(-690,   -1615,    20,  20, "jump");
        new Block(-690,   -1835,    20,  20, "jump");
        new Block(-690,   -2055,    20,  20, "jump");
        new Block( 685,   -1365,    30,  10, "jump");
        new Block( -90,   -1365,    30,  10, "jump");
        new Block( 535,    -575,    20,  30, "jump");
        new Block( 685,    -795,    30,  20, "jump");
        new Block( 540,   -1515,    20,  10, "jump");
        new Block( 690,   -1685,    20,  10, "jump");
        new Block( 540,   -1840,    20,  10, "jump");
        new Block( 690,   -2015,    20,  10, "jump");
        new Block( 315,     215,    20,  20, "jump");
        new Block( 570,     700,    30,  20, "jump");
        new Block( 655,     485,    20,  10, "jump");
        new Block(-320,     170,    40,  10, "jump");
        new Block(-215,    - 30,    40,  10, "jump");
        new Block( 280,    -110,    30,  10, "jump");
        new Block(-690,     475,    20,  10, "jump");
        new Block(-645,     280,    20,  10, "jump");
        new Block(-690,     100,    20,  10, "jump");
        new Block(-235,   -1605,    20,  30, "jump");
        new Block( 250,   -1900,    30,  10, "jump");
        new Block( 120,   -2065,    30,  10, "jump");
        // Normal
        new Block( 500,     960,    50,  50);
        new Block( 425,     935,   100, 100);
        new Block( 225,     935,   100, 100);
        new Block(  70,     725,    20, 450);
        new Block(-190,     810,    20, 350);
        new Block(  25,     940,    70,  20);
        new Block(-145,     830,    70,  20)
        new Block(  25,     720,    70,  20);
        new Block(-450,     840,    50, 320);
        new Block(-450,     660,   200,  50);
        new Block(-240,     645,    80,  20);
        new Block(-340,     695,   170,  20);
        new Block(-280,     790,   160,  20);
        new Block(-345,     880,   160,  20);
        new Block(-230,     965,    60,  40);
        new Block(-665,     700,    70,  20);
        new Block(-515,     800,    80,  20);
        new Block(-515,     895,    80,  20);
        new Block(-450,     610,    50,  50);
        new Block(-170,     490,   500,  20);
        new Block( 390,     720,   620,  20);
        new Block(-380,     197.5,  20, 565);
        new Block(-500,     300,    20, 360);
        new Block(-465,     390,    50,  20);
        new Block(-405,     290,    50,  20);
        new Block(-465,     190,    50,  20);
        new Block(-625,     175,    20, 520);
        new Block(-595,     490,   210,  20);
        new Block(-645,     290,    20,  10);
        new Block(-690,     110,    20,  10);
        new Block(-545,     130,    70,  20);
        new Block(-540,     465,    60,  30);
        new Block(-455,    - 95,   360,  20);
        new Block( 225,    - 95,   780,  20);
        new Block( 625,      25,    20, 260);
        new Block( 680,       0,    40,  20);
        new Block( 650,     100,    40,  20);
        new Block( 610,     230,   180,  20);
        new Block( 530,     290,    20, 100);
        new Block( 120,     330,   800,  20);
        new Block( 500,       0,   100,  20);
        new Block( 350,     215,    50,  20);
        new Block( 150,     190,    70,  20);
        new Block(- 50,     215,    50,  20);
        new Block( 200,       0,    50,  20);
        new Block( 100,       0,    50,  20);
        new Block(-150,     270,    70, 100);
        new Block(-215,     290,    60,  60);
        new Block(-330,     440,    80,  80);
        new Block(  95,     600,    30,  30);
        new Block( 275,     650,   100,  20);
        new Block( 435,     650,    50,  20);
        new Block( 640,     500,    50,  20);
        new Block( 560,     300,    40,  20);
        new Block(-320,     200,   100,  50);
        new Block(-155,      40,    20, 250);
        new Block(-215,       0,   100,  50);
        new Block(-510,    -270,   420,  30);
        new Block(-400,    -300,    50,  30);
        new Block(-480,    -400,    50,  20);
        new Block(-560,    -500,    50,  20);
        new Block(-640,    -600,    50,  20);
        new Block(-560,    -320,    70,  70);
        new Block( 300,    -400,   800,  20);
        new Block(- 90,    -470,    20, 120);
        new Block(-300,    -660,    50,  20);
        new Block( 100,    -700,    50,  20);
        new Block(-150,    -570,    30,  20);
        new Block(   0,    -560,    30,  20);
        new Block( 500,    -570,    50,  20);
        new Block( 650,    -770,   100,  30);
        new Block( 350,    -560,    30,  20);
        new Block( 200,    -540,    30,  20);
        new Block( 630,   -1000,    70,  20);
        new Block( -50,    -880,  1300,  20);
        new Block( 300,   -1070,    50,  20);
        new Block(-100,   -1100,    50,  20);
        new Block(-500,   -1150,    50,  20);
        new Block(-575,   -1150,   250,  30);
        new Block( 400,    -940,    30,  20);
        new Block( 200,    -920,    30,  20);
        new Block(   0,    -930,    30,  20);
        new Block(-200,    -950,    30,  20);
        new Block(-400,    -920,    30,  20);
        new Block(-650,    -930,   100,  20);
        new Block(-690,   -1285,    20, 200);
        new Block(-690,   -1505,    20, 200);
        new Block(-690,   -1725,    20, 200);
        new Block(-690,   -1945,    20, 200);
        new Block(-690,   -2265,    20, 400);
        new Block(-650,   -1730,    20,1080);
        new Block( -75,  -357.5,   550,  65);
        new Block( 590,  -267.5,    50, 245);
        new Block(-625,   -1010,    20,  60);
        new Block(-115,   547.5,   350,  95);
        new Block(-340,   917.5,    20,  55);
        new Block(-540,     925,    20,  40);
        new Block(-620,   -2280,    80,  20);
        new Block(  30,   -1350,  1340,  20);
        new Block(-550,   -2150,    50,  20);
        new Block(-350,   -2150,    50,  20);
        new Block(-150,   -2150,    50,  20);
        new Block(  50,   -2150,    50,  20);
        new Block(   0,   -2000,    50,  20);
        new Block(-280,   -2000,   300,  20);
        new Block(-520,   -1850,   120,  20);
        new Block(-350,   -1750,    50,  20);
        new Block(-520,   -1730,   120,  20);
        new Block(-520,   -1610,   120,  20);
        new Block(-520,   -1490,   120,  20);
        new Block(-150,   -1520,    50,  20);
        new Block(-400,   -1520,    50,  20);
        new Block(-260,   -1600,    50,  20);
        new Block( -60,   -1510,    20, 300);
        new Block(-180,   -1850,    30,  20);
        new Block(   0,   -1800,   200,  20);
        new Block( 250,   -1885,    30,  20);
        new Block( 120,   -2050,    30,  20);
        new Block( 315,   -2280,   250,  20);
        new Block( 525,   -2280,    70,  20);
        new Block( 655,   -2280,    90,  20);
        new Block(-197.5, -2280,   605,  20);
        new Block( 275,   -2010,    20, 520);
        new Block(  10,   -1555,    20, 390);
        new Block( 152.5, -1740,   266,  20);
        new Block( 455,   -2105,    70,  20);
        new Block( 360,   -2105,    40,  20);
        new Block( 340,   -1910,    70,  20);
        new Block( 435,   -1910,    40,  20);
        new Block( 455,   -1715,    70,  20);
        new Block( 360,   -1715,    40,  20);
        new Block( 320,   -1650,    40,  20);
        new Block(  60,   -1640,    40,  20);
        new Block( 450,   -1600,    40,  20);
        new Block( 245,   -1490,   370,  20);
        new Block( 590,   -1455,   120, 110);
        new Block( 520,   -1865,    20, 810);
        new Block( 640,   -1570,    20, 120);
        new Block( 595,   -1620,    70,  20);
        new Block( 595,   -1560,    70,  20);
        new Block( 640,   -1670,   120,  20);
        new Block( 625,   -1770,    90,  20);
        new Block( 590,   -1710,    20, 100);
        new Block( 625,   -1720,    90,  20);
        new Block( 590,   -1825,   120,  20);
        new Block( 640,   -1895,    20, 120);
        new Block( 595,   -1945,    70,  20);
        new Block( 595,   -1885,    70,  20);
        new Block( 640,   -2000,   120,  20);
        new Block( 625,   -2100,    90,  20);
        new Block( 590,   -2040,    20, 100);
        new Block( 625,   -2050,    90,  20);
        new Block( 590,   -2155,   120,  20);
        new Block( 640,   -2195,    20,  60);
        new Block( 595,   -2215,    70,  20);
        // Lava
        new Block(-100,   -1760,   200,  20, "lava");
        new Block( 150,   -2065,    30,  50, "lava");
        new Block( -10,   -1555,    20, 390, "lava");
        new Block( -35,   -1600,    30,  20, "lava");
        new Block( 132.5, -1760,   265,  20, "lava");
        new Block( 295,   -2000,    20, 540, "lava");
        new Block( 500,   -1915,    20, 710, "lava");
        new Block( 400,   -2160,    40, 130, "lava");
        new Block( 395,   -1965,    40, 130, "lava");
        new Block( 400,   -1770,    40, 130, "lava");
        new Block( 162.5, -1720,   285,  20, "lava");
        new Block(  60,   -1605,    40,  50, "lava");
        new Block( 265,   -1570,   450,  20, "lava");
        new Block( 265,   -1470,   450,  20, "lava");
        new Block( 500,   -1510,    20, 100, "lava");
        new Block( 300,   -1365,   400,  10, "lava");
        new Block(-100,   -1050,  1200,  20, "lava");
        new Block(-530,   -1205,    50,  80, "lava");
        new Block(-225,    -460,   250, 140, "lava");
        new Block(-630,   -1815,    20, 910, "lava");
        new Block(-200,   -2245,   600,  50, "lava");
        new Block(  90,   -2070,    30, 400, "lava");
        new Block(-340,   -2100,   560,  20, "lava");
        new Block(-500,   -2000,    70, 180, "lava");
        new Block(-385,   -1750,    20,  20, "lava");
        new Block(-405,   -1765,    20,  50, "lava");
        new Block(-425,   -1780,    20,  80, "lava");
        new Block(-445,   -1795,    20, 110, "lava");
        new Block(-520,   -1820,   120,  40, "lava");
        new Block(-520,   -1700,   120,  40, "lava");
        new Block(-520,   -1580,   120,  40, "lava");
        new Block(-450,   -1600,    20, 300, "lava");
        new Block(-315,   -1855,    20, 230, "lava");
        new Block(-115,   -1960,   380,  20, "lava");
        new Block(-220,   -1580,   300,  20, "lava");
        new Block(-515,   -1385,    40,  50, "lava");
        new Block(-475,    -320,   100,  70, "lava");
        new Block(-647.5,  -425,   105, 280, "lava");
        new Block( 310,    -470,   780, 120, "lava");
        new Block( -50,    -900,  1300,  20, "lava");
        new Block( 190,    -680,   500,  20, "lava");
        new Block( 200,     295,   640,  50, "lava");
        new Block( 150,    -  5,    50,  30, "lava");
        new Block(-100,     460,   100,  40, "lava");
        new Block(-100,     435,    80,  30, "lava");
        new Block(-100,     420,    50,  20, "lava");
        new Block(-100,     405,    20,  10, "lava");
        new Block( 305,     695,   450,  30, "lava");
        new Block( 430,     205,    70, 130, "lava");
        new Block( 515,     650,    30,  60, "lava");
        new Block( 350,     650,    50,  60, "lava");
        new Block( 655,     665,    90,  90, "lava");
        new Block( 685,     430,    30, 380, "lava");
        new Block(-300,    -120,    90,  30, "lava");
        new Block(-140,    -120,    90,  30, "lava");
        new Block( 385,    -200,    50, 190, "lava");
        new Block(-665,     847.5,  70, 275, "lava");
        new Block( 325,     947.5, 100,  75, "lava");
        new Block(-585,     350,    60,  30, "lava");
        new Block( 100,    -155,    60, 100, "lava");

        player = new Player(0, 0, 20, 20);
        restartPlayer();

        new Point( 425,   860, 5);
        new Point( 225,   860, 5);
        new Point(-250,   760, 5);
        new Point(-350,   850, 5);
        new Point(-250,   920, 5);
        new Point(-390,   960, 5);
        new Point(-515,   960, 5);
        new Point(-515,   870, 5);
        new Point(-515,   775, 5);
        new Point(-660,   670, 5);
        new Point(-540,   430, 5);
        new Point(-400,   455, 5);
        new Point(-470,   355, 5);
        new Point(-400,   255, 5);
        new Point(-470,   155, 5);
        new Point( 200,  - 30, 5);
        new Point( 100,  - 30, 5);
        new Point( 500,  - 30, 5);
        new Point( 530,  - 30, 5);
        new Point( 470,  - 30, 5);
        new Point( 350,   190, 5);
        new Point( 150,   160, 5);
        new Point(- 50,   190, 5);
        new Point(  95,   570, 5);
        new Point( 255,   620, 5);
        new Point( 295,   620, 5);
        new Point( 435,   620, 5);
        new Point( 570,   650, 5);
        new Point( 570,   620, 5);
        new Point( 570,   590, 5);
        new Point( 570,   560, 5);
        new Point( 570,   530, 5);
        new Point( 655,   460, 5);
        new Point( 655,   430, 5);
        new Point( 655,   400, 5);
        new Point( 655,   370, 5);
        new Point( 655,   340, 5);
        new Point( 550,   270, 5);
        new Point(-560,  -370, 5);
        new Point(-400,  -330, 5);
        new Point(-480,  -430, 5);
        new Point(-560,  -530, 5);
        new Point(-640,  -630, 5);
        new Point(-300,  -690, 5);
        new Point( 100,  -730, 5);
        new Point(-150,  -600, 5);
        new Point(   0,  -590, 5);
        new Point( 500,  -600, 5);
        new Point( 650,  -800, 5);
        new Point( 350,  -590, 5);
        new Point( 200,  -570, 5);
        new Point(-670,  -960, 5);
        new Point( 400,  -970, 5);
        new Point( 200,  -950, 5);
        new Point(   0,  -960, 5);
        new Point(-200,  -980, 5);
        new Point(-400,  -950, 5);
        new Point( 300, -1100, 5);
        new Point(-100, -1130, 5);
        new Point(-600, -1180, 5);
        new Point(-600, -1900, 5);
        new Point(-600, -1850, 5);
        new Point(-600, -1800, 5);
        new Point(-600, -1750, 5);
        new Point(-600, -1700, 5);
        new Point(-600, -1650, 5);
        new Point(-350, -2180, 5);
        new Point(-150, -2180, 5);
        new Point(  50, -2180, 5);
        new Point(   0, -2030, 5);
        new Point(-350, -1780, 5);
        new Point(-500, -1760, 5);
        new Point(-520, -1760, 5);
        new Point(-540, -1760, 5);
        new Point(-500, -1640, 5);
        new Point(-520, -1640, 5);
        new Point(-540, -1640, 5);
        new Point(-500, -1520, 5);
        new Point(-520, -1520, 5);
        new Point(-540, -1520, 5);
        new Point( -60, -1680, 5);
        new Point(-180, -1880, 5);
        new Point( 600, -1530, 5);
        new Point( 600, -1590, 5);
        new Point( 600, -1855, 5);
        new Point( 600, -1915, 5);
        new Point( 600, -2185, 5);
        new Point( 630, -1695, 5);
        new Point( 630, -1745, 5);
        new Point( 630, -2025, 5);
        new Point( 630, -2075, 5);
        new Point( 360, -2135, 5);
        new Point( 340, -1940, 5);
        new Point( 435, -1940, 5);
        new Point( 455, -1745, 5);
        new Point( 320, -1680, 5);
        new Point( 450, -1630, 5);
        new Point(  60, -1670, 5);
        new Point( 410, -1520, 5);
        new Point( 390, -1520, 5);
        new Point( 370, -1520, 5);
        new Point( 350, -1520, 5);
        new Point( 330, -1520, 5);
        new Point( 310, -1520, 5);
        new Point( 290, -1520, 5);
        new Point( 270, -1520, 5);
        new Point( 250, -1520, 5);
        new Point( 230, -1520, 5);
        new Point( 210, -1520, 5);
        new Point( 190, -1520, 5);
        new Point( 170, -1520, 5);
        new Point( 150, -1520, 5);
        new Point( 130, -1520, 5);
        new Point( 110, -1520, 5);
        new Point(  90, -1520, 5);

        flag = new Flag(650, -2400, 30);
    }
);


new Level (
    2,
    {
        x: 300,
        y: 330
    },
    () => {
        currentPoints = 0;

        new CheckPoint(-430, 330, 20, 40);
        currentCheckPoint = new CheckPoint(300, 330, 20, 40);
        currentCheckPoint.selected = true;

        let shooter = new Shooter(50, 250, 15, 30, Math.PI/2);
        shooter.radiusShoot = true;
        shooter.playerShoot = true;
        new Block(100, 375, 600, 50);
        new Block(-450, 375, 500, 50, "ice");
        new Block(100, 130, 30, 30, "gravityup");
        new Block(300, 10, 30, 20, "gravitydown");
        new Block(-200, 200, 50, 30, "breakable");
        new Block(-300, 340, 50, 20, "bouncy");
        new Block(-650, 340, 40, 20, "jump");
        for (let i = 0; i < 100; i++) {
            new Block((i*-50) - 725, 375, 50, 50, "breakable");
        }
        new Block(-40, 100, 40, 20, "vanish");
        new Block(200, 300, 50, 50);
        new Block(200, 150, 50, 30);
        new Block(-10, 150, 20, 300);
        new Block(410, 200, 20, 400);
        new Block(200, -10, 440, 20);
        new Block(300, 150, 40, 20).setMovement({
            start: {
                x: 300,
                y: 150,
            },
            end: {
                x: 300,
                y: 300,
            },
            speed: 1,
            isMoving: true
        });
        new Block(100, 345, 30, 10, "jump");
        new Block(225, 140, 20, 50, "lava");
        
        player = new Player(300, 330, 20, 20);
        restartPlayer();

        flag = new Flag(300, 50, 30);
        new Point(200, 250, 5);
        new Point(100,100, 5);
    }
);