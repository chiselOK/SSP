MyApp.service('imageService', function(){
    return{
            media: [{
                    type: "image",
                    subtype: "photo",
                    caption: "",
                    copyright: "Chisel",
                    ["media-metadata"]: [
                    {
                        url: "unknown.jpg",
                        format: "Standard Thumbnail",
                        height: 75,
                        width: 75
                    },
                    {
                        url: "unknown.jpg",
                        format: "mediumThreeByTwo210",
                        height: 140,
                        width: 210
                    }
                ]
            }] 
};})