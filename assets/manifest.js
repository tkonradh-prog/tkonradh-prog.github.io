let webManifest = {
    "name": "Obywatel",
    "short_name": "Obywatel",
    "theme_color": "#101317",
    "background_color": "#101317",
    "display": "standalone",
    "start_url": "index.html",
    "icons": [
        {
            "src": "assets/images/logo_large.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "assets/images/logo_large.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ]
};

let manifestElem = document.createElement('link');
manifestElem.setAttribute('rel', 'manifest');
manifestElem.setAttribute('href', 'data:application/manifest+json;base64,' + btoa(JSON.stringify(webManifest)));
document.head.prepend(manifestElem);
