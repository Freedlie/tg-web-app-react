const tg = window.Telegram.WebApp;

export function useTelegram(){
    const OnClose = () => {
        tg.close();
    }

    const onToggleButton = () => {
        if(tg.MainButton.isVisible){
            tg.MainButton.hide()
        } else{
            tg.MainButton.show()
        }
    }

    return{
        OnClose,
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user?.username,
        queryId: tg.initDataUnsafe?.query_id
    }
}