export interface IPromotionType {
    promotion1: Promotion1,
    promotion2: Promotion2,
    promotion3: Promotion3,
}

enum Promotion1 {
    promotion = "1 pós",
    quantityOfPos =  "1",
    valueOfPromotion = "R$ 90,00"
}
enum Promotion2 {
    promotion = "2 pós",
    quantityOfPos =  "2",
    valueOfPromotion = "R$ 160,00"
}
enum Promotion3 {
    promotion = "3 pós",
    quantityOfPos =  "3",
    valueOfPromotion = "R$ 240,00"
}