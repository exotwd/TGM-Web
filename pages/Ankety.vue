<template>
    <div>
        <h1 class="font-road-rage text-center w-full text-[72px]">Co na to gympl?</h1>
        <p class="text-center">Hlasovat můžeš v každé otázce pouze jednou, ale protože je v našich podmínkách skoro nemožné
            spolehlivě zaručit
            pouze jeden hlas od jednoho člověka, budeme z určité části spoléhat na svědomí každého. Výsledky ankety se
            zveřejní vždy v poslední pondělí měsíce v osm hodin ráno. Tedy
            stějně,
            jako vypuštění nového
            vydání měsíčníku do světa. <br /><span class="font-bold">POZOR! Po hlasování už nelze volbu změnit.</span></p>
        <div class="md:flex bg-[#D9D9D9] font-kankin h-[1444px] xxs:h-[1333px] xs:h-[1222px] md:h-[800px]">
            <div class="md:w-1/2 text-center h-[800px] xs:h-[720px] md:h-[unset] mx-auto ml-2 md:ml-4">
                <iframe class="w-full h-full" src="http://localhost:8080/survey.php"></iframe>
            </div>
            <div class="md:w-1/2 text-center h-[650px] md:h-[unset] mx-auto">
                <iframe class="mx-auto w-full h-full" src="http://localhost:8080/poll.php" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>

            </div>
        </div>
    </div>
</template>

<script setup>

</script>