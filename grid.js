/*
Grid 
A grid segítségével egy rácsszerkezetbe tudjuk rendezni az elemeket

1. Sorok kialakítása 

Csináltunk egy div-et, aminek megadtunk egy class="grid-row-1" és ebben vannak div-ek, amik lesznek a class="grid-el"
    
<div class="grid-row-1">
    <div class="grid-el"></div>
    <div class="grid-el"></div>
    <div class="grid-el"></div>
</div>

.grid-row-1 {
    display: grid;
    grid-template-columns: 400px 500px 600px;
}

.grid-el {
    background-color: red;
    border: 1px solid grey;
    padding-bottom: 100%;
}

padding-bottom: 100% -> olyan magas lesz, amilyen széles és ugye a grid-template-columns-ban beállítottuk, hogy milyen szélessek legyenek 
ezek az elemek 

Látható, hogy az első elem az 400px-es a második az 500px-es a harmadik pedig 600px-es és ugye a height-ja is ugyanakkora 
a padding-bottom: 100% miatt a magassága mindegyiknek ugyanannyi lesz -> elmagyarazas_2.js!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

grid-template-columns
1. verzióban megadtunk, hogy milyen szélesek legyenek ezek az elemek, amik benne vannak ebben a grid-row-1 rácsszerkezetben 
2. de, ezt százalékban is meg lehet adni 
pl. grid-template-columns: 20% 30% 40%;
a teljes képernyőnek a szélleségének az első felveszi a 20%-át, a második felveszi a 30%-át, a harmadik pedig a 40%-át 
3. de ezt meg lehet adni fr-ekben is 
pl. grid-template-columns: 1fr 2fr 3fr;
fr a fraction-nek a rövidítése, tehát ebben az esetben a (1fr 2fr 3fr) a képernyőnek a teljes szélessége fel van osztva 6 egyenlő részre 
az első lesz majd 1 egység, a második 2 egység, a harmadik pedig 3 egység 

de itt még ha egyenlő részre akarjuk felosztani, úgyhogy 3 egyenlő részre ->
grid-template-columns: repeat(3, 1fr);
vagy 
grid-template-columns: auto auto auto;
vagy 
grid-template-columns: repeat(3, auto);

ugye ezt a repeat-et még lehet ugy is használni, hogy repeat(3, 200px);
az a lényeg a repeat-vel, hogy ugyanakkorára, szeretnénk felosztani

    grid-template-columns: 400px 500px 600px;
    grid-template-columns: 20% 30% 40%; 
    grid-template-columns: 1fr 2fr 3fr; 
    grid-template-columns: auto auto auto; 
    grid-template-columns: repeat(3, auto); 
    grid-template-columns: repeat(3, 1fr);

2. oszlopok kialakítása
Ezt csináltunk neki html-ben 

    <div class="div-row-2">
        <div class="grid-el-2"></div>
        <div class="grid-el-2"></div>
        <div class="grid-el-2"></div>  
        <div class="grid-el-2"></div>

        <div class="grid-el-2"></div>
        <div class="grid-el-2"></div>
        <div class="grid-el-2"></div>  
        <div class="grid-el-2"></div>

        <div class="grid-el-2"></div>
        <div class="grid-el-2"></div>
        <div class="grid-el-2"></div>  
        <div class="grid-el-2"></div>
    </div>

Itt be kell állítani a grid-template-columns-ot meg a rows-t is 
.grid-row-2 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 150px 200px 300px,
}

Ez azt fogja majd csinélni, hogy van 4 darab elemünk egy sorban -> grid-template-columns: repeat(4, 1fr)
és van ugye 3 sorunk, ezért kell a 12 elem 
ezeknek a sorokban lévő elemeknek a height-ja pedig ugy fog kinézni, hogy az első sorban lévő elemek 150px-es magasak lesznek, másodikban 
200px-es magasak és a harmadikban, pedig 300px-es

és ugye itt ki kell majd venni a grid-el-ből a padding-bottom 100%-ot, mert ez befolyásolja az elemek magasságát 
vagy inkább csinálunk ezeknek egy grid-el-2-öt, aminek csak a bordere lesz meghatározva, az hogy milyen magas az nem 
.grid-el-2 {
    border: 1px solid grey;
}
Tehát az a lényeg, hogy a grid-template-columns-val tudjuk beállítani az elemeknek a width-jét 
a grid-template-row-val pedig az elemeknek a heigth-ját!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

A grid template-columns-nál meg a grid-template-rows-nál is ugyanazok a mértékegységek vannak (px, %, auto, fr)
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 2fr 3fr;

Csak ilyenkor, mivel hogy nem fix magasságot állítottunk be, hanem az fr a rendelkezésre álló területet osztja el 
és mivel nincsen magassága a grid-row-2-nek, ezért nincset mit elosztani 
ezért, meg kell adni egy magasságot!!!!!!!!!!!!!!!!!!!!!!!!
nem ugy, mint a grid-template-columns-nál, mert ugye ott nem kell megadni width-et, hanem a rendelkezésre álló területet, ami a window-nak 
a szélessége, azt fogja felosztani 

.grid-row-2 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 2fr 3fr; 
    height: 600px;
}
és akkor ezt a 600px-es height-ot fogja, ugy elosztani, hogy 1fr 2fr 3fr
de ha van valami content ebben a grid-ben, akkor jó, csak a mi esetünkben ezek üres div-ek voltak 
********************************************************************************************************************************************
Távolságok (grid-column-gap, grid-row-gap, grid-gap)
Az első grid-row-1-nek megadtunk egy grid-column-gap: 25px-t 
->
így az oszlopok 25px-re lesznek egymástól 
ez mindig 25px marad, mert ha összehúzzuk a képernyőt, akkor az elemek mennek össze, de mivel a gap az nem responsive, ezért mindig 
ugyanannyi marad, bármekkora is a képernyő

a másiknak (grid-row-2) meg megadtunk egy grid-row-gap: 25px-t
ami azt jelenti, hogy a sorok között lesz egy 25px-es gap
.grid-row-2 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 2fr 3fr; 
    height: 600px;
    grid-row-gap: 25px;
    grid-column-gap: 25px;

    grid-gap: 25px; -> sorok és a oszlopok közötti távolságot is beállítja és ezt meg lehet adni %-ban is!!!
    grid-gap: 3%; -> ilyenkor a látható képernyő szélességének a 3%-a lesz a gap, columns-nak és a rows-nak is 
    és ugye ez responsive, tehát, ha húzzuk össze a képernyőt, akkor a gap kisebb lesz, mert ez a látható képernyőnek a 3%-a -> responsive
}

itt is írhatjuk, hogy grid-column-gap: 25px, akkor meg a oszlopok között lesz egy 25px-es távolság 
vagy ha mindakettőt meg szeretnénk határozni, akkor lehet simán csak grid-gap is!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

De lehet az is írni, hogy nem grid-gap, hanem csak simán gap és itt meg tudjuk határozni egy sorban a columns illetve a rows gap-et is, 
akkor is ha más értéket szeretnénk neki adni
->
példa:
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 10px 20px;  -> First value is the row gap, second value is the column gap 
}
*********************************************************************************************************************************************
Elemek poziciónálása
1. Horizontális poziciónálás

Csináltunk egy div-et class="div-3" és ebbe tettünk class="grid-el-3"-meket 
-> 
    <div class="grid-3">
        <div class="grid-el"></div>
        <div class="grid-el"></div>
        <div class="grid-el"></div>
    </div>

ugye a grid-el-ben van egy border meg egy padding-bottom:100%, ami majd ad egy magasságot!!!!!!!!!!!

.grid-3 {
    display: grid;
    grid-template-columns: 200px 200px 200px;
}

Megjelent három darab 200px-es grid-el, ugye baloldalról 
Hogy lehet ezt a teret elosztani, úgyhogy legyen valami rés közöttük vagy hogy középen, jobb oldalon legyenek ezek grid-el-ek
Justify-content (horizontális poziciónálás)!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
start-center-end-space-between-space-around-space-evenly 
Start - alapbeállítás, az elemek baloldalon helyezkednek el
End - az elemek jobboldalon helyezkednek el 
Center - az elemek középen helyezkednek el 
!!!!
De az elemek egymástól való távolságát is lehet itt!!!!
Space-between - az első elem az bal oldalt fog elhelyezkedni, a második az középen lesz, a harmadik pedig jobb oldalon 
Space-around - az első elem elött van egy kis távolság, első és második illetve a második és harmadik között nagyobb van meg a harmadik után is 
egy akkora mint az első elem elött 
Space-evenly - mindegyik elem között ugyanakkora távolság van, az első elem elött meg az utolsó után is ugyanakkora 

.grid-3 {
    display: grid;
    grid-template-columns: 200px 200px 200px;
    justify-content: start - end - center - space-between - space-around - space-evenly
}

2. Vertikális poziciónálás 
Teljesen ugyanazok az értékek vannak mint a horizontálisnál (justify-content: start, end, center, space-between, space-around, space-evenly)

Csinálunk egy class="grid-4", amiben van 3 elem 1 sorban és 3 sor
    <div class="grid-4">
        <div class="grid-el-2"></div>
        <div class="grid-el-2"></div>
        <div class="grid-el-2"></div>

        <div class="grid-el-2"></div>
        <div class="grid-el-2"></div>
        <div class="grid-el-2"></div>

        <div class="grid-el-2"></div>
        <div class="grid-el-2"></div>
        <div class="grid-el-2"></div>
    </div>

    azért adtuk meg neki a grid-el-2, mert a grid-el-ben van egy padding-bottom: 100%, ami befolyásolja a magasságot 
    
    .grid-4 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 800px;
    border: 1px solid grey;
    grid-template-rows: 150px 150px 150px;
    align-content: start, end, center, space-between, space-around, space-evenly
}

és akkor van ez a grid-4-es valamink ami 
grid-template-columns -> tehát ez felosztja a teljes szélességet 3 felé és mindegyik elem 1/3 részt kap majd belöle 
height: 800px;
border: 1px solid grey;
-> ezek azért kellenek, hogy legyen valami magasság meg a border, hogy látható legyen, hogy hol vannak benne az elemek 
és mivel a grid-template-rows - ami meghatározza a benne lévő elemek magasságát az kisebb, mint a height (450 - 800)
ezért majd ezeket az elemeket el tudjuk helyezni vertikálisan is ezen a height-on belül valahova 

Align-content!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Tehát, ha mondjuk a start, ami az alapbeállítás, akkor ezek az elemek vertikálisan a legelején lesznek, tehát legfelül 
és alattuk lesz majd hely, de viszont horizontálisan teljesen kitöltik a helyet, szélességet!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
ha end, akkor a legvégén és akkor lesz még az elemek elött vertikálisan 800-450 -> 350px hely 
ha középen, akkor felettük meg alattuk is lesz 175px hely 
space-between, space-around, space-evenly, akkor meg ez a fentmaradó hely valahogy eloszlik 

Align-content nem szabad keverni az align-items-vel!!!!!!!!!!!!

Align-items nem müködik, akkor ha több sor van, tehát ha van grid-template-rows pl.

    <div class="grid-5">
        <div class="grid-el-3"></div>
        <div class="grid-el-3"></div>
        <div class="grid-el-3"></div>
        <div class="grid-el-3"></div>
    </div>


.grid-5 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: 600px;
    border: 1px solid red;
}

van egy height meg egy border, hogy lássuk, hogy hol vannak az elemek benne -> 600px
megadtunk itt az elemeknek egy height-ot -> 100px
és akkor vertikálisan van 500px-hely még, ahol tudjuk majd ezt sort különféle módon elhelyezni, attól függően, hogy mi lesz 
az align-items-be írva, úgy lesz ez a fennmaradó hely elosztva, felül, alul 
Fontos, hogy itt csak egy sor van!!!!!!
azt a sort helyezzük vagy felülre vagy középre vagy alulra!!!!!!

.grid-el-3 {
    border: 1px solid grey;
    height: 100px;
}


Fontos, hogy csak egy sor legyen!!!!
és akkor align-items: center, start, end

Viszont, ha itt több sor van, tehát meg van határozva a grid-template-rows, akkor az már itt nem müködik 
az müködik az align-content-vel!!!!!!!!!!! és akkor ott a sorokat egymáshpz képest is be tudjuk állítani 
align-items egy sor vertikálisan lehet felül, alul, középen(start, center, end)
*******************************************************************************************************************************************
Automatic-grid

Ez teljesen kitölti 1fr-vel, ugyanakkora részekkel, de amint már egy egység 1fr az kisebb lenne mint 200px akkor kevebb 1fr element lesz 
benne és így ha húzzuk befele a képernyőt, egyre kevesebb egységre fogja osztani a területet 
pl. 420px-nél két darab 210px-es egységre fogja felosztani, de 380px-nél már csak egy részre, hiszen ott két ugyanakkora rész az 190px lenne 
ami meg kisebb, mint a 200px

Amig az 1fr az nagyobb, mint 200px, addig 
.automatic-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 15px;
}

    <div class="automatic-grid">
        <div class="grid-el"></div>
        <div class="grid-el"></div>
        <div class="grid-el"></div>
        <div class="grid-el"></div>

        <div class="grid-el"></div>
        <div class="grid-el"></div>
        <div class="grid-el"></div>
        <div class="grid-el"></div>

        <div class="grid-el"></div>
        <div class="grid-el"></div>
        <div class="grid-el"></div>
        <div class="grid-el"></div>
    </div>

És akkor tényleg ugy müködik, ahogy leírtam, hogy feltölti a sort 1 fr-es grid-el-vel és amint húzzuk össze 
de itt most tökmindegy, hogy (4 grid-elementet raltunk be egy sorban a html-ben mert ez nem annyi lesz, mint grid-template-columns: repeat(4, 1fr))
hanem mondjuk feltöltötte a látható szélességet, ami mondjuk 1050px 5darab 210px-es grid-el és ha húzzuk be, ezek ugyanolyan arányban csökkenek
pl. ha már csak 1010px a látható képernyőnek a szélessége, akkor ugye 202px lesz minden grid-el, ha viszont már csak 920px lesz a képernyő 
akkor az egyik grid-el bemegy alulra és lesz 4 darab 230px-es grid-el és ezzel a tematikával ugye minnél jobban húzzuk be, annál kevesebb
grid-el lesz egy sorban 

Viszont ha mi szeretnénk megmondani, hogy mikor menjen be három oszloposba utána meg 2 oszloposba stb. 
akkor kell a media-query!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*******************************************************************************************************************************************
*/