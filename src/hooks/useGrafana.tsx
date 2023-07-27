import * as WebBrowser from 'expo-web-browser'


export default function useGrafana(){
    function handleOpenBrowser(){
        WebBrowser.openBrowserAsync('https://grafana-pub.pop-sc.rnp.br/d/WJMf7D_4k/rct-enlaces-dev?orgId=4')
    }

    function handleOpenBrowserMaps(){
        WebBrowser.openBrowserAsync('https://viaipe.rnp.br/?&estado=SC&inst=RCT&periodo=1d&aglomerado=0#@-27.551436410555397,-51.022849999999984,8z')
    }

    
    return {
        handleOpenBrowser,
        handleOpenBrowserMaps
    }
}