export const placeholderReaction = {
    data () {
        return {
            placeholder: ''
        }
    },
    methods : {
        placeholderReaction(arg, argTwo) {
            setTimeout(() => this.placeholder = arg, 300)
            setTimeout(() => this.placeholder = argTwo, 1000)
        }
    }
}