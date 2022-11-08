<template>
    <div class="bg-black h-8 w-full text-lime-400 font-mono text-lg flex items-center justify-end rounded-lg p-1 border-4 border-amber-900" 
         style="border-style: inset">
        {{content}}
    </div>
</template>
<script>
    export default {
        name: "CalcDisplay",
        props: {
            content: {required: true}
        }
    }
</script>
