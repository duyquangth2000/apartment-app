import { getNumbersArea, getNumbersPrice } from "./getNumbers"


export const getCodePrice = (totals, min, max) => {
    let arr = []
    return totals?.map(item => {
        let arrMaxMin = getNumbersPrice(item.value)
        return ({
            ...item,
            min: arrMaxMin.length === 2 ? arrMaxMin[0] : arrMaxMin[0] === min ? 0 : arrMaxMin[0],
            min: arrMaxMin.length === 2 ? arrMaxMin[1] : arrMaxMin[0] === max ? 99999999 : arrMaxMin[0]
        })
    })
}
export const getCodeArea = (totals, min, max) => {
    let arr = []
    return totals?.map(item => {
        let arrMaxMin = getNumbersArea(item.value)
        return ({
            ...item,
            min: arrMaxMin.length === 2 ? arrMaxMin[0] : arrMaxMin[0] === min ? 0 : arrMaxMin[0],
            min: arrMaxMin.length === 2 ? arrMaxMin[1] : arrMaxMin[0] === max ? 99999999 : arrMaxMin[0]
        })
    })
}

export const getCodes = (entry, prices, max, min) => {
    const pricesWithMinMax = getCodePrice(prices, max, min)
    return pricesWithMinMax.filter(item => item.min <= entry && entry <= item.max)
}
export const getCodesArea = (entry, areas, max, min) => {
    const areasWithMinMax = getCodeArea(areas, max, min)
    return areasWithMinMax.filter(item => item.min <= entry && entry <= item.max)
}