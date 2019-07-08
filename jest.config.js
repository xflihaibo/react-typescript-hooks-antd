module.exports={
    testMatch:["**/test/**/*.ts?(x)"],
    transform:{
        '^.+\\.(css|less|scss)$': './test/cssTransform.js',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/fileTransform.js',
        ".(ts|tsx)":"ts-jest"
    }
    
}