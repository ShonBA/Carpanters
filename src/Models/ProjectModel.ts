export interface ProjectModel {
    uuid: string
    description: string
    imagesData: ImageDataModel[]
    designer: string
    photographer: string
    srcSet: srcSetModel[]
}

export interface ImageDataModel {
    src: string
    title: string
    description: string
}

export interface srcSetModel {
    src: string
    width: number
    height: number
}
