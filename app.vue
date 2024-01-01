<template>
  <div class="scroll-smooth duration-700 relative transform opacity-0 transition-all translate-y-12 ease-out"
    data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script>
//client side
if (process.client) {
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      var replacers = document.querySelectorAll('[data-replace]');
      for (var i = 0; i < replacers.length; i++) {
        console.log('hit here2');
        let replaceClasses = JSON.parse(replacers[i].dataset.replace.replace(/'/g, '"'));
        Object.keys(replaceClasses).forEach(function (key) {
          replacers[i].classList.remove(key);
          replacers[i].classList.add(replaceClasses[key]);
        });
      }
    }, 1);
  });
}
</script>