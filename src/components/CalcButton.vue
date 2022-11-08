<template>
    <div class="w-12 h-12 flex items-center justify-center font-bold border-solid border-black border rounded-md shadow cursor-pointer" 
         :class="bgClass" @click="$emit('buttonPress', button)" style="background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.2);">
    {{button}}
    </div>
</template>
<script>
    export default {
        name: "CalcButton",
        props: {
            button: {required: true}
        },
        computed: {
            bgClass () {
                if (!isNaN(parseFloat(this.button))) {
                    return 'bg-white';
                } else if (["%", "÷", "×", "-", "+"].includes(this.button))  {
                    return 'bg-orange-600 text-white';
                } else if (["C", "«", "="].includes(this.button)) {
                    return 'bg-red-600 text-white';
                } else {
                    return 'bg-orange-200';
                }
            }
        }
    }
</script>
