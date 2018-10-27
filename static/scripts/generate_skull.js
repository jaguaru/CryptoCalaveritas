    var BITCOIN_ICON = new Image();
    BITCOIN_ICON.src = "static/images/icons_skull/bitcoin_icon.png";
    var LITECOIN_ICON = new Image();
    LITECOIN_ICON.src = "static/images/icons_skull/litecoin_icon.png";
    var ETHEREUM_ICON = new Image();
    ETHEREUM_ICON.src = "static/images/icons_skull/ethereum_icon.png";
    var MONERO_ICON = new Image();
    MONERO_ICON.src = "static/images/icons_skull/monero_icon.png";
    var ETC_ICON = new Image();
    ETC_ICON.src = "static/images/icons_skull/etc_icon.png";
    var BAT_ICON = new Image();
    BAT_ICON.src = "static/images/icons_skull/bat_icon.png";
    var DASH_ICON = new Image();
    DASH_ICON.src = "static/images/icons_skull/dash_icon.png";
    var DGB_ICON = new Image();
    DGB_ICON.src = "static/images/icons_skull/dgb_icon.png";
    var DOGE_ICON = new Image();
    DOGE_ICON.src = "static/images/icons_skull/doge_icon.png";
    var KOMODO_ICON = new Image();
    KOMODO_ICON.src = "static/images/icons_skull/komodo_icon.png";
    var NEM_ICON = new Image();
    NEM_ICON.src = "static/images/icons_skull/nem_icon.png";
    var NEO_ICON = new Image();
    NEO_ICON.src = "static/images/icons_skull/neo_icon.png";
    var OMG_ICON = new Image();
    OMG_ICON.src = "static/images/icons_skull/omg_icon.png";
    var SIACOIN_ICON = new Image();
    SIACOIN_ICON.src = "static/images/icons_skull/siacoin_icon.png";
    var STELLAR_ICON = new Image();
    STELLAR_ICON.src = "static/images/icons_skull/stellar_icon.png";
    var STEEM_ICON = new Image();
    STEEM_ICON.src = "static/images/icons_skull/steem_icon.png";
    var VERGE_ICON = new Image();
    VERGE_ICON.src = "static/images/icons_skull/verge_icon.png";
    var ZCASH_ICON = new Image();
    ZCASH_ICON.src = "static/images/icons_skull/zcash_icon.png";
    var EOS_ICON = new image();
    EOS_ICON.src = "static/images/icons_skull/eos_icon.png";
     var DOGECOIN_ICON = new image();
    DOGECOIN_ICON.src = "static/images/icons_skull/doge_icon.png";

    function canvasCalaveritas() {

      var canvas = document.getElementById("canvas");
      var context = canvas.getContext("2d");

      var canvas_w = canvas.width;
      var canvas_h = canvas.height;

      context.fillStyle = "purple";
      context.fillRect(0, 0, canvas_w, canvas_h);

      var colors = ["#C39BD3", "#AF7AC5", "#9B59B6", "#884EA0", "#76448A", "#633974", " #512E5F", "#D2B4DE", "#BB8FCE", "#A569BD", "#8E44AD", "#7D3C98", "#6C3483", "#5B2C6F", "#4A235A"];
      var rand;

      for(var x = 0; x < canvas_w; x += 20) {
         for(var y = 0; y < canvas_h; y += 20) {
            rand = Math.floor(Math.random()*colors.length);
            context.fillStyle = colors[rand];
            context.fillRect(x, y, 20, 20);
         }
      }

      context.fillStyle = "#000000";
      context.fillRect(120, 60, 140, 20);

      context.fillRect(80, 80, 220, 20);

      context.fillRect(60, 100, 260, 20);
      context.fillRect(60, 120, 260, 20);

      context.fillRect(40, 140, 300, 20);
      context.fillRect(40, 160, 300, 20);
      context.fillRect(40, 180, 300, 20);
      context.fillRect(40, 200, 300, 20);
      context.fillRect(40, 220, 300, 20);
      context.fillRect(40, 240, 300, 20);
      context.fillRect(40, 260, 300, 20);
      context.fillRect(40, 280, 300, 20);

      context.fillRect(60, 300, 260, 20);

      context.fillRect(80, 320, 220, 20);
      context.fillRect(80, 340, 220, 20);
      context.fillRect(80, 360, 220, 20);

      context.fillStyle="#FFFFFF";
      context.fillRect(120, 80, 140, 20);

      context.fillRect(80, 100, 220, 20);
      context.fillRect(80, 120, 220, 20);

      context.fillRect(60, 140, 260, 20);
      context.fillRect(60, 160, 260, 20);
      context.fillRect(60, 180, 260, 20);
      context.fillRect(60, 200, 260, 20);
      context.fillRect(60, 220, 260, 20);
      context.fillRect(60, 240, 260, 20);
      context.fillRect(60, 260, 260, 20);
      context.fillRect(60, 280, 260, 20);

      context.fillRect(80, 300, 220, 20);

      context.fillRect(100, 320, 180, 20);
      context.fillRect(100, 340, 180, 20);

      context.fillStyle="#000000";
      context.fillRect(100, 140, 60, 20);
      context.fillRect(80, 160, 100, 20);
      context.fillRect(80, 180, 100, 20);
      context.fillRect(80, 200, 100, 20);
      context.fillRect(100, 220, 60, 20);

      context.fillRect(220, 140, 60, 20);
      context.fillRect(200, 160, 100, 20);
      context.fillRect(200, 180, 100, 20);
      context.fillRect(200, 200, 100, 20);
      context.fillRect(220, 220, 60, 20);

      context.fillRect(180, 240, 20, 20);
      context.fillRect(160, 260, 60, 20);

      context.fillRect(140, 320, 20, 20);
      context.fillRect(180, 320, 20, 20);
      context.fillRect(220, 320, 20, 20);

      var crypto_icons = [BITCOIN_ICON, ETHEREUM_ICON, MONERO_ICON, LITECOIN_ICON, ETC_ICON, BAT_ICON, DASH_ICON, DGB_ICON, DOGE_ICON, KOMODO_ICON, NEM_ICON, NEO_ICON, OMG_ICON, SIACOIN_ICON, STELLAR_ICON, STEEM_ICON, VERGE_ICON, ZCASH_ICON, EOS_ICON, DOGECOIN_ICON];
      var icons_rand = Math.floor(Math.random()*crypto_icons.length);
      var cryptoRandomIcons;

      cryptoRandomIcons = crypto_icons[icons_rand];
      context.drawImage(cryptoRandomIcons, 172, 100, 38, 38);

      EYES_BLUE_LIGHT = "#5DADE2";
      EYES_GREEN_LIGHT = "#2ECC71";
      EYES_RED_LIGHT = "#E74C3C";
      EYES_PURPLE_LIGHT = "#AF7AC5";

      EYES_BLUE = "#2980B9";
      EYES_GREEN = "#229954";
      EYES_RED = "#C0392B";
      EYES_PURPLE = "#8E44AD";

      var skull_colors = ["#9B59B6", "#5DADE2", "#F39C12", "#2ECC71", "#E74C3C", "#AF7AC5", "#2980B9", "#CA6F1E", "#229954", "#6C3483", "#C0392B", "#8E44AD"];
      var eyes_rand;

      eyes_rand = Math.floor(Math.random()*skull_colors.length);

      context.fillStyle = skull_colors[eyes_rand];
      context.fillRect(120, 160, 20, 60);
      context.fillRect(100, 180, 60, 20);

      context.fillRect(240, 160, 20, 60);
      context.fillRect(220, 180, 60, 20);

      context.fillStyle="#F4D03F";
      context.fillRect(120, 180, 20, 20);
      context.fillRect(240, 180, 20, 20);

      FACE_PURPLE_LIGHT = "#9B59B6";
      FACE_BLUE_LIGHT = "#5DADE2";
      FACE_ORANGE_LIGHT = "#F39C12";
      FACE_GREEN_LIGHT = "#2ECC71";

      FACE_BLUE = "#2980B9";
      FACE_ORANGE = "#CA6F1E";
      FACE_GREEN = "#229954";

      var face_rand = Math.floor(Math.random()*skull_colors.length);

      context.fillStyle = skull_colors[face_rand];
      context.fillRect(120, 80, 20, 20);
      context.fillRect(120, 100, 20, 20);
      context.fillRect(100, 100, 20, 20);

      context.fillRect(240, 80, 20, 20);
      context.fillRect(240, 100, 20, 20);
      context.fillRect(260, 100, 20, 20);

      context.fillStyle = "#F4D03F";
      context.fillRect(120, 100, 20, 20);
      context.fillRect(240, 100, 20, 20);

      FACE_BLUE = "#2980B9";
      FACE_ORANGE = "#CA6F1E";
      FACE_GREEN = "#229954";

      var face_down_rand = Math.floor(Math.random()*skull_colors.length);

      context.fillStyle = skull_colors[face_down_rand];
      context.fillRect(80, 300, 40, 20);
      context.fillRect(100, 320, 20, 40);

      context.fillRect(260, 300, 40, 20);
      context.fillRect(260, 320, 20, 40);

      context.fillStyle="#F4D03F";
      context.fillRect(100, 300, 20, 20);
      context.fillRect(260, 300, 20, 20);

      CHEEKS_PURPLE = "#6C3483";
      CHEEKS_BLUE = "#2980B9";
      CHEEKS_ORANGE = "#CA6F1E";
      CHEEKS_GREEN = "#229954";

      var cheeks_rand = Math.floor(Math.random()*skull_colors.length);

      context.fillStyle = skull_colors[cheeks_rand];
      context.fillRect(70, 230, 10, 10);
      context.fillRect(80, 230, 10, 10);
      context.fillRect(80, 240, 10, 10);

      context.fillStyle = "#F4D03F";
      context.fillRect(90, 250, 10, 10);
      context.fillRect(100, 250, 10, 10);
      context.fillRect(100, 260, 10, 10);

      context.fillStyle = skull_colors[cheeks_rand];
      context.fillRect(110, 270, 10, 10);
      context.fillRect(120, 270, 10, 10);
      context.fillRect(120, 280, 10, 10);

      context.fillRect(290, 230, 10, 10);
      context.fillRect(300, 230, 10, 10);
      context.fillRect(290, 240, 10, 10);

      context.fillStyle = "#F4D03F";
      context.fillRect(280, 250, 10, 10);
      context.fillRect(270, 250, 10, 10);
      context.fillRect(270, 260, 10, 10);

      context.fillStyle = skull_colors[cheeks_rand];
      context.fillRect(260, 270, 10, 10);
      context.fillRect(250, 270, 10, 10);
      context.fillRect(250, 280, 10, 10);

      var colors_title = ["#F7DC6F", "#F4D03F", "#F1C40F", "#F8C471", "#F5B041", "#F39C12"];
      var rand_title;

      for(var xt = 60; xt < 318; xt += 10) {
         for(var yt = 395; yt < 418; yt += 10) {
            rand_title = Math.floor(Math.random()*colors_title.length);
            context.fillStyle = colors_title[rand_title];
            context.fillRect(xt, yt, 10, 10);
         }
      }

      var mexican_names = ["ALEJANDRO", "MANUEL", "MARGARITA", "JUAN CARLOS", "ROBERTO", "FERNANDO", "DANIEL", "CARLOS", "JORGE", "RICARDO", "MIGUEL", "EDUARDO", "RAFAEL", "MARTÍN", "RAÚL", "DAVID", "JOSEFINA", "ARTURO", "JOSÉ MANUEL", "ENRIQUE", "VERÓNICA", "GERARDO", "MARÍA ELENA", "LETICIA", "ROSA", "MARIO", "FRANCISCA", "ALFREDO", "TERESA", "ALICIA", "SERGIO", "ALBERTO",
                           "LUIS", "ARMANDO", "ALEJANDRA", "MARTHA", "SANTIAGO", "YOLANDA", "PATRICIA", "JUAN MANUEL", "ROSA MARÍA", "ELIZABETH", "GLORIA", "ÁNGEL", "GABRIELA", "SALVADOR", "SILVIA", "GABRIEL", "ANDRÉS", "ÓSCAR", "GUILLERMO",
                           "ANA MARÍA", "RAMÓN", "MARÍA ISABEL", "PABLO", "RUBEN", "ANTONIA", "MARÍA LUISA", "LUIS ÁNGEL", "FELIPE", "JORGE JESÚS", "JAIME", "JULIO CESAR", "DIEGO", "ARACELI", "ANDREA", "ISABEL", "MARÍA TERESA", "IRMA", "CARMEN", "LUCÍA", "ADRIANA", "AGUSTÍN", "GUSTAVO", "JAVIER"];
      var rand_names;
      rand_names = Math.floor(Math.random()*mexican_names.length);

      context.fillStyle = "#000";
      context.font = "bold 32px calibri";
      context.textAlign = "center";
      context.fillStyle = "black";

      var mexicanRandomNames;
      mexicanRandomNames = mexican_names[rand_names];

      context.fillText(mexicanRandomNames, canvas_w/2, canvas_h-18);

    }
