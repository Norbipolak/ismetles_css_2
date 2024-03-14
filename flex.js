/*
Flexbox
Erre nehéz a definició, mert mondhatnánk azt, hogy flexibilisen elhelyezkedő, de van egy olyan tulajdonsága, amitől éppen, hogy nem 
lesz flexibilis 
Tehát ez valami olyasmi, amivel egy sorba tudunk rendezni dolgokat vagy egy oszlopba!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

Csináltunk egy div-et class="flex1" (ami csak annyit kapott meg css-ben, hogy display: flex;)
és ebbe a div-be raktunk még 4 darab div-et class="flex-el"

    <div class="flex">
        <div class="flex-el"></div>
        <div class="flex-el"></div>
        <div class="flex-el"></div>
        <div class="flex-el"></div>
    </div>

    .flex1 {
    display: flex;
}

.flex-el {
    border: 1px solid grey;
    height: 250px;
    width: 250px;
}

ugy itt fontos, hogy a flex-el-nek legyen egy width-je is, mert a grid-nél ott meg tudjuk határozni a grid-template-columns-val 
hogy mekkora szélességet tudjanak felvenni az elemeket, itt viszont nem, tehát ez a flex-el-nél kell meghatározni!!!!!!!
És itt még az sem müködik jól, hogyha a magasságot a padding-bottom: 100%-val szeretnénk meghatározni,ezért adtunk neki egy sima heigth: 250px-t

Most látunk teljesen egybe négy flex-el-t egymás mellett 
Nagyon fontos!!!!!!!!!!!!!
Alapértelmezetten, hiába vannak ugy meghatározva az elemek, hogy 250*250 és ha elkezdjük befele húzni a képernyőt, akkor 
ezek a boxok (flex-el), ezek elkezdenek összemenni!!!! és ugy mennek össze, hogy a szélességük az mindegyiknek ugyanannyival megy össze 
tehát nem úgy, hogy elkezjük behúzni a képernyőt és az utolsó flex-el fog összemenni a többi meg marad 250px széles, hanem mindegyik ugyaugy 
pl. 230px széles leszesek lesznek húzzuk egy kicsit jobban össze 190px szélesek lesznek 

Ez amikor flexibis a dolog!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

De van amikor nem flexibilis ->
*****************************************************************************************************************************************
1. flex-wrap: wrap;

Teljesen ugyanugy, mint az elöbb csináltunk egy div-et csak most azzal, hogy class="flex2"
és itt nagyon, fontos egy beállítás a flex-wrap!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

.flex2 {
    display: flex;
    flex-wrap: wrap;
}

Mert ez a flex-2, amiben vannak a flex-el kapott egy olyan tulajdonságot css-ben, hogy flex-wrap: nowrap 
alapbeállítás a flex-wrap: wrap; amikor ugye az elemek összemennek (szélessége)
De ha wrap -> 
Ezeket itt ledobálja, tehát ha húzzuk össze a képernyőt és képernyő szélessége eléri ezeknek a flex-el-teknek a szélességét 
tehát van 4 darab flex-el, mindegyik 250px és ha a képernyő eléri az 1000px-et, akkor ledobja egy új sorba az utolsó flex-el-t 
és megyünk tovább, ha eléri a 750px-t, akkor ledob mégegyet és akkor lesz két sor, mindegyikben lesz 2 darab flex-el és ha kisebb 
lesz mint 500px-akkor ugye egy sorban csak egy flex-el lehet és lesz négy sor, tehát mintha egy oszlopban lennének!!!!!!

2. flex-wrap: wrap-reverse;

De ez is többféle formában lehet nem flexibilis pl. létezik másféle wrap is 
Olyan is létezik, hogy wrap-reverse 

    <div class="flex3">
        <div class="flex-el">1</div>
        <div class="flex-el">2</div>
        <div class="flex-el">3</div>
        <div class="flex-el">4</div>
    </div>

.flex3 {
    display: flex; 
    flex-wrap: wrap-reverse;
}

Wrap-reverse az úgy müködik, hogy van ugye megint négy darab flex-el számozva 1 2 3 4 
és ezeket a sima wrap ugy dobta le, hogy kezdtük befelé húzni a képernyőt és ledobott eggyet, majd még egyett így 
alapeset: 
1 2 3 4 

1 2 3 
4 

1 2
3 4 

1
2
3
4

De viszont itt a reverse-wrap-nél olyan, mint ha nem ledobná őket hanem fel, tehát húzzuk össze és az első sorba marad egy 4-es, így ->
1 2 3 4 

4
1 2 3

3 4 
1 2 

4
3
2
1

Pont a másik irányban törik meg!!!!
Tehát, ilyen szempontból van a wrap, no-wrap meg a wrap-reverse
*********************************************************************************************************************************************
Flex-direction
1. Column

    <div class="flex4">
        <div class="flex-el">1</div>
        <div class="flex-el">2</div>
        <div class="flex-el">3</div>
        <div class="flex-el">4</div>
    </div>

.flex4 {
    display: flex;
    flex-direction: column;
}

Ez azt jelenti, hogy ezek az elemek egy oszlopban helyezkednek el 
1
2
3
4
Olyan, mintha nem is kellene a flex, mert ugye anélkül is ezek a div-ek alapból így helyezkednének el 
És ha itt húzzuk befelé a képernyőt, akkor nem fognak ezek bejjebb menni, mintha simán egy sorban lennének 
egy idő után ha jobban behúzzuk a képernyőt, mint 250px, mert ugye egy flex-el-nek a szélessége 250px pl. 150px-re behúzzuk a képernyőt 
akkor ezeknek az el-eknek csak egy bizonyos része fog látszodni, ha egy sorban lennének, akkor meg mindig felosztják a látható 
képernyőt, annyiad részre, amennyi el van, tehát itt ugye 4 el van és ha behúzzuk mondjuk 160px-re, akkor mindegyik el szélessége 40px lesz 

2. Row 
Ez az alapértelmezett a flex-nél, hiszen az a lényege, hogy ezek az elemek div-ek(flex-el) bemenjenek egymás mellé egy sorba!!!!!
Ugye itt nem is kéne beírni a flex-direction tulajdonságot, de azért beírjuk, hogy flex-direction: row
    <div class="flex5">
        <div class="flex-el">1</div>
        <div class="flex-el">2</div>
        <div class="flex-el">3</div>
        <div class="flex-el">4</div>
    </div>

.flex5 {
    display: flex;
    flex-direction: row;
}
Normál elhelyezkedés -> 1 2 3 4 
de itt vannak még másmilyen poziciók -> 

3. Column-reverse
    <div class="flex6">
        <div class="flex-el">1</div>
        <div class="flex-el">2</div>
        <div class="flex-el">3</div>
        <div class="flex-el">4</div>
    </div>

    .flex6 {
    display: flex;
    flex-direction: column-reverse;
}

A column-reverse az is egy oszlopba rendezi az elemeket, de nem úgy mint a sima reverse, hogy 1 2 3 4, hanem ->
4
3
2
1
minthogy a reverse is mutatja!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

4.Row-reverse
Ez meg pont a row-nak az ellentetje, de nem csak annyi, hogy a sorrend változik, hanem a képernyő jobb oldaláról indul 
Tehát, mintha a tükörképe lenne 
row 
|1 2 3 4               |
row-reverse
|               4 3 2 1|
*****************************************************************************************************************************************
Elemek poziciónálása 
1. Horizontális poziciónálás 

    <div class="flex8">
        <div class="flex-el">1</div>
        <div class="flex-el">2</div>
        <div class="flex-el">3</div>
        <div class="flex-el">4</div>
    </div>

Itt ugyanazok vannak érvényben, mint a grid-esetében!!!!!!!!!!!!!!!!!!!!!!!!
pl. justify-content: center;

.flex8 {
    display: flex;
    justify-content: center;
}

És akkor ez a 4 flex-el a képernyő közepén fog elhelyezkedni.
De itt is teljesen ugyanaz, mint a grid-nél, hogy vertikélisan, hova fognak helyezkedni ezek az el-ek
-start, center, end, space-between, space-around, space-evenly

2. Vertikális poziciónálás 
    <div class="flex9">
        <div class="flex-el">1</div>
        <div class="flex-el">2</div>
        <div class="flex-el">3</div>
        <div class="flex-el">4</div>
    </div>

.flex9 {
    display: flex;
    align-items: center;
    height: 800px;
    border: 2px solid red;
}

Itt is adtunk neki egy magassáhot meg border-t, ugyanugy mikor a grid-eknek néztük a hogy a grid template-row az mit csinál 
de itt csak most egy sor van szóval az align-items-vel tudjuk ezeket az elemket elhelyezni(felülre, középre, alulra)

meg itt mondhatnánk azt, hogy justify-content: space-evenly 
és akkor így fognak elhelyezkedni ezek az elemek 
_________________________________
|                               |
|                               |        
|                               |
|                               |
| 1        2         3         4|
|                               |
|                               |
|                               |
|                               |
__________________________________
Tehát vertikálisan középen, horizontálisan meg space-evenly

És a vertikális poziciónálásnak nem csak egy fajtája van ->
    <div class="flex10">
        <div class="flex-el">1</div>
        <div class="flex-el">2</div>
        <div class="flex-el">3</div>
        <div class="flex-el">4</div>

        <div class="flex-el">1</div>
        <div class="flex-el">2</div>
        <div class="flex-el">3</div>
        <div class="flex-el">4</div>
    </div>

.flex10 {
    display: flex;
    align-content: center;
    height: 800px;
    border: 2px solid red;
    flex-wrap: wrap; !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}

Az align-content csak abban az esetben müködik, hogyha flex-wrap: wrap van!!!
Mert ha nincsenek megtörve az elemek, amikor már nem férne ki, hanem flexibilis marad, ugye mint a no-wrap-nél 
Akkor sosem kerülnek több sorba, az align-content-nek pedig pont az a lényege, hogy több sor van és azokat tudjuk vele 
vertikálisan egymáshoz képest elhelyezni vagy ugyanugy mint align-items-vel betenni őket felülre, középre és alulra

Fontos, ha nincsen sortőrés, akkor nem jó, mert sosem megy be a tartalom egymás alá, több sorba 
ezért, fontos, hogy a flex-wrap az wrap legyen!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
vagy akár jó a wrap-reverse is,csak a no-wrap nem 

és akkor teljesen úgy van a vertikális beosztás, mint a grid-nél a grid-template-rows-nál 
ha egy row (sor) van ,akkor align-items: start, center, end 
ha több sor van akkor meg align-content: start, center, end, space-between, space-around, space-evenly 
**************************************************************************************************************************************
Az elemek szélességének a beállítása 
1. Arány 

Flex-Grow!!!!!!!!!!!!!!!!

    <div class="flex1">
        <div class="flex-el-2" style="flex-grow: 1;">1</div>
        <div class="flex-el-2" style="flex-grow: 1;">2</div>
        <div class="flex-el-2" style="flex-grow: 1;">3</div>
        <div class="flex-el-2" style="flex-grow: 1;">4</div>
    </div>

itt style attributummal megadtuk, hogy flex-grow, ez olyan, mint a grid-nél a grid-template-columns: 1fr 1fr 1fr 1fr
Tehát a látható képernyőt felosztja annyi részre, amennyi grow meg van adva az elemeknél
itt ugye 4 darab elemünk van és mindegyiknek a grow-ja az 1, tehát 4 egyenlő részre fogja felosztani a képernyőt!!!!

Itt ugye fontos, hogy a flex-el-nek ne legyen egy alapvető szélesség megadva!!!!!!!!!!

De ugy itt a flex-growth-nál nem muszály, hogy minegyik flex-grow: 1 legyen 
-> 
    <div class="flex1">
        <div class="flex-el" style="flex-grow: 1;">1</div>
        <div class="flex-el" style="flex-grow: 2;">2</div>
        <div class="flex-el" style="flex-grow: 1;">3</div>
        <div class="flex-el" style="flex-grow: 3;">4</div>
    </div>

Tehát ha maga az elem megkapja ezt a flex-growth tulajdonságot akkor a többihez képest fog aránylani valahogyan 
tehát itt az arányokat állítjuk be, viszont ahhoz, hogy ez müködjön mindegyiknek meg kell kapnia a flex-growth-t!!!!!!!!!!!!!!!!!!!

Mert ha csak egy kapja meg akkor nincs mihez viszonyitani a nagyságot!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

2. Abszolút érték 
Az elemek szélességét be lehet állítani abszolút értékben is 

Flex-Basis!!!!!!!!!!!!!!!!
    <div class="flex1">
        <div class="flex-el" style="flex-basis: 200px;">1</div>
        <div class="flex-el" style="flex-basis: 250px;">2</div>
        <div class="flex-el" style="flex-basis: 200px;">3</div>
        <div class="flex-el" style="flex-basis: 300px;">4</div>
    </div>

A flex-basis-vel tudjuk azt mondani, hogy legyenek ezek alapból x px nagyságúak!!!!
****************************************************************************************************************************
Összegzés 
Van flexibilis, amikor az elemek nem dobodnak le, hanem a képernyőbehúzással összemennek, de mindig egy sorban maradnak 
van nem flexibilis,
wrap: amikor az elemek képernyőbehúzással ledobodnak
wrap-reverse: itt meg olyan mintha feldobodnának, tehát az utolsó mindig egy sorral feljebb megy majd 

Flex-direction(column, row)
Itt tudjuk meghatározni, hogy sorban vagy oszlopban legyenek 
meg legyenek-e fordítva az elemek vagy ne legyenek megfordítva az elemek (reverse)
fontos, hogyha row-reverse van, akkor nem csak a sorrend fog változni, hanem az is, hogy honnan indul (képernyő jobb felétől)-> tükörkép

Elemeket tudunk poziciónálni
- horizontális -> justify-content 
- vertikális -> align-items vagy align-content (ugye egy sorban, többsorban) 
Több sorban, akkor van értelme, ha nem no-wrap-re van állítva a dolog!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

Szélesség beállítása
- arányosan (flex-grow)
- abszolút (flex-basis)

Elemek sorrendjének a beállítása 
order!!!
-> 
    <div class="flex1">
        <div class="flex-el" style="flex-basis: 200px;order: 4;">1</div>
        <div class="flex-el" style="flex-basis: 250px;order: 3;">2</div>
        <div class="flex-el" style="flex-basis: 200px;order: 2;">3</div>
        <div class="flex-el" style="flex-basis: 300px;order: 1;">4</div>
    </div>

Akkor itt fordított sorrendben lesznek, de ez nem ugy müködik, mint a flex-order, tehát bármilyen sorrendben lehetnek a dolgok
így is -> 2 3 4 1

    <div class="flex1">
        <div class="flex-el" style="flex-basis: 200px;order: 2;">1</div>
        <div class="flex-el" style="flex-basis: 250px;order: 3;">2</div>
        <div class="flex-el" style="flex-basis: 200px;order: 4;">3</div>
        <div class="flex-el" style="flex-basis: 300px;order: 1;">4</div>
    </div>











*/