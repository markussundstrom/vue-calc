<template>
    <div class="p-4 w-fit my-16 mx-auto h-fit flex rounded-2xl border-8 bg-zinc-300 border-zinc-200 shadow-lg"
         style="border-style: outset;">
    <div class="w-fit mx-auto flex flex-col items-center bg-amber-900 p-4 rounded-xl border border-black">
        <calc-display :content="display"></calc-display>
        <calc-space></calc-space>
        <div class="grid grid-rows-5 grid-cols-4 gap-2">
            <calc-button :button="opButtons[0]"
                         @button-press="buttonPressed"></calc-button>
            <calc-button :button="opButtons[1]"
                         @button-press="buttonPressed"></calc-button>
            <calc-button :button="opButtons[2]"
                         @button-press="buttonPressed"></calc-button>
            <calc-button :button="opButtons[3]"
                         @button-press="buttonPressed"></calc-button>
            <calc-button :button="numButtons[7]"
                         @button-press="buttonPressed"></calc-button>
            <calc-button :button="numButtons[8]"
                         @button-press="buttonPressed"></calc-button>
            <calc-button :button="numButtons[9]"
                         @button-press="buttonPressed"></calc-button>
            <calc-button :button="opButtons[4]"
                         @button-press="buttonPressed"></calc-button>
            <calc-button :button="numButtons[4]"
                         @button-press="buttonPressed"></calc-button>
            <calc-button :button="numButtons[5]"
                         @button-press="buttonPressed"></calc-button>
            <calc-button :button="numButtons[6]"
                         @button-press="buttonPressed"></calc-button>
            <calc-button :button="opButtons[5]"
                         @button-press="buttonPressed"></calc-button>
            <calc-button :button="numButtons[1]"
                         @button-press="buttonPressed"></calc-button>
            <calc-button :button="numButtons[2]"
                         @button-press="buttonPressed"></calc-button>
            <calc-button :button="numButtons[3]"
                         @button-press="buttonPressed"></calc-button>
            <calc-button :button="opButtons[6]"
                         @button-press="buttonPressed"></calc-button>
            <calc-button :button="opButtons[7]"
                         @button-press="buttonPressed"></calc-button>
            <calc-button :button="numButtons[0]"
                         @button-press="buttonPressed"></calc-button>
            <calc-button :button="opButtons[8]"
                         @button-press="buttonPressed"></calc-button>
            <calc-button :button="opButtons[9]"
                         @button-press="buttonPressed"></calc-button>
        </div>
    </div>
    </div>
</template>

<script>
import CalcDisplay from "./components/CalcDisplay.vue";
import CalcSpace from "./components/CalcSpace.vue";
import CalcButton from "./components/CalcButton.vue";
export default {
    name: 'App',
    components: {
        CalcDisplay,
        CalcSpace,
        CalcButton
    },
    data() {
        return {
            display: "",
            numButtons: ["0", "1" ,"2" , "3", "4", "5", "6", "7", "8", "9"],
            opButtons: ["C", "«", "%", "÷", "×", "-", "+", "±", ".", "="],
            storedNum: "",
            currentNum: "",
            operator: ""
        }
    },
    methods: {
        buttonPressed(button) {
            if (this.numButtons.includes(button)) {
                if ((this.currentNum.match(/\d/g)?.length || 0) < 15) {
                    this.currentNum += button;
                    this.display = this.currentNum;
                } 
            } else if (button === "C") {
                this.resetCalc();
                this.display = this.currentNum;
            } else if (button === "«") {
                this.currentNum = this.currentNum.slice(0, -1);
                this.display = this.currentNum;
            } else if (button === "=") {
                this.compute();
            } else if (["÷", "×", "-", "+", "%"].includes(button)) {
                this.setOperator(button);
            } else if (button === "±") {
                this.currentNum = (parseFloat(this.currentNum)) * -1;
                this.currentNum = this.currentNum.toString();
                this.display = this.currentNum;
            } else if (button === ".") {
                this.currentNum = this.currentNum.replace(/\./g, "");
                this.currentNum += ".";
                this.display = this.currentNum;
            }
        },
        resetCalc() {
            this.storedNum = this.currentNum = this.operator = "";
        },
        setOperator (op) {
            if (this.currentNum === "") {
                return;
            }
            if (this.storedNum !== "") {
                this.compute();
            } else {
                this.display = "";
            }
            this.operator = op;
            this.storedNum = this.currentNum;
            this.currentNum = "";
        },
        compute () {
            let result;
            const prev = parseFloat(this.storedNum);
            const current = parseFloat(this.currentNum);
            if (isNaN(prev) || isNaN(current)) {
                return;
            }
            switch (this.operator) {
                case "%":
                    result = prev % current;
                    break;
                case "÷":
                    result = prev / current;
                    break;
                case "×":
                    result = prev * current;
                    break;
                case "-":
                    result = prev - current;
                    break;
                case "+":
                    result = prev + current;
                    break;
                default:
                    return;
            }
            this.currentNum = result.toString();
            this.display = this.currentNum;
            this.storedNum = "";
            this.operator = "";
        }
    }
}
</script>

<style>
</style>
