class FSM {
    constructor() {
        this.raw_data = [];
        this.processed_data = [];
    }

    appendData(data) {
        this.processed_data.push({
            symbol: data.symbol,
            close: data.close,
            high: data.high,
            low: data.low,
            date: Date.parse(data.date),
            open: data.open,
            volume: data.volume,
        })
    }
}

module.exports = FSM;
