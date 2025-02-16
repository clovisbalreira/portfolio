import { Cards } from "./Cards.js";
import { Icones } from "./Icones.js";
import { Footer } from "./Footer.js";

window.onload = () => {
    let animaCards = new Cards()
    document.addEventListener('scroll', animaCards.scrollCards.bind(animaCards))

    let animaIcones = new Icones()
    document.addEventListener('scroll', animaIcones.animaIcones.bind(animaIcones))

    let animaFooter = new Footer()
    document.addEventListener('scroll', animaFooter.animaOnda.bind(animaFooter))
}