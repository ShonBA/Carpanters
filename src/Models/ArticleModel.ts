export class ArticleModel {
    public header: string;
    public imageName: string;
    public content: string;
    public redirectPath: string;

    constructor(header: string, imageName: string, content: string, redirectPath: string) {
        this.header = header;
        this.imageName = imageName;
        this.content = content;
        this.redirectPath = redirectPath;
    }
}