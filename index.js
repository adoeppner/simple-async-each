export class Series {

    source
    length

    constructor(...args) {
        this.source = args
        this.length = args.length
    }

    async forEach(callback, thisArg) {
        if (thisArg) callback.bind(thisArg)

        for (let i = 0; i < this.length; i++) {
            await callback(this.source[i], i, this.source)  
        }
    }

}