//__progression page
// =====================================================!!!
window.onload = () => {
    // Ecouteur d'évènement sur scroll
    window.addEventListener("scroll", () => {
        //  Calcul de la hauteur "utile" du document (on prend la hauteur totale du document et ont enlève la hauteur de la fenêtre)
        let hauteur = document.documentElement.scrollHeight - window.innerHeight

        // Récupération de la position verticale
        let position = window.scrollY

        // Récupération de la largeur de la fenêtre
        let largeur = document.documentElement.clientWidth

        // calcul de la largeur de la barre
        let barre = position / hauteur * largeur

        // Modification du CSS de la barre
        document.getElementById("progression").style.width = barre + "px"

    })
}
