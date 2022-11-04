<template>    
    <nav class="flex flex-row flex-wrap mb-20 text-gray-500">
        <link-footer 
            label="Termos de Serviço"
            url="https://twitter.com/tos"
        />
        <link-footer 
            label="Política de Privacidade"
            url="https://twitter.com/privacy"
        />
        <link-footer 
            label="Política de cookies"
            url="https://support.twitter.com/articles/20170514"
        />
        <link-footer 
            label="Acessibilidade"
            url="https://help.twitter.com/resources/accessibility"
        />
        <link-footer 
            label="Informações de anúncios"
            url="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&amp;utm_source=twc&amp;utm_medium=web&amp;utm_campaign=ao&amp;utm_content=adsinfo"
        />
        <link-footer 
            label="Mais"
            url=""
        />

        <div class="w-full text-left py-2 font-medium text-xs">
            © 2022 Twitter, Inc.
        </div>
    </nav>
</template>

<script>
    import LinkFooter from './LinkFooter';

    export default {
        name: 'FooterBar',
        components: {
            LinkFooter
        }
    }
</script>
