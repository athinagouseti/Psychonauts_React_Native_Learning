export interface Character {
    gender: string,
    img: string,
    _id: string,
    name: string,
    psiPowers: PsiPower[],
    __v: number
}

export interface PsiPower { 
    description: string,
    img: string,
    _id: string,
    name: string
}