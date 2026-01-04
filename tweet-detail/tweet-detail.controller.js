import { getTweetDetail, getUserData } from "./tweet-detail.model.js"
import { buildTweetDetail } from "./tweet-detail.view.js"

// user esta imagen para el detalle del tweet si el tweet obtenido por sparrest no tiene imagen.
// https://demofree.sirv.com/nope-not-here.jpg

export const tweetDetailController = async (tweetDetailContainer, tweetId) => {

    const handleRemoveTweetButton = () => {

    }


    try {
        const tweet = await getTweetDetail(tweetId)
        tweetDetailContainer.innerHTML = buildTweetDetail(tweet)
    } catch (error) {
        alert(error)
        window.location.href = '/'
    }

    try {
        const userData = await getUserData()
        handleRemoveTweetButton()
    } catch (error) {

    }




    /**
     * obtener datos del usuario que ha iniciado sesión
     * comparar el id de usuario logado con el id de usuario del tweet
     * si es el mismo, crear un botón de borrado
     * cuando el botón se pulsa, confirmar acción y borrar el tweet.
     */
}