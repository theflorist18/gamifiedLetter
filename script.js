// ══════════════════════════════════════════════
//  PIXEL DRAWING ENGINE
// ══════════════════════════════════════════════
const P = 4;
function px(ctx, pixels, offX, offY, scale) {
  const sc = scale || P;
  for (const [x, y, c] of pixels) {
    ctx.fillStyle = c; ctx.fillRect(offX + x * sc, offY + y * sc, sc, sc);
  }
}
function clearCanvas(canvas) { canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height); }
function drawSprite(canvas, pixelsFn, scale) {
  const sc = scale || P; clearCanvas(canvas); canvas.width = 32 * sc; canvas.height = 32 * sc;
  px(canvas.getContext('2d'), pixelsFn(), 0, 0, sc);
}

// ══════════════════════════════════════════════
//  COMPRESSED PIXEL ART ARRAYS
// ══════════════════════════════════════════════
const C = {BK:'#000000',TR:'transparent',PK1:'#f07898',PK2:'#e85888',PK3:'#d03870',PK4:'#b82060',PK5:'#f8b0c8',PK6:'#fcd8e8',PK7:'#fce8f0',PK8:'#c84878',PK9:'#a03060',PKST:'#b83068',WH:'#ffffff',WH2:'#f5e8ee',GR1:'#5a7080',GR2:'#6a8090',GR3:'#7a90a0',GR4:'#4a6070',GR5:'#3a5060',GR6:'#8aaabb',GR7:'#aabccc',OR1:'#c87820',OR2:'#d89030',OR3:'#e8a840',OR4:'#b06010',OR5:'#f0c060',WCAT:'#f8f0e8',CA1:'#111111',CA2:'#1a1a1a',CA3:'#222222',CA4:'#2a2a2a',CA5:'#333333',CA6:'#3a3a3a',CA7:'#444444',CA8:'#555555',CA9:'#4a5a6a',CAL:'#c0ccdd',CAR:'#ff3333',EYES_BLUE:'#2244bb',EYES_BLUE2:'#3366ee',EYES_GLOW:'#8844ff',PINK_NOSE:'#ffaacc',NOSE2:'#ffbbdd'};

function tiggyy_idle(){return [[11,0,C.BK],[12,0,C.PK2],[13,0,C.PK1],[14,0,C.BK],[10,1,C.BK],[11,1,C.PK3],[12,1,C.PK1],[13,1,C.PK2],[14,1,C.BK],[18,0,C.BK],[19,0,C.PK1],[20,0,C.PK2],[21,0,C.BK],[18,1,C.BK],[19,1,C.PK1],[20,1,C.PK2],[21,1,C.PK3],[22,1,C.BK],[14,1,C.PK3],[15,1,C.PKST],[16,1,C.PKST],[15,0,C.PK3],[16,2,C.PKST],[17,2,C.PKST],[15,2,C.PKST],[9,2,C.BK],[10,2,C.BK],[11,2,C.PK2],[12,2,C.PK1],[13,2,C.PK1],[14,2,C.PK1],[15,2,C.PK1],[16,2,C.PK1],[17,2,C.PK1],[18,2,C.PK1],[19,2,C.PK1],[20,2,C.PK1],[21,2,C.PK2],[22,2,C.BK],[23,2,C.BK],[8,3,C.BK],[9,3,C.PK2],[10,3,C.PK1],[11,3,C.PK1],[7,4,C.BK],[8,4,C.PK1],[7,5,C.BK],[8,5,C.PK1],[7,6,C.BK],[8,6,C.PK1],[7,7,C.BK],[8,7,C.PK1],[7,8,C.BK],[8,8,C.PK1],[7,9,C.BK],[8,9,C.PK1],[7,10,C.BK],[8,10,C.PK1],[8,11,C.BK],[9,11,C.PK2],[9,12,C.BK],[10,12,C.PK1],[20,3,C.PK2],[21,3,C.PK1],[22,3,C.PK1],[23,3,C.BK],[23,4,C.BK],[24,4,C.PK1],[25,4,C.BK],[23,5,C.BK],[24,5,C.PK1],[25,5,C.BK],[23,6,C.BK],[24,6,C.PK1],[25,6,C.BK],[23,7,C.BK],[24,7,C.PK1],[25,7,C.BK],[23,8,C.BK],[24,8,C.PK1],[25,8,C.BK],[23,9,C.BK],[24,9,C.PK1],[25,9,C.BK],[23,10,C.BK],[24,10,C.PK1],[25,10,C.BK],[22,11,C.PK2],[23,11,C.BK],[21,12,C.PK1],[22,12,C.BK],...[3,4,5,6,7,8,9,10,11,12].flatMap(y=>[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].filter(x=>x>=9&&x<=24).map(x=>[x,y,C.PK1])).filter(([x,y])=>x>=9&&x<=24&&y>=3&&y<=12),...[13,14,15,16,17,18].map(x=>[x,3,C.PKST]),[9,5,C.PK3],[10,5,C.PK3],[9,6,C.PKST],[22,5,C.PK3],[23,5,C.PK3],[22,6,C.PKST],[24,5,C.PK3],[9,8,C.PKST],[10,8,C.PKST],[10,9,C.PKST],[22,8,C.PKST],[23,8,C.PKST],[22,9,C.PKST],[9,4,C.PK2],[10,4,C.PK2],[22,4,C.PK2],[23,4,C.PK2],...[13,14,15,16,17,18,19].map(x=>[x,8,C.WH]),...[12,13,14,15,16,17,18,19,20].map(x=>[x,9,C.WH]),...[13,14,15,16,17,18,19].map(x=>[x,10,C.WH]),...[14,15,16,17,18].map(x=>[x,11,C.WH2]),[15,8,C.PINK_NOSE],[16,8,C.PINK_NOSE],[17,8,C.PINK_NOSE],[16,9,C.PK3],[11,5,C.BK],[12,5,C.BK],[11,6,C.BK],[12,6,C.BK],[12,5,C.WH],[19,5,C.BK],[20,5,C.BK],[19,6,C.BK],[20,6,C.BK],[20,5,C.WH],[15,11,C.BK],[16,11,C.BK],[14,12,C.BK],[17,12,C.BK],[15,12,C.PK3],[16,12,C.PK3],[9,7,C.PK8],[10,7,C.PK3],[22,7,C.PK3],[23,7,C.PK8],...[10,11,12,13,14,15,16,17,18,19,20,21].map(x=>[x,13,C.PK1]),...[9,10,11,12,13,14,15,16,17,18,19,20,21,22].map(x=>[x,14,C.PK1]),...[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map(x=>[x,15,C.PK1]),...[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map(x=>[x,16,C.PK1]),...[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map(x=>[x,17,C.PK1]),...[9,10,11,12,13,14,15,16,17,18,19,20,21,22].map(x=>[x,18,C.PK1]),...[10,11,12,13,14,15,16,17,18,19,20,21].map(x=>[x,19,C.PK2]),...[13,14,15,16,17,18].map(x=>[x,15,C.PK6]),...[12,13,14,15,16,17,18,19].map(x=>[x,16,C.PK6]),...[12,13,14,15,16,17,18,19].map(x=>[x,17,C.PK7]),...[13,14,15,16,17,18].map(x=>[x,18,C.PK7]),[7,14,C.BK],[7,15,C.BK],[7,16,C.BK],[7,17,C.BK],[7,18,C.BK],[8,19,C.BK],[24,14,C.BK],[24,15,C.BK],[24,16,C.BK],[24,17,C.BK],[24,18,C.BK],[23,19,C.BK],[9,20,C.BK],[10,20,C.BK],[21,20,C.BK],[22,20,C.BK],[9,19,C.BK],[10,19,C.PK2],[11,19,C.PK1],[12,19,C.PK1],[13,19,C.BK],[9,20,C.PK2],[10,20,C.PK5],[11,20,C.PK5],[12,20,C.PK5],[13,20,C.BK],[10,21,C.PK5],[11,21,C.PK6],[12,21,C.PK5],[11,22,C.BK],[18,19,C.BK],[19,19,C.PK1],[20,19,C.PK1],[21,19,C.PK2],[22,19,C.BK],[18,20,C.PK2],[19,20,C.PK5],[20,20,C.PK5],[21,20,C.PK5],[22,20,C.BK],[19,21,C.PK5],[20,21,C.PK6],[21,21,C.PK5],[20,22,C.BK],[8,15,C.PK2],[8,16,C.PK2],[8,17,C.PK2],[23,15,C.PK2],[23,16,C.PK2],[23,17,C.PK2]];}
function tiggyy_attack(){return[...tiggyy_idle().filter(([x,y])=>!(x>=8&&x<=13&&y>=19&&y<=22)),[8,14,C.PK1],[9,13,C.PK1],[8,13,C.PK1],[7,12,C.PK1],[8,12,C.PK2],[7,11,C.BK],[8,11,C.PK5],[9,11,C.PK5],[8,10,C.PK5],[9,10,C.PK6],[14,10,C.BK],[15,10,C.BK],[16,10,C.BK],[17,10,C.BK],[14,11,C.BK],[17,11,C.BK],[14,12,C.PK3],[15,12,C.BK],[16,12,C.BK],[17,12,C.PK3],[5,13,'#ffaacc'],[6,12,'#ffbbdd'],[5,11,'#ff88aa'],[6,11,'#ffccdd'],[4,12,'#ff99bb'],[5,14,'#ffddee'],[4,9,C.BK],[5,9,C.BK],[6,9,C.BK],[7,9,C.BK],[4,10,C.WH],[5,10,C.WH],[6,10,C.WH],[7,10,C.WH],[5,11,C.BK]];}
function tiggyy_ult(){return[[11,0,C.BK],[12,0,C.PK2],[13,0,C.PK1],[14,0,C.BK],[18,0,C.BK],[19,0,C.PK1],[20,0,C.PK2],[21,0,C.BK],[14,0,C.PKST],[15,0,C.PKST],[16,0,C.PKST],[17,0,C.PK3],...[10,11,12,13,14,15,16,17,18,19,20,21,22].map(x=>[x,1,C.PK1]),...[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map(x=>[x,2,C.PK1]),...[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map(x=>[x,3,C.PK1]),...[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map(x=>[x,4,C.PK1]),...[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map(x=>[x,5,C.PK1]),...[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map(x=>[x,6,C.PK1]),...[10,11,12,13,14,15,16,17,18,19,20,21,22].map(x=>[x,7,C.PK1]),[11,3,C.BK],[12,3,C.BK],[12,2,C.BK],[20,3,C.BK],[21,3,C.BK],[21,2,C.BK],[11,4,C.BK],[12,4,C.BK],[20,4,C.BK],[21,4,C.BK],[12,3,C.WH],[21,3,C.WH],...[13,14,15,16,17,18,19].map(x=>[x,5,C.WH]),[15,5,C.PINK_NOSE],[16,5,C.PINK_NOSE],[15,6,C.PK3],...[12,13,14,15,16,17,18,19,20].map(x=>[x,7,C.BK]),[12,7,C.WH],[13,7,C.WH],[19,7,C.WH],[20,7,C.WH],[14,7,'#ff4400'],[15,7,'#ff3300'],[16,7,'#ff4400'],[17,7,'#ff3300'],[18,7,'#ff4400'],...[10,11,12,13,14,15,16,17,18,19,20,21,22].map(x=>[x,8,C.PK1]),...[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map(x=>[x,9,C.PK1]),...[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map(x=>[x,10,C.PK1]),...[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map(x=>[x,11,C.PK1]),...[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map(x=>[x,12,C.PK1]),...[10,11,12,13,14,15,16,17,18,19,20,21,22].map(x=>[x,13,C.PK1]),...[13,14,15,16,17,18,19].map(x=>[x,10,C.PK6]),...[13,14,15,16,17,18,19].map(x=>[x,11,C.PK7]),...[13,14,15,16,17,18,19].map(x=>[x,12,C.PK7]),[6,8,C.BK],[7,8,C.PK1],[8,8,C.PK1],[7,7,C.PK5],[8,7,C.PK5],[7,6,C.BK],[8,6,C.BK],[24,8,C.PK1],[25,8,C.PK1],[24,7,C.PK5],[25,7,C.PK5],[25,6,C.BK],[26,7,C.BK],[3,5,'#cc00ff'],[4,4,'#ff00cc'],[2,6,'#9900ff'],[3,7,'#ff00ff'],[27,5,'#cc00ff'],[28,4,'#ff00cc'],[27,6,'#9900ff'],[5,3,'#ff88ff'],[27,3,'#ff88ff'],...[11,12,13,14,15].map(x=>[x,14,C.PK1]),...[17,18,19,20,21].map(x=>[x,14,C.PK1]),[11,15,C.BK],[12,15,C.PK5],[13,15,C.PK5],[14,15,C.BK],[18,15,C.PK5],[19,15,C.PK5],[20,15,C.BK]];}

function neo_idle(){const H=C.GR2,HL=C.GR3,HD=C.GR4,F=C.OR2,FL=C.OR3,FD=C.OR1,W=C.WCAT;return[[11,0,C.BK],[12,0,H],[13,0,H],[14,0,C.BK],[10,1,C.BK],[11,1,HL],[12,1,HL],[13,1,'#ffaabb'],[14,1,C.BK],[10,2,C.BK],[11,2,H],[12,2,HL],[13,2,'#ffaabb'],[14,2,H],[15,2,C.BK],[10,3,C.BK],[11,3,H],[12,3,H],[13,3,H],[14,3,H],[15,3,C.BK],[10,4,C.BK],[11,4,H],[12,4,H],[13,4,H],[14,4,C.BK],[18,0,C.BK],[19,0,H],[20,0,H],[21,0,C.BK],[18,1,C.BK],[19,1,'#ffaabb'],[20,1,HL],[21,1,HL],[22,1,C.BK],[17,2,C.BK],[18,2,H],[19,2,'#ffaabb'],[20,2,HL],[21,2,H],[22,2,C.BK],[17,3,C.BK],[18,3,H],[19,3,H],[20,3,H],[21,3,H],[22,3,C.BK],[18,4,C.BK],[19,4,H],[20,4,H],[21,4,C.BK],...[11,12,13,14,15,16,17,18,19,20,21].map(x=>[x,4,H]),...[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map(x=>[x,5,H]),...[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].map(x=>[x,6,HD]),...[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].map(x=>[x,7,HD]),...[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].map(x=>[x,8,HD]),...[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map(x=>[x,9,HD]),...[10,11,12,13,14,15,16,17,18,19,20,21,22].map(x=>[x,10,H]),[7,6,C.BK],[7,7,C.BK],[7,8,C.BK],[25,6,C.BK],[25,7,C.BK],[25,8,C.BK],[8,5,C.BK],[8,9,C.BK],[24,5,C.BK],[24,9,C.BK],...[13,14,15,16,17,18,19].map(x=>[x,6,F]),...[12,13,14,15,16,17,18,19,20].map(x=>[x,7,F]),...[12,13,14,15,16,17,18,19,20].map(x=>[x,8,F]),...[13,14,15,16,17,18,19].map(x=>[x,9,F]),...[14,15,16,17,18].map(x=>[x,8,W]),...[14,15,16,17,18].map(x=>[x,9,W]),[13,6,FD],[14,6,FL],[13,7,FD],[14,7,F],[19,6,FD],[20,6,FL],[12,7,FD],[12,8,FD],[20,8,FD],[20,7,FD],[14,7,C.BK],[15,7,C.EYES_BLUE],[15,6,C.EYES_BLUE2],[14,6,C.BK],[18,7,C.BK],[17,7,C.EYES_BLUE],[17,6,C.EYES_BLUE2],[18,6,C.BK],[15,7,C.EYES_BLUE2],[17,7,C.EYES_BLUE2],[15,9,C.PINK_NOSE],[16,9,C.PINK_NOSE],[16,10,C.BK],[15,10,C.BK],[13,8,C.BK],[19,8,C.BK],...[11,12,13,14,15,16,17,18,19,20,21].map(x=>[x,11,H]),...[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map(x=>[x,12,H]),...[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].map(x=>[x,13,HL]),...[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].map(x=>[x,14,HL]),...[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].map(x=>[x,15,H]),...[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map(x=>[x,16,H]),...[10,11,12,13,14,15,16,17,18,19,20,21,22].map(x=>[x,17,HD]),...[13,14,15,16,17,18,19].map(x=>[x,13,W]),...[12,13,14,15,16,17,18,19,20].map(x=>[x,14,W]),...[13,14,15,16,17,18,19].map(x=>[x,15,W]),[9,13,C.OR2],[10,13,C.OR2],[9,14,C.OR1],[10,14,C.OR2],[22,13,C.OR2],[23,13,C.OR2],[22,14,C.OR1],[23,14,C.OR2],[7,12,C.BK],[7,13,C.BK],[7,14,C.BK],[7,15,C.BK],[7,16,C.BK],[25,12,C.BK],[25,13,C.BK],[25,14,C.BK],[25,15,C.BK],[25,16,C.BK],[9,17,C.BK],[10,17,C.BK],[22,17,C.BK],[23,17,C.BK],[8,17,C.BK],[9,17,C.OR2],[10,17,C.OR1],[11,17,C.BK],[8,18,C.BK],[9,18,W],[10,18,W],[11,18,W],[12,18,C.BK],[9,19,W],[10,19,W],[11,19,W],[10,20,C.BK],[20,17,C.BK],[21,17,C.OR1],[22,17,C.OR2],[23,17,C.BK],[19,18,C.BK],[20,18,W],[21,18,W],[22,18,W],[23,18,C.BK],[20,19,W],[21,19,W],[22,19,W],[21,20,C.BK],[10,19,'#ffbbcc'],[11,19,'#ffbbcc'],[20,19,'#ffbbcc'],[21,19,'#ffbbcc'],...[11,12,13,14,15,16,17,18,19,20,21].map(x=>[x,18,H]),...[11,12,13,14,15,16,17,18,19,20,21].map(x=>[x,19,HL]),...[12,13,14].map(x=>[x,20,W]),...[18,19,20].map(x=>[x,20,W]),[12,21,'#ffbbcc'],[13,21,'#ffbbcc'],[14,21,C.BK],[18,21,'#ffbbcc'],[19,21,'#ffbbcc'],[20,21,C.BK]];}
function neo_attack(){return[...neo_idle().filter(([x,y])=>!(x>=19&&x<=23&&y>=17&&y<=21)),[22,14,C.OR2],[23,13,C.OR2],[24,12,C.OR1],[25,11,C.OR2],[24,11,C.BK],[25,10,C.BK],[26,11,C.OR1],[26,12,C.BK],[24,10,C.WCAT],[25,10,C.WCAT],[24,11,C.WCAT],[24,10,'#ffbbcc'],[25,11,'#ffbbcc'],[27,8,'#ff0000'],[28,7,'#ff2244'],[29,7,'#ff0000'],[27,9,'#ff2244'],[28,9,'#ff0000'],[29,8,'#ff2244'],[28,10,'#ff0000'],[27,6,'#ffaaaa'],[29,6,'#ffaaaa'],[30,8,'#ffaaaa'],[27,11,'#ffaaaa']];}
function neo_ult(){return[...neo_idle().filter(([x,y])=>!(x>=14&&x<=18&&y>=6&&y<=7)),[14,7,C.BK],[15,7,C.EYES_GLOW],[15,6,'#aa66ff'],[14,6,C.BK],[18,7,C.BK],[17,7,C.EYES_GLOW],[17,6,'#aa66ff'],[18,6,C.BK],[15,6,'#cc88ff'],[17,6,'#cc88ff'],[16,6,'#ffffff'],[16,7,'#ffffff'],[4,10,'#ff0000'],[5,9,'#ff8800'],[4,8,'#ffff00'],[3,11,'#00ff00'],[5,12,'#0088ff'],[4,13,'#8800ff'],[6,8,'#ff00aa'],[3,9,'#00ffff'],[26,7,'#ff3366'],[27,6,'#ff3366'],[28,7,'#ff3366'],[27,8,'#ff3366'],[27,11,'#ff88aa'],[28,10,'#ff88aa'],[25,9,'#ff5577'],[22,14,C.OR2],[23,13,C.OR2],[24,12,C.OR1],[25,11,C.OR2],[24,10,C.WCAT],[25,10,C.WCAT],[24,11,C.WCAT],[24,10,'#ffbbcc'],[25,11,'#ffbbcc'],[6,14,'#cc44ff'],[5,15,'#aa22ee'],[6,16,'#cc44ff'],[5,17,'#dd66ff'],[7,13,'#9900cc'],[26,13,'#ffff00'],[27,12,'#ffff00'],[28,13,'#ffff00'],[27,14,'#ffff00'],[27,13,'#ffffff']];}

function z_idle(){const B=C.CA1,DB=C.CA2,MB=C.CA3,LB=C.CA4,HL='#ccddff',HR='#ff2222',GS='#3a4a5a',GL='#c0d8f0',WH='#aabbcc',HUB='#888899';return[[8,3,B],[9,3,MB],[10,3,MB],[11,3,MB],[12,3,LB],[13,3,LB],[14,3,LB],[15,3,LB],[16,3,LB],[17,3,LB],[18,3,MB],[19,3,MB],[20,3,B],[7,4,B],[8,4,DB],[9,4,MB],[10,4,MB],[11,4,MB],[12,4,LB],[13,4,LB],[14,4,LB],[15,4,LB],[16,4,LB],[17,4,LB],[18,4,LB],[19,4,MB],[20,4,MB],[21,4,B],[8,5,B],[9,5,GL],[10,5,GL],[11,5,GL],[12,5,GL],[13,5,GS],[14,5,GS],[15,5,GS],[16,5,GS],[17,5,GS],[18,5,GS],[19,5,GS],[20,5,B],[21,5,B],[7,6,B],[8,6,GL],[9,6,GL],[10,6,GL],[11,6,GL],[12,6,GS],[13,6,GS],[14,6,GS],[15,6,GS],[16,6,GS],[17,6,GS],[18,6,GS],[19,6,GS],[20,6,DB],[21,6,B],[4,7,B],[5,7,DB],[6,7,DB],[7,7,MB],[8,7,MB],[9,7,MB],[10,7,MB],[11,7,MB],[12,7,LB],[13,7,MB],[14,7,MB],[15,7,MB],[16,7,MB],[17,7,MB],[18,7,MB],[19,7,MB],[20,7,MB],[21,7,DB],[22,7,DB],[23,7,B],[4,7,HL],[5,7,HL],[5,8,HL],[4,8,HL],[13,7,WH],[14,7,WH],[13,8,'#888'],[14,8,'#888'],[22,7,HR],[23,7,HR],[22,8,HR],[2,8,B],[3,8,DB],[4,8,MB],[5,8,MB],[6,8,MB],[7,8,MB],[8,8,MB],[9,8,MB],[10,8,MB],[11,8,LB],[12,8,LB],[13,8,LB],[14,8,LB],[15,8,LB],[16,8,LB],[17,8,LB],[18,8,LB],[19,8,MB],[20,8,MB],[21,8,MB],[22,8,MB],[23,8,DB],[24,8,B],[2,9,B],[3,9,DB],[4,9,MB],[5,9,LB],[6,9,LB],[7,9,LB],[8,9,LB],[9,9,LB],[10,9,LB],[11,9,LB],[12,9,LB],[13,9,LB],[14,9,LB],[15,9,LB],[16,9,LB],[17,9,LB],[18,9,LB],[19,9,LB],[20,9,MB],[21,9,MB],[22,9,MB],[23,9,DB],[24,9,B],[5,9,C.CA6],[6,9,C.CA5],[7,9,C.CA5],[8,9,C.CA5],[11,8,B],[11,9,B],[11,10,B],[17,7,B],[17,8,B],[17,9,B],[17,10,B],[2,10,B],[3,10,DB],[4,10,MB],[5,10,MB],[6,10,MB],[7,10,MB],[8,10,MB],[9,10,MB],[10,10,MB],[11,10,MB],[12,10,MB],[13,10,MB],[14,10,MB],[15,10,MB],[16,10,MB],[17,10,MB],[18,10,MB],[19,10,MB],[20,10,MB],[21,10,MB],[22,10,DB],[23,10,B],[3,11,B],[4,11,B],[5,11,DB],[6,11,DB],[7,11,DB],[8,11,DB],[9,11,DB],[10,11,DB],[11,11,DB],[12,11,DB],[13,11,DB],[14,11,DB],[15,11,DB],[16,11,DB],[17,11,DB],[18,11,DB],[19,11,DB],[20,11,DB],[21,11,B],[22,11,B],[3,10,B],[4,10,B],[5,10,B],[6,10,B],[18,10,B],[19,10,B],[20,10,B],[21,10,B],[4,12,B],[5,12,DB],[6,12,B],[7,12,B],[3,13,B],[4,13,B],[5,13,WH],[6,13,WH],[7,13,WH],[8,13,B],[3,14,B],[4,14,B],[5,14,WH],[6,14,WH],[7,14,WH],[8,14,B],[4,15,B],[5,15,DB],[6,15,HUB],[7,15,DB],[8,15,B],[5,13,HUB],[6,14,HUB],[7,13,HUB],[6,13,WH],[19,12,B],[20,12,DB],[21,12,B],[22,12,B],[19,13,B],[20,13,WH],[21,13,WH],[22,13,WH],[23,13,B],[19,14,B],[20,14,WH],[21,14,WH],[22,14,WH],[23,14,B],[20,15,DB],[21,15,HUB],[22,15,DB],[23,15,B],[20,13,HUB],[21,14,HUB],[22,13,HUB],[21,13,WH],[3,11,B],[4,11,DB],[5,11,MB],[19,11,MB],[20,11,DB],[21,11,B],[4,16,B],[5,16,B],[6,16,B],[7,16,B],[19,16,B],[20,16,B],[21,16,B],[22,16,B]];}
function z_attack(){return[...z_idle(),[4,7,'#eef8ff'],[5,7,'#eef8ff'],[4,8,'#ddeeff'],[5,8,'#ccddff'],[24,14,'#c8b890'],[25,14,'#b8a880'],[26,14,'#a89870'],[23,15,'#d0c0a0'],[25,15,'#c0b090'],[27,14,'#a89070'],[25,13,'#b8a880'],[26,13,'#c8b890'],[1,8,'#444'],[1,9,'#333'],[0,9,'#222'],[1,10,'#444'],[0,10,'#333'],[2,7,'#333']];}
function z_ult(){const B=C.CA1,DB=C.CA2,MB=C.CA3,RED='#cc2200',REDB='#991100',REDL='#ff4422',SM='#cccccc',SML='#eeeeee',SMD='#aaaaaa';return[...[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22].map(x=>[x,3,B]),...[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map(x=>[x,4,DB]),...[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22].map(x=>[x,4,RED]),...[9,10,11,12,13,14,15].map(x=>[x,5,'#3a4a5a']),...[16,17,18,19,20,21].map(x=>[x,5,'#3a4a5a']),...[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25].map(x=>[x,6,B]),...[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26].map(x=>[x,7,B]),...[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26].map(x=>[x,8,MB]),...[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26].map(x=>[x,9,MB]),...[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25].map(x=>[x,6,RED]),...[6,7,8].map(x=>[x,7,REDL]),...[22,23,24,25].map(x=>[x,7,RED]),[24,6,REDL],[25,6,REDL],[24,7,REDL],[25,7,RED],[26,6,RED],[26,7,RED],[26,8,REDB],...[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25].map(x=>[x,10,B]),[4,10,B],[5,10,B],[3,11,B],[4,11,B],[5,11,'#888'],[6,11,'#aaa'],[7,11,'#888'],[8,11,B],[3,12,B],[4,12,B],[5,12,'#aaa'],[6,12,'#ccc'],[7,12,'#aaa'],[8,12,B],[4,13,B],[5,13,'#888'],[6,13,'#999'],[7,13,'#888'],[8,13,B],[3,12,'#ffaa00'],[2,13,'#ff8800'],[3,13,'#ffcc00'],[2,12,'#ff6600'],[1,12,'#ffaa00'],[2,14,'#ff8800'],[1,13,'#ffcc00'],[20,10,B],[21,10,B],[19,11,B],[20,11,'#888'],[21,11,'#aaa'],[22,11,'#888'],[23,11,B],[19,12,B],[20,12,'#aaa'],[21,12,'#ccc'],[22,12,'#aaa'],[23,12,B],[20,13,'#888'],[21,13,'#999'],[22,13,'#888'],[23,13,B],[25,9,SMD],[26,9,SM],[27,9,SM],[28,9,SML],[29,9,SM],[30,9,SMD],[25,10,SM],[26,10,SML],[27,10,SML],[28,10,'#ffffff'],[29,10,SML],[30,10,SM],[31,10,SMD],[25,11,SML],[26,11,'#ffffff'],[27,11,'#ffffff'],[28,11,SML],[29,11,SM],[30,11,SMD],[26,12,SM],[27,12,SML],[28,12,SMD],[26,9,'#ffbbaa'],[27,10,'#ffccbb'],[28,9,'#ffbbaa'],...[10,11,12,13,14,15,16,17,18,19,20].map(x=>[x,14,B]),...[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].map(x=>[x,13,B])];}

function enemy_thug(){const B=C.BK;return[[12,2,B],[13,2,'#222'],[14,2,'#222'],[15,2,'#111'],[16,2,'#222'],[17,2,'#222'],[18,2,B],[11,3,'#111'],[12,3,'#222'],[13,3,'#1a1a1a'],[14,3,'#1a1a1a'],[15,3,'#1a1a1a'],[16,3,'#1a1a1a'],[17,3,'#222'],[18,3,B],[11,4,B],[12,4,'#4a3028'],[13,4,'#5a4030'],[14,4,'#6a5040'],[15,4,'#6a5040'],[16,4,'#5a4030'],[17,4,'#4a3028'],[18,4,B],[11,5,B],[12,5,'#5a4030'],[13,5,'#4a3028'],[14,5,B],[14,5,'#dd0000'],[15,5,'#dd0000'],[16,5,B],[17,5,'#4a3028'],[18,5,B],[14,5,B],[15,5,B],[16,5,B],[17,5,B],[14,5,'#dd0000'],[15,5,'#dd0000'],[11,6,B],[12,6,'#5a4030'],[13,6,'#5a4030'],[14,6,'#5a4030'],[15,6,'#5a4030'],[16,6,'#5a4030'],[17,6,B],[13,7,B],[14,7,B],[15,7,B],[16,7,B],[13,7,'#3a2020'],[14,7,B],[15,7,B],[16,7,'#3a2020'],[10,8,B],[11,8,'#1a1a1a'],[12,8,'#222'],[13,8,'#222'],[14,8,'#1a1a1a'],[15,8,'#1a1a1a'],[16,8,'#222'],[17,8,'#222'],[18,8,'#1a1a1a'],[19,8,B],[9,9,B],[10,9,'#111'],[11,9,'#1a1a1a'],[12,9,'#222'],[13,9,'#222'],[14,9,'#222'],[15,9,'#222'],[16,9,'#222'],[17,9,'#222'],[18,9,'#1a1a1a'],[19,9,'#111'],[20,9,B],[9,10,B],[10,10,'#111'],[11,10,'#222'],[12,10,'#1a1a1a'],[13,10,'#1a1a1a'],[14,10,'#1a1a1a'],[15,10,'#1a1a1a'],[16,10,'#1a1a1a'],[17,10,'#222'],[18,10,'#111'],[19,10,'#111'],[20,10,B],[10,11,B],[11,11,'#111'],[12,11,'#1a1a1a'],[13,11,'#1a1a1a'],[14,11,'#1a1a1a'],[15,11,'#1a1a1a'],[16,11,'#1a1a1a'],[17,11,'#111'],[18,11,B],[8,9,B],[8,10,'#111'],[8,11,'#1a1a1a'],[9,11,'#4a3028'],[9,12,'#4a3028'],[10,12,B],[21,9,B],[21,10,'#111'],[21,11,'#1a1a1a'],[21,12,'#4a3028'],[22,12,B],[11,12,B],[12,12,'#111'],[13,12,'#1a1a1a'],[14,12,B],[17,12,'#1a1a1a'],[18,12,'#111'],[19,12,B],[11,13,B],[12,13,'#111'],[13,13,'#111'],[14,13,B],[17,13,'#111'],[18,13,'#111'],[19,13,B]];}
function enemy_books(){return[[7,4,C.BK],[8,4,'#7a0000'],[9,4,'#8b0000'],[10,4,'#8b0000'],[11,4,'#8b0000'],[12,4,'#6a0000'],[13,4,C.BK],[7,5,'#8b0000'],[8,5,'#cc3333'],[9,5,'#dd4444'],[10,5,'#ffffff'],[11,5,'#dd4444'],[12,5,'#8b0000'],[7,6,'#8b0000'],[8,6,'#cc3333'],[9,6,'#cc3333'],[10,6,'#cc3333'],[11,6,'#cc3333'],[12,6,'#8b0000'],[7,7,'#7a0000'],[8,7,'#8b0000'],[9,7,'#8b0000'],[10,7,'#8b0000'],[11,7,'#8b0000'],[12,7,C.BK],[8,5,C.BK],[9,5,'#ffcccc'],[10,5,'#ffffff'],[11,5,'#ffcccc'],[13,3,C.BK],[14,3,'#002255'],[15,3,'#003366'],[16,3,'#003366'],[17,3,'#003366'],[18,3,C.BK],[13,4,'#003366'],[14,4,'#4488ff'],[15,4,'#5599ff'],[16,4,'#ffffff'],[17,4,'#4488ff'],[18,4,'#003366'],[13,5,'#003366'],[14,5,'#4488ff'],[15,5,'#4488ff'],[16,5,'#4488ff'],[17,5,'#4488ff'],[18,5,'#003366'],[13,6,'#003366'],[14,6,'#003366'],[15,6,'#003366'],[16,6,'#003366'],[17,6,'#003366'],[18,6,C.BK],[14,4,'#bbccff'],[15,4,'#ffffff'],[16,4,'#bbccff'],[19,4,C.BK],[20,4,'#004422'],[21,4,'#006633'],[22,4,'#006633'],[23,4,'#006633'],[24,4,C.BK],[19,5,'#006633'],[20,5,'#44ff88'],[21,5,'#55ffaa'],[22,5,'#ffffff'],[23,5,'#44ff88'],[24,5,'#006633'],[19,6,'#006633'],[20,6,'#44ff88'],[21,6,'#44ff88'],[22,6,'#44ff88'],[23,6,'#006633'],[19,7,'#004422'],[20,7,'#006633'],[21,7,'#006633'],[22,7,'#006633'],[23,7,C.BK],[12,9,C.BK],[13,9,'#333'],[14,9,'#444'],[15,9,'#444'],[16,9,'#444'],[17,9,'#444'],[18,9,'#333'],[19,9,C.BK],[12,10,'#333'],[13,10,'#555'],[14,10,'#888'],[15,10,'#666'],[16,10,'#888'],[17,10,'#555'],[18,10,'#333'],[12,11,'#333'],[13,11,'#444'],[14,11,'#666'],[15,11,'#555'],[16,11,'#666'],[17,11,'#444'],[18,11,'#222'],[12,12,'#222'],[13,12,'#333'],[14,12,'#333'],[15,12,'#333'],[16,12,'#333'],[17,12,'#222'],[10,2,'#ffff88'],[11,2,'#ffff00'],[22,3,'#ffff88'],[23,2,'#ffff00'],[9,8,'#88ff88'],[24,7,'#88ffff']];}
function enemy_boss(){const B=C.BK,P1='#9900cc',P2='#cc00ff',P3='#ff00aa',P4='#ff88ff';return[...[11,12,13,14,15,16,17,18,19,20,21].map(x=>[x,4,P2]),...[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map(x=>[x,5,P2]),...[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].map(x=>[x,6,P1]),...[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25].map(x=>[x,7,P1]),...[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25].map(x=>[x,8,P2]),...[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25].map(x=>[x,9,P2]),...[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].map(x=>[x,10,P1]),...[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map(x=>[x,11,P1]),...[11,12,13,14,15,16,17,18,19,20,21].map(x=>[x,12,P2]),...[12,13,14,15,16,17,18,19,20].map(x=>[x,7,P3]),...[11,12,13,14,15,16,17,18,19,20,21].map(x=>[x,8,P4]),...[12,13,14,15,16,17,18,19,20].map(x=>[x,9,P3]),[13,7,B],[14,7,'#ffff00'],[14,6,'#ffffff'],[13,6,B],[18,7,B],[19,7,'#ffff00'],[19,6,'#ffffff'],[18,6,B],[13,7,B],[14,7,B],[18,7,B],[19,7,B],[14,7,'#ffee00'],[19,7,'#ffee00'],...[14,15,16,17,18].map(x=>[x,10,B]),[14,10,P4],[15,10,'#ffffff'],[16,10,P4],[17,10,'#ffffff'],[18,10,P4],[5,8,P1],[6,8,P2],[6,9,P1],[5,10,P2],[6,10,P1],[5,11,P2],[26,8,P2],[27,8,P1],[27,9,P2],[26,10,P1],[27,10,P2],[5,7,'#7700aa'],[4,8,'#6600aa'],[4,9,'#7700aa'],[10,13,P1],[11,13,P2],[10,14,P1],[9,14,P2],[9,15,P1],[22,13,P1],[23,13,P2],[23,14,P1],[24,14,P2],[24,15,P1],[14,13,P2],[13,14,P1],[13,15,P2],[12,15,P1],[18,13,P2],[19,14,P1],[19,15,P2],[20,15,P1],[7,5,'#00ffff'],[8,4,'#00ccff'],[24,5,'#00ffcc'],[25,4,'#00ffff'],[6,12,'#ff00ff'],[7,13,'#cc00ff'],[25,12,'#ff00ff'],[16,3,'#ffffff'],[16,2,'#ffaaff'],[6,7,B],[6,6,B],[25,7,B],[26,7,B],...[10,11,12,13,14,15,16,17,18,19,20,21,22].map(x=>[x,4,B]),...[10,11,12,13,14,15,16,17,18,19,20,21,22].map(x=>[x,12,B])];}

// ══════════════════════════════════════════════
//  GAME DATA & TYPE SYSTEM
// ══════════════════════════════════════════════
const TYPE_COLORS = { 'Cosmic':'#9900cc', 'Love':'#cc0066', 'Drift':'#444444' };
const TYPE_ADV = {
  'Cosmic': { strong: 'Love', weak: 'Drift' },
  'Love': { strong: 'Drift', weak: 'Cosmic' },
  'Drift': { strong: 'Cosmic', weak: 'Love' }
};
function getTypeMultiplier(atkType, defType) {
  if (TYPE_ADV[atkType].strong === defType) return 1.5;
  if (TYPE_ADV[atkType].weak === defType) return 0.75;
  return 1.0;
}

const CHARS_DATA = {
  tiggyy: {
    key:'tiggyy', name:'TIGGYY', type:'Cosmic',
    maxHp:120, maxMp:100, hp:120, mp:100, ult:0, atk:22, def:12, spd:18,
    imgs: { idle:'assets/characters/nyom_idle.png', attack:'assets/characters/nyom_attack.png', ult:'assets/characters/nyom_ult.png' },
    skill: { name:'NYOM BITE', mp:25, dmg:35, desc:'Cosmic chomp!' },
    ultimate: { name:'ULTIMATE NYOM', dmg:80, desc:'Galaxy-eating fury!' },
    skillIcon:'🍭', ultIcon:'🌌', fallbackAnim: { idle: tiggyy_idle, attack: tiggyy_attack, ult: tiggyy_ult }
  },
  neo: {
    key:'neo', name:'NEO!', type:'Love',
    maxHp:100, maxMp:120, hp:100, mp:120, ult:0, atk:18, def:16, spd:20,
    imgs: { idle:'assets/characters/neo_idle.png', attack:'assets/characters/neo_attack.png', ult:'assets/characters/neo_ult.png' },
    skill: { name:'HEART BEAM', mp:30, dmg:30, desc:'Love is power!' },
    ultimate: { name:'STARRY EYES', dmg:75, desc:'Galaxy magic unleashed!' },
    skillIcon:'💜', ultIcon:'⭐', fallbackAnim: { idle: neo_idle, attack: neo_attack, ult: neo_ult }
  },
  z: {
    key:'z', name:'Z', type:'Drift',
    maxHp:150, maxMp:80, hp:150, mp:80, ult:0, atk:28, def:20, spd:15,
    imgs: { idle:'assets/characters/car_idle.png', attack:'assets/characters/car_attack.png', ult:'assets/characters/car_ult.png' },
    skill: { name:'PEKS DRIFT', mp:20, dmg:40, desc:'Burnout attack!' },
    ultimate: { name:'TURBO DRIFT', dmg:90, desc:'Maximum PEKS DRIFTING!' },
    skillIcon:'🚗', ultIcon:'💨', fallbackAnim: { idle: z_idle, attack: z_attack, ult: z_ult }
  }
};

const LEVELS = [
  {name:'CITY STREETS', bg:'city', ground:'city', type:'Drift', enemyFn:enemy_thug, enemyName:'STREET PUNK',
   enemyHp:80, enemyAtk:15, enemyDef:8, waves:3, levelStr:"1"},
  {name:'STUDY ROOM', bg:'study', ground:'study', type:'Love', enemyFn:enemy_books, enemyName:'EXAM DREAD',
   enemyHp:100, enemyAtk:18, enemyDef:10, waves:3, levelStr:"2"},
  {name:'GALAXY HEART', bg:'galaxy', ground:'galaxy', type:'Cosmic', enemyFn:enemy_boss, enemyName:'COSMIC BOSS',
   enemyHp:160, enemyAtk:25, enemyDef:15, waves:1, levelStr:"Boss"}
];

let G = {
  party: {}, selectedChar: 'tiggyy', activeChar: null,
  currentLevel: 0, wave: 1,
  enemyHp: 0, enemyMaxHp: 0, bossPhase2: false,
  playerTurn: true, busy: false
};

// ══════════════════════════════════════════════
//  UI INITIALIZATION & HELPERS
// ══════════════════════════════════════════════
function initTitle(){
  const sc = document.getElementById('titleStars'); sc.innerHTML='';
  for(let i=0;i<80;i++){
    const s=document.createElement('div'); s.className='star';
    s.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;width:${1+Math.random()*2}px;height:${1+Math.random()*2}px;animation-delay:${Math.random()*2}s;animation-duration:${1+Math.random()*2}s`;
    sc.appendChild(s);
  }
  document.getElementById('titleScreen').onclick = showSelect;
}

function showSelect(){
  switchScreen('selectScreen');
  const cont = document.getElementById('charCards'); cont.innerHTML='';
  Object.values(CHARS_DATA).forEach((ch)=>{
    const card = document.createElement('div');
    card.className = 'char-card' + (ch.key === G.selectedChar ? ' selected' : '');
    card.innerHTML = `
      <img src="${ch.imgs.idle}" class="char-card-img" alt="${ch.name}" onerror="this.onerror=null; drawSpriteFallback(this, '${ch.key}', 'idle');"/>
      <div class="char-card-name">${ch.name}</div>
      <div class="type-badge type-${ch.type.toLowerCase()}">${ch.type}</div>
      <div class="char-card-stats">HP:${ch.maxHp} | ATK:${ch.atk}<br>DEF:${ch.def} | SPD:${ch.spd}</div>
    `;
    card.onclick = () => {
      document.querySelectorAll('.char-card').forEach(c=>c.classList.remove('selected'));
      card.classList.add('selected'); G.selectedChar = ch.key;
    };
    cont.appendChild(card);
  });
}

// Fallback logic if image assets fail
function drawSpriteFallback(imgEl, charKey, state) {
  const cv = document.createElement('canvas');
  drawSprite(cv, CHARS_DATA[charKey].fallbackAnim[state], 4);
  imgEl.src = cv.toDataURL();
}

function setPlayerSprite(state){
  const img = document.getElementById('playerImg');
  img.src = G.activeChar.imgs[state];
  img.onerror = () => drawSpriteFallback(img, G.activeChar.key, state);
}
function setEnemySprite(enemyFn){ drawSprite(document.getElementById('enemyCanvas'), enemyFn, 4); }
function clearEnemySprite(){ clearCanvas(document.getElementById('enemyCanvas')); }

function switchScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ══════════════════════════════════════════════
//  TYPEWRITER BATTLE LOG
// ══════════════════════════════════════════════
let logQueue = [];
let isTyping = false;
let typeInterval = null;

function addLog(msg, color, delay=800, callback=null) {
  logQueue.push({msg, color, delay, callback});
  if(!isTyping) typeNextLog();
}

function typeNextLog() {
  if(logQueue.length === 0) return;
  isTyping = true;
  const log = logQueue.shift();
  const el = document.getElementById('logTextArea');
  el.classList.remove('waiting');
  el.style.color = log.color || '#fff';
  el.textContent = '';
  let i = 0;
  
  if(typeInterval) clearInterval(typeInterval);
  typeInterval = setInterval(() => {
    el.textContent += log.msg.charAt(i);
    i++;
    if(i >= log.msg.length) {
      clearInterval(typeInterval);
      el.classList.add('waiting');
      setTimeout(() => {
        isTyping = false;
        if(log.callback) log.callback();
        else typeNextLog();
      }, log.delay);
    }
  }, 30);
}

function advanceDialogue() {
  if(isTyping && typeInterval) {
    clearInterval(typeInterval);
  }
}

function clearLog() { document.getElementById('logTextArea').textContent = ''; document.getElementById('logTextArea').classList.remove('waiting'); }

// ══════════════════════════════════════════════
//  BATTLE SYSTEM
// ══════════════════════════════════════════════
function startBattle(){ 
  G.party = JSON.parse(JSON.stringify(CHARS_DATA)); // Deep copy
  G.currentLevel = 0; 
  initBattle(); 
}

function initBattle(){
  const lv = LEVELS[G.currentLevel];
  G.activeChar = G.party[G.selectedChar];
  G.wave = 1; G.busy = false; G.bossPhase2 = false;
  initWave();

  // Env Update
  document.getElementById('battleBg').className = 'battle-bg bg-'+lv.bg;
  document.getElementById('rainLayer').innerHTML='';
  document.getElementById('galaxyLayer').style.display='none';

  if(lv.bg==='city'){ makeRain(); }
  else if(lv.bg==='galaxy'){ document.getElementById('galaxyLayer').style.display='block'; drawGalaxy(); }

  setPlayerSprite('idle');
  setEnemySprite(lv.enemyFn);
  updateHUD();

  switchScreen('battleScreen');
  logQueue = []; isTyping = false; clearLog();
  
  addLog(`Encountered ${lv.enemyName}!`, '#fff', 1000, () => {
    addLog(`Go! ${G.activeChar.name}!`, '#ffeb3b', 800, () => {
      setPlayerTurn();
    });
  });
}

function initWave(){
  const lv = LEVELS[G.currentLevel];
  const m = 1 + (G.wave - 1) * 0.3;
  G.enemyMaxHp = Math.floor(lv.enemyHp * m);
  G.enemyHp = G.enemyMaxHp;
  document.getElementById('enemyLevel').textContent = 'Lv' + (G.currentLevel*3 + G.wave);
  document.getElementById('enemyName').textContent = G.wave > 1 ? lv.enemyName+'★' : lv.enemyName;
  setEnemySprite(lv.enemyFn);
  updateHUD();
}

function updateHUD(){
  const ch = G.activeChar;
  document.getElementById('playerName').textContent = ch.name;
  
  const hpPct = (ch.hp/ch.maxHp*100);
  const hpBar = document.getElementById('playerHpBar');
  hpBar.style.width = hpPct+'%';
  hpBar.className = 'bar-fill bar-hp ' + (hpPct < 25 ? 'low' : hpPct < 50 ? 'med' : '');
  document.getElementById('playerHpNum').textContent = ch.hp+'/'+ch.maxHp;
  
  document.getElementById('playerMpBar').style.width = (ch.mp/ch.maxMp*100)+'%';
  document.getElementById('playerUltBar').style.width = ch.ult+'%';
  
  const ultBar = document.getElementById('playerUltBar');
  ultBar.style.boxShadow = ch.ult >= 100 ? '0 0 16px #ff00aa, 0 0 30px rgba(255,0,170,0.5)' : '';
  const ultBtn = document.getElementById('btn-ult');
  if(ch.ult >= 100) ultBtn.style.animation = 'neonFlicker 1.5s step-end infinite';
  else ultBtn.style.animation = '';

  const eHpPct = (Math.max(0,G.enemyHp)/G.enemyMaxHp*100);
  const eHpBar = document.getElementById('enemyHpBar');
  eHpBar.style.width = eHpPct+'%';
  eHpBar.className = 'bar-fill bar-hp ' + (eHpPct < 25 ? 'low' : eHpPct < 50 ? 'med' : '');
  document.getElementById('enemyHpNum').textContent = Math.max(0,G.enemyHp)+'/'+G.enemyMaxHp;

  document.getElementById('skillIcon').textContent = ch.skillIcon;
  document.getElementById('skillName').textContent = ch.skill.name.split(' ')[0];
  document.getElementById('skillCost').textContent = ch.skill.mp+' MP';
  document.getElementById('ultIcon').textContent = ch.ultIcon;
  
  document.getElementById('btn-skill').disabled = ch.mp < ch.skill.mp || !G.playerTurn || G.busy;
  document.getElementById('btn-ult').disabled = ch.ult < 100 || !G.playerTurn || G.busy;
  document.getElementById('btn-attack').disabled = !G.playerTurn || G.busy;
  document.getElementById('btn-switch').disabled = !G.playerTurn || G.busy;
}

function setPlayerTurn(){ G.playerTurn=true; G.busy=false; updateHUD(); addLog(`What will ${G.activeChar.name} do?`, '#fff'); }
function setEnemyTurn(){ G.playerTurn=false; updateHUD(); setTimeout(enemyAct, 800); }

function floatDmg(elId, dmg, color, msg=''){
  const el = document.getElementById(elId);
  const r = el.getBoundingClientRect();
  const d = document.createElement('div');
  d.className = 'float-dmg'; 
  d.innerHTML = `-${dmg}<br><span style="font-size:0.5rem">${msg}</span>`; 
  d.style.color = color||'#fff';
  d.style.left = (r.left + r.width/2 - 20)+'px'; 
  d.style.top = (r.top + 20)+'px';
  document.body.appendChild(d); setTimeout(()=>d.remove(), 1200);
}

// ══════════════════════════════════════════════
//  ACTION LOGIC
// ══════════════════════════════════════════════
function doAction(type){
  if(!G.playerTurn || G.busy) return;
  G.busy = true;
  const ch = G.activeChar;
  const lv = LEVELS[G.currentLevel];
  const eEl = document.getElementById('enemySprite');
  const pEl = document.getElementById('playerSprite');

  if(type === 'attack'){
    setPlayerSprite('attack');
    pEl.classList.add('shake');
    setTimeout(()=>{ pEl.classList.remove('shake'); setPlayerSprite('idle'); }, 400);
    
    const isCrit = Math.random() < 0.1;
    let baseDmg = Math.max(1, ch.atk + Math.floor(Math.random()*8) - lv.enemyDef);
    if(isCrit) baseDmg = Math.floor(baseDmg * 1.5);
    
    const mult = getTypeMultiplier(ch.type, lv.type);
    let finalDmg = Math.floor(baseDmg * mult);
    
    addLog(`${ch.name} used Attack!`, '#fff', 500, () => {
      G.enemyHp -= finalDmg; eEl.classList.add('hit-flash','enemy-shake');
      setTimeout(()=>eEl.classList.remove('hit-flash','enemy-shake'), 450);
      floatDmg('enemySprite', finalDmg, isCrit?'#ffeb3b':'#fff', isCrit?'CRITICAL!':'');
      
      let nextLog = () => {
        ch.ult = Math.min(100, ch.ult + 15); updateHUD(); checkEnemyDead();
      };
      
      if(mult > 1) addLog("It's super effective!", '#ffeb3b', 800, nextLog);
      else if(mult < 1) addLog("It's not very effective...", '#aaa', 800, nextLog);
      else setTimeout(nextLog, 500);
    });

  } else if(type === 'skill'){
    if(ch.mp < ch.skill.mp){ G.busy=false; return; }
    ch.mp -= ch.skill.mp;
    setPlayerSprite('attack');
    
    const mult = getTypeMultiplier(ch.type, lv.type);
    let finalDmg = Math.floor((ch.skill.dmg + Math.floor(Math.random()*10)) * mult);

    addLog(`${ch.name} used ${ch.skill.name}!`, '#64b5f6', 600, () => {
      setPlayerSprite('idle');
      G.enemyHp -= finalDmg; eEl.classList.add('hit-flash','enemy-shake');
      setTimeout(()=>eEl.classList.remove('hit-flash','enemy-shake'), 450);
      floatDmg('enemySprite', finalDmg, '#64b5f6');
      
      let nextLog = () => {
        ch.ult = Math.min(100, ch.ult + 20); updateHUD(); checkEnemyDead();
      };

      if(mult > 1) addLog("It's super effective!", '#ffeb3b', 800, nextLog);
      else if(mult < 1) addLog("It's not very effective...", '#aaa', 800, nextLog);
      else setTimeout(nextLog, 500);
    });

  } else if(type === 'ultimate'){
    if(ch.ult < 100){ G.busy=false; return; }
    ch.ult = 0;
    setPlayerSprite('ult');
    pEl.classList.add('ult-flash');
    document.getElementById('battleBg').classList.add('ult-flash');
    
    const mult = getTypeMultiplier(ch.type, lv.type);
    let finalDmg = Math.floor((ch.ultimate.dmg + Math.floor(Math.random()*20)) * mult);

    addLog(`${ch.name} unleashed ${ch.ultimate.name}!!!`, '#e040fb', 1000, () => {
      pEl.classList.remove('ult-flash'); document.getElementById('battleBg').classList.remove('ult-flash');
      G.enemyHp -= finalDmg; eEl.classList.add('hit-flash','enemy-shake');
      setTimeout(()=>eEl.classList.remove('hit-flash','enemy-shake'), 600);
      floatDmg('enemySprite', finalDmg, '#e040fb', 'ULTIMATE!');
      setTimeout(()=>{ setPlayerSprite('idle'); updateHUD(); checkEnemyDead(); }, 800);
    });
  }
}

function checkEnemyDead(){
  if(G.enemyHp > 0) {
    if(G.currentLevel === 2 && G.enemyHp <= G.enemyMaxHp/2 && !G.bossPhase2) {
      G.bossPhase2 = true;
      addLog("The boss is enraged! Stats increased!", '#ff5252', 1500, () => setEnemyTurn());
    } else {
      setEnemyTurn();
    }
    return;
  }
  
  G.enemyHp = 0; updateHUD();
  clearEnemySprite();
  const lv = LEVELS[G.currentLevel];
  
  addLog(`${lv.enemyName} fainted!`, '#fff', 1200, () => {
    if(G.wave < lv.waves){
      G.wave++; 
      initWave(); 
      addLog(`Next wave! ${lv.enemyName} appeared!`, '#ffeb3b', 1200, () => {
        setPlayerTurn();
      });
    } else {
      Object.values(G.party).forEach(p => { if(p.hp>0) p.hp = Math.min(p.maxHp, p.hp + 30); });
      addLog(`You defeated the ${lv.enemyName}!`, '#ffeb3b', 1500, () => {
        if(G.currentLevel < 2) {
          G.currentLevel++; initBattle();
        } else {
          triggerEnding();
        }
      });
    }
  });
}

function enemyAct(){
  const lv = LEVELS[G.currentLevel];
  const ch = G.activeChar;
  const eEl = document.getElementById('enemySprite');
  const pEl = document.getElementById('playerSprite');
  
  eEl.classList.add('enemy-shake');
  setTimeout(()=>eEl.classList.remove('enemy-shake'), 450);
  
  const roll = Math.random();
  let baseAtk = lv.enemyAtk + (G.bossPhase2 ? 10 : 0);
  
  if(roll < 0.2) {
    addLog(`${lv.enemyName} is gathering energy...`, '#ccc', 1000, () => setPlayerTurn());
    return;
  }
  
  let dmg = baseAtk + Math.floor(Math.random()*8) - ch.def;
  let moveName = 'Attack';
  if(roll > 0.7 && G.wave > 1){ dmg = Math.floor(dmg * 1.5); moveName = 'Power Strike'; }
  if(G.bossPhase2 && roll > 0.5) { dmg = Math.floor(dmg * 1.8); moveName = 'Cosmic Blast'; }
  
  const mult = getTypeMultiplier(lv.type, ch.type);
  dmg = Math.max(1, Math.floor(dmg * mult));

  addLog(`${lv.enemyName} used ${moveName}!`, '#ff5252', 600, () => {
    ch.hp -= dmg; pEl.classList.add('shake');
    setTimeout(()=>{ pEl.classList.remove('shake'); }, 450);
    floatDmg('playerSprite', dmg, '#ff5252');
    
    let nextLog = () => {
      ch.ult = Math.min(100, ch.ult + 8); updateHUD();
      if(ch.hp <= 0) {
        ch.hp = 0; updateHUD();
        addLog(`${ch.name} fainted!`, '#ff5252', 1200, () => checkPartyWipe());
      } else {
        setPlayerTurn();
      }
    };

    if(mult > 1) addLog("It's super effective!", '#ffeb3b', 800, nextLog);
    else if(mult < 1) addLog("It's not very effective...", '#aaa', 800, nextLog);
    else setTimeout(nextLog, 500);
  });
}

function checkPartyWipe() {
  const alive = Object.values(G.party).filter(p => p.hp > 0);
  if(alive.length === 0) {
    addLog("You blacked out...", '#ff5252', 2000, () => {
      document.getElementById('titleScreen').classList.add('active');
      document.getElementById('battleScreen').classList.remove('active');
    });
  } else {
    openSwitchMenu();
  }
}

// ══════════════════════════════════════════════
//  SWITCHING MENU
// ══════════════════════════════════════════════
function openSwitchMenu() {
  const menu = document.getElementById('switchMenu');
  const cont = document.getElementById('switchCardsContainer');
  cont.innerHTML = '';
  
  Object.values(G.party).forEach(p => {
    const card = document.createElement('div');
    const isDead = p.hp <= 0;
    const isActive = p.key === G.activeChar.key;
    card.className = 'switch-card' + (isDead ? ' dead' : '') + (isActive ? ' active-char' : '');
    card.innerHTML = `
      <img src="${p.imgs.idle}" class="switch-img" onerror="this.onerror=null; drawSpriteFallback(this, '${p.key}', 'idle');"/>
      <div class="switch-name">${p.name}</div>
      <div class="switch-hp" style="color:${isDead?'#ff4444':p.hp<p.maxHp*0.3?'#ffaa00':'#20e060'}">${p.hp}/${p.maxHp} HP</div>
    `;
    if(!isDead && p.key !== G.activeChar.key) {
      card.onclick = () => performSwitch(p.key);
    }
    cont.appendChild(card);
  });
  menu.classList.add('active');
}

function closeSwitchMenu() {
  if(G.activeChar.hp <= 0) return; 
  document.getElementById('switchMenu').classList.remove('active');
}

function performSwitch(newKey) {
  document.getElementById('switchMenu').classList.remove('active');
  const oldName = G.activeChar.name;
  G.selectedChar = newKey;
  G.activeChar = G.party[newKey];
  
  G.busy = true;
  if(G.party[oldName.toLowerCase()] && G.party[oldName.toLowerCase()].hp > 0) {
    addLog(`Good job, ${oldName}! Come back!`, '#fff', 1000, () => sendOutNew());
  } else {
    sendOutNew();
  }

  function sendOutNew() {
    setPlayerSprite('idle'); updateHUD();
    addLog(`Go! ${G.activeChar.name}!`, '#ffeb3b', 1000, () => {
      setEnemyTurn();
    });
  }
}

// ══════════════════════════════════════════════
//  ENDING SEQUENCE
// ══════════════════════════════════════════════
function triggerEnding() {
  switchScreen('endScreen');
  initFireworks();
  
  setTimeout(() => {
    const popup = document.getElementById('letterPopup');
    const txt = document.getElementById('letterContent');
    popup.classList.add('show');
    
    const msg = "hey there cantikk,\n\ni hope ur having fun playing this little game.\n\ni built this just for u...\n\ni lovee youu Mynaa 💌";
    let i = 0;
    txt.textContent = '';
    const iv = setInterval(() => {
      if(msg.charAt(i) === '\n') txt.appendChild(document.createElement('br'));
      else txt.innerHTML += msg.charAt(i);
      i++;
      if(i >= msg.length) {
        clearInterval(iv);
        setTimeout(spawnRoamingChars, 2000);
      }
    }, 50);
  }, 3000);
}

function spawnRoamingChars() {
  const cont = document.getElementById('roamingContainer');
  Object.values(CHARS_DATA).forEach(ch => {
    const el = document.createElement('img');
    el.src = ch.imgs.idle;
    el.className = 'roaming-char';
    el.onerror = () => drawSpriteFallback(el, ch.key, 'idle');
    
    let x = window.innerWidth/2 - 48;
    let y = window.innerHeight - 120;
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    cont.appendChild(el);
    
    setInterval(() => {
      if(Math.random() > 0.3) {
        x += (Math.random() - 0.5) * 150;
        y += (Math.random() - 0.5) * 80;
        x = Math.max(0, Math.min(window.innerWidth - 96, x));
        y = Math.max(window.innerHeight/2, Math.min(window.innerHeight - 96, y));
        el.style.transform = `translate(${x - parseFloat(el.style.left)}px, ${y - parseFloat(el.style.top)}px)`;
        el.style.left = x + 'px'; el.style.top = y + 'px'; el.style.transform = 'none';
        el.style.animation = 'walkBounce 0.3s ease 2';
        setTimeout(()=>el.style.animation='', 600);
        
        if(Math.random() > 0.7) {
          const h = document.createElement('div');
          h.className = 'roam-heart'; h.textContent = '❤';
          h.style.left = (x + 32) + 'px'; h.style.top = (y - 20) + 'px';
          cont.appendChild(h);
          setTimeout(()=>h.remove(), 1500);
        }
      }
    }, 2000 + Math.random()*2000);
  });
}

function initFireworks() {
  const cv = document.getElementById('fireworksCanvas');
  const ctx = cv.getContext('2d');
  cv.width = window.innerWidth; cv.height = window.innerHeight;
  let particles = [];
  
  function createExplosion(x,y,c) {
    for(let i=0; i<30; i++) {
      particles.push({ x, y, vx:(Math.random()-0.5)*10, vy:(Math.random()-0.5)*10, life:1, color:c });
    }
  }
  
  function animate() {
    ctx.fillStyle = 'rgba(10, 10, 26, 0.2)';
    ctx.fillRect(0,0,cv.width,cv.height);
    
    if(Math.random() < 0.05) {
      const colors = ['#f07898','#00e5ff','#ffe234','#ff00aa'];
      createExplosion(Math.random()*cv.width, Math.random()*cv.height/2, colors[Math.floor(Math.random()*colors.length)]);
    }
    
    for(let i=particles.length-1; i>=0; i--) {
      let p = particles[i];
      p.x += p.vx; p.y += p.vy; p.vy += 0.1; p.life -= 0.02;
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.fillRect(p.x, p.y, 4, 4);
      if(p.life <= 0) particles.splice(i, 1);
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(animate);
  }
  animate();
}

function makeRain(){
  const rl=document.getElementById('rainLayer');
  for(let i=0;i<50;i++){
    const d=document.createElement('div'); d.className='raindrop';
    d.style.cssText=`left:${Math.random()*100}%;height:${8+Math.random()*18}px;animation-duration:${.35+Math.random()*.35}s;animation-delay:${Math.random()*1}s;`;
    rl.appendChild(d);
  }
}
function drawGalaxy(){
  const cv=document.getElementById('galaxyCanvas'); if(!cv) return;
  cv.width=cv.offsetWidth||600; cv.height=cv.offsetHeight||400;
  const ctx=cv.getContext('2d');
  for(let i=0;i<250;i++){
    ctx.beginPath(); ctx.arc(Math.random()*cv.width,Math.random()*cv.height,Math.random()*1.8,0,Math.PI*2);
    ctx.fillStyle=`rgba(255,255,255,${.2+Math.random()*.8})`; ctx.fill();
  }
}

initTitle();