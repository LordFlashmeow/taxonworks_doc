const navbar = require('./configs/navbar')
const sidebar = require('./configs/sidebar')

module.exports = {
  lang: 'en-US',
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.svg' }]
  ],

  locales: {
    '/': {
      lang: 'en-US',
      title: 'TaxonWorks Docs',
      description: 'TaxonWorks is an workbench with many tools for describing life. This site contains the documentation.',
      sidebar: sidebar.en
    },
    '/es/': {
      lang: 'es-ES',
      title: 'Documentación de TaxonWorks',
      description: 'TaxonWorks es un banco de trabajo con muchas herramientas para describir la vida. Este sitio contiene la documentación',
    },
  },

  themeConfig: {
    docsRepo: 'https://github.com/SpeciesFileGroup/taxonworks_doc',
    docsBranch: 'development',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',

    logo: '/images/taxonworks-black-circle.svg',
    logoDark: '/images/taxonworks-white-circle.svg',

    locales: {
      '/': {
        lang: 'en-US',
        navbar: navbar.en,
        sidebar: sidebar.en
      },
      '/es/': {
        navbar: navbar.es,
        selectLanguageName: 'Español',
        selectLanguageText: 'Español',
        selectLanguageAriaLabel: 'Español',

        sidebar: sidebar.es,

        editLinkText: 'Edita esta pagina en GitHub',
        lastUpdatedText: 'Ultima actualización',
        contributorsText: 'Contribuidores',

        tip: 'Tip',
        warning: 'Advertencia',
        danger: 'Cuidado',

        notFound: [
          'Esta pagina no existe',
          'Parece que ha entrado a un link erroneo',
        ],
        backToHome: 'Volver al inicio',

        openInNewWindow: 'Abrir en nueva ventana',
        toggleDarkMode: 'Alternar al modo oscuro',
        toggleSidebar: 'Alternar barra lateral',
      },
    },
    contributors: false
  }
}
